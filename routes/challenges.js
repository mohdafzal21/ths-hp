//express
const express = require('express');
const router = express.Router();
const db = require('../models');

const middleware = require('../middleware');

const {loggedIn} = middleware;   //destructuring assignment


  
//get all challenges  localhost:3000/api/challenges
router.get('/',(req,res)=>{
    db.Challenges.find()
    .then((challenges)=> res.json(challenges))
    .catch((err)=>res.send(err));
});

//create a new challenge
router.post('/',(req,res)=>{
    db.Challenges.create(req.body)
    // .then(res.redirect('/challenges'))
    .then((challenges)=> res.json(challenges))
    .catch((err)=>res.send(err));
});

//show page for a particular challenge
router.get('/:id',(req,res)=>{
    let id = req.params.id;
   
     db.Challenges.findById(id)
    
     .then((challenges)=> {
         console.log(challenges)
         res.render('startTask', {challenges:challenges})
      } )
    // .then(res.render('startTask'))
    
    .catch((err)=>res.send(err));
});

//update a particular challenge
// router.put('/:id',(req,res)=>{
//     db.Challenges.findByIdAndUpdate({_id:req.params.id},req.body)
//     .then((challenges)=> res.json(challenges))
//     .catch((err)=>res.send(err));
// });

router.put('/:id',(req,res)=>{
    db.Challenges.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
    .then(function(challenges){
        res.json(challenges);
    })
    .catch(function(err){
        res.send(err);
    })
})


//delete a particular challenge - /api/challenges/14891247089172089348107320
router.delete('/:id',(req,res)=>{
    db.Challenges.remove({_id:req.params.id})
    .then(res.send("challenge is removed"))
    .catch((err)=>res.send(err));
});





module.exports = router;