/**
 * Created by Luyao on 7/23/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetEditController", WidgetEditController)

    function WidgetEditController($location, $routeParams, widgetService) {
        var model = this;
        model.userId = $routeParams.uid;
        model.websiteId = $routeParams.wid;
        model.pageId = $routeParams.pid;
        model.widgetId = $routeParams["wgid"];
        model.widgetUpdate = widgetUpdate;
        model.widgetDelete = widgetDelete;

        function init() {
            model.widget = widgetService.findWidgetById(model.widgetId);
        }

        init();

        function widgetUpdate(newWidget) {
            newWidget.pageId = model.pageId;
            newWidget._id = model.widgetId;
            widgetService.updateWidget(model.widgetId, newWidget);
            $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page/"
                + model.pageId + "/widget");
        }

        function widgetDelete() {
            widgetService.deleteWidget(model.widgetId);
            $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page/"
                + model.pageId + "/widget");
        }
    }
})();