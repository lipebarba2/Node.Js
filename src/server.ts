import express from 'express';
const server = express();

server.get('/', (req, res) => {
    res.send('Olá mundo');
});

server.listen(3001, () => {
    console.log('Servidor rodando na porta http://localhost:3001');
});
