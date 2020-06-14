
const messages = require('../components/messages/network')
const routes = server =>{
    server.use('/message', messages)
}
module.exports= routes