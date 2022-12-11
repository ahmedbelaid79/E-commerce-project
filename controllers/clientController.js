const clientModel = require("../models/ClientModel")
const nodemailer= require("nodemailer") // to be able to send emails to the indicated email (using mailtrap just to test in local)

var transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "34e8ef09841a0e",
      pass: "caefe35ff17d01"
    }
  });

module.exports = {
    create:(req,res) => {

        req.body["image"] = req.file.filename
        
        const client = new clientModel(req.body)
        

        client.save(req.body,(err,item)=>{
            if(err)
            {   
                res.status(406).json({message:"failed to create client"+err})
            }
            else 
            {
                //MAILTRAP ONLY ACCEPTS 50 EMAIL !!! (we just tested it one time here , so we can implement it on front)
                // to send an email to the admin when a client sings up 
                /* transport.sendMail({
                    from: "myapp@gmail.com",
                    to: item.email,
                    cc: 'hamza.allani@polytechnicien.tn',
                    subject: "Welcome " + item.firstName,
                    text: "bonjour mr ",
                    html: `<!DOCTYPE html>
                    <html>
                    <head>
                      <meta charset="utf-8">
                      <meta http-equiv="x-ua-compatible" content="ie=edge">
                      <title>Welcome Email</title>
                    </head>
                    <body>
                      <h2>Hello ${item.firstname +" "+ item.lastname}! </h2>
                      <p>We're glad to have you on board at ${item.email}. </p>
                      <p>We're glad to have you on board at it gate</p>
                    </body>
                    </html>`,
                    attachments: [{
                        filename: req.file.filename,
                        path: "./storages/" + req.file.filename,
                        cid: "test"
                    }]
                }, function(err, info) {
                    if (err) {
                        console.log("error:", err)
                    } else {
                        console.log("Email Send successufly:", info + reponse)
                    }
                }) */


               /*  subcategModel.findByIdAndUpdate(req.body.subcateg, //we add directly the client to its subcateg by ID
                {$push:{clients:client}},()=>{ */
                
                res.status(201).json({message:"client created successfully" ,data:item})
            }
            })
    },
    getall:(req,res)=> {
        clientModel.find({},(err,items) =>//populate to show all the subcateg data (id , name , description ..)
        {
            if(err)
            {
                res.status(406).json({message:"failed to get all clients"})
            }
            else
            {
                res.status(201).json({message:"success" ,data:items})
            }
        })

    },
    getone:(req,res)=> {
        clientModel.findById(req.params.id,(err,item)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the client"})
            }
            else
            {
                res.status(201).json({message:"client" ,data:item})
            }
        })
    },

    getbyname:(req,res)=> {

    let query = req.query.firstname === "" ? {} : {firstname:req.query.firstname} // so that when we do the search and its  and want to get back all the users it gives us all the users (check front)

        clientModel.find(query,(err,items)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the client by name"})
            }
            else
            {
                res.status(201).json({message:"clients" ,data:items})
            }
        })
    },

    update:(req,res)=> {
        clientModel.findByIdAndUpdate(req.params.id,req.body,{new:true},(err,item)=>
        {
            if(err)
            {
                res.status(406).json({message:"failed to get the update the client name"})
            }
            else
            {
                res.status(201).json({message:"client updated " ,data:item})
            }
        })
    },
    delete:(req,res) => {
        clientModel.findByIdAndRemove(req.params.id,(err,item)=>{
            if(err)
            {
                res.status(406).json({message:"failed to delete client"})
            }
            else
            {
                res.status(201).json({message:"client delete successfully" ,data:item})
            }
        })
        
    }
}