import { Context } from "~/context";
import { MutationLoginUserArgs, MutationRegisterUserArgs } from "~/graphql/generated/graphql";
import { authService } from "~/services";

export const authResolvers = {
	Mutation: {
		registerUser: (_p: unknown, args: MutationRegisterUserArgs, ctx: Context) => authService.register(args, ctx),
		loginUser: (_p: unknown, args: MutationLoginUserArgs, ctx: Context) => authService.login(args, ctx),
		logoutUser: (_p: unknown, _args: unknown, ctx: Context) => authService.logout(ctx),
		refreshAccessToken: (_p: unknown, _args: unknown, ctx: Context) => authService.refreshAccessToken(ctx),
	},
};
