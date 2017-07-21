/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("RegisterController",RegisterController)

    function RegisterController($location,userService) {
        var vm = this;

        vm.register = register;

        function init() {

        }
        init();

        function register(user) {
            if(user.password !== user.verifyPassword) {
                vm.alert = "Password should be the same.";
            } else {
                var date = new Date();
                user._id = date.getTime();
                userService.createUser(user);
                $location.url("user/"+ user._id);
            }
        }
    }
})();