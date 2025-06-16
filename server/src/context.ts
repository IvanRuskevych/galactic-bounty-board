import {ExpressContextFunctionArgument} from "@as-integrations/express5";
import {prisma} from "./prisma";
import {JwtPayload, tokenUtils} from "./utils";

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
            currentUser = tokenUtils.verifyToken(token);
        } catch (err) {
            console.warn("Unable to authenticate token: ", err);
        }
    }

    return {
        prisma,
        currentUser,
    };
};
