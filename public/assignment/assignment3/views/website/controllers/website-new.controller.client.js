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
            model.websites = websiteService.findWebsitesByUser(model.userId);
        }

        init();

        function websiteNew(newWebsite) {
            newWebsite.developerId = model.userId;
            newWebsite._id = (new Date().getTime()).toString();
            websiteService.createWebsite(newWebsite);
            $location.url("user/" + model.userId + "/website");
        }
    }
})();