const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({

    jobName: {
        type: String
    },
    jobWebsite: {
        type: String
    },
    jobLocation: {
        type: String
    },
    jobImage: {
        type: String
    },

});

const Company = mongoose.model("Company", companySchema);

module.exports = Company;
