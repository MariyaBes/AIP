var express = require('express');
var router = express.Router();
var Users = require('../models/hero').Users
var async = require("async");

router.get('/:nick', function(req, res, next){
    async.parallel([
        function(callback){
            Users.findOne({
                nick: req.params.nick
            }, callback)
        },
        function(callback){
            Users.find({}, {_id:0, title:1, nick:1, avatar: 1},
                callback)
        }
    ],
    function(err, result){
        if (err) return next(err)
        var users = result[0]
        var heroes = result[1] || []
        if (!users) return next(new Error("Нет такого героя в 'Стражах Галактики'"))
        res.render('hero', {
            title: users.title,
            picture: users.avatar,
            desc: users.desc,
            menu: heroes
        });
    })
})


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с heroes');
});

module.exports = router;
