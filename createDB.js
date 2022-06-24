var mongoose = require('mongoose')
var data = require('./data.js').data
mongoose.connect('mongodb://localhost:27017/all');

var async = require('async');
var Users = require("./models/hero").Users

async.series([
  open,
  dropDatabase,
  createdUsers,
  close
],
function(err, result){
  if(err) throw err
  console.log("oke")
})

function open(callback){
  mongoose.connection.on("open", callback)
}

function dropDatabase(callback){
  var db = mongoose.connection.db
  db.dropDatabase(callback)
}

function createdUsers(callback){
  async.each(data, function(usersData, callback){
    var user = new mongoose.models.Users(usersData);
    user.save(callback);
  },
  callback);
};

function close(callback){
  mongoose.disconnect(callback)
}
