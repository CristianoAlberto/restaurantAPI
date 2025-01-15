import { IReserva } from "../Reserva/ReservaInterface";
import { Usuario } from "./UsuarioEntity";
export interface IReturnToken<T> {
    status: number;
    message: string;
    data?: T
    token?: string
}
export interface IReturn<T> {
    status: number;
    message: string;
    data?: T
}

export interface IUsuario {
    //Virao com token
    signUp(Usuario: Usuario): Promise<IReturnToken<Usuario>>
    login(email: string, password: string): Promise<IReturnToken<Usuario>>

    //Virao sem tokenS
    updateMe(id: number, usuario: Usuario): Promise<IReturn<void>>
    findMe(id: number): Promise<IReturn<Usuario>>
}