const mongoose=require("mongoose")

const adminSchema=mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    password:{type:String,required:true},
},{
    
    versionKey:false
})
module.exports=mongoose.model("admin",adminSchema)