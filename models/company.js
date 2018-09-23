const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    jobImage: {
        type: String
    },
    jobName: {
        type: String
    },
    jobWebsite: {
        type: String
    },
    jobLocation: {
        type: String
    },
   
});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
