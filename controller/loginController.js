/// Requiring The User Collection From The Model ----------------------------------------------------------------------->
const userCollections=require("../model/userModel");
/// Requiring The Module/Pakage ---------------------------------------------------------------------------------------->
const bcrypt=require("bcrypt");





/// Controller For Handeling The Post Request Of The User -------------------------------------------------------------->
exports.userLogin=async (req,res)=>{
    try {
    // Object Destrcturing For Geeting The Login Values________________________________/
    const {email,password}=req.body;
    if(email!=="" && password!==""){
    const findUserArray=await userCollections.find({email:email});
    if(findUserArray.length!==0){
    
    // Matching The Password___________________________________________________________/
    const passwordMatchResult=await bcrypt.compare(password,findUserArray[0].password);
    if(passwordMatchResult===true){
    const token=await generateToken(findUserArray[0].id);
    if(token!==undefined){
        res.cookie("loginCookie",token,{expires:new Date(Date.now()+300000)});
        res.send({msg:"Login Successfull",success:true,status:200,token:token});
    }else res.send({msg:"Unable To Login",success:false,status:500,});
    
    }else res.send({msg:"Kindly Check The Password",success:false,status:400});
    
    }else res.send({msg:"Kindly Signup Before Login",success:false,status:204});
    } else res.send({msg:"Kindly Fill All The Details",success:false,status:400});
    } catch (error) {

        res.send({msg:"Unable To Login",success:false,status:500,err:error});
    }
}