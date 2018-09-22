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
     require: true
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
        required:true
       },
        company:  {
           type: String,
           required:true
       },
       location: {
           type: String
       },
       from: {
           type:Date,
           required:true
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
              required:true
          },
          degree:{
            type: String,
            required:true
        },
        fieldOfStudy:{
            type:String,
            required : true
        },
        location: {
            type: String
        },
        from: {
            type:Date,
            required:true
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