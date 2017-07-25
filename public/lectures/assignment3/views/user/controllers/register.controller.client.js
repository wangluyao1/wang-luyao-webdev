/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController",RegisterController)

    function RegisterController($location,userService) {
        var model = this;

        model.register = register;

        function init() {

        }
        init();

        function register(user) {
            if(user.password !== user.verifyPassword) {
                model.alert = "Password should be the same.";
            } else {
                var date = new Date();
                user._id = (date.getTime()).toString();
                userService.createUser(user);
                $location.url("user/"+ user._id);
            }
        }
    }
})();