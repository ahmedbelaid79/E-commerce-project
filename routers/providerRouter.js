const route = require('express').Router()

const providerController =require("../controllers/providerController")

const upload = require('../middlewares/uploadFile')


route.post('/create',upload.single("photo"), providerController.create) // add key "photo"
route.get('/getall', providerController.getall)
route.get('/getbyid/:id', providerController.getone)
route.get('/getbyname/:firstname', providerController.getbyname)
route.put('/update/:id', providerController.update) //update
route.delete('/delete/:id', providerController.delete)




module.exports = route
