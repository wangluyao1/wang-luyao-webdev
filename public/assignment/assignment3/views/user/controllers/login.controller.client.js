/**
 * Created by Luyao on 7/20/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("LoginController", LoginController)

    function LoginController($location, userService) {
        var model = this;

        model.login = login;

        function init() {

        }

        init();

        function login(user) {
            if (!user) {
                model.alert = "Unable to log in.";
                //model.errorMessage = "User not found";
                return;
            }
            var promise = userService.findUserByCredentials(user.username, user.password);
            promise.then(function (response) {
                if(response.data === "0"){
                    model.alert = "Unable to log in.";
                } else {
                    $location.url("user/" + response.data.user._id);

                }
            })

            // user = userService.findUserByCredentials(user.username, user.password);
            // if (user === null) {
            //     //model.errorMessage = "User not found";
            //     model.alert = "Unable to log in.";
            // } else {
            //     $location.url("user/" + user._id);
            // }
        }
    }
})();