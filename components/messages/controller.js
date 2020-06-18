const store = require('./store')
const socket = require('../../socket').socket

const addMessage = (chat, user, message, file) => {
    return new Promise((resolve, reject) => {
      if (!user || !message || !chat) {
        console.error("[messageController] No hay chat, usuario o mensaje");
        reject("Los datos son incorrectos");
        return false;
      }
      let fileUrl=''
      if ( file)
        fileUrl = `http://localhost:3000/app/files/${file.filename}`
      const fullMessage = {
        chat,
        user,
        message,
        file: fileUrl,
        date: new Date()
      };
      store.add(fullMessage);
      socket.io.emit('message', fullMessage)
      resolve(fullMessage);
    });
  }
  
  const getMessage = (filterChat) => {
    return new Promise((resolve, reject) => {
      resolve(store.list(filterChat))
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