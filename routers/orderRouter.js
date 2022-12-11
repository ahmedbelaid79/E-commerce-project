const route = require('express').Router()

const orderController = require('../controllers/orderController')

route.post('/create', orderController.create)
route.get('/getall', orderController.getall)
route.get('/getbyid/:id', orderController.getone)
route.get('/getbyname/:ref', orderController.getbyname)
route.put('/update/:id', orderController.update) 
route.delete('/delete/:id', orderController.delete)

module.exports = route