/**
 * Created by Luyao on 7/17/2017.
 */

(function () {

    angular
         .module("WamApp")
         .controller("profileController",profileController);

    function profileController($routeParams,userService) {
        var model = this;

        var userId = $routeParams["userId"];

        model.updateUser = updateUser;
        model.unRegister = unRegister;
        function updateUser() {

        }
        function unRegister(){

        }


        model.user = userService.findUserByUserId(userId);
    }
})