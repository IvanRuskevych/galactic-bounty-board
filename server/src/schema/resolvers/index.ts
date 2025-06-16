import {Bounty as PrismaBounty} from "@prisma/client";
import {Context} from "../../context";
import {User} from "../../generated/graphql";
import {authService, AuthType, bountyService, userService} from "../../services";
import {CreateBountyArgsType, UpdateBountyArgsType} from "../../types";
import {requireAuth, requireOwnership} from "../../utils";

export const resolvers = {
    Query: {
        currentUser: (_p: unknown, _args: unknown, ctx: Context) => {
            requireAuth(ctx)
            return userService.getById(ctx, ctx.currentUser!.id)
        },

        allUsers: (_p: unknown, _args: unknown, ctx: Context) => userService.getAllUsers(ctx),

        allAvailableBounties: (_p: unknown, _args: unknown, ctx: Context) => bountyService.getAllAvailable(ctx)
    },

    Mutation: {
        registerUser: (_p: unknown, args: AuthType, ctx: Context) => authService.register(ctx, args),

        loginUser: (_p: unknown, args: AuthType, ctx: Context) => authService.login(ctx, args),

        createBounty: (_p: unknown, args: CreateBountyArgsType, ctx: Context) => {
            requireAuth(ctx)
            return bountyService.create(ctx, args,)
        },

        updateBounty: async (_p: unknown, args: UpdateBountyArgsType, ctx: Context) => {
            const bounty = await bountyService.getById(ctx, args.bountyId);

            if (!bounty) {
                throw new Error('Bounty not found');
            }

            requireOwnership(ctx.currentUser!.id, bounty.createdById);

            return bountyService.updateById(ctx, args)
        },

        deleteBounty: async (_p: unknown, args: { bountyId: string }, ctx: Context) => {
            const bounty = await bountyService.getById(ctx, args.bountyId)

            if (!bounty) {
                throw new Error('Bounty not found');
            }

            await bountyService.deleteById(ctx, args.bountyId)
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