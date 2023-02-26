/// Defining The Port Number ---------------------------------------------------------------------------->
const portNumber=3456;
/// Requiring The Module / Pakages ---------------------------------------------------------------------->
const express=require("express");





/// Caling The Express Function ------------------------------------------------------------------------>
const app=express();


/// Middlewares----------------------------------------------------------------------------------------->
app.use(express.json()) //:> Middleware For Accepting The Json Data//



/// Requiring The Routes From The Route Folder --------------------------------------------------------->
require("./routes/signupRoutes")(app)//:> Signup Route_____________//







/// Listening To The Port Number ------------------------------------------------------------------------>
app.listen(portNumber,()=>{
    console.log(`Listening To Post Number ${portNumber} ` );
})