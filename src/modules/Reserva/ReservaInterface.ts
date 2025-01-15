import { Reserva } from "./ReservaEntity";

export interface IReturn<T> {
    status: number;
    message: string;
    data?: T
}
export interface IReserva {
    create(reserva: Reserva): Promise<IReturn<Reserva>>;
    update(id: number, reserva: Reserva): Promise<IReturn<Reserva>>;
    findById(id: number): Promise<IReturn<Reserva>>;
    delete(id: number): Promise<IReturn<Reserva>>;
    findAll(): Promise<IReturn<Reserva[]>>;
}