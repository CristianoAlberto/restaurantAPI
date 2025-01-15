import { Router, Request, Response } from 'express';
import { router as reserva } from './modules/Reserva/ReservaRouter';
const router = Router();
const version = 'api/v1'
//import { router as url } from './modules/url/url.router';

// Rota padrão
router.get(`/${version}/`, (req: Request, res: Response) => {
    return res.status(200).json({
        message: 'success',
    });
});

// Usando as rotas
router.use(`/${version}/reserva`, reserva);

export default router;