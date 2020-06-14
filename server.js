const express = require('express')
const app = express()
const body = require('body-parser')
const router = require('./network/routes')

app.use(body.json())
app.use(body.urlencoded({extended: false}))
app.use(body.text())
//app.use(router)
router(app)
app.use('/app', express.static('public'))


app.use('/',(req, res)=>{
    res.send('hola')
})
app.listen(3000)
console.log('servidor escuchando en el puerto 3000')