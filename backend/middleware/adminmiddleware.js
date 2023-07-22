const jwt=require("jsonwebtoken")
const adminBlackListModel=require("../model/adminBlacklistModel")
const middleware=async(req,res,next)=>{
    try{
        const token=req.headers.authorization?.split(" ")[1]
        if(!token){
            res.status(401).send("Token not provided")
        }
        if(token){
            let existingToken=await adminBlackListModel.find({
                blacklist:{$in:token},
            })
            if(existingToken.length > 0){
                return res.status(400).json({error:"Please Login Again!!"});
            }
            const decoded=jwt.verify(token, process.env.ADMIN_SECRET);
            if(decoded){
                req.body.adminId=decoded.adminId
                req.body.username=decoded.username
                next()
            }
        }else{
            res.status(400).json({msg:"Please Login First!!"}); 
        }

    }catch(err){
        console.log(err)
    }
}

module.exports=middleware