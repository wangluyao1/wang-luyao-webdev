/**
 * Created by Luyao on 8/8/2017.
 */
var mongoose = require("mongoose");
var pageSchema = require("./page.schema.server");
var websiteModel = require("../website/website.model.server");
var pageModel = mongoose.model("PageModel",pageSchema);

pageModel.createPage = createPage;
pageModel.findAllPagesForWebsite = findAllPagesForWebsite;
pageModel.findPageById = findPageById;
pageModel.updatePage = updatePage;
pageModel.deletePage = deletePage;

//for website
pageModel.deletePageForWebsite =deletePageForWebsite;

module.exports = pageModel;

function createPage(websiteId,page) {
    var pageTemp = null;
    page._website = websiteId;
    return pageModel
        .create(page)
       .then(function (pageDoc) {
           pageTemp = pageDoc;
           return websiteModel
               .addPage(websiteId,pageDoc._id)
       })
        .then(function (websiteDoc) {
            return pageTemp;
        });
}

function findAllPagesForWebsite(websiteId) {
    return pageModel.find({_website:websiteId});
}

function findPageById(pageId) {
    return pageModel.findOne({_id:pageId});
}

function updatePage(pageId,page) {
    return pageModel.findOneAndUpdate({_id:pageId},{$set:page});
}

function deletePage(pageId) {
    return pageModel
        .findOneAndRemove({_id:pageId})
        .then(function (pageDoc) {
            return websiteModel
                .removePage(pageDoc._website,pageDoc._id);
        });
}

function deletePageForWebsite(websiteId) {
    return pageModel
        .find({_website:websiteId})
        .then(function (pages) {
            var pagesTemp = pages;
            return pageModel
                .deleteMany({_website:websiteId})
        });
}