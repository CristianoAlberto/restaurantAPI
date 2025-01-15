import { Reserva } from "./ReservaEntity";
import { AppDataSource } from "../../db";
import { IReserva, IReturn } from "./ReservaInterface";
export class ReservaRepository implements IReserva {
    private readonly reservaRepo = AppDataSource.getRepository(Reserva);
    async create(reserva: Reserva): Promise<IReturn<Reserva>> {
        try {
            const findReserva = await this.reservaRepo.find({
                where: {
                    clientNumber: reserva.clientNumber,
                    //deletedAt: null
                }
            });
            if (findReserva) return { status: 400, message: "Ja existe uma reserva para este numero" }
            await this.reservaRepo.save(reserva);
            return { status: 201, message: "Reservado com sucesso" }
        } catch (error) {
            return { status: 500, message: "Contactar o administrador" }
        }
    }
    async update(id: number, reserva: Reserva): Promise<IReturn<Reserva>> {
        try {
            const findReserva = await this.reservaRepo.find({
                where: {
                    clientNumber: reserva.clientNumber,
                    //deletedAt: null
                }
            });
            if (!findReserva) return { status: 404, message: "Não encontrado" }
            await this.reservaRepo.save({ ...findReserva, ...reserva })
            return { status: 200, message: "Actualizado com sucesso" }
        } catch (error) {
            return { status: 500, message: "Contactar o administrador" };
        }
    }
    async findById(id: number): Promise<IReturn<Reserva>> {
        try {
            const findReserva = await this.reservaRepo.findOne({ where: { id } });
            if (!findReserva) return { status: 404, message: "Não encontrado" }
            return { status: 200, message: "Sucesso", data: findReserva }
        } catch (error) {
            return { status: 500, message: "Contactar o administrador" }
        }
    }
    async delete(id: number): Promise<IReturn<Reserva>> {
        const softDelete = await this.update(id, { deletedAt: new Date() } as Reserva)
        return softDelete
    }
    async findAll(): Promise<IReturn<Reserva[]>> {
        return { status: 200, message: "Sucesso", data: await this.reservaRepo.find() }
    }
}