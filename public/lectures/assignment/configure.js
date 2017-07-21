/**
 * Created by Luyao on 7/17/2017.
 */

(function () {

    angular
         .module("WamApp")
         .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when("/login",{templateUrl:"user/templates/login.view.html",
                controller: "loginController",
            controllerAs: "ctrl"})
            .when("/register",{templateUrl:"user/templates/register.view.html"}
            .when("/profile/.userId",{templateUrl:"user/templates/profile.view.html",controller: "profileController",
                controllerAs: "ctrl"}))
    }
})