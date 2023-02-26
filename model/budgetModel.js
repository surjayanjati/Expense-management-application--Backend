/// Requiring The Module/Pakages--------------------------------------------------------------------------------->
const mongoose=require("mongoose");




/// Connecting With The Mongodb Using The Mongoose -------------------------------------------------------------->
mongoose.connect("mongodb://localhost/expensemanagementsystem",()=>{
    console.log("Connection To Database Has Been Successfull");
});


/// Defining The Schema For The Expense Collection -------------------------------------------------------------->
const budgetCollectionSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        index:true,
        unique:true
    },
    budgetArray:[{
        budget:{

            type:Number
        },
        timePeriod:{
            type:Date,
            default:()=> new Date(Date.now()),
            immutable:true,
        },
        budgetId:{
            type:Number,
        },
        expensesArray:[{
         
        }]
    }],
    catagoryArray:[{
        catagory:{
            type:String,
        },
        catagoryId:{
            type:Number
        }
    }]
});

/// Exporting The BudgetCollection ----------------------------------------------------------------------------------->
module.exports=mongoose.model("budgetcollections",budgetCollectionSchema);