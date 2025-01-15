declare namespace Express {
    export interface Request {
        userId: number
        email: string
        token: string
        file: string
    }
}