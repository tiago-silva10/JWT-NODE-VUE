const app = require('./src/app')
const Loaders = require('./src/config/mongooseConnection.config')

//inicializando o mongoDB
Loaders.start()

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Aplicação está executando na porta...: ', port)
})
