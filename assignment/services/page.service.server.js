/**
 * Created by Luyao on 7/27/2017.
 */
var app = require("../../express");
var pageModel = require("../model/page/page.model.server");

var pageData = [
    {"_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem"},
    {"_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem"},
    {"_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem"}];

app.post("/api/website/:websiteId/page",createPage);
app.get("/api/website/:websiteId/page",findAllPagesForWebsite);
app.get("/api/page/:pageId",findPageById);
app.put("/api/page/:pageId",updatePage);
app.delete("/api/page/:pageId",deletePage);

function createPage(req, res) {
    var websiteId = req.params.websiteId;
    var newPage = req.body;
    newPage._website = websiteId;
    pageModel
        .createPage(websiteId,newPage)
        .then(function (pageDoc) {
            res.json(pageDoc);
        },function (err) {
            res.sendStatus(500).send(err);
        });
    // newPage.websiteId = websiteId;
    // newPage._id = (new Date().getTime()).toString();
    // pageData.push(newPage);
    // res.send(newPage);
}

function findAllPagesForWebsite(req,res) {
    var websiteId = req.params.websiteId;
    pageModel
        .findAllPagesForWebsite(websiteId)
        .then(function (pagesDoc) {
            res.json(pagesDoc);
        },function (err) {
            res.sendStatus(404).send(err);
        });
    // var pages = [];
    // for (var u in pageData) {
    //     var page = pageData[u];
    //     if (page.websiteId === websiteId) {
    //         pages.push(page);
    //     }
    // }
    // res.send(pages);
}

function findPageById(req,res) {
    var pageId = req.params.pageId;
    pageModel
        .findPageById(pageId)
        .then(function (pageDoc) {
            res.json(pageDoc);
        },function (err) {
            res.sendStatus(404).send(err);
        });
    // for (var u in pageData) {
    //     if(pageData[u]._id === pageId){
    //         res.send(pageData[u]);
    //         return;
    //     }
    // }
    // res.send("0");
}

function updatePage(req,res) {
    var pageId = req.params.pageId;
    var page = req.body;
    pageModel
        .updatePage(pageId,page)
        .then(function (pageDoc) {
            res.json(pageDoc);
        },function (err) {
            res.sendStatus(500).send(err);
        });
    // for (var u in pageData) {
    //     if (pageData[u]._id === pageId) {
    //         pageData[u] = page;
    //         res.send(page);
    //         return;
    //     }
    // }
    // res.sendStatus(404);
}

function deletePage(req,res) {
    var pageId = req.params.pageId;
    pageModel
        .deletePage(pageId)
        .then(function () {
            res.sendStatus(200);
        },function (err) {
            res.sendStatus(500).send(err);
        });
    // for (var u in pageData) {
    //     if (pageData[u]._id === pageId) {
    //         pageData.splice(u, 1);
    //         res.sendStatus(200);
    //         return;
    //     }
    // }
    // res.sendStatus(404);
}