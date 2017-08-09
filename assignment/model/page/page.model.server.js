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

//for widget
pageModel.addWidget = addWidget;
pageModel.removeWidget = removeWidget;

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
    var widgetModel = require("../widget/widget.model.server");

    return pageModel
        .find({_website:websiteId})
        .then(function (pages) {
            var pagesTemp = pages;
            return pageModel
                .deleteMany({_website:websiteId})
                .then(function () {
                    return pagesTemp.forEach(function (page) {
                        return widgetModel
                            .deleteWidgetsForPage(page._id);
                    })
                })
        });
}

function addWidget(pageId,widgetId) {
    pageModel
        .findById(pageId)
        .then(function (pageDoc) {
            pageDoc.widgets.push(widgetId);
            return pageDoc.save();
        })
}

function removeWidget(pageId,widgetId) {
    pageModel
        .findById(pageId)
        .then(function (page) {
            var index = page.widgets.indexOf(widgetId);
            page.widgets.splice(index,1);
            return page.save();
        })
}
