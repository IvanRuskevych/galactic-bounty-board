import {ExpressContextFunctionArgument} from "@as-integrations/express5";
import {prisma} from "./prisma";
import {JwtPayload, verifyAccessToken} from "./utils";

export interface Context {
    prisma: typeof prisma;
    currentUser?: JwtPayload;
    req: ExpressContextFunctionArgument["req"];
    res: ExpressContextFunctionArgument["res"];
}

export const context = async ({req, res}: ExpressContextFunctionArgument): Promise<Context> => {
    let currentUser;
    const accessToken = req.cookies?.accessToken;

    if (accessToken) {
        try {
            currentUser = verifyAccessToken(accessToken);
        } catch (err) {
            console.warn("Unable to authenticate token: ", err);
        }
    }

    return {
        prisma,
        currentUser,
        req,
        res,
    };
};
