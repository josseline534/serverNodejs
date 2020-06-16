const express = require('express')
const app = express()
const body = require('body-parser')
const router = require('./network/routes')
const db = require('./db')
const url = 'mongodb+srv://admin:admin1234@cluster0-cpoin.mongodb.net/DB-Chat?retryWrites=true&w=majority'
db(url)
app.use(body.json())
//app.use(body.urlencoded({extended: false}))
//app.use(body.text())
//app.use(router)
router(app)
app.use('/app', express.static('public'))


app.use('/',(req, res)=>{
    res.send('hola')
})
app.listen(3000)
console.log('servidor escuchando en el puerto 3000')