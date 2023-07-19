const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://Sankethganiga95:Sanketh95@cluster0.i4dp6vi.mongodb.net/SkillHub?retryWrites=true&w=majority")


module.exports=connection