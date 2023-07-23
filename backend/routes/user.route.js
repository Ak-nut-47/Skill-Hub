const express = require("express");

const { BlacklistModel } = require("../model/blacklist.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const middleware=require("../middleware/auth.middleware");
const CourseModel = require("../model/courseModel");
const UserModel=require("../model/user.model")
const userRouter = express.Router();

// userRouter.get("/", async (req, res) => {
//   try {
//     const user = await UserModel.find();
//     res.send(user);
//   } catch (error) {
//     res.status(500).json({error:error.message});
//   }
// });

const passwordReq =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

userRouter.post("/register", async (req, res) => {
  const { name, email, phone, gender, password } = req.body;

  // Check for empty fields
  if (!name || !email || !phone || !gender || !password) {
    return res.status(200).json({ msg: 'Please Fill All The Required Credentials' });
  }

  // Validate the password format
  if (!passwordReq.test(password)) {
     return res.status(200).json({
      msg: "Invalid Password Format!!",
    });
  }

  try {
    const existingUserEmail = await UserModel.findOne({ email });
    if (existingUserEmail) {
      return res.status(200).json({ msg: "User Already Exists!" });
    }
    bcrypt.hash(password, 5, async (err, hash) => {
      if (err) {
        res.status(500).json({ error: err.messag });
      } else {
        const user = new UserModel({
          name,
          email,
          phone,
          gender,
          password: hash,
        });
        await user.save();
      }
    });
    res
      .status(200)
      .json({ msg: "Registration Successful", registeredUser: req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
// Check for empty fields
if ( !email || !password) {
  return res.status(200).json({ msg: 'Please Fill All The Required Credentials' });
}
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, function (err, result) {
        if (result) {
          var token = jwt.sign({ _id: user._id }, process.env.USER_SECRET, {
            expiresIn: "1d",
          });
          var refreshToken = jwt.sign({ _id: user._id }, process.env.USER_SECRET, {
            expiresIn: "7d",
          });
          res.status(200).json({
            msg: "Login Successful",
            token: token,
            refreshToken: refreshToken,
          });
        }else{
          res.status(200).json({ msg: "Password Not Match!!" });
        }
      });
    } else {
      res.status(200).json({ msg: "User Not Found!" });
    }
  } catch (err) {
    return res.status(500).json({ error: err.messag });
  }
});

userRouter.get("/logout", async (req, res) => {
  try {
    const token = req.headers.authorization?.split(" ")[1] || null;
    if (token) {
      await BlacklistModel.updateMany({}, { $push: { blacklist: [token] } });
      res.status(200).json({ msg: "Logout Successful!" });
    }
  } catch (err) {
    res.status(500).json({ error: err.messag });
  }
});

userRouter.get("/refreshtoken", (req, res) => {
  const refreshToken = req.headers.authorization?.split(" ")[1];
  const decoded = jwt.verify(refreshToken, process.env.USER_SECRET);
  if (decoded) {
    let newToken = jwt.sign({ _id: decoded._id }, process.env.USER_SECRET, {
      expiresIn: 120,
    });
    res.status(200).json({ msg: "newToken", newToken });
  } else {
    res.status(500).json({ error: err.message });
  }
});



// // ------------------------------adding into cart page from single product page---------------------------------------

userRouter.patch("/cart/:courseId",middleware,async(req,res)=>{
  try{
    // const {videos}=req.body
    // const projection={videos:0}
  const addtoCart=await CourseModel.findById(req.params.courseId)
  const cartItemID=String(addtoCart._id)
  const userId=String(req.body.userID)
  const client=await UserModel.findById(userId)
  const checkID=client.cart.includes(cartItemID)
  if(checkID){
      res.send({msg:"Course already exist in cart!"})
  }

      client.cart.push(cartItemID)
     
      const updatePost=await UserModel.findByIdAndUpdate(userId,client,{new:true})
      res.send(updatePost)

  
  }catch(err){
      console.log(err)
      return res.status(500).json({message:"Internal server error"})
  }
})


//  ---------------------------------showing all the products in cart page--------------------------------
userRouter.get("/cart",middleware,async(req,res)=>{
  try{
  
  const userId=String(req.body.userID)
  const client=await UserModel.findById(userId)
  const checkID=client.cart
  await client.populate("cart")
  res.send(client.cart)
  }catch(err){
      console.log(err)
      return res.status(500).json({message:"Internal server error"})
  }
})


// ---------------------------------------deleteing from  cart page------------------------------2clicks for delete
   
userRouter.delete("/cart/:courseid",middleware,async(req,res)=>{
  try{
  const userId=String(req.body.userID)
  const client=await UserModel.findById(userId)
   await UserModel.updateOne(
    {_id:req.body.userID}, 
    { $pull: { cart:req.params.courseid} })

  await client.populate("cart")

  res.send(client.cart)
  }catch(err){
      console.log(err)
      return res.status(500).json({message:"Internal server error"})
  }
})



// -----------------------adding into my learning after payment---------------------------


userRouter.patch("/mylearning/:courseId",middleware,async(req,res)=>{
  try{
  const addToMyLearning=await CourseModel.findById(req.params.courseId)
  const mylearningItemID=String(addToMyLearning._id)
  const userId=String(req.body.userID)
  const client=await UserModel.findById(userId)

      client.mylearning.push(mylearningItemID)
     
      const updatePost=await UserModel.findByIdAndUpdate(userId,client,{new:true})
      res.send(updatePost)

  
  }catch(err){
      console.log(err)
      return res.status(500).json({message:"Internal server error"})
  }
})


// ---------------------------------------papyment page-----------------------
userRouter.patch("/cart/payment/:courseId",middleware,async(req,res)=>{
  try{
    const {payment}=req.body
  const addToMyLearning=await CourseModel.findById(req.params.courseId)
  const mylearningItemID=String(addToMyLearning._id)
  const userId=String(req.body.userID)
  const client=await UserModel.findById(userId)

      client.payment.push(payment)
     
      const updatePost=await UserModel.findByIdAndUpdate(userId,client,{new:true})
      res.send(updatePost)

  
  }catch(err){
      console.log(err)
      return res.status(500).json({message:"Internal server error"})
  }
})



// ---------------------------------display products in my learning---------------------------------
userRouter.get("/mylearning",middleware,async(req,res)=>{
  try{
  const userId=String(req.body.adminId)
  const client=await UserModel.findById(userId)
  const checkID=client.mylearning
  await client.populate("mylearning")

  res.send(client.mylearning)
  }catch(err){
      console.log(err)
      return res.status(500).json({message:"Internal server error"})
  }
})

  
// --------------------------------delete products from my learing page


userRouter.delete("/mylearning/:courseid",middleware,async(req,res)=>{
  try{
  const userId=String(req.body.userID)
  const client=await UserModel.findById(userId)
   await UserModel.updateOne(
    {_id:req.body.userID}, 
    { $pull: { mylearning:req.params.courseid} })

  await client.populate("mylearning")

  res.send(client.mylearning)
  }catch(err){
      console.log(err)
      return res.status(500).json({message:"Internal server error"})
  }
})


userRouter.get("/mylearning/singleVideoPage/:courseId",middleware, async (req, res) => {
  const { courseId } = req.params;    
  try {
    const singleProductPage = await CourseModel.findOne({ _id: courseId });
    if (!singleProductPage) {
      return res.status(404).json({ error: "Product not found" });
    }
    res.status(200).json(singleProductPage);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




module.exports = {
  userRouter
};



