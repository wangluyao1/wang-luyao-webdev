/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController", WebsiteEditController)

    function WebsiteEditController($location, $routeParams, websiteService) {
        var model = this;
        model.userId = $routeParams.uid;
        model.websiteId = $routeParams["wid"];
        model.websiteUpdate = websiteUpdate;
        model.websiteDelete = websiteDelete;

        function init() {
            model.websites = websiteService.findWebsitesByUser(model.userId);
            var website = websiteService.findWebsiteById(model.websiteId);
            //when not click ok, not directly change the element in the array.
            model.editWebsite = JSON.parse(JSON.stringify(website));
        }

        init();

        function websiteUpdate(website) {
            websiteService.updateWebsite(model.websiteId, website);
            $location.url("user/" + model.userId + "/website");
        }

        function websiteDelete() {
            websiteService.deleteWebsite(model.websiteId);
            $location.url("user/" + model.userId + "/website");
        }
    }
})();