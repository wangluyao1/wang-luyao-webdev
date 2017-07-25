/**
 * Created by Luyao on 7/22/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController)

    function PageEditController($location, $routeParams, pageService) {
        var model = this;
        model.userId = $routeParams.uid;
        model.websiteId = $routeParams.wid;
        model.pageId = $routeParams["pid"];
        model.pageUpdate = pageUpdate;
        model.pageDelete = pageDelete;

        function init() {
            model.pages = pageService.findPageByWebsiteId(model.websiteId);
            var editPage = pageService.findPageById(model.pageId);
            //when not click ok, not directly change the element in the array.
            model.editPage = JSON.parse(JSON.stringify(editPage));
        }

        init();

        function pageUpdate(newPage) {
            newPage.websiteId = model.websiteId;
            newPage._id = model.pageId;
            pageService.updatePage(model.pageId, newPage);
            $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page");
        }

        function pageDelete() {
            pageService.deletePage(model.pageId);
            $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page");
        }
    }
})();