var express = require('express');
var Hero = require("../models/hero").Hero
var User = require('./../models/User').User
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
  res.render("logreg", {title:'Вход',
                        error:null});
});


/* Post log_in/Sing_in */
router.post('/logreg', function(req, res, next) {
  var username = req.body.username
  var password = req.body.password
  User.findOne({username:username},function(err,user){
    if(err) return next(err)
    if(user){
      if(user.checkPassword(password)){
        req.session.user = user
        res.redirect('/')
      } else {
        res.render('logreg', {title: 'Вход', error: 'Пароль не верный'})
      }
    } else {
      var user = new User({username:username,password:password})
            user.save(function(err,user){
                if(err) return next(err)
                req.session.user = user
                res.redirect('/')
            })     
    }
})
});

module.exports = router;
