var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bentogo' });
});

/* GET list page. */ 
router.post('/meals', function(req, res, next) {
  res.render('meal-list', { title: 'Bentogo' , lat:req.body.lat ,lng:req.body.lng , date:req.body.date });
});


router.get('/person/:id', function(req, res, next) {
  res.render('detail', { title: 'Bentogo' });
});



router.get('/create',  function(req, res, next) {
    res.render('create', { title: 'Bentogo' });
});

router.get('/login',  function(req, res, next) {
    res.render('login', { title: 'Bentogo' });
});




module.exports = router;
