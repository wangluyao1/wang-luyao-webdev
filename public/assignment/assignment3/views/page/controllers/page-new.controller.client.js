/**
 * Created by Luyao on 7/22/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController)

    function PageNewController($location, $routeParams, pageService) {
        var model = this;
        model.userId = $routeParams.uid;
        model.websiteId = $routeParams.wid;
        model.pageNew = pageNew;

        function init() {
            pageService.findPageByWebsiteId(model.websiteId)
                .then(function (response) {
                    model.pages = response.data;
                });
        }

        init();

        function pageNew(newPage) {

            pageService.createPage(model.websiteId, newPage)
                .then(function (response) {
                    $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page");
                });
        }
    }
})();