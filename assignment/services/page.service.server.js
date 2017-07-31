/**
 * Created by Luyao on 7/27/2017.
 */
var app = require("../../express");

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
    newPage.websiteId = websiteId;
    newPage._id = (new Date().getTime()).toString();
    pageData.push(newPage);
    res.send(newPage);
}

function findAllPagesForWebsite(req,res) {
    var websiteId = req.params.websiteId;
    var pages = [];
    for (var u in pageData) {
        var page = pageData[u];
        if (page.websiteId === websiteId) {
            pages.push(page);
        }
    }
    res.send(pages);
}

function findPageById(req,res) {
    var pageId = req.params.pageId;
    for (var u in pageData) {
        if(pageData[u]._id === pageId){
            res.send(pageData[u]);
            return;
        }
    }
    res.send("0");
}

function updatePage(req,res) {
    var pageId = req.params.pageId;
    var page = req.body;
    for (var u in pageData) {
        if (pageData[u]._id === pageId) {
            pageData[u] = page;
            res.send(page);
            return;
        }
    }
    res.sendStatus(404);
}

function deletePage(req,res) {
    var pageId = req.params.pageId;
    for (var u in pageData) {
        if (pageData[u]._id === pageId) {
            pageData.splice(u, 1);
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}