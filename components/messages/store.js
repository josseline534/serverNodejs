//mongodb+srv://admin:admin1234@cluster0-cpoin.mongodb.net/DB-Chat?retryWrites=true&w=majority
const db = require('mongoose')
const model = require('./model')
db.Promise = global.Promise
db.connect(
    'mongodb+srv://admin:admin1234@cluster0-cpoin.mongodb.net/DB-Chat?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log('Conectado con exito')

const addMessage = message =>{
    const myMessage = new model (message)
    myMessage.save()
}
const getMessage = async () =>{
    const message = await model.find()
    return message
    
}

module.exports={
    add : addMessage,
    list : getMessage
}