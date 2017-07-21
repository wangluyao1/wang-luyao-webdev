/**
 * Created by Luyao on 7/20/2017.
 */
(function () {
    
    angular
        .module("WebAppMaker")
        .service("userService",userService);
    
    function userService() {
        var userData = [
            {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
            {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
            {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        ]

    var api ={
            "createUser":createUser,
            "findUserById": findUserById,
            "findUserByUserName": findUserByUserName,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser,
    };
        return api;

        function createUser(user) {
            userData.add({_id:user.id ,username:user.username,password:user.password,firstName:user.firstName,lastName:user.lastName});
        }

        function findUserById(userId) {
            for(var u in userData) {
                var _user = userData[u];
                if(_user._id === userId) {
                    return _user;
                }
            }
            return null;
        }

        function findUserByUserName(username) {
            for(var u in userData) {
                var _user = userData[u];
                if(_user.username === username) {
                    return _user;
                }
            }
            return null;
        }

        function findUserByCredentials(username, password) {
            for(var u in userData) {
                var _user = userData[u];
                if(_user.username === username && _user.password === password) {
                    return _user;
                }
            }
            return null;
        }

        function updateUser(userId,user) {
            var _user = findUserById(userId);
            var index = userData.indexOf(_user);
            userData[index] = user;
        }

        function deleteUser(userId) {
            var _user = findUserById(userId);
            var index = userData.indexOf(_user);
            userData.splice(index,index+1);
        }

    }

})();