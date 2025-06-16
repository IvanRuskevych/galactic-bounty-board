import {Bounty as PrismaBounty} from "@prisma/client";
import {Context} from "../../context";
import {User} from "../../generated/graphql";
import {authService, AuthType, bountyService, userService} from "../../services";
import {CreateBountyArgsType, UpdateBountyArgsType} from "../../types";
import {ApiErrors, requireAuth, requireOwnership, validateInput} from "../../utils";
import {CreateBountySchema, UpdateBountySchema, ValidateIdSchema} from "../../validations";

export const resolvers = {
    Query: {
        currentUser: (_p: unknown, _args: unknown, ctx: Context) => {
            requireAuth(ctx)
            return userService.getById(ctx, ctx.currentUser!.id)
        },

        allAvailableBounties: (_p: unknown, _args: unknown, ctx: Context) => bountyService.getAllAvailable(ctx)
    },

    Mutation: {
        registerUser: (_p: unknown, args: AuthType, ctx: Context) => authService.register(ctx, args),

        loginUser: (_p: unknown, args: AuthType, ctx: Context) => authService.login(ctx, args),

        createBounty: (_p: unknown, args: CreateBountyArgsType, ctx: Context) => {
            requireAuth(ctx)
            const validatedArgs = validateInput(CreateBountySchema, args);
            return bountyService.create(ctx, validatedArgs)
        },

        updateBounty: async (_p: unknown, args: UpdateBountyArgsType, ctx: Context) => {
            validateInput(ValidateIdSchema, {id: args.bountyId})

            const bounty = await bountyService.getById(ctx, args.bountyId);
            if (!bounty) {
                throw ApiErrors.NotFound('Bounty not found');
            }

            requireOwnership(ctx.currentUser!.id, bounty.createdById);

            validateInput(UpdateBountySchema, args)

            return bountyService.updateById(ctx, args)
        },

        acceptBounty: async (_p: unknown, args: { bountyId: string }, ctx: Context) => {
            requireAuth(ctx)
            validateInput(ValidateIdSchema, {id: args.bountyId})

            const bounty = await bountyService.getById(ctx, args.bountyId)

            if (!bounty) {
                throw ApiErrors.NotFound('Bounty not found');
            }

            if (bounty.acceptedById === ctx.currentUser!.id) {
                throw ApiErrors.Conflict('You have already accepted this bounty');
            }

            if (bounty.acceptedById) {
                throw ApiErrors.Conflict("Bounty already accepted");
            }

            if (bounty.createdById === ctx.currentUser!.id) {
                throw ApiErrors.Forbidden('You cannot accept your own bounty');
            }

            return bountyService.acceptById(ctx, args.bountyId, ctx.currentUser!.id)
        }

    },

    Bounty: {
        createdBy: (parent: PrismaBounty, _args: unknown, ctx: Context) => {
            return userService.getById(ctx, parent.createdById)
        },

        acceptedBy: (parent: PrismaBounty, _args: unknown, ctx: Context) => {
            if (!parent.acceptedById) return null;
            return userService.getById(ctx, parent.acceptedById)
        }
    },

    User: {
        bountiesCreated: (parent: User, _args: unknown, ctx: Context) => {
            return ctx.prisma.bounty.findMany({where: {createdById: parent.id}});
        },
        bountiesAccepted: (parent: User, _args: unknown, ctx: Context) => {
            return ctx.prisma.bounty.findMany({where: {acceptedById: parent.id}});
        },
    }
}