import { NextFunction, Request, Response } from "express";
import { Token } from "../utils/token";
import { AppDataSource } from "../db";
import { Usuario } from "../modules/Usuario/UsuarioEntity";
interface IToken {
    value: number
}
export const auth_validate = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1] || ''

        const tokenVerify = new Token()
        if (!tokenVerify.verifyToken(token))
            return res.status(401).json({ message: 'Sem autenticação', status: 401 })
        const { value } = tokenVerify.decryptoToken(token) as IToken
        const userFind = await AppDataSource.getRepository(Usuario).findOne({
            where: { id: value }
        })
        if (userFind) {
            req.userId = value
            return next()
        }
        return res.status(401).json({ message: 'Sem autenticação', status: 401 })

    } catch (error) {
        return res.status(401).json({ message: 'Sem autenticação', status: 401 })
    }
}