const express = require('express')
const routes = express.Router()

routes.get('/', function(req, res) {
    return res.redirect("/Instructors")
})

routes.get('/', function(req, res) {
    return res.render("Instructors")
})

routes.get('/', function(req, res) {
    return res.send("Members")
})

module.exports = routes