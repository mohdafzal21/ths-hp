const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/pro',(req,res)=>{
    res.send("hello this is connected to profile route");
});
//get all user profiles 
router.get('/', (req,res)=>{
    db.Profile.find()
    .populate('users',['username'])
    .then(profile => {
        if(!profile){
            errors.noprofiles = " there are no profiles with this user name";
            return res.status(404).json(errors);
        }
        return res.json(profile);
    })
    .catch((err)=>res.send(err))
});

router.post('/',(req,res)=>{
    db.Profile.create(req.body)
    .then((profile)=>res.json(profile))
    .catch((err)=>res.send(err))
});

router.get('/:id',(req,res)=>{
    let id = req.params.id;
    db.Profile.findById(id)
    .then((profile)=>res.json(profile))
    .catch((err)=>res.send(err))
});

router.put('/:id',(req,res)=>{
    db.Profile.findByIdAndUpdate({_id:req.params.id},req.body)
    .then((profile)=>res.json(profile))
    .catch((err)=>res.send(err))
});

router.delete('/:id',(req,res)=>{
    db.Profile.remove({_id:req.params.id})
    .then((profile)=>res.json(profile))
    .catch((err)=>res.send(err))
});

module.exports= router;

