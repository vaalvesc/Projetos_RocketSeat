const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    const about = {
        avatar_url: "https://github.com/vaalvesc/Projetos_RocketSeat/blob/master/Foto_Sobre.jpg?raw=true",
        name: "Victor Alves",
        role: "Aprendiz - RocketSeat",
        description: 'Programador - Full-stack, focado em trazer o melhor ensino para iniciantes em processo de desenvolvimento no <a href="https://www.banesecard.com.br/PortalCliente/Login" target="_blank">banesecard</p>',
        links: [
            { name: "Github", url: "https://github.com/vaalvesc/"},
            { name: "Facebook", url: "https://www.facebook.com/victor.alves810/"},
            { name: "Linkedin", url: "https://www.linkedin.com/in/victor-antonio-alves-costa-a68a9059/"}
        ]
        
    }

    return res.render("about", { about })
})

server.get("/portfolio",function(req, res) {
    return res.render("portfolio", { items: videos })
})

server.listen(5000, function() {
    console.log("server is running")
})
