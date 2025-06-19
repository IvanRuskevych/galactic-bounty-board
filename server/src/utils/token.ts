import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export interface JwtPayload {
    id: string;
    email: string;
}

export function generateAccessToken(id: string) {
    return jwt.sign({id}, process.env.JWT_ACCESS_SECRET!, {expiresIn: "1d"});
}

export function generateRefreshToken(id: string) {
    return jwt.sign({id}, process.env.JWT_REFRESH_SECRET!, {expiresIn: "7d"});
}

export function verifyAccessToken(token: string): JwtPayload {
    return jwt.verify(token, process.env.JWT_ACCESS_SECRET!) as JwtPayload;
}

export function verifyRefreshToken(token: string): JwtPayload {
    return jwt.verify(token, process.env.JWT_REFRESH_SECRET!) as JwtPayload;
}

export function generateTokens(id: string) {
    return {
        accessToken: generateAccessToken(id),
        refreshToken: generateRefreshToken(id),
    };
}
