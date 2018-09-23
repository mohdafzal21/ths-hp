var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//show signup page
router.get('/signup',(req,res)=>{
  res.render("signup");
});

//login page
router.get('/login',(req,res)=>{
  res.render('login');
});

//test route challenges route
router.get('/challenges',(req,res)=>{
  res.render('challenges');
});

//test route - for company
router.get('/company',(req,res)=>{
  res.render('company');
});


module.exports = router;
