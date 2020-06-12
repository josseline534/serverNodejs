const express = require('express')
const app = express()
const router = express.Router()

console.log(router)

app.use(router)
router.get('/message',(req, res)=>{
    res.send('Listar mensajes')
})
router.post('/message',(req, res)=>{
    res.send('mensaje añadido correctamente')
})

app.use('/',(req, res)=>{
    res.send('hola')
})
app.listen(3000)
console.log('servidor escuchando en el puerto 3000')