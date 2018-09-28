const express = require('express');
const router = express.Router();
const db = require('../models');
const middleware = require('../middleware');
const {loggedIn} = middleware;


// /api/company
//get all Companies
router.get('/',(req,res)=>{
    db.Company.find()
    .then((company)=> res.json(company))
    .catch((err)=>res.send(err));
});

// all companies page
router.post('/',loggedIn,(req,res)=>{
    db.Company.create(req.body)
    .then(res.redirect('/company'))
    .catch((err)=>res.send(err));
});

//show page for a particular company
router.get('/:id',loggedIn,(req,res)=>{
    let id = req.params.id;
    db.Company.findById(id)
    .then((comapny)=> res.json(comapny))
    .catch((err)=>res.send(err));
});
//update a comapny Details
router.put('/:id',loggedIn,(req,res)=>{
    db.Company.findByIdAndUpdate({_id:req.params.id},req.body)
    .then((company)=> res.json(company))
    .catch((err)=>res.send(err));
});

//delete comapny
router.delete('/:id',loggedIn,(req,res)=>{
    db.Company.remove({_id:req.params.id})
    .then(res.send("Company  is removed"))
    .catch((err)=>res.send(err));
});

module.exports = router;