/*
collection --> multiple schema together
schema --> table(SQL)
*/

const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
    refProduct:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    price:{
        type: String,
        required: true,
    },
    stock:{
        type: String,
        required: true,
    },
    subcateg:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"subcateg"
    },
    /*   
        order:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order"
        }]
    */
    image:{
        type: String,
        required: true ,
    }
    },
    {timestamps:true}
)
// We export the Schema
module.exports= mongoose.model("Products",productSchema)
