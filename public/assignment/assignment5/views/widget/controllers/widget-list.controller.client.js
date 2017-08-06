/**
 * Created by Luyao on 7/23/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController)

    function WidgetListController($sce, $routeParams, widgetService) {
        var model = this;
        model.userId = $routeParams.uid;
        model.websiteId = $routeParams.wid;
        model.pageId = $routeParams.pid;

        model.transferUrl = transferUrl;
        model.trustHtmlContent = trustHtmlContent;

        function init() {
            widgetService.findWidgetsByPageId(model.pageId)
                .then(function (response) {
                    model.widgets = response.data;
                });
        }

        init();

        function transferUrl(url) {
            var splitArray = url.toString().split("/");
            var videoId = splitArray[splitArray.length - 1];
            var embedUrlPrefix = "https://www.youtube.com/embed/";
            var embedUrl = embedUrlPrefix + videoId;
            return $sce.trustAsResourceUrl(embedUrl);
        }

        function trustHtmlContent(content) {
            return $sce.trustAsHtml(content);
        }
    }
})();