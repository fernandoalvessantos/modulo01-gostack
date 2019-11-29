const express = require('express');

const server = express();

const users = ['Fernando', 'Diego', 'Joao'];

server.get('/users/:index',(req, res) => {
    //lista de objetos vindo de params
    const { index } = req.params;
    return res.json({message :`Usuário ${users[index]}`});
})
server.listen(3000);