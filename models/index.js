const mongoose =require('mongoose');

// mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds225382.mlab.com:25382/ths_oc');

//Set up default mongoose connection
const mongoDB = 'mongodb://mohdafzal21:abcXYZ123@ds225382.mlab.com:25382/ths_oc'

mongoose.connect(mongoDB);

//for local machine mongo server
// mongoose.connect('mongodb://localhost/thshp',(err)=>{ 
//     if(err){
//         console.log(err);
//     }else {
//         console.log("Database is connceted");
//     } 
// });

module.exports.User = require('./users');
module.exports.Profile = require('./profile');
module.exports.Challenges = require('./challenges');
module.exports.Company = require('./company');



mongoose.Promise = Promise;