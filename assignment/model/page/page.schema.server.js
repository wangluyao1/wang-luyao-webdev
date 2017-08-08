/**
 * Created by Luyao on 8/8/2017.
 */
var mongoose = require("mongoose");
var pageSchema = mongoose.Schema({
    _website:{type:mongoose.Schema.ObjectId,ref:"WebsiteModel"},
    name: String,
    title: String,
    description: String,
    widgets:[],
    dateCreated: {type:Date,default:Date.now},
},{collection:"page"});
module.exports = pageSchema;
