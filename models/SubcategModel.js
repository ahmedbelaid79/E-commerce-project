const mongoose = require("mongoose")


const subcategSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        products:[
            {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Products"
        }],
        category:
            {
            type: mongoose.Schema.Types.ObjectId,
            ref:"category"
        }
    },
    {timestamps:true}

)
// We export the Schema
module.exports= mongoose.model("subcateg",subcategSchema) // why ??
