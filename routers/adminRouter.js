const route = require('express').Router()

const adminController =require("../controllers/adminController")

const upload = require('../middlewares/uploadFile')


route.post('/create',upload.single("photo"), adminController.create) // add key "photo"
route.get('/getall', adminController.getall)
route.get('/getbyid/:id', adminController.getone)
route.get('/getbyname/:firstname', adminController.getbyname)
route.put('/update/:id', adminController.update) //update
route.delete('/delete/:id', adminController.delete)




module.exports = route
