import { Mesa } from "./MesaEntity";
import { AppDataSource } from "../../db";
import { IMesa, IReturn } from "./MesaInterface";
export class MesaRepository implements IMesa {
    private readonly MesaRepo = AppDataSource.getRepository(Mesa);
    async create(mesa: Mesa): Promise<IReturn<Mesa>> {
        try {
            await this.MesaRepo.save(mesa);
            return { status: 201, message: "Mesa criada com sucesso" }
        } catch (error) {
            return { status: 500, message: "Contactar o administrador" }
        }
    }
    async update(id: number, mesa: Mesa): Promise<IReturn<Mesa>> {
        try {
            const findMesa = await this.MesaRepo.findOne({
                where: {
                    id: mesa.id,
                    //deletedAt: null
                }
            });
            if (!findMesa) return { status: 404, message: "Não encontrado" }
            await this.MesaRepo.save({ ...findMesa, ...Mesa })
            return { status: 200, message: "Actualizado com sucesso" }
        } catch (error) {
            return { status: 500, message: "Contactar o administrador" };
        }
    }
    async findById(id: number): Promise<IReturn<Mesa>> {
        try {
            const findMesa = await this.MesaRepo.findOne({ where: { id } });
            if (!findMesa) return { status: 404, message: "Não encontrado" }
            return { status: 200, message: "Sucesso", data: findMesa }
        } catch (error) {
            return { status: 500, message: "Contactar o administrador" }
        }
    }
    async delete(id: number): Promise<IReturn<Mesa>> {
        const softDelete = await this.update(id, { deletedAt: new Date() } as Mesa)
        return softDelete
    }
    async findAll(): Promise<IReturn<Mesa[]>> {
        return { status: 200, message: "Sucesso", data: await this.MesaRepo.find() }
    }
}