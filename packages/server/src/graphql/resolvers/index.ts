import { mergeResolvers } from "@graphql-tools/merge";
import { authResolvers } from "~/graphql/resolvers/auth.resolvers";
import { bountyResolvers } from "~/graphql/resolvers/bounty.resolvers";
import { userResolvers } from "~/graphql/resolvers/user.resolvers";

export const resolvers = mergeResolvers([userResolvers, authResolvers, bountyResolvers]);

// import { Bounty as PrismaBounty, User as PrismaUser } from "@prisma/client";
// import { Context } from "~/context";
// import {
//     MutationAcceptBountyArgs,
//     MutationCreateBountyArgs,
//     MutationDeleteBountyArgs,
//     MutationLoginUserArgs,
//     MutationRegisterUserArgs,
//     MutationUpdateBountyArgs,
//     Resolvers,
// } from "~/graphql/generated/graphql";
// import { authService, bountyService, userService } from "~/services";
//
// export const resolvers: Resolvers = {
//     Query: {
//         currentUser: (_p: unknown, _args: unknown, ctx: Context) => userService.getCurrentUser(ctx),
//         allHunters: (_p: unknown, _args: unknown, ctx: Context) => userService.getAllHunters(ctx),
//         allAvailableBounties: (_p: unknown, _args: unknown, ctx: Context) => bountyService.getAvailable(ctx),
//         allCurrentUserBounties: (_p: unknown, _args: unknown, ctx: Context) =>
//             bountyService.getCurrentUserBounties(ctx),
//     },
//
//     Mutation: {
//         registerUser: (_p: unknown, args: MutationRegisterUserArgs, ctx: Context) => authService.register(args, ctx),
//         loginUser: (_p: unknown, args: MutationLoginUserArgs, ctx: Context) => authService.login(args, ctx),
//         logout: (_p: unknown, _args: unknown, ctx: Context) => authService.logout(ctx),
//         refreshAccessToken: (_p: unknown, _args: unknown, ctx: Context) => authService.refreshAccessToken(ctx),
//
//         createBounty: (_p: unknown, args: MutationCreateBountyArgs, ctx: Context) => bountyService.create(args, ctx),
//         updateBounty: (_p: unknown, args: MutationUpdateBountyArgs, ctx: Context) => bountyService.update(args, ctx),
//         acceptBounty: (_p: unknown, args: MutationAcceptBountyArgs, ctx: Context) => bountyService.accept(args, ctx),
//         postBounty: (_p: unknown, args: MutationAcceptBountyArgs, ctx: Context) => bountyService.post(args, ctx),
//         deleteBounty: (_p: unknown, args: MutationDeleteBountyArgs, ctx: Context) => bountyService.delete(args, ctx),
//     },
//
//     Bounty: {
//         createdBy: (parent: PrismaBounty, _args: unknown, ctx: Context) => {
//             return userService.getById(parent.createdById, ctx);
//         },
//
//         acceptedBy: (parent: PrismaBounty, _args: unknown, ctx: Context) => {
//             if (!parent.acceptedById) return null;
//             return userService.getById(parent.acceptedById, ctx);
//         },
//     },
//
//     User: {
//         bountiesCreated: (parent: PrismaUser, _args: unknown, ctx: Context) => {
//             return ctx.prisma.bounty.findMany({ where: { createdById: parent.id } });
//         },
//         bountiesAccepted: (parent: PrismaUser, _args: unknown, ctx: Context) => {
//             return ctx.prisma.bounty.findMany({ where: { acceptedById: parent.id } });
//         },
//     },
// };
