/**
 * This file will hold the schemas of the Company Details
*/

const mongoose = require("mongoose");
const constants = require("../utils/constants");
const contants = require("../utils/constants");

const companySchema =  new mongoose.Schema({
    
    name : {
        type : String,
        required : true   
    }, 

    address : {
        type :String,
        minlength : 10,
        maxlength : 70,
        required : true
    },

    isVerified : {
        type : String,
        required : true,
        isVerified : constants.verificationStatus.notVerfied
    },

    createdAt: {
        type: Date,
        immutable: true,
        default: () => {
            return Date.now();
        }
    },

    updatedAt : {
        type : Date, 
        default: () => {
            return Date.now();
        }
        
    }
});

module.exports = mongoose.model("Company", companySchema);
