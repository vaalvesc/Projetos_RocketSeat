const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect("/instructors")
})

routes.get('/', function(req, res) {
    return res.send("instructors/index")
})

routes.get('/', function(req, res) {
    return res.send("members")
})

module.exports = routes