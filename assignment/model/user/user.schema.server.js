/**
 * Created by Luyao on 8/8/2017.
 */
var mongoose = require("mongoose");
var userSchema = mongoose.Schema({
    username: {type: String,required:true,unique:true} ,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    //roles: {type:String,enum:['USER','ADMIN'],default:'USER'},
    websites: [{type:mongoose.Schema.ObjectId,ref:'WebsiteModel'}],
    dateCreated: {type:Date,default:Date.now},
    },{collection:"user"});
module.exports = userSchema;
