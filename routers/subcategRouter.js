const route = require('express').Router()

const subcategController = require('../controllers/subcategController')

route.post('/create', subcategController.create)
route.get('/getall', subcategController.getall)
route.get('/getbyid/:id', subcategController.getone)
route.get('/getbyname/', subcategController.getbyname)
route.put('/update/:id', subcategController.update) //update
route.delete('/delete/:id', subcategController.delete)




module.exports = route
