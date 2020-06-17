const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/:userId',(req, res)=>{
    controller.getchat(req.params.userId)
    .then(users =>{        
        response.success (req, res, `Usuarios ${JSON.stringify(users)}`, 200 )
    })
    .catch(e=>{
        response.error(req, res, `Error interno`, 500, e)
    })
})
router.post('/',(req, res)=>{
    controller.addchat(req.body.users)
    .then(infoUsers => {
        response.success(req, res,`Usuario ${infoUsers}`, 201)
    })
    .catch(e => {
        response.error(req, res, `Error interno`, 500,`{[chat] ${e}`)
    })
})
module.exports=router