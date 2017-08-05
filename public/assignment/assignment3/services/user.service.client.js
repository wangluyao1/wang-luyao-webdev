/**
 * Created by Luyao on 7/20/2017.
 */
(function () {
    angular
        .module("WebAppMaker")
        .service("userService", userService);

    function userService($http) {

        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUserName": findUserByUserName,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser,
        };
        return api;

        function createUser(user) {
            var url = "/api/user";
            return $http.post(url,user);
            //userData.push(user);
        }

        function findUserById(userId) {
            var url = "/api/user/" + userId;
            return $http.get(url);
            // for (var u in userData) {
            //     var _user = userData[u];
            //     if (_user._id === userId) {
            //         return _user;
            //     }
            // }
            // return null;
        }

        function findUserByUserName(username) {
            var url = "/api/user?username="+username;
            return $http.get(url);
            // for (var u in userData) {
            //     var _user = userData[u];
            //     if (_user.username === username) {
            //         return _user;
            //     }
            // }
            // return null;
        }

        function findUserByCredentials(username, password) {
            var url = "/api/user?username="+username+"&password=" + password;
            return $http.get(url);
            // for (var u in userData) {
            //     var _user = userData[u];
            //     if (_user.username === username && _user.password === password) {
            //         return _user;
            //     }
            // }
            // return null;
        }

        function updateUser(userId, user) {
            var url = "/api/user/" + userId;
            return $http.put(url,user);
            // var _user = findUserById(userId);
            // if (_user != null) {
            //     var index = userData.indexOf(_user);
            //     userData[index] = user;
            // }
        }

        function deleteUser(userId) {
            var url = "/api/user/"+ userId;
            return $http.delete(url);
            // var _user = findUserById(userId);
            // if (_user != null) {
            //     var index = userData.indexOf(_user);
            //     userData.splice(index, 1);
            // }
        }

    }

})();