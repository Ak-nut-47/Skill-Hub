const jwt=require("jsonwebtoken");
const { BlacklistModel } = require("../model/blacklist.model");
require("dotenv").config();


const middleware=async(req,res,next)=>{
    try{
        const token=req.headers.authorization?.split(" ")[1] || null;
        if(token){
            let existingToken=await BlacklistModel.find({
                blacklist:{$in:token},
            })
            if(existingToken.length > 0){
                return res.status(400).json({error:"Please Login Again!!"});
            }
            let decoded=jwt.verify(token, process.env.USER_SECRET);
            // req.body.userID=decoded.userID;
            // return next()
           
            if(decoded){
                req.body.userID=decoded._id
                req.body.user=decoded.user
                next()
            }
        }else{
            res.status(400).json({msg:"Please Login First!!"}); 
        }
    }catch(err){
         res.status(400).json({error:err.message});
    }
}

module.exports=middleware