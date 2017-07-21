/**
 * Created by Luyao on 7/19/2017.
 */
(function () {
    angular
        .module("WamApp")
        .factory("userService",userService);

    function userService() {
        var users = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ]

        var api = {
            "findUserByUsernameAndPassword":findUserByUsernameAndPassword,
            "findUserByUserId": findUserByUserId,
            "registerUser": registerUser,
        }

        return api;

        function findUserByUsernameAndPassword(username,password) {
            for(var u in user){
                var _user = user[u];
                if(_user.username === username && _user.password === password){
                    return _user;
                }
            }
            return null;
        }

        function findUserByUsername(username) {
            for(var u in user){
                var _user = user[u];
                if(_user.username === username){
                    return _user;
                }
            }
            return null;
        }

        function findUserByUserId() {
            for(var u in users){
                if(userId === users[u]._id){
                    $scope.user = user[u];
                }
            }
        }

        function registerUser(_user) {
            user.add(_user);

        }

    }
})