/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("WebsiteListController",WebsiteListController)

    function WebsiteListController($routeParams,websiteService) {
        var model = this;
        model.userId = $routeParams.uid;

        function init() {
            model.websites = websiteService.findWebsitesByUser(model.userId);
        }
        init();
    }
})();