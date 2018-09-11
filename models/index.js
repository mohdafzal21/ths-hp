const mongoose =require('mangoose');
mongoose.connect('mongoose://localhost/',(err)=>{
    if(err){
        console.log(err);
    }else {
        console.log("Database is connceted");
    } 
});

mongoose.Promise = Promise;