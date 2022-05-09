const express = require("express");
const mongoose = require("mongoose");
const dbConfig = require("./configs/db.config");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const User = require("./models/user.model")
const constants = require("./utils/constants");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));


// require("./routes")(app);

/**
 * Setup the mongodb connection and create on ADMIN user
 */
 mongoose.connect( dbConfig.DB_URL , async ()=>{
    console.log("MongoDB connected");

    await User.collection.drop(); //Since this is a development Server
    /**
     * Create an ADMIN user 
     */
        const user =await User.create({
            name: "Nilesh Deshmukh",
            userID : constants.userTypes.admin,
            password : bcrypt.hashSync("welcome123"),
            email : "nileshdeshmukh0908@gmail.com",
            userType : constants.userTypes.admin
        });
        console.log("ADMIN Created : ", user);
    
});

app.use(serverConfig.PORT, ()=>{
    console.log(`Application has Started on https://localhost:${serverConfig.PORT}`)
})
