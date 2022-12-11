const mongoose = require("mongoose")
const UserModel = require("./UserModel")

const providerSchema = new mongoose.Schema(
    {
        company:{
            type: String,
            required: true,
        },
    }
)
const Providers = UserModel.discriminator("Providers",providerSchema)
// We export the Schema
module.exports= mongoose.model("Providers")
