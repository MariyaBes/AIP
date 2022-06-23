var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/star_lord', function(req, res, next) {
  res.render('hero', {
    title: "Звёздный лорд",
    picture: "images/star_lord.jpg",
    desc: "Полу-человек, полу-целестиал, который в детстве был похищен Опустошителями. После похищения он начал строить свою репутацию легендарного преступника, известного как Звёздный Лорд, со временем став основателем и лидером Стражей Галактики."
  });
});


router.get('/drax', function(req, res, next) {
  res.render('hero', {
    title: "Дракс",
    picture: "images/drax.jpg",
    desc: "Дракс , также известный как Дракс Разрушитель или просто Разрушитель, - бывший межгалактический преступник и член Стражей Галактики."
  });
});


router.get('/groot', function(req, res, next) {
  res.render('hero', {
    title: "Грут",
    picture: "images/groot.jpg",
    desc: "Грут - разумное, древовидное существо, частый сообщник межгалактического преступника Енота Ракеты. Вместе, пара путешествовала по галактике, выполняя задания по охоте за головами."
  });
});


router.get('/rocket', function(req, res, next) {
  res.render('hero', {
    title: "Енот Ракета",
    picture: "images/rocket.jpg",
    desc: "89P13 - генетически модифицированное животное, ставшее преступником по найму и называющее себя Ракетой. Вместе со своим другом и напарником Грутом Ракета путешествовал по галактике, охотясь за головами, пока не встретил Звёздного Лорда, который уговорил его помочь ему продать Сферу за крупное вознаграждение."
  });
});


router.get('/yondu', function(req, res, next) {
  res.render('hero', {
    title: "Йонду Удонта",
    picture: "images/yondu.jpg",
    desc: "Йонду Удонта - Центаврианец, лидер ключевой фракции Опустошителей и отцовская фигура для Питера Квилла."
  });
});


module.exports = router;
