const socketIO = require('socket.io');
const socket = {};

const connect = (server) => {
  socket.io = socketIO(server);
  console.log('conectado websocket');
  
}

module.exports = {
  connect,
  socket
}