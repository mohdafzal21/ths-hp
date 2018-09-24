const express = require('express');
const router = express.Router();

const multer=require('multer');
const db = require('../models');


router.get('/test',(req,res)=>{
    res.render('upload')
});

// multer.diskStorage({getFilename})

//storage for multer engine
var storage = multer.diskStorage({
    destination : function (req, file, cb) {
        cb(null, 'public/uploads/')
    },
    Filename : function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+ '.jpg')
    }
});


//putting into uploads file
var uploads = multer({ storage: storage}).single('img');

//
router.post('/upload', function (req, res,next) {
    uploads(req, res, function (err) {
        if (err) {
            console.log(err);
             res.render('upload',{msg:err});
        }
//         console.log(req.body, 'Body');
//   console.log(req.files, 'files');

        
        res.render('Done');
    
        file: `/uploads/${req.file}`
    })
})

router.post('/test',(req,res)=>{
    console.log(req.body);
})

































// router.post('/profile', upload.single('avatar'), (req, res) => {
//     if (!req.file) {
//       console.log("No file received");
//       return res.send({
//         success: false
//       });
  
//     } else {
//       console.log('file received');
//       return res.send({
//         success: true
//       })
//     }
//   });

// router.post('/fileUpload', upload.single('image'), (req, res, next) => {
//     MongoClient.connect(url, (err, db) => {
//         assert.equal(null, err);
//         insertDocuments(db, '/public/uploads/' + req.file.filename, () => {
//             db.close();
//             res.json({'message': 'File uploaded successfully'});
//         });
//     });
// });



// var insertDocuments = function(db, filePath, callback) {
//     var collection = db.collection('user');
//     collection.insertOne({'imagePath' : filePath }, (err, result) => {
//         assert.equal(err, null);
//         callback(result);
//     });
// }





// /api/task
//GET ALL TASK
router.get('/',(req,res)=>{
    db.Task.find()
    .then((task)=> res.json(task))
    .catch((err)=>res.send(err));
});


// All Tasks PAGE
router.post('/',(req,res)=>{
    db.Task.create(req.body)
    .then(res.redirect('/task'))
    .catch((err)=>res.send(err));
});


//SHOW PAGE FOR PARTICULAR TASK
router.get('/:id',(req,res)=>{
    let id = req.params.id;
    db.Task.findById(id)
    .then((task)=> res.json(task))
    .catch((err)=>res.send(err));
});

//UPDATING TASK DETAILS
router.put('/:id',(req,res)=>{
    db.Task.findByIdAndUpdate({_id:req.params.id},req.body)
    .then((task)=> res.json(task))
    .catch((err)=>res.send(err));
});

//DELETING TASK
router.delete('/:id',(req,res)=>{
    db.Task.remove({_id:req.params.id})
    .then(res.send("Task  is removed"))
    .catch((err)=>res.send(err));
});

module.exports = router;

