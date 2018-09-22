//express
const express = require('express');
const router = express.Router();
const db = require('../models');

//test route
router.get('/home',(req,res)=>{
    res.send("all challenges are here")
});


//get all challenges
router.get('/',(req,res)=>{
    db.Challenge.find()
    .then((challenges)=> res.json(challenges))
    .catch((err)=>res.send(err));
});

//create a new challenge
router.post('/',(req,res)=>{
    db.Challenge.create(req.body)
    .then((challenges)=> res.json(challenges))
    .catch((err)=>res.send(err));
});

//show page for a particular challenge
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    db.Challenge.findById(id)
    .then((challenges)=> res.json(challenges))
    .catch((err)=>res.send(err));
});

//update a particular challenge
router.put('/:id',(req,res)=>{
    db.Challenge.findByIdAndUpdate({_id:req.params.id},req.body)
    .then((challenges)=> res.json(challenges))
    .catch((err)=>res.send(err));
});

//delete a particular challenge
router.delete('/:id',(req,res)=>{
    db.Challenge.remove({_id:req.params.id})
    .then(res.send("challenge is removed"))
    .catch((err)=>res.send(err));
});





module.exports = router;