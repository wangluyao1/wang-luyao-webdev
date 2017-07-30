/**
 * Created by Luyao on 7/27/2017.
 */
var app = require("../../express");

var websiteData = [
    {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
    {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
    {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
    {"_id": "890", "name": "Go", "developerId": "123", "description": "Lorem"},
    {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
    {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
    {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
];

app.post("/api/user/:userId/website",createWebsite);
app.get("/api/user/:userId/website",findAllWebsitesForUser);
app.get("/api/website/:websiteId",findWebsiteById);
app.put("/api/website/:websiteId",updateWebsite);
app.delete("/api/website/:websiteId",deleteWebsite);

function createWebsite(req,res) {
    var userId = req.params.userId;
    var website = req.body;
    website.developerId = userId;
    website._id = (new Date().getTime()).toString();
    websiteData.push(website);
    res.send(website);
}

function findAllWebsitesForUser(req,res) {
    var userId = req.params.userId;
    var websites = [];
    for (var u in websiteData) {
        var website = websiteData[u];
        if (website.developerId === userId) {
            websites.push(website);
        }
    }
    res.send(websites);
}

function findWebsiteById(req,res) {
    var websiteId = req.params.websiteId;
    for (var u in websiteData) {
        var website = websiteData[u];
        if (website._id === websiteId) {
            res.send(website);
            return;
        }
    }
    res.send("0");
}

function updateWebsite(req,res) {
    var websiteId = req.params.websiteId;
    var website = req.body;
    for (var u in websiteData) {
        if (websiteData[u]._id === websiteId) {
            websiteData[u] = website;
            res.send(website);
            return;
        }
    }
    res.sendStatus(404);
}

function deleteWebsite(req,res) {
    var websiteId = req.params.websiteId;
    for(var u in websiteData) {
        if (websiteData[u]._id === websiteId) {
            websiteData.splice(u, 1);
            res.sendStatus(200);
            return;
        }
    }
}