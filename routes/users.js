var express = require('express');
var router = express.Router();
const db = require('../models');
const passport = require('passport');

/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.send('testing a user route');
});

router.get('/challenges',(req,res)=>{
  res.render('index');
})

//for passport session midddleware
router.use(passport.initialize());

//show signup page
router.get('/signup',(req,res)=>{
  res.render("signup");
});

//// auth routes
//signup
router.post('/signup',(req,res)=>{
   
  //mongoose method to register a user
  db.User.register(new db.User({username:req.body.username}),req.body.password,(err,user)=>{
     if(err){
       console.log(err);
       res.render('signup');
     }else{
       passport.authenticate("local")(req,res,function(){
                //  res.send("u have succesfully signed up");
                 res.redirect('/users/challenges');
       })
     };
} )
})

router.get('/login',(req,res)=>{
  res.render('login');
});

// login auth route

router.post('/login', passport.authenticate("local",{
       successRedirect:'/users/challenges',
       failureRedirect : '/login'
}),(req,res)=>{});


// router.get('/current',
//   passport.authenticate('local'),
//   (req, res) => {
//     console.log(req);
//   }
// );


//logout 
router.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/login');
});



module.exports = router;
