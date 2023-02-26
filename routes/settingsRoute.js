/// Requiring The settings Controller From The Controller -------------------------------------------------------------->
const settingController=require("../controller/settingController");
/// Requiring The Middleware ------------------------------------------------------------------------------------------->
const roleCheckAuth=require("../middleware/roleCheckAuth");


/// Routes For Setting Page -------------------------------------------------------------------------------------------->
module.exports=(app)=>{

    // Route For Creating The Budget______________________________/
    app.post("/expensemanagementsystem/api/v1/settings/createbudget",roleCheckAuth.tokenCheck,roleCheckAuth.roleCheck, settingController.createBudget);

    
    // Route For Creating The Catagory______________________________/
    app.post("/expensemanagementsystem/api/v1/settings/createcatagory",roleCheckAuth.tokenCheck,roleCheckAuth.roleCheck, settingController.createCatagory);

}