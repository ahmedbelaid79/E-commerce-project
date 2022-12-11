const mongoose = require("mongoose")
const UserModel = require("./UserModel")

const clientSchema = new mongoose.Schema(
    {
        isAdmin:{
        type:Boolean,
        default:false
        },
    })
const Admin = UserModel.discriminator("Admin",clientSchema) // discriminator : to add the herited schema to the new defined schema
// Clients must be used ... waiting
// We export the Schema
module.exports= mongoose.model("Admin")
