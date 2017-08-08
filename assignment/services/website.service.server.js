/**
 * Created by Luyao on 7/27/2017.
 */
var app = require("../../express");
var websiteModel = require("../model/website/website.model.server");

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
    website._user = userId;
    websiteModel
        .createWebsiteForUser(userId,website)
        .then(function (websiteDoc) {
            res.json(websiteDoc);
        },function (err) {
            res.sendStatus(500).send(err);
        });
    // website.developerId = userId;
    // website._id = (new Date().getTime()).toString();
    // websiteData.push(website);
    // res.send(website);
}

function findAllWebsitesForUser(req,res) {
    var userId = req.params.userId;
    websiteModel
        .findAllWebsitesForUser(userId)
        .then(function (websites) {
            res.json(websites);
        },function (err) {
            res.sendStatus(404).send(err);
        });
    // var websites = [];
    // for (var u in websiteData) {
    //     var website = websiteData[u];
    //     if (website.developerId === userId) {
    //         websites.push(website);
    //     }
    // }
    // res.send(websites);
}

function findWebsiteById(req,res) {
    var websiteId = req.params.websiteId;
    websiteModel
        .findWebsiteById(websiteId)
        .then(function (website) {
            res.json(website);
        },function (err) {
            res.sendStatus(404).send(err);
        });
    // for (var u in websiteData) {
    //     var website = websiteData[u];
    //     if (website._id === websiteId) {
    //         res.send(website);
    //         return;
    //     }
    // }
    // res.send("0");
}

function updateWebsite(req,res) {
    var websiteId = req.params.websiteId;
    var website = req.body;
    websiteModel
        .updateWebsite(websiteId,website)
        .then(function (status) {
            res.json(status);
        },function (err) {
            res.sendStatus(404).send(err);
        });
    // for (var u in websiteData) {
    //     if (websiteData[u]._id === websiteId) {
    //         websiteData[u] = website;
    //         res.send(website);
    //         return;
    //     }
    // }
    // res.sendStatus(404);
}

function deleteWebsite(req,res) {
    var userId = req.params.userId;
    var websiteId = req.params.websiteId;
    websiteModel
        .deleteWebsite(userId,websiteId)
        .then(function (status) {
            res.json(status);
        },function (err) {
            res.sendStatus(404).send(err);
        })
    // for(var u in websiteData) {
    //     if (websiteData[u]._id === websiteId) {
    //         websiteData.splice(u, 1);
    //         res.sendStatus(200);
    //         return;
    //     }
    // }
}