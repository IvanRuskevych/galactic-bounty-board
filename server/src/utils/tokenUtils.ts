import dotenv from "dotenv"
import jwt from "jsonwebtoken";

dotenv.config()

export interface JwtPayload {
    id: string;
    email: string;
}

const JWT_SECRET = process.env.JWT_SECRET!;
const EXPIRES_IN = process.env.EXPIRES_IN! || "1h";

export const tokenUtils = {
    generateToken: (id: string, email: string) => {
        // @ts-ignore
        return jwt.sign({id, email}, JWT_SECRET, {expiresIn: EXPIRES_IN}) as JwtPayload
    },

    verifyToken: (token: string) => {
        return jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload
    }
}

