import { Context } from "~/context";
import { userService } from "~/services";

export const userResolvers = {
	Query: {
		getCurrentUser: (_p: unknown, _args: unknown, ctx: Context) => userService.getCurrentUser(ctx),
		getAllHuntersWithAcceptedBounties: (_p: unknown, _args: unknown, ctx: Context) =>
			userService.getAllHuntersWithAcceptedBounties(ctx),
	},
};
