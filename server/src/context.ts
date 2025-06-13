// import {ExpressContextFunctionArgument} from "@apollo/server/expressMiddleware";
import {ExpressContextFunctionArgument} from "@as-integrations/express5";
import jwt from "jsonwebtoken";
import {prisma} from "./prisma";

interface JwtPayload {
    id: string;
    email: string;
}

export interface Context {
    prisma: typeof prisma;
    currentUser?: JwtPayload;
}

export const context = async ({req}: ExpressContextFunctionArgument): Promise<Context> => {
    let currentUser;

    const authToken = req.headers.authorization;
    if (authToken && authToken.startsWith("Bearer ")) {
        const token = authToken.slice(7);
        try {
            currentUser = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
        } catch (err) {
            console.warn("Unable to authenticate token: ", err);
        }
    }

    return {
        prisma,
        currentUser,
    };
};
