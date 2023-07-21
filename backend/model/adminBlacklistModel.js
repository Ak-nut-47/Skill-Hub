const mongoose=require("mongoose")

const adminblackListSchema=mongoose.Schema({
  blacklist:{type:[String]},
})

const adminBlackListModel=mongoose.model("adminblacklist",adminblackListSchema)

module.exports=adminBlackListModel