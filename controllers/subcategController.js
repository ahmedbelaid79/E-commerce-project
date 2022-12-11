const subcategModel = require("../models/subcategModel")
const categoryModel = require ("../models/categoryModel")

module.exports = {
    create:(req,res) => 
    {
        const subcategs = new subcategModel(req.body)
        subcategs.save(req.body,(err,item)=>{
            if(err)
            {
                res.status(406).json({message:"failed to create subcateg"})
            }
            else
            {
                categoryModel.findByIdAndUpdate(req.body.category,//we add directly the subcateg to its category by ID
                {$push:{subcateg:subcategs}},()=>{
                    res.status(201).json({message:"subcateg created successfully" ,data:item})
                })
            }
        })
    },
    getall:(req,res)=> {
        subcategModel.find({}).populate({path:"products"}).exec((err,items)=> //path:"products" cuz its an array not object
        {
            if(err)
            {
                res.status(406).json({message:"failed to get all subcateg"})
            }
            else
            {
                res.status(201).json({message:"success" ,data:items})
            }
        })

    },
    getone:(req,res)=> {
        subcategModel.findById(req.params.id,(err,item)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the subcateg"})
            }
            else
            {
                res.status(201).json({message:"subcateg" ,data:item})
            }
        })
    },

    getbyname:(req,res)=> {
        subcategModel.find({refProduct:req.params.refProduct},(err,items)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the subcateg by name"})
            }
            else
            {
                res.status(201).json({message:"subcateg" ,data:items})
            }
        })
    },

    update:(req,res)=> {
        subcategModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the update the subcateg name"})
            }
            else
            {
                res.status(201).json({message:"product subcateg " ,data:item})
            }
        })
    },
    delete:(req,res) => {
        subcategModel.findByIdAndRemove(req.params.id,(err,item)=>{
            if(err)
            {
                res.status(406).json({message:"failed to delete product"})
            }
            else
            {
                res.status(201).json({message:"subcateg deleted successfully" ,data:item})
            }
        })
        
    }
}