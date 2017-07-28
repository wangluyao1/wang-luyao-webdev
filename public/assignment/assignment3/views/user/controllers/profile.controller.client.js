/**
 * Created by Luyao on 7/21/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController)

    function ProfileController($routeParams, userService) {
        var model = this;
        model.userId = $routeParams["uid"];

        model.updateUser = updateUser;
        model.unregister = unregister;

        function init() {
            //model.user = userService.findUserById(model.userId);
            var promise = userService.findUserById(model.userId);
            promise.then(function (response) {
                model.user = response.data;
            })

        }

        init();

        function updateUser(user) {
            userService.updateUser(user._id, user);
        }

        function unregister(user) {
            userService.deleteUser(user._id);
        }
    }
})();