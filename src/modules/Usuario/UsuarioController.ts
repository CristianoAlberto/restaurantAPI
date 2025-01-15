import { Request, Response } from "express";
import { IUsuario } from "./UsuarioInterface";
export class UsuarioController {
    constructor(private service: IUsuario) { }
    //Virao com token
    signUp = async (req: Request, res: Response) => {
        const data = await this.service.signUp(req.body)
        return res.status(data.status).json(data)
    }
    login = async (req: Request, res: Response) => {
        const data = await this.service.login(req.body.email, req.body.password);
        return res.status(data.status).json(data);
    }

    //Virao sem tokenS
    updateMe = async (req: Request, res: Response) => {
        const data = await this.service.updateMe(Number(req.params.id), req.body);
        return res.status(data.status).json(data);
    }
    findMe = async (req: Request, res: Response) => {
        const data = await this.service.findMe(Number(req.params.id));
        return res.status(data.status).json(data);
    }
}