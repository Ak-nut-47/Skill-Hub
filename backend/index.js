const express = require("express")
const app=express()
require("dotenv").config()
const cors=require("cors")
const connection =require("./config/db")
const courseRouter=require("./routes/courseRoute")
const { userRouter } = require("./routes/user.route")
const adminrouter=require("./routes/adminRoute")
app.use(cors())
app.use(express.json())



app.use("/course",courseRouter)
app.use("/users",userRouter)
app.use("/admin",adminrouter)




app.listen(8080,async()=>{
    try{
    console.log(`Listening to port 8080`)
    await connection
    console.log("Database Connected")
    }
    catch(err){
        console.log(err)
    }
})