/**
 * Created by Luyao on 7/17/2017.
 */
var app = angular.module("WamApp",["ngRoute"]);

app.controller("loginController",loginController);

app.config(configuration);

function configuration($routeProvider) {
    $routeProvider
        .when("/login",{templateUrl:"login.html"})
        .when("/register",{templateUrl:"register.html"})
}

var users = [
    {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
    {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
    {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
]

function profileController($scope,$routeParams) {
    var userId = $routeParams["userId"]
    for(var u in users){
        if(userId === users[u]._id){

        }
    }
}

function loginController($scope,$location) {
    //Json = javascript object notation
    $scope.login = function (user) {
        // u is index
        for(var u in users){
            var _user = users[u];
            if(_user.username === user.username
            && user.password === user.password){
                $location.url("profile")

            }
        }
    }

}