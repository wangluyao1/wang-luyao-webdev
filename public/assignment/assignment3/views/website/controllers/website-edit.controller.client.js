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
            websiteService.findWebsitesByUser(model.userId)
                .then(function (response) {
                    model.websites = response.data;
                });
            websiteService.findWebsiteById(model.websiteId)
                .then(function (response) {
                    var website = response.data;
                    //when not click ok, not directly change the element in the array.
                    model.editWebsite = JSON.parse(JSON.stringify(website));
                });


        }

        init();

        function websiteUpdate(website) {
            websiteService.updateWebsite(model.websiteId, website)
                .then(function (response) {
                    var updatedWeb = response.data;
                    $location.url("user/" + updatedWeb.developerId + "/website");
                });
        }

        function websiteDelete() {
            websiteService.deleteWebsite(model.websiteId)
                .then(function (response) {
                    $location.url("user/" + model.userId + "/website");
                });
        }
    }
})();