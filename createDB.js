var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/all');

var async = require('async');
var Users = require("./models/hero").Users

mongoose.connection.on("open", function(){
  var db = mongoose.connection.db
  db.dropDatabase(function(err){
    if (err) throw err

    async.parallel([
      function(callback){
        var groot = new Users({
          nick:"groot"
        })
        groot.save(function(err, groot){
          callback(err, "groot")
        })
      },
      function(callback){
        var star_lord = new Users({
          nick:"star_lord"
        })
        star_lord.save(function(err, star_lord){
          callback(err, "star_lord")
        })
      },
      function(callback){
        var rocket = new Users({
          nick:"rocket"
        })
        rocket.save(function(err, rocket){
          callback(err, "rocket")
        })
      }
    ],
    function(err,result){
      if(err){
        console.log(err)
      }
      else{
        console.log("Успешно созданы герои с никами: " + result.join(", "))
      }
      mongoose.disconnect()
    })
  })
})