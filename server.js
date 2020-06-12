const express = require('express')
const app = express()
const router = express.Router()
const body = require('body-parser')

app.use(body.json())
app.use(body.urlencoded({extended: false}))
app.use(body.text())
app.use(router)
router.get('/message',(req, res)=>{
    console.log(req.query)
    console.log(req.body)
    //res.send(`Mensajes ${JSON.stringify(req.body)}` )
    res.send(`Mensajes ${req.body}` )
})
router.post('/message',(req, res)=>{
    res.send('mensaje añadido correctamente')
})

app.use('/',(req, res)=>{
    res.send('hola')
})
app.listen(3000)
console.log('servidor escuchando en el puerto 3000')