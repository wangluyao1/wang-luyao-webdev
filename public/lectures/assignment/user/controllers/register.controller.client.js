/**
 * Created by Luyao on 7/19/2017.
 */
(function () {
    angular
        .module("WamApp")
        .controller("registerController",registerController);

    function registerController() {
        var model = this;
        model.registerUser = registerUser;

        function registerUser(user) {
            var _user = userService.findUserByUsername(user.username);
            var user = userService.registerUser(user);
        }
    }
})