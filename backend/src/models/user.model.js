const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId

// metodo para criar um usuario
const userSchema = new Schema ({
    id: ObjectId,
    name: String,
    email: String,
    password: String,
    tokens: [
        {
            token: String
        },
    ],
}, {
    timestamps: true,
    collection: 'users',
})

// ==> Esse método irá fazer o 'hash' da senha antes de salvar o modelo da classe 'User'
userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('password')) {
      user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})


// ==> Esse método irá criar (gerar) uma autenticação auth para o 'User'
userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id, name: user.name, email: user.email }, 'secret')
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}


userSchema.statics.findByCredentials = async (email, password) => {
    
    const user = await User.findOne({ email })
    console.log(user)
    
    // validação se existe email 
    if (!user) {

        console.log('E-mail invalido')

    }

    const isPasswordMatch = await bcrypt.compare(password, user.password)
    
    if (!isPasswordMatch) {

        console.log('Senha incorreta!')

    }

    return user
}


const User = mongoose.model('users', userSchema)

module.exports = User
