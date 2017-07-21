/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("widgetService",widgetService);

    function widgetService() {
        var widgetData = [];

        var api = {
            "createWidget":createWidget,
            "findWidgetsByPageId":findWidgetsByPageId,
            "findWidgetById":findWidgetById,
            "updateWidget":updateWidget,
            "deleteWidget":deleteWidget

        };
        return api;

        function createWidget(pageId,widget) {

        }

        function findWidgetsByPageId(pageId) {

        }

        function findWidgetById(widgetId) {

        }

        function updateWidget(widgetId,widget) {

        }

        function deleteWidget(widgetId) {

        }
    }
})();