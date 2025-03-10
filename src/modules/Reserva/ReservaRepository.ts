import { Reserva } from "./ReservaEntity";
import { AppDataSource } from "../../db";
import { IReserva, IReturn } from "./ReservaInterface";
export class ReservaRepository implements IReserva {
    private readonly reservaRepo = AppDataSource.getRepository(Reserva);
    async create(reserva: Reserva): Promise<IReturn<Reserva>> {
        try {
            const findReservas = await this.reservaRepo.find({
                where: {
                    mesa: reserva.mesa,
                },
            });

            for (const existingReserva of findReservas) {
                const timeDifference = Math.abs(
                    new Date(reserva.reservationDateTime).getTime() -
                    new Date(existingReserva.reservationDateTime).getTime()
                );
                if (timeDifference < 2 * 60 * 60 * 1000) {
                    return { status: 400, message: "Já existe uma reserva muito próxima para este horário." };
                }
            }
            const createReserva = this.reservaRepo.create(
                {
                    clientName: reserva.clientName,
                    clientNumber: reserva.clientNumber,
                    reservationDateTime: reserva.reservationDateTime,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    mesa: reserva.mesa,
                },
            )
            await this.reservaRepo.save(createReserva);

            return { status: 201, message: "Reservado com sucesso", data: createReserva }
        } catch (error) {
            return { status: 500, message: "Contactar o administrador" }
        }
    }
    async update(id: number, reserva: Reserva): Promise<IReturn<Reserva>> {
        try {
            const findReserva = await this.reservaRepo.findOne({
                where: {
                    id,
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