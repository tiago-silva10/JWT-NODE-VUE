const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

//removendo o warning do mongoose
mongoose.set("strictQuery", true)


async function startDB() {
  
  try {

    await mongoose.connect(`mongodb+srv://admin:admin@apicluster.ev5jbra.mongodb.net/?retryWrites=true&w=majority`)
    
    console.log('Conectado ao banco de dados com sucesso!')

  } catch (error) {

    console.log('Não foi possivel conectar ao banco de dados!')
  }
}

module.exports = startDB