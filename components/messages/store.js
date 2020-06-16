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
const getMessage = async (filterUser) =>{
    let filter={}
    
    if(filterUser != null){
        filter={
            user:filterUser
        }
    }
    const message = await model.find(filter)
    return message
}
const updateMessage = async (id, message) => {
    const foundMessage = await model.findOne({
        _id:id
    })
    foundMessage.message= message
    const newMessage = await foundMessage.save()
    return newMessage
}
const deleteMessage = id => {
    return model.deleteOne ({
        _id : id
    })
}
module.exports={
    add : addMessage,
    list : getMessage,
    update : updateMessage,
    delete : deleteMessage
}