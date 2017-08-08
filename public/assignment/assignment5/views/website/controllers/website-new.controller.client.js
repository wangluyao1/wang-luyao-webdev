/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteNewController", WebsiteNewController)

    function WebsiteNewController($location, $routeParams, websiteService) {
        var model = this;
        model.userId = $routeParams.uid;
        model.websiteNew = websiteNew;

        function init() {
            websiteService.findWebsitesByUser(model.userId)
                .then(function (response) {
                    model.websites = response.data;
                });
        }

        init();

        function websiteNew(newWebsite) {
            websiteService.createWebsite(model.userId,newWebsite)
                .then(function (response) {
                    var newWebsite = response.data;
                    $location.url("user/" + model.userId + "/website");
                });
        }
    }
})();