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
        "findUserByCredentials": findUserByCredentials
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

    }

})();