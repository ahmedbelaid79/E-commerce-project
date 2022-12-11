const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema(
    {
    ref:{
        type: String,
        required: true,
        unique:true // not working ??
    },
    priceTotal:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        default: "Pending.."
    },
    products:[
        {
        type: mongoose.Schema.Types.ObjectId,
        ref:"products"
    }]

    },
    {timestamps:true}
)
// We export the Schema
module.exports= mongoose.model("order",orderSchema)
