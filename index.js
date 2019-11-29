const express = require('express');

const server = express();

server.use(express.json());

const users = ['Fernando', 'Robson', 'Joao'];

server.get('/users',(req, res) => {
    return res.json(users);
})

server.get('/users/:index',(req, res) => {
    //lista de objetos vindo de params
    const { index } = req.params;
    return res.json(users[index]);
})

server.put('/users/:index',(req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    users[index] = name;
    return res.json(users);
});

server.delete('/users/:index',(req, res) => {
    const { index } = req.params;

    users.splice(index, 1);
    return res.send();
});



server.listen(3000);