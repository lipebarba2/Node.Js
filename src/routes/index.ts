import express, { RequestHandler } from 'express';
import produtosRouter from './produtos'
import voosRouter from './voos'
import { interferir } from '../middlewares/interferir';


const router = express.Router();

router.use(interferir);

router.use('/produtos', produtosRouter)
router.use('/voos', voosRouter)



router.get('/ping', (req, res) => {
    console.log("Executou o ping")
    res.json({ pong: true });
});





router.get('/', (req, res) => {
    let name = 'Felipe';
    let age = 37;

    res.json({ name, age });
});

export default router;
