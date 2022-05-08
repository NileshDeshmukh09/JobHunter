/**
 * This file will holds the schema of the Job Models
 */

const mongoose = require("mongoose");
const constants = require("../utils/constants");

const job = new mongoose.Schema({
    
    title : {
        type : String,
        required : true
    },

    description : {
        type : String,
        required : true     
    },

    status : {
        type :String , 
        required : true,
        default : constants.jobStatus.expired
    }
});