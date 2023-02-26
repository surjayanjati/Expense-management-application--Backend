/// Defining The Port Number ---------------------------------------------------------------------------->
const portNumber=3456;
/// Requiring The Module / Pakages ---------------------------------------------------------------------->
const express=require("express");
const cookie=require("cookie-parser");




/// Caling The Express Function ------------------------------------------------------------------------>
const app=express();


/// Middlewares----------------------------------------------------------------------------------------->
app.use(express.json()) //:> Middleware For Accepting The Json Data//
app.use(cookie());      //:> Middleware For Using The Cookie //


/// Requiring The Routes From The Route Folder --------------------------------------------------------->
require("./routes/signupRoutes")(app)//:> Signup Route_____________//
require("./routes/loginRoute")(app)  //:>Login Route_______________//
require("./routes/settingsRoute")(app)//:>Setting Page Route_______//





/// Listening To The Port Number ------------------------------------------------------------------------>
app.listen(portNumber,()=>{
    console.log(`Listening To Post Number ${portNumber} ` );
})