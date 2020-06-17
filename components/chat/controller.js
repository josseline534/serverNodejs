const store = require('./store')
const addchat = (users)=>{
    console.log(users)
    if (!users || !Array.isArray(users)){
        return Promise.reject('Lista de usuario invalida')
    }
    const chat = {
        users
    }
    return store.add(chat)
    
}
const getchat = (userId) =>{
    return store.list(userId)
}

module.exports={
    addchat,
    getchat
}