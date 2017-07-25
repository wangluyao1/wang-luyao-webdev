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
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
        }

        init();

        function pageNew(newPage) {
            newPage.websiteId = model.websiteId;
            newPage._id = (new Date().getTime()).toString();
            pageService.createPage(model.websiteId, newPage);
            $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page");
        }
    }
})();