import { ExpressContextFunctionArgument } from "@as-integrations/express5";
import { User } from "@prisma/client";
import { prisma } from "./prisma";
import { verifyAccessToken } from "./utils";

export interface Context {
  prisma: typeof prisma;
  currentUser?: User;
  req: ExpressContextFunctionArgument["req"];
  res: ExpressContextFunctionArgument["res"];
}

export const context = async ({req, res}: ExpressContextFunctionArgument): Promise<Context> => {
  let currentUser;
  const accessToken = req.cookies?.accessToken;
  
  if (accessToken) {
    try {
      const {id} = verifyAccessToken(accessToken);
      const user = await prisma.user.findUnique({where: {id}});
      if (user) currentUser = user;
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
