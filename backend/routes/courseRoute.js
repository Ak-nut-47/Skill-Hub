const express=require("express")
const courseRouter=express.Router()
const CourseModel=require("../model/courseModel")

courseRouter.post("/add",async(req,res)=>{
    try{
    const course=await CourseModel.create(req.body) 
    res.send({"msg":"Course created",course})
    }
    catch(err){
        res.status(500).send(err)
    }
})

courseRouter.get("/",async(req,res)=>{
    try{
    const course= await CourseModel.find()
    res.send(course)
   }
   catch(err){
    res.send(err)
   } 
})

courseRouter.patch("update/:courseId",async(req,res)=>{
    try{
    // const course=await CourseModel.findById(req.params.courseId)
    const updateCourse=await CourseModel.findByIdAndUpdate(req.params.courseId,req.body,{new:true})
    // console.log(course)
    res.send(updateCourse)
    }catch(err){
        res.send({err:"err"})
    }
})


courseRouter.get("delete/:courseId",async(req,res)=>{
    try{
    const course=await CourseModel.findById(req.params.courseId)
    // await CourseModel.findByIdAndDelete(req.params.courseId,req.body,{new:true})
    console.log(course)
    // res.send("course deleted")
    }catch(err){
        res.send({err:"err"})
    }
})



module.exports=courseRouter