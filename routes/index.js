var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//test route challenges route
router.get('/challenges',(req,res)=>{
  res.render('challenges');
});

//show signup page
router.get('/signup',(req,res)=>{
  res.render("signup");
});

//login page
router.get('/login',(req,res)=>{
  res.render('login');
});

router.get('/addChallenges',(req,res)=>{
  res.render('addChallenges');
})

//test route - for company
router.get('/company',(req,res)=>{
  res.render('company');
});

//test route - for company
router.get('/addCompany',(req,res)=>{
  res.render('addCompany');
});


module.exports = router;
