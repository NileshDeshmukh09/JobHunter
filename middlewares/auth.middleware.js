const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const config = require("../configs/auth.config");
const constants = require("../utils/constants");

/**
 *  Authentication 
 *      
 *      - If the Token is Valid or Not
 * 
 *  1. If No  Token is passed in the request header - Not Allowed
 *  2. If Token is PASSED : Authenticated
 *      if correct ALLOW , else REJECT
*/

function verifyToken(req, res, next){

    /**
     * Read the Token  From the Header
     */

    const token = req.headers['x-access-token'];

    if( !token ){
        return res.status(403).send({
            message : "No Token Provided"
        })
    }

    // If the token was provided , we need to verify it
    jwt.verify(token , config.secret , (err , decoded) => {

        if(err){
            return res.status(401).send({
                message : "Unauthorized"
            })
        }

        // I will try to read the userId from the Decoded token and store it in request object
        req.userId = decoded.id;
        next();


    })

}

/**
 * If the Passed token is ADMIN or NOT
*/

async function isAdminOrRecruiter(req, res, next){
    /**
     * Fetch the User From the DB using userId
    */

    const user = await User.findOne({ userId : req.userId });

    /**
     * Check What is the UserType 
    */
   if( user && (user.userType == constants.userTypes.admin || user.userType == constants.userTypes.recruiter)){
       next();
   }else{
       res.status(403).send({
           message : "Require ADMIN/ RECRUITER Role"
       })
   }
}



module.exports = { verifyToken , isAdminOrRecruiter  }