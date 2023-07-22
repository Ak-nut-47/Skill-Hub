const mongoose=require("mongoose")

const courseSchema=mongoose.Schema({
   title:{type:"String",required:true},
   image:{type:"String",required:true},
   videos:["String"],
   author:{type:"String",required:true},
   rating:{type:"Number",required:true},
   total_ratings:{type:"Number",required:true},
   description:{type:"String",required:true},
   price:{type:"Number",required:true},
   category:{type:"String",required:true},
   duration:{type:"String",required:true}
},{
    
   versionKey:false
})


const CourseModel=mongoose.model("course",courseSchema)

module.exports=CourseModel