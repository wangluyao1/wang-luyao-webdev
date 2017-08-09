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
            pageService.findPageByWebsiteId(model.websiteId)
                .then(function (response) {
                    model.pages = response.data;
                });
            pageService.findPageById(model.pageId)
                .then(function (response) {
                    var editPage = response.data;
                    //when not click ok, not directly change the element in the array.
                    model.editPage = JSON.parse(JSON.stringify(editPage));
                });

        }

        init();

        function pageUpdate(newPage) {
            pageService.updatePage(model.pageId, newPage)
                .then(function (response) {
                    $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page");
                });

        }

        function pageDelete() {
            pageService.deletePage(model.pageId)
                .then(function (response) {
                    $location.url("user/" + model.userId + "/website/" + model.websiteId + "/page");
                });

        }
    }
})();