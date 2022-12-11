const jwt = require("jsonwebtoken")  
const JWT_SECRET= process.env.JWT_SECRET

const verifyToken =(req,res,next) =>{
    const token =req.headers.authorization //headers.authorization : we send it within the headders and with the name authorization (so it wont be displayed)
    if (token){
        jwt.verify(token,JWT_SECRET,(err,payload)=>{
            if(err){
                res.status(406).json({message:"token is not valid"})
            }
            else {
                req.user = payload                  //req to send the data back 
                next() 
            }
        })
    }else{
        res.status(406).json({message:"you are not authentificated !! please login again"})
    }
}
module.exports = verifyToken