const User = require('../models/user.model')

// Método responsável por criar um usuario
exports.createUser = async (req, res) => {
    
    try {

        // => Antes vamos fazer uma verificação se o usuário já possui algum e-mail já cadastrado:
        const isUser = await User.find({ email: req.body.email })
        console.log(isUser)
        if (isUser.length >= 1) { 
            return res.status(409).json({ message: "Atenção! Este e-mail já possui registro!" })
    }

        const newUser = await User.create(req.body)
        const token = await newUser.generateAuthToken()

        return res.status(201).json({ message: "Usuário(a) criado(a) com sucesso!", newUser, token })

    } catch (error) {

        res.status(400).json({ message: "erro ao criar o usuario" })
    }
}

// Método responsável por realizar um novo login
exports.loginUser = async (req, res) => {
    
    try {

        const email = req.body.email
        const password = req.body.password
        const user = await User.findByCredentials(email, password)

        if (!user) {
            
            return res.status(401).json({ message: 'Erro ao Logar! Verifique as suas credenciais!' })
        }

        const token = await user.generateAuthToken()
        return res.status(201),json({ message: 'Usuario logado com sucesso', user, token })

    } catch (error) {

        res.status(400).json({ error })
    
    }
}

exports.returnUserProfile = async (req, res) => {

    await res.json(req.userData)
    
}