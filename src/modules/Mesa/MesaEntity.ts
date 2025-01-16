import { Column, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Reserva } from "../Reserva/ReservaEntity";
@Entity("Mesa")
export class Mesa {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    numero: number;
    @Column()
    capacidade: number;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date | null;

    @OneToMany(() => Reserva, (reserva) => reserva.mesa)
    reservas: Reserva[];

    constructor(
        id: number,
        numero: number,
        capacidade: number,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date | null,
    ) {
        this.id = id;
        this.numero = numero;
        this.capacidade = capacidade;
        this.createdAt = createdAt
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}