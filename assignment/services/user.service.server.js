/**
 * Created by Luyao on 7/27/2017.
 */
var app = require('../../express');

var userData = [
    {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
    {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
    {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
    {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
]

// app.get('/api/user',createUser);
// app.get('/api/user?username=username',findUserByUsername);
app.get('/api/user?username=username&password=password',findUserByCredentials);
app.get('/api/user/:userId',findUserById);
// app.put('/api/user/:userId',updateUser);
// app.delete('/api/user/:userId',deleteUser);

function createUser(req,res) {

}

function findUserByUsername(req,res) {


}

function findUserByCredentials(req,res) {
    var username = req.query.username;
    console.log(username);
    var password = req.query.password;
    console.log(password);
    for(var u in userData){
        if(userData[u].username === username && userData[u].password === password){
            res.send(userData[u]);
            return;
        }
    }
    res.send("0");
}

function findUserById(req,res) {
    var userId = req.params['userId'];
    for(var u in userData){
        if(userData[u]._id === userId){
            res.send(userData[u]);
            return;
        }
    }
    res.sendStatus(404);
}
