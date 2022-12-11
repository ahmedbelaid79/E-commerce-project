const mongoose = require("mongoose")
const UserModel = require("./UserModel")

const clientSchema = new mongoose.Schema(
    {
        DelivAddress:{
        type: String,
        required: true,
    },
    })
const Clients = UserModel.discriminator("Clients",clientSchema) // discriminator : to add the herited schema to the new defined schema
// Clients must be used ... waiting
// We export the Schema
module.exports= mongoose.model("Clients")
