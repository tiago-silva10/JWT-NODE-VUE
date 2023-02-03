const jwt = require('jsonwebtoken')

module.exports = (req, res) => {
    
    try {
        const token = req.headers.authorization.replace('Beares ', '')
        console.log(token)

        //depois que recebe o token, temos que decodificar ele
        const decoded = jwt.verify(token, 'secret')
        req.userData = decoded
        next()

    } catch (error) {

        return res.status(201).json({ message: 'Falha na autenticação!' })

    }
}