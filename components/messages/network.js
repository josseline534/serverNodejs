const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')
const multer  = require('multer')

const upload = multer(
    {   
        dest: 'public/files/' 
    }
)

router.get('/',(req, res)=>{
    const filterMessage = req.query.user || null
    controller.getMessage(filterMessage)
    .then(listMessage =>{
        response.success(req, res, `Mensajes ${JSON.stringify(listMessage)}`, 201)
    })
    .catch(e => {
        response.error(req, res, `Unexpected error`, 400, e)
    })
})
router.post('/',upload.single('file'), (req, res)=>{
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then(fullMessage => {
            response.success(req, res,`Mensajes ${JSON.stringify(fullMessage)}`, 201)
        })
        .catch(e => {
            response.error(req, res, `Información invalida`, 400, e)
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
router.delete( '/:id' , (req, res) => {
    controller.deleteMessage (req.params.id)
    .then(() => response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200))
    .catch (e => response.error(req, res, 'Error inesperado', 500, e))
})
module.exports=router
