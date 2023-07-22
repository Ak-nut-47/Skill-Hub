const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    phone:{type:Number,required:true},
    gender:{type:String,required:true},
    password:{type:String,required:true},
    cart:{type:[String],ref:"course",default:[]},
    mylearning:{type:[String],ref:"course",default:[]},
    payment:{type:[String],ref:"course",default:[]}
},{
    
    versionKey:false
})

module.exports=mongoose.model("user", userSchema)