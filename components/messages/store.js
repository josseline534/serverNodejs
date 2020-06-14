let listMessage = []

const addMessage = message =>{
    listMessage.push(message)
}
const getMessage = ()=>{
    
    return listMessage
    
}

module.exports={
    add : addMessage,
    list : getMessage
}