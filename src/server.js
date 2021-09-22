const { Router } = require('express');
const express = require('express');
const route = require('./route')
const path = require('path')

const server = express();

server.set('view engine','ejs');

server.use(express.static("public"))

server.set('views',path.join(__dirname, 'views'))

//midware para pegar conteúdos de formulários
server.use(express.urlencoded({extended: true}))

server.use(route)


const PORT = 3000;

server.listen(PORT, () => {
    return console.log(`Server running at port ${PORT}`)
});

