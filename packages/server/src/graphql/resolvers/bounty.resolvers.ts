import { Context } from "~/context";
import {
	MutationAcceptBountyArgs,
	MutationCreateBountyArgs,
	MutationDeleteBountyArgs,
	MutationPostBountyArgs,
	MutationUpdateBountyArgs,
} from "~/graphql/generated/graphql";
import { bountyService } from "~/services";

export const bountyResolvers = {
	Query: {
		getAvailableBounties: (_p: unknown, _args: unknown, _ctx: unknown) => bountyService.getAvailableBounties(),
		getCurrentUserBounties: (_p: unknown, _args: unknown, ctx: Context) => bountyService.getCurrentUserBounties(ctx),
	},

	Mutation: {
		createBounty: (_p: unknown, args: MutationCreateBountyArgs, ctx: Context) => {
			console.log("createBounty args:", args);
			return bountyService.createBounty(args, ctx);
		},

		updateBounty: (_p: unknown, args: MutationUpdateBountyArgs, ctx: Context) => {
			console.log("updateBounty args:", args);
			return bountyService.updateBounty(args, ctx);
		},

		deleteBounty: (_p: unknown, args: MutationDeleteBountyArgs, ctx: Context) => bountyService.deleteBounty(args, ctx),

		postBounty: (_p: unknown, args: MutationPostBountyArgs, ctx: Context) => bountyService.postBounty(args, ctx),

		acceptBounty: (_p: unknown, args: MutationAcceptBountyArgs, ctx: Context) => bountyService.acceptBounty(args, ctx),
	},
};
