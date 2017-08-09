/**
 * Created by Luyao on 8/8/2017.
 */
var mongoose = require("mongoose");
var websiteSchema = require("./website.schema.server");
var userModel = require("../user/user.model.server");
var websiteModel = mongoose.model("WebsiteModel",websiteSchema);


websiteModel.createWebsiteForUser =createWebsiteForUser;
websiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;

//for pages
websiteModel.addPage = addPage;
websiteModel.removePage = removePage;

module.exports = websiteModel;

function createWebsiteForUser(userId,website) {
    var websiteTmp = null;
    website._user = userId;
    return websiteModel
        .create(website)
        .then(function (websiteDoc) {
            websiteTmp = websiteDoc;
            return userModel
                .addWebsite(userId,websiteDoc._id);
        })
        .then(function (userDoc) {
            return websiteTmp;
        });
}

function findAllWebsitesForUser(userId) {
    return websiteModel.find({_user:userId});
}

function findWebsiteById(websiteId) {
    return websiteModel.findById(websiteId);
}

function updateWebsite(websiteId,website) {
    return websiteModel.update({_id:websiteId},{$set:website});
}

function deleteWebsite(websiteId) {
    var pageModel = require("../page/page.model.server");

    return websiteModel
        .findByIdAndRemove({_id:websiteId})
        .then(function (website) {
            return userModel
                .removeWebsite(website._user,website._id);
        })
        .then(function () {
            return pageModel
                .deletePageForWebsite(websiteId);
        });
}

function addPage(websiteId,pageId) {
    websiteModel
        .findWebsiteById(websiteId)
        .then(function (website) {
            website.pages.push(pageId);
            return website.save();
        });
}

function removePage(websiteId,pageId) {
    return websiteModel
        .findById(websiteId)
        .then(function (website) {
            var index = website.pages.indexOf(pageId);
            website.pages.splice(index,1);
            return website.save();
        });
}