/**
 * Created by Luyao on 7/27/2017.
 */
var app = require("../../express");
var widgetData = [
    {"_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO"},
    {"_id": "234", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
        "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
        "url": "http://lorempixel.com/400/200/"
    },
    {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
    {"_id": "567", "widgetType": "HEADING", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
    {
        "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
        "url": "https://youtu.be/AM2Ivdi9c4E"
    },
    {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
];

app.post("/api/page/:pageId/widget",createWidget);
app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
app.get("/api/widget/:widgetId",findWidgetById);
app.put("/api/widget/:widgetId",updateWidget);
app.delete("/api/widget/:widgetId",deleteWidget);

function createWidget(req,res) {
    var pageId = req.params.pageId;
    var newWidget = req.body;
    newWidget._id = (new Date().getTime()).toString();
    newWidget.pageId = pageId;
    widgetData.push(newWidget);
    res.send(newWidget);
}

function findAllWidgetsForPage(req,res) {
    var pageId = req.params.pageId;
    var _widgets = [];
    for (var u in widgetData) {
        var _widget = widgetData[u];
        if (_widget.pageId === pageId) {
            _widgets.push(_widget);
        }
    }
    res.send( _widgets);
}

function findWidgetById(req,res) {
    var widgetId = req.params['widgetId'];
    for (var u in widgetData) {
        var _widget = widgetData[u];
        if (_widget._id === widgetId) {
            res.send(_widget);
            return;
        }
    }
    res.sendStatus(404);
}

function updateWidget(req,res) {
    var widgetId = req.params['widgetId'];
    var widget = req.body;
    for(var u in widgetData){
        if(widgetData[u]._id === widgetId){
            widgetData[u] = widget;
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}

function deleteWidget(req,res) {
    var widgetId = req.params['widgetId'];
    for(var u in widgetData){
        if(widgetData[u]._id === widgetId){
            widgetData.splice(u,1);
            res.sendStatus(200);
            return;
        }
    }
    res.sendStatus(404);
}
