import {Context} from "../context";
import {
    MutationAcceptBountyArgs,
    MutationCreateBountyArgs,
    MutationDeleteBountyArgs,
    MutationUpdateBountyArgs,
} from "../generated/graphql";
import {bountyRepository} from "../repositories";
import {requireAuth, requireNotOwnership, requireOwnership, validateInput} from "../utils";
import {checkBountyNotAccepted, getBountyOrFail} from "../utils/bountyUtils";
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
        checkBountyNotAccepted(bounty.acceptedById);

        const data = validateInput(UpdateBountySchema, args.data);

        return bountyRepository.update(ctx.prisma, args.bountyId, data);
    },

    delete: async (args: MutationDeleteBountyArgs, ctx: Context) => {
        requireAuth(ctx);
        validateInput(ValidateIdSchema, {id: args.bountyId});

        const bounty = await getBountyOrFail(ctx, args.bountyId);

        requireOwnership(ctx.currentUser!.id, bounty.createdById);
        checkBountyNotAccepted(bounty.acceptedById);

        return bountyRepository.delete(ctx.prisma, args.bountyId);
    },

    getAvailable: (ctx: Context) =>
        bountyRepository.getAvailable(ctx.prisma),

    accept: async (
        args: MutationAcceptBountyArgs,
        ctx: Context,
    ) => {
        requireAuth(ctx);
        validateInput(ValidateIdSchema, {id: args.bountyId});
        validateInput(ValidateIdSchema, {id: ctx.currentUser?.id});

        const bounty = await getBountyOrFail(ctx, args.bountyId);

        requireNotOwnership(ctx.currentUser!.id, bounty.createdById);
        checkBountyNotAccepted(bounty.acceptedById);

        return bountyRepository.accept(ctx.prisma, args.bountyId, ctx.currentUser!.id);
    },
};