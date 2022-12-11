const providerModel = require("../models/ProviderModel")

module.exports = {
    create:(req,res) => {

        req.body["image"] = req.file.filename
        
        const provider = new providerModel(req.body)
        

        provider.save(req.body,(err,item)=>{
            if(err)
            {   
                res.status(406).json({message:"failed to create provider"+err})
            }
            else
            {
               /*  subcategModel.findByIdAndUpdate(req.body.subcateg, //we add directly the provider to its subcateg by ID
                {$push:{providers:provider}},()=>{ */
                res.status(201).json({message:"provider created successfully" ,data:item})
            }
            })
    },
    getall:(req,res)=> {
        providerModel.find({},(err,items)=> //populate to show all the subcateg data (id , name , description ..)
        {
            if(err)
            {
                res.status(406).json({message:"failed to get all providers"})
            }
            else
            {
                res.status(201).json({message:"success" ,data:items})
            }
        })

    },
    getone:(req,res)=> {
        providerModel.findById(req.params.id,(err,item)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the provider"})
            }
            else
            {
                res.status(201).json({message:"provider" ,data:item})
            }
        })
    },

    getbyname:(req,res)=> {
        providerModel.find({refprovider:req.params.firstname},(err,items)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the provider by name"})
            }
            else
            {
                res.status(201).json({message:"providers" ,data:items})
            }
        })
    },

    update:(req,res)=> {
        providerModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the update the provider name"})
            }
            else
            {
                res.status(201).json({message:"provider updated " ,data:item})
            }
        })
    },
    delete:(req,res) => {
        providerModel.findByIdAndRemove(req.params.id,(err,item)=>{
            if(err)
            {
                res.status(406).json({message:"failed to delete provider"})
            }
            else
            {
                res.status(201).json({message:"provider delete successfully" ,data:item})
            }
        })
        
    }
}