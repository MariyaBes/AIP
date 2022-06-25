var express = require('express');
const { Users } = require('../models/hero');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Users.find({},{_id:0,title:1,nick:1},function(err,menu){
    res.render('index', { 
      title: 'Сайт с описание героев из "Стражей Галактики"',
      menu: menu });
    })
});


module.exports = router;
