const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({

    companyName: {
        type: String
    },
    website: {
        type: String
    },
    location: {
        type: String
    },
    image: {
        type: String
    },

});

const Company = mongoose.model("company", companySchema);

module.exports = Company;
