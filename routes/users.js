var express = require('express');
var router = express.Router();
const db = require('../models');

//get
//post
//put
//delete
/* GET users listing. */
router.get('/test', function(req, res, next) {
  res.send('testing a user route');
});

//signup a user 
// router.post('/signup',(req,res)=>{

  
// })


module.exports = router;
