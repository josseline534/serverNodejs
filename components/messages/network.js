const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/',(req, res)=>{
    controller.getMessage()
    .then(listMessage =>{
        response.success(req, res, `Mensajes ${JSON.stringify(listMessage)}`, 201)
    })
    .catch(e => {
        response.error(req, res, `Unexpected error`, 400, e)
    })
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
