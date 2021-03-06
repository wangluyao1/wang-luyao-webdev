/**
 * Created by Luyao on 7/27/2017.
 */
var app = require('../../express');
var userModel = require("../model/user/user.model.server");
var userData = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
]

app.post('/api/user',createUser);
app.get('/api/user',findUserByUsername);
app.get('/api/user',findUserByCredentials);
app.get('/api/user/:userId',findUserById);
app.put('/api/user/:userId',updateUser);
app.delete('/api/user/:userId',deleteUser);
//app.get('/all/users',getAllUsers);

// function getAllUsers(req,res) {
//     res.send(userData);
// }

function createUser(req,res) {
    var user = req.body;
    userModel
        .createUser(user)
        .then(function (user) {
            res.json(user);
        },function(err){
        res.send(err);
    })
    // var date = new Date();
    // user._id = (date.getTime()).toString();
    // userData.push(user);
    // res.send(user);
}

function findUserByUsername(req,res) {
    var username = req.query.username;
    userModel
        .findUserByUsername(username)
        .then(function (user) {
            res.json(user);
        },function (err) {
            res.sendStatus(404).send(err);
        });
    // for(var u in userData){
    //     if(userData[u].username === username){
    //         res.send(userData[u]);
    //         return;
    //     }
    // }
    // res.send("0");
}

function findUserByCredentials(req,res) {
    var username = req.query.username;
    var password = req.query.password;
    userModel
        .findUserByCredentials(username,password)
        .then(function (user) {
            res.json(user);
        },function (err) {
            res.sendStatus(404).send(err);
        });
    // for(var u in userData){
    //     if(userData[u].username === username && userData[u].password === password){
    //         res.send(userData[u]);
    //         return;
    //     }
    // }
    // res.send("0");
}

function findUserById(req,res) {
    var userId = req.params.userId;
    userModel
        .findUserById(userId)
        .then(function (user) {
            res.json(user);
        },function(err){
            res.send(err);
        })
    // for(var u in userData){
    //     if(userData[u]._id === userId){
    //         res.send(userData[u]);
    //         return;
    //     }
    // }
    // res.sendStatus(404);
}

function updateUser(req,res) {
    var userId = req.params['userId'];
    var user = req.body;
    userModel
        .updateUser(userId,user)
        .then(function (status) {
            res.json(status);
        },function (err) {
            res.sendStatus(404).send(err);
        });
    // for(var u in userData) {
    //     if (userData[u]._id === userId) {
    //         userData[u] = user;
    //         res.send(user);
    //         return;
    //     }
    // }
    // res.sendStatus(404);
}

function deleteUser(req,res) {
    var userId = req.params.userId;
    userModel
        .deleteUser(userId)
        .then(function (status) {
            res.json(status);
        },function (err) {
            res.sendStatus(404).send(err);
        });
    // for(var u in userData) {
    //     if (userData[u]._id === userId) {
    //         userData.splice(u, 1);
    //         res.sendStatus(200);
    //         return;
    //     }
    // }
    // res.sendStatus(404);
}