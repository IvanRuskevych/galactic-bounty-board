import { ExpressContextFunctionArgument } from "@as-integrations/express5";
import { User } from "@prisma/client";
import { prismaClient } from "~/prisma";
import { verifyAccessToken } from "~/utils";

export interface Context {
	prisma: typeof prismaClient;
	currentUser?: User;
	req: ExpressContextFunctionArgument["req"];
	res: ExpressContextFunctionArgument["res"];
}

export const context = async ({ req, res }: ExpressContextFunctionArgument): Promise<Context> => {
	let currentUser;
	const accessToken = req.cookies?.accessToken;

	if (accessToken) {
		try {
			const { id } = verifyAccessToken(accessToken);
			const user = await prismaClient.user.findUnique({ where: { id } });
			if (user) currentUser = user;
		} catch (err) {
			console.error("Unable to authenticate token: ", err);
		}
	}

	return {
		prisma: prismaClient,
		currentUser,
		req,
		res,
	};
};
