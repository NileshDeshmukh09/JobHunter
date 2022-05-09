/**
 * This file will contain the PORT Number of the Applications
 */
if(process.env.NODE_ENV != 'production'){
    require('dotenv').config();
 }
 
 module.exports = {
     PORT : process.env.PORT
 }