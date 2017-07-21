/**
 * Created by Luyao on 7/20/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController",LoginController)

    function LoginController() {
        var model = this;

        model.login = login;

        function init() {

        }
        init();

        function login(user) {
            if(!user) {
                model.errorMessage = "User not found";
                return;
            }
            user = userService.findUserByCredentials(user.username, user.password);
            if(user === null) {
                model.errorMessage = "User not found";
            } else {
                $location.url("profile/"+user._id);
            }
        }
    }
})();