const express = require('express')
const routes = express.Router()

//rota teste
routes.get('/api/v1', (req, res) => {
    res.status(200).send({
      success: true,
      message: 'Seja bem vindo(a) a API Node.js + MongoDB',
      version: '1.0.0',
    })
  })

  module.exports = routes;