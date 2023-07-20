const mongoose=require("mongoose");
require("dotenv").config();

//const connection=mongoose.connect("mongodb+srv://Sankethganiga95:Sanketh95@cluster0.i4dp6vi.mongodb.net/SkillHub?retryWrites=true&w=majority")
const connection=mongoose.connect(process.env.mongoURL)


module.exports=connection