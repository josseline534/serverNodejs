
const model = require('./model')

const addMessage = message =>{
    const myMessage = new model (message)
    myMessage.save()
}
const getMessage = async (filterChat) =>{
    return new Promise((resolve, reject) => {
        let filter = {}
        if (filterChat !== null) {
            filter = { 
                chat: filterChat 
            }
        }
        model.find(filter)
          .populate("chat")
          .exec((error, populated) => {
            if (error) {
              reject(error);
              return false
            }
            resolve(populated);
          })
      })
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