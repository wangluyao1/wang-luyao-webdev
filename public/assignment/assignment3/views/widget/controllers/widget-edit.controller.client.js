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
            widgetService.findWidgetById(model.widgetId)
                .then(function (response) {
                    model.widget = response.data;
                });
        }

        init();

        function widgetUpdate(newWidget) {
            widgetService.updateWidget(model.widgetId, newWidget)
                .then(function (response) {
                    $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page/"
                        + model.pageId + "/widget");
                });

        }

        function widgetDelete() {
            widgetService.deleteWidget(model.widgetId)
                .then(function (response) {
                    $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page/"
                        + model.pageId + "/widget");
                });
        }
    }
})();