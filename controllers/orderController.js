const OrderModel = require ("../models/OrderModel")

module.exports = {
    create:(req,res) => {
        const order = new OrderModel(req.body)
        order.save(req.body,(err,item)=>{
            if(err)
            {
                res.status(406).json({message:"failed to create order"})
            }
            else
            {
                res.status(201).json({message:"order created successfully" ,data:item})
            }
        })
    },
    getall:(req,res) => {
        OrderModel.find({},(err,items) =>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get orders"})
            }
            else
            {
                res.status(201).json({message:"all orders" ,data:items})
            }
        })
    },
    getone:(req,res)=>{
        OrderModel.findById(req.params.id,(err,item) => {
            if(err)
            {
                res.status(406).json({message:"failed to get order"})
            }
            else
            {
                res.status(201).json({message:"order :" ,data:item})
            }

        })
    },
    getbyname:(req,res)=> {
        OrderModel.find({ref:req.params.ref},(err,items)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the order by name"})
            }
            else
            {
                res.status(201).json({message:"orders" ,data:items})
            }
        })
    },
    update:(req,res)=>{
        OrderModel.findByIdAndUpdate(req.params.id,req.params.body,{new:true},(err,item)=>{
            if(err)
            {
                res.status(406).json({message:"failed to update order"})
            }
            else
            {
                res.status(201).json({message:"order updated successfully" ,data:item})
            }
        })
    },
    delete:(req,res)=>{
        OrderModel.findByIdAndRemove(req.params.id,(err,item)=>{
            if(err)
            {
                res.status(406).json({message:"failed to delete order"})
            }
            else
            {
                res.status(201).json({message:"order deleted successfully" ,data:item})
            }
        })
    }
}