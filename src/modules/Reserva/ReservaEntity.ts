import { Column, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ObjectIdColumn, ObjectId, PrimaryGeneratedColumn } from "typeorm";
enum EstadoReserva {
    Pendente = "Pendente",
    Cancelado = "Cancelado",
    Ocupado = "Ocupado",
}
@Entity("Reserva")
export class Reserva {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    clientName: string;
    @Column()
    clientNumber: string;
    @Column()
    hour: string;
    @Column()
    estadoReserva: EstadoReserva;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
    constructor(
        id: number,
        clientName: string,
        clientNumber: string,
        hour: string,
        estadoReserva: EstadoReserva,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date,
    ) {
        this.id = id;
        this.clientName = clientName;
        this.clientNumber = clientNumber;
        this.hour = hour;
        this.estadoReserva = estadoReserva;
        this.createdAt = createdAt
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}