const Company = require("../models/company.models");
const constants = require("../utils/constants");


async function addCompany(req, res ){
    const companyObj = {
        name : req.body.name,
        address : req.body.address,
        jobPosted : [] , 
    }
    /**
     * Insert new Company to the DB
    */
   try {
       const company  =await  Company.create(companyObj);
       console.log("Company Added :" , company);

       /**
        * Return the response
        */
     

       res.status(201).send({
           msg : "Company Added Successfully !",
           company : company
       })


   }catch(err){
       console.log(err);
       res.status(500).send({
           msg : "Internal Error while Adding the Company"
       })
   }

}

async function updateCompany(req, res){

    const user = await Company.findOne({})
}

module.exports = { addCompany }