const route = require('express').Router()

const clientController =require("../controllers/clientController")

const upload = require('../middlewares/uploadFile')


route.post('/create',upload.single("photo"), clientController.create) // add key "photo"
route.get('/getall', clientController.getall)
route.get('/getbyid/:id', clientController.getone)
route.get('/getbyname', clientController.getbyname)
route.put('/update/:id', clientController.update) //update
route.delete('/delete/:id', clientController.delete)




module.exports = route
