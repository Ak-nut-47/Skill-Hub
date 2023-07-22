const express=require("express")
const adminUserRouter=express.Router()
const UserModel=require("../model/user.model")
const middleware=require("../middleware/adminmiddleware")


adminUserRouter.post("/add",middleware,async(req,res)=>{
    try{
    const user=await UserModel.create(req.body) 
    res.send({"msg":"User created",user})
    }
    catch(err){
        res.status(500).send(err)
    }
})

adminUserRouter.get("/",middleware,async(req,res)=>{
    try{
        const {search,rating,minRating,maxRating,category,pageNo,perPage,sortBy,field}=req.query
        const query={}
        if(search){
            query.name={$regex: search, $options:"i"}
        }
        if(category){
            query.category={$regex:category,$options:"i"}
        }
        if(minRating && maxRating){
          query.$and=[
            {rating:{$gte:minRating}},
            {rating:{$lte:maxRating}}
          ]  
        }
        if(rating){
            query.rating=rating
        }
        let sortOrder;
        let field1=field
       
        if(sortBy==="asc"){sortOrder=1}
        else if(sortBy==="desc"){sortOrder=-1}
        
        // const toSkip=pageNo*(perPage-1)
       
       
    const course= await UserModel.find(query).sort({[field1]:sortOrder}).skip(pageNo > 0 ? ( ( pageNo - 1 ) * perPage ) : 0).limit(perPage)
    res.send({total:course.length,course})
   }
   catch(err){
    res.send(err)
   } 
})


// admincourseRouter.get("/singleProductPage/:courseId",middleware,async(req, res) => {
//     try{
//         const {videos}=req.body
//         const projection={videos:0}
//       const singleProductPage=await CourseModel.findById(req.params.courseId,projection)
//       res.send(singleProductPage)
     
//     }catch(err){
//       console.log(err)
//     }
//     });

adminUserRouter.patch("/update/:userId",middleware,async(req,res)=>{
    
    try{
    // const course=await CourseModel.findById(req.params.courseId)
    const updateCourse=await UserModel.findByIdAndUpdate(req.params.userId,req.body,{new:true})
    // // console.log(course)
    res.send(updateCourse)
   
    }catch(err){
        res.send({err:"err"})
    }
})


adminUserRouter.delete("/delete/:userId",middleware,async(req,res)=>{
    
    try{
    // const course=await CourseModel.findById(req.params.courseId)
    await UserModel.findByIdAndDelete(req.params.userId)
    // console.log(course)
    res.send("course deleted")

    }catch(err){
        res.send({err:"err"})
    }
})



module.exports=adminUserRouter