const categoryModel = require ("../models/categoryModel")

module.exports = {
    create:(req,res) => {
        const product = new categoryModel(req.body) //body : fi west el requette //header : (tokens) //params :  ??
        product.save(req.body,(err,item)=>{
            if(err)
            {
                res.status(406).json({message:"failed to create category"})
            }
            else
            {
                res.status(201).json({message:"category created successfully" ,data:item})
            }
        })
    },
    getall:(req,res)=> {
        categoryModel.find({},(err,items)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get all categorys"})
            }
            else
            {
                res.status(201).json({message:"success" ,data:items})
            }
        })

    },
    getone:(req,res)=> {
        categoryModel.findById(req.params.id,(err,item)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the category"})
            }
            else
            {
                res.status(201).json({message:"category" ,data:item})
            }
        })
    },

    getbyname:(req,res)=> {
        categoryModel.find({name:req.params.name},(err,items)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the category by name"})
            }
            else
            {
                res.status(201).json({message:"categorys" ,data:items})
            }
        })
    },

    update:(req,res)=> {
        categoryModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the update the category name"})
            }
            else
            {
                res.status(201).json({message:"category updated " ,data:item})
            }
        })
    },
    delete:(req,res) => {
        categoryModel.findByIdAndRemove(req.params.id,(err,item)=>{
            if(err)
            {
                res.status(406).json({message:"failed to delete category"})
            }
            else
            {
                res.status(201).json({message:"category delete successfully" ,data:item})
            }
        })
        
    }
}