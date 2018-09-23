const mongoose = require('mongoose');

const challengeSchema = new mongoose.Schema({
    bgImage:{
        type : String
    },
    companyImage: {
        type : String
    },
    challengeName:{
        type : String
    },
    location:{
        type: String
    },

    time :[{   
    openTime:{
        type: String,
        default : "00:00:00"
    },
    closeTime:{
        type: String,
        default : "00:00:00"
    },
    duration:{
        type: String,        
        default : "00:00:00"
    },
    }],

    hiring :[{
        postition : {
            type : String
        },
        field:{
            type : String
        },
        experiance : { 
            type : String
        },        
    }]
});

const Challenge = mongoose.model("Challenge", challengeSchema);

module.exports = Challenge;