const adminModel = require("../models/AdminModel")

module.exports = {
    create:(req,res) => {

        req.body["image"] = req.file.filename
        
        const admin = new adminModel(req.body)
        

        admin.save(req.body,(err,item)=>{
            if(err)
            {   
                res.status(406).json({message:"failed to create admin"+err})
            }
            else
            {
               /*  subcategModel.findByIdAndUpdate(req.body.subcateg, //we add directly the admin to its subcateg by ID
                {$push:{admins:admin}},()=>{ */
                res.status(201).json({message:"admin created successfully" ,data:item})
            }
            })
    },
    getall:(req,res)=> {
        adminModel.find({},(err,items) =>//populate to show all the subcateg data (id , name , description ..)
        {
            if(err)
            {
                res.status(406).json({message:"failed to get all admins"})
            }
            else
            {
                res.status(201).json({message:"success" ,data:items})
            }
        })

    },
    getone:(req,res)=> {
        adminModel.findById(req.params.id,(err,item)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the admin"})
            }
            else
            {
                res.status(201).json({message:"admin" ,data:item})
            }
        })
    },

    getbyname:(req,res)=> {
        adminModel.find({firstname:req.params.firstname},(err,items)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the admin by name"})
            }
            else
            {
                res.status(201).json({message:"admins" ,data:items})
            }
        })
    },

    update:(req,res)=> {
        adminModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the update the admin name"})
            }
            else
            {
                res.status(201).json({message:"admin updated " ,data:item})
            }
        })
    },
    delete:(req,res) => {
        adminModel.findByIdAndRemove(req.params.id,(err,item)=>{
            if(err)
            {
                res.status(406).json({message:"failed to delete admin"})
            }
            else
            {
                res.status(201).json({message:"admin delete successfully" ,data:item})
            }
        })
        
    }
}