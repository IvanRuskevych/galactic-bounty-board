import {Request} from "express"
import jwt from 'jsonwebtoken';
import { prisma } from "./prisma";

interface JwtPayload {
    id: string;
    email: string;
}

export interface Context {
    req: Request;
    prisma: typeof prisma
    currentUser?: JwtPayload
}

export const context =({req}: {req: Request}): Context=>{
    let currentUser

    const authToken = req.headers.authorization;

    if (authToken && authToken.startsWith('Bearer ')) {
        const token = authToken.slice(7);

        try {
            currentUser = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;

        }catch(err){
            console.warn("Unable to authenticate token: ", err);
        }
    }

    return {req, prisma, currentUser};
}