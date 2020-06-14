
const messages = require('../components/messages/network')
console.log(`[messages] ${messages}`)
const routes = server =>{
    server.use('/message', messages)
}
module.exports= routes