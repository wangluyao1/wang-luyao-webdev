/**
 * Created by Luyao on 8/8/2017.
 */
var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    username: String ,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    websites: [],
    dateCreated: {type:Date,default:Date.now},
    },{collection:"user"});
module.exports = userSchema;
