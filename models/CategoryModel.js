const mongoose = require("mongoose")

const categSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        subcateg:[
            {
            type: mongoose.Schema.Types.ObjectId,
            ref:"subcateg"
        }]
    },
    {timestamps:true}
)
// We export the Schema
module.exports= mongoose.model("category",categSchema)
