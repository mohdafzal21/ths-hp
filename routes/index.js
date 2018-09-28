var express = require('express');
var router = express.Router();
var middleware = require('../middleware');
var {loggedIn} = middleware;

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

router.get('/addCompany',(req,res)=>{
  res.render('addCompany');
})

//test route - for company
router.get('/company',(req,res)=>{
  res.render('company');
});
<<<<<<< HEAD

//test rout for company 2 
router.get('/company2',(req,res)=>{
  res.render('company2');
});

//test route - for company
router.get('/addCompany',(req,res)=>{
  res.render('addCompany');
=======
router.get('/startTask/:id',(req,res)=>{
  res.render('startTask');  
>>>>>>> 29cd170f0d27c4eaccd521feb06036c52e33bdaf
});

router.get('/task', (req,res)=>{
  res.render('task');
});

router.get('/quiz', (req,res)=>{
  res.render('quiz');
});

module.exports = router;
