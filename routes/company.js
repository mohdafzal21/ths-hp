const express = require('express');
const router = express.Router();
const db = require('../models');

//test route
router.get('/c',(req,res)=>{
    res.send("hello test rout")
});

//get all Companies
router.get('/',(req,res)=>{
    db.Company.find()
    .then((company)=> res.json(company))
    .catch((err)=>res.send(err));
});

// all companies page
router.post('/',(req,res)=>{
    db.Company.create(req.body)
    .then((company)=> res.json(company))
    .catch((err)=>res.send(err));
});

//show page for a particular comapny
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    db.Company.findById(id)
    .then((comapny)=> res.json(comapny))
    .catch((err)=>res.send(err));
});
//update a comapny Details
router.put('/:id',(req,res)=>{
    db.Company.findByIdAndUpdate({_id:req.params.id},req.body)
    .then((company)=> res.json(company))
    .catch((err)=>res.send(err));
});

//delete comapny
router.delete('/:id',(req,res)=>{
    db.Company.remove({_id:req.params.id})
    .then(res.send("Company  is removed"))
    .catch((err)=>res.send(err));
});

module.exports = router;