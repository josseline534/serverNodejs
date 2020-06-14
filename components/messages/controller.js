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
module.exports={
    addMessage,
    getMessage
}