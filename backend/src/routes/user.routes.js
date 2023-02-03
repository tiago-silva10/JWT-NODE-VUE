const { Router } = require('express')
const auth = require('../middlewares/auth')
const userController = require('../controllers/user.controllers')


const routes = Router()

// Rota responsavel por criar um user
routes.post('/register', userController.createUser)

// Rota responsavel por fazer o login do usuario
routes.post('/login', userController.loginUser)

// Rota responsavel por retornar o perfil do usuario
routes.get('/userProfile', auth, userController.returnUserProfile)

module.exports = routes