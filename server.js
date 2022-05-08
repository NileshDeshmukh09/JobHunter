const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const bodyParser = require("body-parser");
// const bcrypt = require("bcryptjs");
const User = require("./models/user.model")


/**
 * Setup the mongodb connection and create on ADMIN user
 */
 mongoose.connect(dbConfig.DB_URL, ()=>{
    console.log("MongoDB connected");
    // Initailization
    
})
