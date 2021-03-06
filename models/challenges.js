const mongoose = require('mongoose');

const challengesSchema = new mongoose.Schema({
   
        companyName: {
            type: String
            
        },
        position: {
            type: String
            
        },
        contestType: {
            type: String
            
        },
        startTime: {
            type: String,
            default: "00:00:00"
        },
        StartDate: {
            type: Date,
            default: Date.now()
        },

        endTime: {
            type: String,
            default: "00:00:00"

        },

        endDate: {
            type: Date,
            default: Date.now()

        },
        companyImage:{
            type : String

        },
        competitionImage : {
            type : String

        },
        jobAddress :{
            type : String
        },
    
    });
const Challenges = mongoose.model("Challenges", challengesSchema);

module.exports = Challenges;