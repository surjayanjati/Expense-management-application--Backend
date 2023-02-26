/// Requiring The Module/Pakages--------------------------- ------------------------------------------------------------------>
const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const validator=require("validator");

mongoose.set('strictQuery', true);
/// Connecting To The Database with Mongooose -------------------------------------------------------------------------------->
mongoose.connect("mongodb://localhost/expensemanagementsystem",()=>{
    console.log("Connection To The Mongodb Database Has Been Successfull");

});


/// Defining The Schema For The User ---------------------------------------------------------------------------------------->
const userColectionSchema=new mongoose.Schema({
    name:{
      type:String,
      required:true,
      index:true,
      unique:true,
    },
    email:{
        type:String,
        required:true,
        index:true,
        unique:true,
        validate:(value)=>{
            if(!validator.isEmail(value)){
                throw new Error ("Invalid Email");
            }
        }
    },
    number:{
      type:Number,
        required:true,
        index:true,
        unique:true,
        validate:(value)=>{
          let stringNumber=value.toString();
          if(stringNumber.length<10){
            throw new Error ("Invalid Number");
          }
        }
    },
    password:{
          
      type:String,
      required:true,
    
    },
    userId:{
        type:Number
    },
    createdAt:{
      type:Date,
      default:()=> Date.now(),
      immutable:true,
    } 
});

/// Hasing The Data Before Saving it into The Collection ----------------------------------------------------------->
userColectionSchema.pre("save",async function(next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,8);
    }
})

/// Exporting The Collection --------------------------------------------------------------------------------------->
module.exports=mongoose.model("userCollections",userColectionSchema);