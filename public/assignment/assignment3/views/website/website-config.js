/**
 * Created by Luyao on 7/20/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when("/user/:uid/website",{
                templateUrl:"views/website/templates/website-list.view.client.html",
                controller: "WebsiteListController",
                controllerAs:"model"
            })
            .when("/user/:uid/website/new",{
                templateUrl:"views/website/templates/website-new.view.client.html",
                controller: "WebsiteNewController",
                controllerAs:"model"
            })
            .when("/user/:uid/website/:wid",{
                templateUrl:"views/website/templates/website-edit.view.client.html",
                controller: "WebsiteEditController",
                controllerAs:"model"
            })
    }
})();