/**
 * Created by Luyao on 7/27/2017.
 */
var app = require("../../express");
var multer = require("../../node_modules/multer");
var upload = multer({ dest: __dirname+'/../../public/assignment/uploads' });

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

app.post ("/api/upload", upload.single('myFile'), uploadImage);
app.put("/page/:pageId/widget",reorderWidget);

app.post("/api/page/:pageId/widget",createWidget);
app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
app.get("/api/widget/:widgetId",findWidgetById);
app.put("/api/widget/:widgetId",updateWidget);
app.delete("/api/widget/:widgetId",deleteWidget);

function reorderWidget(req,res) {
    var initial = req.query.initial;
    var final = req.query.final;
    var initialWidget = widgetData[initial];
    widgetData.splice(initial,1);
    widgetData.splice(final,0,initialWidget);
    res.sendStatus(200);
}

function uploadImage(req, res) {

    var widgetId      = req.body.widgetId;
    var myFile        = req.file;
    var userId = req.body.userId;
    var websiteId = req.body.websiteId;
    var pageId = req.body.pageId;

    var originalname  = myFile.originalname; // file name on user's computer
    var filename      = myFile.filename;     // new file name in upload folder
    var path          = myFile.path;         // full path of uploaded file
    var destination   = myFile.destination;  // folder where file is saved to
    var size          = myFile.size;
    var mimetype      = myFile.mimetype;

    var widget;
    for (var u in widgetData) {
        var _widget = widgetData[u];
        if (_widget._id === widgetId) {
            widget = _widget;
            break;
        }
    }
    widget.url = '/assignment/uploads/'+ filename.toString();

    var callbackUrl   = "/assignment/assignment3/#!/user/"+userId+"/website/"+websiteId + "/page/"+pageId
    +"/widget";

    res.redirect(callbackUrl);
}


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
