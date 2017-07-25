/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteEditController",WebsiteEditController)

    function WebsiteEditController($location,$routeParams,websiteService) {
        var model = this;
        model.userId = $routeParams.uid;
        model.websiteId = $routeParams["wid"];
        model.websiteUpdate = websiteUpdate;
        model.websiteDelete = websiteDelete;

        function init() {
            model.websites = websiteService.findWebsitesByUser(model.userId);
            model.editWebsite = websiteService.findWebsiteById(model.websiteId);
        }
        init();

        function websiteUpdate(newWebsite) {
            newWebsite.developerId = model.userId;
            newWebsite._id = model.websiteId;
            websiteService.updateWebsite(newWebsite);
            $location.url("user/"+ model.userId+"/website");
        }

        function websiteDelete() {
            websiteService.deleteWebsite(model.websiteId);
            $location.url("user/"+ model.userId+"/website");
        }
    }
})();