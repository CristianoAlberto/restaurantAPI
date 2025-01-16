import { Encrypt } from "./encrypt";
import { AppDataSource } from "../db";
import { Usuario } from "../modules/Usuario/UsuarioEntity";

export const seedUser = async () => {
    const bcrypt = new Encrypt();
    const hashedPassword1 = await bcrypt.crypt("12345678");
    const hashedPassword2 = await bcrypt.crypt("12345678");


    // Obtenha o repositório para 'Usuario'
    const userRepository = AppDataSource.getRepository(Usuario);

    const existingUsers = await userRepository.find();

    if (existingUsers.length > 0) {
        console.log("A tabela de usuários já possui registros. Seed não será executado.");
        return;
    }

    // Criação de 2 usuários admin
    const adminUser1 = userRepository.create({
        name: "Admin 1",
        password: hashedPassword1,  // Senha criptografada
        email: "admin1@exemplo.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    });

    const adminUser2 = userRepository.create({
        name: "Admin 2",
        password: hashedPassword2,  // Senha criptografada
        email: "admin2@exemplo.com",
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: null,
    });

    // Salvar os usuários no banco de dados
    await userRepository.save([adminUser1, adminUser2]);
};
