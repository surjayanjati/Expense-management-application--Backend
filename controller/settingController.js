/// Requiring The budget Collection From The Model ------------------------------------------------------------------>
const budgetCollections=require("../model/budgetModel");





/// Controller When The User Wants to Create a New Budget------------------------------------------------------------>
exports.createBudget=async(req,res)=>{
    try {
    // Object Destructuring For Geeting Values From middleware______________________________/
    const userId=req.userId;
    if(userId!==undefined && userId!==""){
    // Object Destructuring For Geeting Values From Request Body_____________________________/
    const {budget,budgetId}=req.body;
    if(budget!=="" && budgetId!==""){
    const budgetData=budgetCollections({
        userId:userId,
        budgetArray:[{
            budget:budget,
            budgetId:budgetId
        }]
    });
    const saveResult=await budgetData.save();
    console.log(saveResult);
    }else res.send({msg:"Kindly Wirte Down Your Budget",success:false,status:400});
    }else res.send({msg:"Kindly Authenticate Yourself",success:false,status:401});
    } catch (error) {
        res.send({msg:"Unable To Send",success:false,status:true,err:error.message});
    }
};



/// Controller When The User Wants to Create a New Catagory------------------------------------------------------------>
exports.createCatagory=async(req,res)=>{
    try {
    // Object Destructuring For Geeting Values From middleware______________________________/
    const userId=req.userId;
    if(userId!==undefined && userId!==""){
    // Object Destructuring For Geeting Values From Request Body_____________________________/
    const {catagory,catagoryId}=req.body;
    if(catagory!=="" && catagoryId!==""){

    const saveResult=await budgetCollections.updateOne({userId:userId},{$push:{catagoryArray:{catagory:catagory,catagoryId:catagoryId}}});
    if(saveResult.acknowledged===true){
    res.send({msg:"New Catagory Has Been Created",success:false,status:200});
    }else res.send({msg:"Unable To Create The New Catagory",success:false,status:500});
    
    }else res.send({msg:"Kindly Wirte Down Your Budget",success:false,status:400});
    }else res.send({msg:"Kindly Authenticate Yourself",success:false,status:401});
    } catch (error) {
        res.send({msg:"Unable To Create The New Catagory",success:false,status:500});
    }
}