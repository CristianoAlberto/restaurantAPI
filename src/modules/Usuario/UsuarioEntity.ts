import { Column, Entity, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, ObjectIdColumn, ObjectId } from "typeorm";
@Entity("Usuario")
export class usuario {
    @ObjectIdColumn()
    id: ObjectId;
    @Column()
    name: string;
    @Column()
    password: string;
    @CreateDateColumn()
    createdAt: Date;
    @UpdateDateColumn()
    updatedAt: Date;
    @DeleteDateColumn()
    deletedAt: Date;
    constructor(
        id: ObjectId,
        name: string,
        password: string,
        createdAt: Date,
        updatedAt: Date,
        deletedAt: Date,
    ) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.createdAt = createdAt
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}