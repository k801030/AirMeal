var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Air Meals' });
});

/* GET list page. */ 
router.post('/meals', function(req, res, next) {
  res.render('meal-list', { title: 'Air Meals' , lat:req.body.lat ,lng:req.body.lng , date:req.body.date });
});


router.get('/detail/:id', function(req, res, next) {
  res.render('detail', { titule: 'Air Meals' });
});



router.get('/create', function(req, res, next) {
  res.render('create', { title: 'Air Meals' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Air Meals' });
});

module.exports = router;
