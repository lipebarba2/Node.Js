import express from 'express';
import helmet from 'helmet';
import path from 'path'
import router from './routes';


const server = express();

server.use(helmet())

server.use(express.json())
server.use(express.urlencoded( { extended: true}))
server.use(express.static(path.join(__dirname, '../public')))



server.use('/', router)

server.listen(3001, () => {
    console.log('Servidor rodando na porta http://localhost:3001');
});
