var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Air Meals' });
});

/* GET list page. */ 
router.post('/meals', function(req, res, next) {
  console.log(req.body);
  console.log(req.query);
  res.render('meal-list', { title: 'Air Meals' , lat:req.body.lat ,lng:req.body.lng , date:req.body.date });
});

router.get('/detail/:id', function(req, res, next) {
  res.render('detail', { titule: 'Air Meals' });
});

module.exports = router;
