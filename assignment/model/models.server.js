/**
 * Created by Luyao on 8/8/2017.
 */
var mongoose = require("mongoose");
var q = require('q');

var connectionString = 'mongodb://localhost/wang-luyao-webdev'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
    var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
    var password = process.env.MLAB_PASSWORD_WEBDEV;
    connectionString = 'mongodb://' + username + ':' + password;
    connectionString += '@ds157078.mlab.com:57078/heroku_ggg0rswr'; // user yours
}
// Replace "@ds157268.mlab.com:57268/heroku_nh37fqq4"
// above with your own URL given to you by mLab

var db = mongoose.connect(connectionString);
mongoose.Promise = q.Promise;
module.exports = db;