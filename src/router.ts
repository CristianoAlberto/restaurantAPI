import { Router, Request, Response } from 'express';
import { router as reserva } from './modules/Reserva/ReservaRouter';
import { router as mesa } from './modules/Mesa/MesaRouter';
import { router as usuario } from './modules/Usuario/UsuarioRouter';
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
router.use(`/${version}/mesa`, mesa);
router.use(`/${version}/usuario`, usuario);

export default router;