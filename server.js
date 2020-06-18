const express = require('express')
const app = express()
const cors = require('cors')
const router = require('./network/routes')
const db = require('./db')
const server = require('http').Server(app)
const socket = require('./socket')
const url = 'mongodb+srv://admin:admin1234@cluster0-cpoin.mongodb.net/DB-Chat?retryWrites=true&w=majority'
socket.connect(server)
db(url)
app.use(cors())
router(app)
app.use(express.json())
app.use('/app', express.static('public'))


app.use('/',(req, res)=>{
    res.send('hola')
})
server.listen(3000, () => {
    console.log('servidor escuchando en el puerto 3000')
})