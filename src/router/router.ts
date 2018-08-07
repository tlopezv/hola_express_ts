import { Router, Request, Response} from 'express';

const router = Router();

// Tiene sólo esta dirección (http://localhost:3000/) que devolverá 'Hola mundo'
router.get('/',(req: Request, res: Response)=>{
    res.send('Hola mundo');
});

export default router;