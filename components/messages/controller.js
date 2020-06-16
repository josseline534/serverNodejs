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
const getMessage = (filterUser) =>{
    return new Promise ((resolve, reject) => {
        resolve(store.list(filterUser))
    })
}
const updateMessage = (id, message) => {
    return new Promise (async (resolve, reject) => {
        if (!id || !message)
            reject ('Datos incompletos')
        else{
            const result = await store.update(id, message)
            resolve(result)
        }
    })
}
const deleteMessage = id => {
    return new Promise ((resolve, reject) => {
        if (!id)
            reject('Datos incompletos')
        else{
            store.delete( id )
            .then(() => resolve ())
            .catch ( e => reject (e))
        }
    })
}
module.exports={
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}