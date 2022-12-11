const route = require('express').Router()

const categoryController = require('../controllers/categoryController')

route.post('/create', categoryController.create)
route.get('/getall', categoryController.getall)
route.get('/getbyid/:id', categoryController.getone)
route.get('/getbyname/:ref', categoryController.getbyname)
route.put('/update/:id', categoryController.update) //update
route.delete('/delete/:id', categoryController.delete)




module.exports = route
