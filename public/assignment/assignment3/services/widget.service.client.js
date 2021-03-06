/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("widgetService", widgetService);

    function widgetService($http) {

        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget

        };
        return api;

        function createWidget(pageId, widget) {
            var url = "/api/page/"+pageId+"/widget";
            return $http.post(url,widget);
            // widget.pageId = pageId;
            // widgetData.push(widget);
        }

        function findWidgetsByPageId(pageId) {
            var url = "/api/page/"+pageId+"/widget";
            return $http.get(url);
            // var _widgets = [];
            // for (var u in widgetData) {
            //     var _widget = widgetData[u];
            //     if (_widget.pageId === pageId) {
            //         _widgets.push(_widget);
            //     }
            // }
            // return _widgets;
        }

        function findWidgetById(widgetId) {
            var url = "/api/widget/"+widgetId;
            return $http.get(url);
            // for (var u in widgetData) {
            //     var _widget = widgetData[u];
            //     if (_widget._id === widgetId) {
            //         return _widget;
            //     }
            // }
            // return null;
        }

        function updateWidget(widgetId, widget) {
            var url = "/api/widget/"+widgetId;
            return $http.put(url,widget);
            // var _widget = findWidgetById(widgetId);
            // if (_widget != null) {
            //     var index = widgetData.indexOf(_widget);
            //     widgetData[index] = widget;
            // }
        }

        function deleteWidget(widgetId) {
            var url = "/api/widget/"+widgetId;
            return $http.delete(url);
            // var _widget = findWidgetById(widgetId);
            // if (_widget != null) {
            //     var index = widgetData.indexOf(_widget);
            //     widgetData.splice(index, 1);
            // }
        }
    }
})();