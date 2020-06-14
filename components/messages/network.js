const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/',(req, res)=>{
    console.log(req.headers)
    res.header({
        "custom-header" : "valor personalizado"
    })
    //res.send(`Mensajes ${JSON.stringify(req.body)}` )
    response.success(req, res, 'Listar mensajes', 201)
})
router.post('/',(req, res)=>{
    controller.addMessage(req.body.user, req.body.message)
        .then(fullMessage => {
            response.success(req, res, `Mensajes ${JSON.stringify(fullMessage)}`, 201)
        })
        .catch(e => {
            response.error(req, res, `Información invalida`, 400, 'Error en el controlador')
        })
})
module.exports=router
