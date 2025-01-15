import { Mesa } from "./MesaEntity";

export interface IReturn<T> {
    status: number;
    message: string;
    data?: T
}
export interface IMesa {
    create(mesa: Mesa): Promise<IReturn<Mesa>>;
    update(id: number, reserva: Mesa): Promise<IReturn<Mesa>>;
    findById(id: number): Promise<IReturn<Mesa>>;
    delete(id: number): Promise<IReturn<Mesa>>;
    findAll(): Promise<IReturn<Mesa[]>>;
}