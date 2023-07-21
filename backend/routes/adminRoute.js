const express=require("express")
const adminrouter=express.Router()
const admin=require("../model/adminModel")
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const adminBlackListModel=require("../model/adminBlacklistModel")
const adminModel = require("../model/adminModel")
const middleware = require("../middleware/adminmiddleware")
const CourseModel=require("../model/courseModel")

adminrouter.post("/register",async(req,res)=>{
    try{
    const {username,email,phone,password}=req.body
    if(!username || !email || !phone || !password){
        res.status(400).send({msg:"Please fill all the details"})
    }else{
    const newpassword=await bcrypt.hash(password,10)
    const newadmin = await admin.create({...req.body,password:newpassword})
    res.send(newadmin)
    }
}
    catch(err){
        res.status(500).send(err)
    }
})

adminrouter.post("/login",async(req,res)=>{
    try{
    const {username,password}=req.body
    const admin=await adminModel.findOne({username})
    if(!admin){
        res.send("First Sign Up")
    }
    const verify=await bcrypt.compare(password,admin.password)
    if(!verify){
        res.status(401).send("Incorrect Password")
    }
    const adminToken=jwt.sign({adminId:admin._id,username:username},"adminToken",{expiresIn:"1d"})
    const adminRefreshToken=jwt.sign({adminId:admin._id},"adminRefresh",{expiresIn:"2d"})
    res.status(200).send({msg:"Login Sucessful!",adminToken:adminToken,adminRefreshToken:adminRefreshToken})
    }catch(err){
        res.status(500).send(err)
    }
})


adminrouter.get("/logout", async (req, res) => {
    try {
      const token = req.headers.authorization?.split(" ")[1] || null;
      if (token) {
        await adminBlackListModel.updateMany({}, { $push: { blacklist: [token] } });
        res.status(200).json({ msg: "Logout Successful!" });
      }
    } catch (err) {
      res.status(500).json({ error: err.messag });
    }
  });


  adminrouter.get("/refreshtoken", (req, res) => {
    const refreshToken = req.headers.authorization?.split(" ")[1];
    const decoded = jwt.verify(refreshToken,"adminRefresh");
    if (decoded) {
      let newToken = jwt.sign({adminId:admin._id }, "newadminRefresh", {
        expiresIn: "1d",
      });
      res.status(200).json({ msg: "newToken", newToken });
    } else {
      res.status(500).json({ error: err.message });
    }
  });



  adminrouter.patch("/cart/:courseId",middleware,async(req,res)=>{
    try{
    const addtoCart=await CourseModel.findById(req.params.courseId)
    const cartItemID=String(addtoCart._id)
    const userId=String(req.body.adminId)
    const client=await adminModel.findById(userId)
    

    const checkID=client.cart.includes(cartItemID)
    if(checkID){
        res.send({msg:"Course already exist in cart!"})
    }

        client.cart.push(cartItemID)
       
        const updatePost=await adminModel.findByIdAndUpdate(userId,client,{new:true})
        res.send(updatePost)
 
    
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
  })
  

  adminrouter.patch("/mylearning/:courseId",middleware,async(req,res)=>{
    try{
    const addToMyLearning=await CourseModel.findById(req.params.courseId)
    const mylearningItemID=String(addToMyLearning._id)
    const userId=String(req.body.adminId)
    const client=await adminModel.findById(userId)

        client.mylearning.push(mylearningItemID)
       
        const updatePost=await adminModel.findByIdAndUpdate(userId,client,{new:true})
        res.send(updatePost)
 
    
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
  })



  
  adminrouter.get("/cart",middleware,async(req,res)=>{
    try{
    const userId=String(req.body.adminId)
    const client=await adminModel.findById(userId)
    const checkID=client.cart[1]
    await client.populate("cart")
    // res.send(client)
    


    // checkID.forEach(element => {

    //     return res.send(element)
        
    // });
    // for(let i=0;i<checkID.length;i++){
    //     return console.log(checkID[i])
    // }
    // const hello= await client.populate(userId)
    res.send(client.cart)

   
 
    
    }catch(err){
        console.log(err)
        return res.status(500).json({message:"Internal server error"})
    }
  })
  


module.exports=adminrouter