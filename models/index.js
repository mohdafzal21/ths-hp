const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/thshp',(err)=>{ //enter ur api name
    if(err){
        console.log(err);
    }else {
        console.log("Database is connceted");
    } 
});

module.exports.User = require('./users');
module.exports.Profile = require('./profile');
module.exports.Challenge = require('./challenges');
module.exports.Company = require('./company');

mongoose.Promise = Promise;