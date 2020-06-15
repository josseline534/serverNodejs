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
            response.success(req, res,`Mensajes ${JSON.stringify(fullMessage)}`, 201)
        })
        .catch(e => {
            response.error(req, res, `Información invalida`, 400, 'Error en el controlador')
        })
})
router.patch('/:id', (req, res) => {
    console.log(`ID: ${req.params.id}`)
    console.log(`SMS: ${req.body.message}`)
    controller.updateMessage(req.params.id, req.body.message)
    .then(infoMessage => {
        response.success(req, res, `Mensaje Actualizado ${JSON.stringify(infoMessage)}`, 200)
    })
    .catch(e => {
        response.error(req, res, `Error inesperado`, 500, e)
    })
})
module.exports=router
