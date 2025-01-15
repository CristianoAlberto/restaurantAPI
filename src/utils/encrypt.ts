import { hash, compare } from "bcryptjs";

export class Encrypt {
  async crypt(value: string): Promise<string> {
    const crypt = await hash(value, 8)
    return crypt;
  }
  async compareHash(valueToCompare: string, crypt: string): Promise<boolean> {
    const hashCompare = await compare(valueToCompare, crypt)
    return hashCompare;
  }
}