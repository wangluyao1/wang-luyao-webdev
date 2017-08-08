/**
 * Created by Luyao on 8/6/2017.
 */
console.log("Hello from mongoose");

var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/test');
var userSchema = mongoose.Schema({
    username:String,
    first:String,
    last:String,
    status: {type:String,enum:["MARRIED","SINGLE"]},
    dob:Date,
    created: {type: Date,default:Date.now}
});

var userModel = mongoose.model("UserModel",userSchema);

userModel.create();