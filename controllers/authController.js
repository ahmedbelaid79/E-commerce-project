const userModel = require ("../models/UserModel")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")    //using jsonwebtoken pack to manage tokens // refrech token , just to make the server send new token , after the main token is expired

const JWT_SECRET= process.env.JWT_SECRET
const RT_SECRET= process.env.RT_SECRET

// generate accesstoken
let refreshTokens = [] // array to stock the refreshTokens sent // he will stock only one token , cuz it will get deleted and replaced with the new one each time

const generateAccessToken = (user) => {
    return jwt.sign({id:user._id,email:user.email},JWT_SECRET,{expiresIn:"30m"}) //{id:user._id,email:user.email} : data | JWT_SECRET : secretkey | {expiresIn:"30m"} : expiration time
}
const generateRefreshToken = (user) => {
    return jwt.sign({id:user._id,email:user.email},RT_SECRET,{expiresIn:"1h"}) //{id:user._id,email:user.email} : data | JWT_SECRET : secretkey | {expiresIn:"30m"} : expiration time


}

module.exports ={
    
login:async(req,res)=> { //async fi west el fct el kbira , to force the not parallel execution
    const user = await userModel.findOne({email:req.body.email}) //req.body.email : email written in the form // await to force the compiler to wait untill he gets the function (findOne) result and then move to the next line
    if(!user){
        res.status(406).json({message:"Email not found"})
    }
    else{
        const validPassword = await bcrypt.compare(req.body.password, user.password)  //req.body.password : password written in the form
    if(validPassword){
        const accessToken = generateAccessToken(user)
        const refreshToken = generateRefreshToken(user)
        refreshTokens.push(refreshToken)
        res.status(200).json({data:user,accessToken,refreshToken})
    }
    else{
        res.status(403).json({message:"Incorrect password"})  // form validation if err === 403 .... (and email if err ===406) login.jsx
    }
}
},
refreshToken:(req,res)=> {
    const refreshToken = req.body.token // we could've passed it in the headerss aswell , for more security +
    if (!refreshToken){
     return res.status(401).json("you are not authentificated")
    }
        
    if (!refreshTokens.includes(refreshToken) ) { 
        return res.status(401).json("refreshTkoen is invalid") 
    }
    jwt.verify(refreshToken,RT_SECRET,(err,user)=>{
        err && console.log(err) //&& : return

        refreshTokens = refreshTokens.filter((token) => token !== refreshToken)  //token need to be !== refreshToken so it get deleted   // !== COMPARE AND DELETE IF ITS EQUAL +

        const newAccessToken = generateAccessToken(user)
        const newRefreshToken = generateRefreshToken(user)

        refreshTokens.push(newRefreshToken) // we push the new value to the table

        return res.status(200).json({accessToken:newAccessToken,refreshToken:newRefreshToken}) // accessToken:newAccessToken we name the newRefreshToken value to "accessToken" (display) 
    })
}

}