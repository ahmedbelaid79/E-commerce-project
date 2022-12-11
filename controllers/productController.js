const productModel = require ("../models/ProductModel")
const subcategModel = require("../models/subcategModel")

module.exports = {
    create:(req,res) => {
        req.body["image"] = req.file.filename
        
        const product = new productModel(req.body)
        

        product.save(req.body,(err,item)=>{
            if(err)
            {   
                res.status(406).json({message:"failed to create product"+err})
            }
            else
            {
                subcategModel.findByIdAndUpdate(req.body.subcateg, //we add directly the product to its subcateg by ID
                {$push:{products:product}},()=>{
                res.status(201).json({message:"product created successfully" ,data:item})
                })
            }
        })
    },
    getall:(req,res)=> {
        productModel.find({}).populate("subcateg").exec((err,items)=> //populate to show all the subcateg data (id , name , description ..)
        {
            if(err)
            {
                res.status(406).json({message:"failed to get all products"})
            }
            else
            {
                res.status(201).json({message:"success" ,data:items})
            }
        })

    },
    getone:(req,res)=> {
        productModel.findById(req.params.id,(err,item)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the product"})
            }
            else
            {
                res.status(201).json({message:"product" ,data:item})
            }
        })
    },

    getbyname:(req,res)=> {

        let query = req.query.refProduct === "" ? {} : {refProduct:req.query.refProduct} // so that when we do the search and its  and want to get back all the users it gives us all the users (check front)
        
        productModel.find(query,(err,items)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the product by name"})
            }
            else
            {
                res.status(201).json({message:"products" ,data:items})
            }
        })
    },

    update:(req,res)=> {
        productModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to update the product"})
            }
            else
            {
                res.status(201).json({message:"product updated " ,data:item})
            }
        })
    },
    delete:(req,res) => {
        productModel.findByIdAndRemove(req.params.id,(err,item)=>{
            if(err)
            {
                res.status(406).json({message:"failed to delete product"})
            }
            else
            {
                res.status(201).json({message:"product delete successfully" ,data:item})
            }
        })
        
    },
    deleteProdFromSubCateg:async(req,res) => {
        
        const product = await productModel.findById({_id:req.params.id})
        await subcategModel.findByIdAndUpdate(product.subcateg, {$pull:{products:req.params.id}}).then(item=>{     // method promess (then / catch) ?.
            res.status(201).json({message:"product deleted successfully" , item})    
            }).catch(err=>{
                res.status(406).json({message:"failed to delete product",err})
            })
        },
}