import {Context} from "../context";
import {CreateBountyArgsType, UpdateBountyArgsType} from "../types";


export const bountyService = {
    create: (
        ctx: Context,
        args: CreateBountyArgsType
    ) =>
        ctx.prisma.bounty.create({
            data: {
                ...args,
                createdById: ctx.currentUser!.id,
            }
        }),

    getById: (ctx: Context, bountyId: string) =>
        ctx.prisma.bounty.findUnique({
            where: {id: bountyId},
        }),

    getAllAvailable: (ctx: Context) =>
        ctx.prisma.bounty.findMany({
            where: {
                acceptedById: {
                    equals: null
                }
            }
        }),

    updateById: (ctx: Context, args: UpdateBountyArgsType) => {
        const {bountyId, ...updateData} = args
        return ctx.prisma.bounty.update({
            where: {id: args.bountyId},
            data: updateData
        })
    },

    acceptById: (ctx: Context, bountyId: string, userId: string) =>
        ctx.prisma.bounty.update({
            where: {id: bountyId},
            data: {acceptedById: userId}
        })
}