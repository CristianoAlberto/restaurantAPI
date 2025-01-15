import { Request, Response } from "express";
import { IMesa } from "./MesaInterface";
export class MesaController {
    constructor(private service: IMesa) { }
    create = async (req: Request, res: Response) => {
        const data = await this.service.create(req.body)
        return res.status(data.status).json(data);
    }
    update = async (req: Request, res: Response) => {
        const data = await this.service.update(Number(req.params.id), req.body)
        return res.status(data.status).json(data);
    }
    findById = async (req: Request, res: Response) => {
        const data = await this.service.findById(Number(req.params.id))
        return res.status(data.status).json(data);
    }
    delete = async (req: Request, res: Response) => {
        const data = await this.service.delete(Number(req.params.id))
        return res.status(data.status).json(data);
    }
    findAll = async (req: Request, res: Response) => {
        const data = await this.service.findAll()
        return res.status(data.status).json(data);
    }
}