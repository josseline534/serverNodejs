const express = require("express")
const router = express.Router()
const controller = require("./controller")
const response = require("../../network/response")

router.get("/", (req, res) => {
    controller.listUser()
    .then(users => {
    response.success(req, res, `Usuario ${JSON.stringify(users)}`, 200);
    })
    .catch(err => {
    response.error(req, res, "Internal error", 500, err)
    })
  })
router.post("/", (req, res) => {
    console.log(req.body.name)
    controller.addUser(req.body.name)
    .then(data => {
        response.success(req, res, `Usuario ${JSON.stringify(data)}`, 201);
    })
    .catch(e => {
        response.error(req,res,"Internal error",500,e)
    })
})
module.exports = router