/**
 * Created by Luyao on 7/20/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .config(config);

    function config($routeProvider) {
        $routeProvider
            .when("/login",{
                templateUrl:"views/user/templates/login.view.client.html"
            })
            .when("/register",{
                templateUrl:"views/user/templates/register.view.client.html"
            })
            .when("/user/:uid",{
                templateUrl:"views/user/templates/profile.view.client.html"
            })



    }
})();