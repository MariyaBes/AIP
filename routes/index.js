var express = require('express');
var Hero = require("../models/hero").Hero
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Hero.find({},{_id:0,title:1,nick:1},function(err,menu){
    req.session.all_work = "Работает!!"
    res.render('index', {
      title: 'Сайт с описание героев из "Стражей Галактики"',
      menu: menu,
      counter: req.session.counter});
    })
});

/* log_in/Sing_in */
router.get("/logreg", function(req, res, next){
  res.render("logreg", {title:'Вход'});
});


/* Post log_in/Sing_in */
router.post('/logreg', function(req,res,next){
  var username = req.body.username
  var password = req.body.password
});

module.exports = router;
