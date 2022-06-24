var mongoose = require('mongoose')
var data = require('./data.js').data
mongoose.connect('mongodb://localhost:27017/all');

var async = require('async');
var Users = require("./models/hero").Users

async.series([
  open,
  dropDatabase,
  requireModels,
  createdUsers
],
function(err, result){
  mongoose.disconnect()
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

function requireModels(callback){
  require("./models/hero").Users

  async.each(Object.keys(mongoose.models), function(modelName){
    mongoose.models[modelName].ensureIndexes(callback)
  },
  callback)
}

