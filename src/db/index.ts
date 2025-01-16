import { DataSource } from "typeorm";
import { Reserva } from "../modules/Reserva/ReservaEntity";
import { Mesa } from "../modules/Mesa/MesaEntity";
import { Usuario } from "../modules/Usuario/UsuarioEntity";

export const AppDataSource = new DataSource({
    type: "mysql", // Define o tipo de banco como MySQL
    host: process.env.DB_HOST, // Host do banco de dados
    port: Number(process.env.DB_PORT), // Porta do banco
    username: process.env.DB_USER, // Usuário do banco
    password: process.env.DB_PASS, // Senha do banco
    database: process.env.MYSQL_DB, // Nome do banco de dados
    synchronize: false, // Sincroniza entidades com o banco (ideal desativar em produção)
    logging: true, // Ativa logs (ideal para desenvolvimento)
    entities: [Reserva, Mesa, Usuario], // Entidades que serão usadas
});
