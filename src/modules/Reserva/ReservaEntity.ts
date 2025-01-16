import { Column, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ObjectIdColumn, ObjectId, PrimaryGeneratedColumn, ManyToOne, JoinColumn, Unique } from "typeorm";
import { Mesa } from "../Mesa/MesaEntity";
@Entity("Reserva")
@Unique(["mesa", "reservationDateTime"])
export class Reserva {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    clientName: string;
    @Column()
    clientNumber: string;
    @Column({ type: "timestamp" })
    reservationDateTime: Date;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date | null;

    @ManyToOne(() => Mesa, (mesa) => mesa.reservas, { eager: true })
    @JoinColumn({ name: "mesaId" })
    mesa: Mesa;

    constructor(
        id: number,
        clientName: string,
        clientNumber: string,
        reservationDateTime: Date,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date | null,
    ) {
        this.id = id;
        this.clientName = clientName;
        this.clientNumber = clientNumber;
        this.reservationDateTime = reservationDateTime;
        this.createdAt = createdAt
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}