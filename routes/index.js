var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/challenge', function(req, res, next) {
  res.render('challenge', { title: 'Express' });
});

module.exports = router;
