import {Bounty as PrismaBounty, User as PrismaUser} from "@prisma/client";
import {
    MutationAcceptBountyArgs,
    MutationCreateBountyArgs,
    MutationDeleteBountyArgs,
    MutationLoginUserArgs,
    MutationRegisterUserArgs,
    MutationUpdateBountyArgs,
    Resolvers,
} from "../../generated/graphql";
import {authService, bountyService, userService} from "../../services";

export const resolvers: Resolvers = {
    Query: {
        currentUser: (_p: unknown, _args: unknown, ctx) => userService.getById(ctx.currentUser!.id, ctx),
        allAvailableBounties: (_p: unknown, _args: unknown, ctx) => bountyService.getAvailable(ctx),
    },

    Mutation: {
        registerUser: (_p: unknown, args: MutationRegisterUserArgs, ctx) => authService.register(args, ctx),
        loginUser: (_p: unknown, args: MutationLoginUserArgs, ctx) => authService.login(args, ctx),
        logout: (_p: unknown, _args: unknown, ctx) => authService.logout(ctx),
        refreshAccessToken: (_p: unknown, _args: unknown, ctx) => authService.refreshAccessToken(ctx),

        createBounty: (_p: unknown, args: MutationCreateBountyArgs, ctx) => bountyService.create(args, ctx),
        updateBounty: (_p: unknown, args: MutationUpdateBountyArgs, ctx) => bountyService.update(args, ctx),
        acceptBounty: (_p: unknown, args: MutationAcceptBountyArgs, ctx) => bountyService.accept(args, ctx),
        deleteBounty: (_p: unknown, args: MutationDeleteBountyArgs, ctx) => bountyService.delete(args, ctx),
    },

    Bounty: {
        createdBy: (parent: PrismaBounty, _args: unknown, ctx) => {
            return userService.getById(parent.createdById, ctx);
        },

        acceptedBy: (parent: PrismaBounty, _args: unknown, ctx) => {
            if (!parent.acceptedById) return null;
            return userService.getById(parent.acceptedById, ctx);
        },
    },

    User: {
        bountiesCreated: (parent: PrismaUser, _args: unknown, ctx) => {
            return ctx.prisma.bounty.findMany({where: {createdById: parent.id}});
        },
        bountiesAccepted: (parent: PrismaUser, _args: unknown, ctx) => {
            return ctx.prisma.bounty.findMany({where: {acceptedById: parent.id}});
        },
    },
};