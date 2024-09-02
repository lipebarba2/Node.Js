import express from 'express';
import helmet from 'helmet';
import path from 'path'


const server = express();

server.use(helmet())

server.use(express.json())
server.use(express.urlencoded( { extended: true}))
server.use(express.static(path.join(__dirname, '../public')))

server.get('/ping', (req, res) => {
    res.json({ pong: true})
})

server.get('/produtos', (req, res) => {
    res.json({ produtos: []})
})

server.get('/produtos/:id', (req, res) => {
    const { id } = req.params
    res.json({ id, name: 'PlayStation', price: 5000 })
})

server.get('/voos/:from/:to', (req, res) => {
    const {from, to } = req.params
    res.json({ flight: {
        from: from.toUpperCase(), 
        to: to.toUpperCase(), 
        price: 134654
    }})
})

server.get('/', (req, res) => {
    let name = 'Felipe'
    let age = 37

    res.json({ name, age })
});

server.listen(3001, () => {
    console.log('Servidor rodando na porta http://localhost:3001');
});
