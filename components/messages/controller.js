const addMessage = (user, message)=>{
    return new Promise((resolve, reject)=>{
        const fullMessage = {
            user ,
            message ,
            date : new Date()
        }
        console.log(fullMessage)
        if(!user || !message){
            console.log(`[CONTROLLER: ERROR] datos incompletos`)
            reject('Los datos enviados son incorrectos')
        }else{
            resolve(fullMessage)
        }
    })
}
module.exports={
    addMessage
}