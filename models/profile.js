const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
   user : {
       type: mongoose.Schema.Types.ObjectId,
       ref : 'users' 
   },
   company: {
       type:String
   },
   website:{
       type:String
   },
   location: {
      
          type:String
   },
   status:{
     type:String,
     required: true
   },
   skills : {
        type : [String],
        required: true
   },
   bio:{
       type: String
   },
   githubusername: {
       type: String
   },
   experience:[
       {
        title:{
        type: String,
        
       },
        company:  {
           type: String,
           
       },
       location: {
           type: String
       },
       from: {
           type:Date,
          
       },
       to:{
           type:Date
       },
       current: {
           type: Boolean,
           default: false
       },
       description: {
           type: String
       }
    }
   ],
   education:[{
          school:{
              type: String,
              
          },
          degree:{
            type: String,
            
        },
        fieldOfStudy:{
            type:String,
            
        },
        location: {
            type: String
        },
        from: {
            type:Date,
           
        },
        to:{
            type:Date
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String
        }

   }],
   social :{
       linkedIn:
       {
           type : String
       },
       faceBook:
       {
           type : String
       },
    },
   date:{
       type: Date,
       default: Date.now()
   }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;