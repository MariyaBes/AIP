var express = require('express');
const { Hero } = require('../models/hero');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Hero.find({},{_id:0,title:1,nick:1},function(err,menu){
    req.session.all_work = "Работает!!"
    res.render('index', {
      title: 'Сайт с описание героев из "Стражей Галактики"',
      menu: menu });
    })
});

module.exports = router;
