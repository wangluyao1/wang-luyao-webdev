/**
 * Created by Luyao on 7/23/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetNewController",WidgetNewController)

    function WidgetNewController($location,$routeParams,widgetService) {
        var model = this;
        model.userId = $routeParams.uid;
        model.websiteId = $routeParams.wid;
        model.pageId = $routeParams.pid;

        model.widgetNewHeading = widgetNewHeading;
        model.widgetNewImage = widgetNewImage;
        model.widgetNewYoutube = widgetNewYoutube;

        function init() {
        }
        init();

        function widgetNew(type) {
            var newWidget ={widgetType:type};
            newWidget._id = (new Date().getTime()).toString();
            widgetService.createWidget(model.pageId,newWidget);
            $location.url("user/"+ model.userId+"/website/"
               + model.websiteId+"/page/"+model.pageId+"/widget/"+ newWidget._id);
        }

        function widgetNewHeading() {
            var typeHeading = "HEADING";
            widgetNew(typeHeading);
        }

        function widgetNewImage() {
            var typeImage = "IMAGE";
            widgetNew(typeImage);
        }

        function widgetNewYoutube() {
            var typeYoutube = "YOUTUBE";
            widgetNew(typeYoutube);
        }
    }
})();