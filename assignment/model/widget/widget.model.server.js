/**
 * Created by Luyao on 8/8/2017.
 */
var mongoose = require("mongoose");
var widgetSchema = require("./widget.schema.server");
var pageModel =  require("../page/page.model.server");
var widgetModel = mongoose.model("WidgetModel",widgetSchema);

widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.reorderWidget = reorderWidget;

//for page
widgetModel.deleteWidgetsForPage = deleteWidgetsForPage;

module.exports = widgetModel;

function createWidget(pageId,widget) {
    var widgetTmp = null;
    widget._page = pageId;
    return widgetModel
        .create(widget)
        .then(function (widgetDoc) {
            widgetTmp = widgetDoc;
            return pageModel
                .addWidget(pageId,widgetDoc._id);
        })
        .then(function (pageDoc) {
            return widgetTmp;
        });
}

function findAllWidgetsForPage(pageId) {
    return pageModel
        .findPageById(pageId)
        .populate('widgets')
        .exec()
        .then(function (page) {
            return page.widgets;
        })

    //return widgetModel.find({_page:pageId});
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId,widget) {
    return widgetModel.update({_id:widgetId},{$set:widget});
}

function deleteWidget(widgetId) {
    return widgetModel
        .findByIdAndRemove(widgetId)
        .then(function (widget) {
            return pageModel
                .removeWidget(widget._page,widget._id);
        });
}

function reorderWidget(pageId,start,end) {
    return pageModel
        .findById(pageId)
        .then(function (page) {
            var widgetChange = page.widgets.splice(start,1);
            page.widgets.splice(end,0,widgetChange);
            return page.save();
        })
}


function deleteWidgetsForPage(pageId) {
    return widgetModel
        .deleteMany({_page:pageId});
}