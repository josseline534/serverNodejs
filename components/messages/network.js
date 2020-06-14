const express = require('express')
const router = express.Router()
const response = require('../../network/response')

router.get('/',(req, res)=>{
    console.log(req.headers)
    res.header({
        "custom-header" : "valor personalizado"
    })
    //res.send(`Mensajes ${JSON.stringify(req.body)}` )
    response.success(req, res, 'Listar mensajes', 201)
})
router.post('/',(req, res)=>{
    if(req.query.error == 'ok'){
        response.error(req, res, `Error al enviar Mensaje ${req.body}`, 401, 'Es una simulacion de error')
    }else{
        response.success(req, res, `Mensajes ${req.body}`, 201)
    }
})
module.exports=router
