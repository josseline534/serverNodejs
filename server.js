const express = require('express')
const app = express()
const router = express.Router()
const body = require('body-parser')
const response = require('./network/response')

app.use(body.json())
app.use(body.urlencoded({extended: false}))
app.use(body.text())
app.use(router)
router.get('/message',(req, res)=>{
    console.log(req.headers)
    res.header({
        "custom-header" : "valor personalizado"
    })
    //res.send(`Mensajes ${JSON.stringify(req.body)}` )
    response.success(req, res, 'Listar mensajes', 201)
})
router.post('/message',(req, res)=>{
    if(req.query.error == 'ok'){
        response.error(req, res, `Error al enviar Mensaje ${req.body}`, 401)
    }else{
        response.success(req, res, `Mensajes ${req.body}`, 201)
    }
})

app.use('/',(req, res)=>{
    res.send('hola')
})
app.listen(3000)
console.log('servidor escuchando en el puerto 3000')