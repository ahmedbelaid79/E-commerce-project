const route = require('express').Router()

const authController =require("../controllers/authController")



route.post('/login', authController.login) //Post : we dont pass email & password through URL 
route.post('/refreshtoken', authController.refreshToken) //Post : we dont pass email & password through URL 






module.exports = route
