const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const baseOptions = {
    discriminatorkey:'itemtype' , //the discriminator key
    collection: 'users'            //the collection
}

const userSchema = new mongoose.Schema(
    {
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        required: true,
    },
    // not working ?? discriminatorkey -> __t (we change its name to itemtype )
    },baseOptions,{timestamps:true})


// password hashing
userSchema.pre("save",function(next) {  //before we save the query we do the hash   //why the it doesnt work with (next) => ..
    if(this.password)
    {
        var salt = bcrypt.genSaltSync(10)
        this.password=bcrypt.hashSync(this.password,salt)
    }
    next() // to move forward to the next step ..??
    })
// We export the Schema
module.exports= mongoose.model("Users",userSchema)






