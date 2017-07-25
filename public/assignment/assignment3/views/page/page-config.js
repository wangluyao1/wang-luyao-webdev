/**
 * Created by Luyao on 7/20/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when("/user/:uid/website/:wid/page",{
                templateUrl:"views/page/templates/page-list.view.client.html",
                controller: "PageListController",
                controllerAs:"model"
            })
            .when("/user/:uid/website/:wid/page/new",{
                templateUrl:"views/page/templates/page-new.view.client.html",
                controller: "PageNewController",
                controllerAs:"model"
            })
            .when("/user/:uid/website/:wid/page/:pid",{
                templateUrl:"views/page/templates/page-edit.view.client.html",
                controller: "PageEditController",
                controllerAs:"model"
            })
    }
})();