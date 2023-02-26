/// Requiring The User Collection From The Model ------------------------------------------------------------------------------->
const userCollections=require("../model/userModel");








/// Controller in The Case When The User needs to Sign in --------------------------------------------------------------------->
exports.userSignUp=async(req,res)=>{
     try {
        // Object Destructuring For Getting Values From The Req Body___________________________/
        const {name,email,number,password,userId}=req.body;
        if(name!=="" && email!=="" && number!=="" && password!=="" && userId!==""){
        const userData=userCollections({
            name:name,
            email:email,
            number:number,
            password:password,
            userId:userId
        });
        // Saving The Data in The Collection __________________________________________________/
        const saveResult=await userData.save();
        if(saveResult!==null){
            res.send({msg:"Singup Successfull",success:false,status:200});
        }else res.send({msg:"Unable To Sign Up",success:false,status:500});
        }else res.send({msg:"Kindly Fill All The Details",success:false,status:400});
     } catch (err) {
       if(err.code===11000){
        const values=["name","email","number"];
        values.filter((elem)=>{
            if(err.message.search(elem)!==-1){
                res.send({msg:`${elem} Already Exists`,success:false,status:400});
            }
        })
       }else if(err.name==="ValidationError"){
             let msg=err.message.slice(42);
             res.send({msg:msg,success:false,status:400});
       }
       
     }
}