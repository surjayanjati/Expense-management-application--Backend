/// Requiring The Sign up Collection From The Controller --------------------------------------------------------------->
const signupController=require("../controller/signupController");







/// Routes For The Sign Up Page --------------------------------------------------------------------------------------->
module.exports=(app)=>{

    // Route For Sing Up Page Post Request _____________________________/
    app.post("/expensemanagementsystem/api/v1/users/signupusers",signupController.userSignUp);

}