const startDB = require('./db.config')

class Loaders {

    start() {

        startDB()

    }
}

module.exports = new Loaders()