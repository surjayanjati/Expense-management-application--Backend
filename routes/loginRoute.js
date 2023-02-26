/// Requiring The login Controller From The Controller Folder ------------------------------------------------------->
const loginController=require("../controller/loginController");








/// Routes For Login Page Requests ---------------------------------------------------------------------------------->
module.exports=(app)=>{

    // Route For Handeling The Post request of Login Page___________________________/
    app.post("/expensemanagementsystem/api/v1/users/loginusers",loginController.userLogin);

}