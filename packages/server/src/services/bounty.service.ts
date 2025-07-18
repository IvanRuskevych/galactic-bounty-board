import { Context } from "~/context";
import {
	MutationAcceptBountyArgs,
	MutationCreateBountyArgs,
	MutationDeleteBountyArgs,
	MutationUpdateBountyArgs,
} from "~/graphql/generated/graphql";
import { bountyRepository } from "~/repositories";
import { BountyStatus } from "~/shared/const/bounty";
import {
	checkCanAcceptBounty,
	checkCanPostBounty,
	checkCanUpdateDeleteBounty,
	getBountyOrFail,
	requireAuth,
	requireNotOwnership,
	requireOwnership,
	validateInput,
} from "~/utils";
import { CreateBountySchema, UpdateBountySchema, ValidateIdSchema } from "~/validations";

export const bountyService = {
	createBounty: async (args: MutationCreateBountyArgs, ctx: Context) => {
		requireAuth(ctx);
		const input = validateInput(CreateBountySchema, args.input);

		return bountyRepository.create(
			{
				...input,
				createdBy: { connect: { id: ctx.currentUser?.id } },
			},
			{ include: { createdBy: true } },
		);
	},

	updateBounty: async (args: MutationUpdateBountyArgs, ctx: Context) => {
		const user = requireAuth(ctx);

		validateInput(ValidateIdSchema, { id: args.bountyId });

		const bounty = await getBountyOrFail(args.bountyId);

		requireOwnership(user.id, bounty.createdById);
		checkCanUpdateDeleteBounty(bounty.status);

		const input = validateInput(UpdateBountySchema, args.input);

		return bountyRepository.update(args.bountyId, input, { include: { createdBy: true } });
	},

	deleteBounty: async (args: MutationDeleteBountyArgs, ctx: Context) => {
		const user = requireAuth(ctx);

		validateInput(ValidateIdSchema, { id: args.bountyId });

		const bounty = await getBountyOrFail(args.bountyId);

		requireOwnership(user.id, bounty.createdById);
		checkCanUpdateDeleteBounty(bounty.status);

		return bountyRepository.delete(args.bountyId);
	},

	getAvailableBounties: () =>
		bountyRepository.findManyWithStatus(BountyStatus.POSTED, { include: { createdBy: true, acceptedBy: true } }),

	postBounty: async (args: { bountyId: string }, ctx: Context) => {
		const user = requireAuth(ctx);
		const bounty = await getBountyOrFail(args.bountyId);
		requireOwnership(user.id, bounty.createdById);
		checkCanPostBounty(bounty.status);

		return bountyRepository.post(args.bountyId);
	},

	acceptBounty: async (args: MutationAcceptBountyArgs, ctx: Context) => {
		requireAuth(ctx);
		validateInput(ValidateIdSchema, { id: args.bountyId });
		validateInput(ValidateIdSchema, { id: ctx.currentUser?.id });

		const bounty = await getBountyOrFail(args.bountyId);

		requireNotOwnership(ctx.currentUser!.id, bounty.createdById);
		checkCanAcceptBounty(bounty.status);

		return bountyRepository.accept(args.bountyId, ctx.currentUser!.id);
	},

	getCurrentUserBounties: async (ctx: Context) => {
		const user = requireAuth(ctx);

		const created = await bountyRepository.findManyByCreatorIdWithStatus(user.id, BountyStatus.CREATED, {
			include: { createdBy: true },
		});
		const posted = await bountyRepository.findManyByCreatorIdWithStatus(user.id, BountyStatus.POSTED, {
			include: { createdBy: true },
		});
		const accepted = await bountyRepository.findManyByAcceptorId(user.id, {
			include: { createdBy: true },
		});

		return { created, accepted, posted };
	},
};
