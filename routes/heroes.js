var express = require('express');
var router = express.Router();
var Hero = require("../models/hero").Hero
var async = require("async")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маhшрутов, начинающихся с heroes');
});

router.get('/:nick', function(req, res, next) {
    async.parallel([
            function(callback){
                Hero.findOne({nick:req.params.nick}, callback)
            },
            function(callback){
                Hero.find({},{_id:0,title:1,nick:1},callback)
            }
        ],
        function(err,result){
            if(err) return next(err)
            var hero = result[0]
            var heroes = result[1] || []
            if(!hero) return next(new Error("Нет такого персонажа в 'Стражах Галактики'"))
            res.render('hero', {
                title: hero.title,
                picture: hero.avatar,
                desc: hero.desc,
                menu: heroes
            });
        })
})


module.exports = router;
