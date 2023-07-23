const express=require("express")
const courseRouter=express.Router()
const CourseModel=require("../model/courseModel")
const middleware=require("../middleware/auth.middleware")

// courseRouter.post("/add",middleware,async(req,res)=>{
//     try{
//     const course=await CourseModel.create(req.body) 
//     res.send({"msg":"Course created",course})
//     }
//     catch(err){
//         res.status(500).send(err)
//     }
// })

courseRouter.get("/",async(req,res)=>{
    try{
        const {videos}=req.body
        const projection={videos:0}
        const {search,rating,minRating,maxRating,category,pageNo,perPage,sortBy,field}=req.query
        const query={}
        if(search){
            query.title={$regex: search, $options:"i"}
        }
        // if(category){
        //     query.category={$regex:category,$options:"i"}
        // }
        if(category){
          let cat=typeof category
          console.log(cat)
      if (cat==="object") {
   
        query.category ={ $in: [...category] };
       
      
      } else if(cat==="string"){
        query.category =  category;
        console.log(query)
      }
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
       
       
    const course= await CourseModel.find(query,projection).sort({[field1]:sortOrder}).skip(pageNo > 0 ? ( ( pageNo - 1 ) * perPage ) : 0).limit(perPage)
    res.send({total:course.length,course})
   }
   catch(err){
    res.send(err)
   } 
})


// courseRouter.get("/singleProductPage/:courseId",middleware,async(req, res) => {
//     try{
//         const {videos}=req.body
//         const projection={videos:0}
//       const singleProductPage=await CourseModel.findById(req.params.courseId,projection)
//       res.send(singleProductPage)
     
//     }catch(err){
//       console.log(err)
//     }
//     });

    courseRouter.get("/singleProductPage/:courseId", async (req, res) => {
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


// courseRouter.patch("/update/:courseId",middleware,async(req,res)=>{
    
//     try{
//     // const course=await CourseModel.findById(req.params.courseId)
//     const updateCourse=await CourseModel.findByIdAndUpdate(req.params.courseId,req.body,{new:true})
//     // // console.log(course)
//     res.send(updateCourse)
   
//     }catch(err){
//         res.send({err:"err"})
//     }
// })


// courseRouter.delete("/delete/:courseId",middleware,async(req,res)=>{
    
//     try{
//     // const course=await CourseModel.findById(req.params.courseId)
//     await CourseModel.findByIdAndDelete(req.params.courseId)
//     // console.log(course)
//     res.send("course deleted")

//     }catch(err){
//         res.send({err:"err"})
//     }
// })



module.exports=courseRouter