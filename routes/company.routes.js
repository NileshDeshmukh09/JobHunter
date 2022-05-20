/**
 * This file will contain the Routes of the Company
 */

// Define the Routes - REST Endpoints for the Company 
const companyController  = require("../controllers/company.controller");
const auth = require("../middlewares/auth.middleware")

module.exports  = (app) => {

    // POSt - 127.0.0.1:8081/jobhunters/api/v1/companies
    app.post("/jobhunters/api/v1/companies", [auth.verifyToken] , [auth.isAdminOrRecruiter], companyController.addCompany);

    //POST -

}

