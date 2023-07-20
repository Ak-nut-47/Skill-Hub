const express = require("express")
const app=express()
require("dotenv").config()
const cors=require("cors")
const connection =require("./config/db")
const courseRouter=require("./routes/courseRoute")
const { userRouter } = require("./routes/user.route")
app.use(cors())
app.use(express.json())



app.use("/course",courseRouter)
app.use("/users",userRouter)




app.listen(process.env.PORT,async()=>{
    try{
    console.log(`Listening to port ${process.env.PORT}`)
    await connection
    console.log("Database Connected")
    }
    catch(err){
        console.log(err)
    }
})