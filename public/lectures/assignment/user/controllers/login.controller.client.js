/**
 * Created by Luyao on 7/17/2017.
 */

(function () {

    angular
         .module("WamApp")
         .controller("loginController",loginController)

    function loginController($location) {
        //Json = javascript object notation

        var model = this;
        $scope.login = login;
            function init() {

            }
            init();
            function login(user) {
            var user = userService.findUserByUsernameAndPassword(user.username,user.password);
            if(user === null){
                model.errorMessage("User Not Found");
            } else {
                $location.url("profile/"+ user.id);
            }
        }

    }
})