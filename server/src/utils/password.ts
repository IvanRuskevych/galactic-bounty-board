import bcrypt from "bcrypt";
import {ApiErrors} from "./ApiErrors";

export function hashPassword(password: string) {
    return bcrypt.hash(password, 10);
}

export function comparePassword(passwordReq: string, hashedPassword: string) {
    return bcrypt.compare(passwordReq, hashedPassword);
}

export async function chackValidPassword(passwordReq: string, hashedPassword: string) {
    const validPassword = await comparePassword(passwordReq, hashedPassword);
    if (!validPassword) throw ApiErrors.Unauthorized("Invalid password.");
}