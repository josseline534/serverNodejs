//mongodb+srv://admin:admin1234@cluster0-cpoin.mongodb.net/DB-Chat?retryWrites=true&w=majority
const db = require('mongoose')

db.Promise = global.Promise
const connect = async (url) => {
    await db.connect( url,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('[BD]Conectado con exito')
}
module.exports = connect