const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

// ==> rotas da API:
const index = require('./routes/index')
const userRoutes = require('./routes/user.routes')

const app = express();


// to do: declarar rotas user.routes.js
//app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.json({ type: 'application/vnd.api+json' }));
//app.use(cors());
//app.use(morgan('dev'));

// ==> referenciando a rota do API declarada mais acima
app.use(index)
app.use('/api/v1', userRoutes)
// to do: icluir depois a chamada da rota 'user.routes.js'


module.exports = app;
