import { Column, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ObjectIdColumn, ObjectId, PrimaryGeneratedColumn } from "typeorm";

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
    deletedAt: Date;
    constructor(
        id: number,
        numero: number,
        capacidade: number,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date,
    ) {
        this.id = id;
        this.numero = numero;
        this.capacidade = capacidade;
        this.createdAt = createdAt
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}