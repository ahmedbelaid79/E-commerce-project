const route = require('express').Router()

const productController =require("../controllers/productController")

const upload = require('../middlewares/uploadFile')

const verifyToken= require("../middlewares/verifyToken")

route.post('/create',upload.single("photo"), productController.create) // add key "photo"
route.get('/getall',verifyToken, productController.getall ) //we made a token with user id & email then we verify if the user is logged in before he can creat a product
route.get('/getbyid/:id', productController.getone) 
route.get('/getbyname/', productController.getbyname)
route.put('/update/:id',upload.single("photo"), productController.update)
route.delete('/delete/:id', productController.delete)
route.delete('/deleteProdFromSubCateg/:id', productController.deleteProdFromSubCateg)





module.exports = route
