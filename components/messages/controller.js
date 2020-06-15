const store = require('./store')
const addMessage = (user, message)=>{
    return new Promise((resolve, reject)=>{
        const fullMessage = {
            user ,
            message ,
            date : new Date()
        }
        if(!user || !message){
            console.log(`[CONTROLLER: ERROR] datos incompletos`)
            reject('Los datos enviados son incorrectos')
        }else{
            store.add(fullMessage)
            resolve(fullMessage)
        }
    })
}
const getMessage = () =>{
    return new Promise ((resolve, reject) => {
        resolve(store.list())
    })
}
const updateMessage = (id, message) => {
    console.log(`SMS: ${message}`)
    return new Promise (async (resolve, reject) => {
        if (!id || !message)
            reject ('Datos incompletos')
        else{
            const result = await store.update(id, message)
            resolve(result)
        }
    })
}
module.exports={
    addMessage,
    getMessage,
    updateMessage
}