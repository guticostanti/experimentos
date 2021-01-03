const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const socketIO = require('socket.io');

app.use('/', express.static(path.join(__dirname, 'public')));

const server = app.listen(3000, () => {
    console.log("running");
})

const randoms = []


const io = socketIO(server)

io.on('connection', (socket) => {

    console.log("New connection")


    socket.broadcast.emit('hello', { msg: `Chegou um novo usuário` })

})