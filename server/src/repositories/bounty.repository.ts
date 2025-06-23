import {Prisma, PrismaClient} from "@prisma/client";

export const bountyRepository = {
    create: (prisma: PrismaClient, data: Prisma.BountyCreateInput) =>
        prisma.bounty.create({data}),

    getById: (prisma: PrismaClient, id: string) =>
        prisma.bounty.findUnique({where: {id}}),

    update: (prisma: PrismaClient, id: string, data: Prisma.BountyUpdateInput) =>
        prisma.bounty.update({where: {id}, data}),

    delete: (prisma: PrismaClient, id: string) => prisma.bounty.delete({where: {id}}),

    getAvailable: (prisma: PrismaClient) =>
        prisma.bounty.findMany({
            where: {
                acceptedById: {
                    equals: null,
                },
            },
        }),

    accept: (prisma: PrismaClient, bountyId: string, userId: string) =>
        prisma.bounty.update({
            where: {id: bountyId},
            data: {
                acceptedById: userId,
                status: "ACCEPTED",
            },
        }),

    post: (prisma: PrismaClient, bountyId: string) =>
        prisma.bounty.update({
            where: {id: bountyId},
            data: {
                status: "POSTED",
            },
        }),
};