import {Context} from "../context";
import {
    MutationAcceptBountyArgs,
    MutationCreateBountyArgs,
    MutationDeleteBountyArgs,
    MutationUpdateBountyArgs,
} from "../generated/graphql";
import {bountyRepository} from "../repositories";
import {BountyStatus} from "../shared/constants";
import {requireAuth, requireNotOwnership, requireOwnership, validateInput} from "../utils";
import {
    checkCanAcceptBounty,
    checkCanPostBounty,
    checkCanUpdateDeleteBounty,
    getBountyOrFail,
} from "../utils/bountyUtils";
import {CreateBountySchema, UpdateBountySchema, ValidateIdSchema} from "../validations";

export const bountyService = {
    create: async (
        args: MutationCreateBountyArgs,
        ctx: Context,
    ) => {
        requireAuth(ctx);
        const data = validateInput(CreateBountySchema, args.data);

        return bountyRepository.create(ctx.prisma, {
            ...data,
            createdBy: {connect: {id: ctx.currentUser!.id}},
        });
    },

    update: async (
        args: MutationUpdateBountyArgs,
        ctx: Context,
    ) => {
        requireAuth(ctx);
        validateInput(ValidateIdSchema, {id: args.bountyId});

        const bounty = await getBountyOrFail(ctx, args.bountyId);

        requireOwnership(ctx.currentUser!.id, bounty.createdById);
        checkCanUpdateDeleteBounty(bounty.status);

        const data = validateInput(UpdateBountySchema, args.data);

        return bountyRepository.update(ctx.prisma, args.bountyId, data);
    },

    delete: async (args: MutationDeleteBountyArgs, ctx: Context) => {
        requireAuth(ctx);
        validateInput(ValidateIdSchema, {id: args.bountyId});

        const bounty = await getBountyOrFail(ctx, args.bountyId);

        requireOwnership(ctx.currentUser!.id, bounty.createdById);
        checkCanUpdateDeleteBounty(bounty.status);

        return bountyRepository.delete(ctx.prisma, args.bountyId);
    },

    getAvailable: (ctx: Context) =>
        bountyRepository.getAvailable(ctx.prisma),

    post: async (args: { bountyId: string }, ctx: Context) => {
        requireAuth(ctx);
        const bounty = await getBountyOrFail(ctx, args.bountyId);
        requireOwnership(ctx.currentUser!.id, bounty.createdById);
        checkCanPostBounty(bounty.status);

        return bountyRepository.post(ctx.prisma, args.bountyId);
    },

    accept: async (
        args: MutationAcceptBountyArgs,
        ctx: Context,
    ) => {
        requireAuth(ctx);
        validateInput(ValidateIdSchema, {id: args.bountyId});
        validateInput(ValidateIdSchema, {id: ctx.currentUser?.id});

        const bounty = await getBountyOrFail(ctx, args.bountyId);

        requireNotOwnership(ctx.currentUser!.id, bounty.createdById);
        checkCanAcceptBounty(bounty.status);

        return bountyRepository.accept(ctx.prisma, args.bountyId, ctx.currentUser!.id);
    },

    getCurrentUserBounties: async (ctx: Context) => {
        requireAuth(ctx);
        const created = await bountyRepository.getByStatusAndUser(ctx.prisma, ctx.currentUser!.id, BountyStatus.CREATED);
        const posted = await bountyRepository.getByStatusAndUser(ctx.prisma, ctx.currentUser!.id, BountyStatus.POSTED);
        const accepted = await bountyRepository.getAcceptedByUser(ctx.prisma, ctx.currentUser!.id);

        return {created, accepted, posted};
    },
};
