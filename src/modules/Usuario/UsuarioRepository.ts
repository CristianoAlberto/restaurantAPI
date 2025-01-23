import { Usuario } from "./UsuarioEntity";
import { AppDataSource } from "../../db";
import { Encrypt } from "../../utils/encrypt";
import { Token } from "../../utils/token";
import { IReturn, IUsuario } from "./UsuarioInterface";
export class UsuarioRepository implements IUsuario {
    private readonly usuarioRepo = AppDataSource.getRepository(Usuario)
    constructor(
        private encrypt: Encrypt = new Encrypt,
        private token: Token = new Token,) { }
    updateMe(): Promise<IReturn<void>> {
        throw new Error("Method not implemented.");
    }
    findMe(): Promise<IReturn<Usuario>> {
        throw new Error("Method not implemented.");
    }

    async login(email: string, password: string) {
        try {
            const user = await this.usuarioRepo.findOne({ where: { email } });
            if (!user) return { status: 401, message: 'Email/Password errada!' };
            if (! await (this.encrypt.compareHash(password, user.password))) return { status: 401, message: 'Email/Password errada!' }
            user.password = ''
            return { token: this.token.createToken(user.id.toString()), status: 200, message: "Operação realizada com sucesso", data: user }
        } catch (error) {
            return { status: 500, message: `${error}` }
        }
    }
    async signUp(data: Usuario) {
        try {
            const response = await this.usuarioRepo.findOne({ where: { email: data.email } })
            if (response) return { status: 400, message: 'Este email já esta cadastrado' }
            data.password = await this.encrypt.crypt(data.password)
            const save = this.usuarioRepo.create(data)
            await AppDataSource.manager.save(data)
            save.password = ''
            return { token: this.token.createToken(save.id.toString()), status: 200, message: "Operação realizada com sucesso", data: save }
        } catch (error) {
            return { status: 500, message: `${error}` }
        }
    }
}