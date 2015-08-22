var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Air Meals' });
});

/* GET list page. */ 
router.get('/meals', function(req, res, next) {
  res.render('meal-list', { title: 'Air Meals' });
});

router.get('/detail/:id', function(req, res, next) {
  res.render('detail', { titule: 'Air Meals' });
});

module.exports = router;
