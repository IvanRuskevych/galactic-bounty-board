import {BountyStatus, Prisma, PrismaClient} from "@prisma/client";

export const bountyRepository = {
    create: (prisma: PrismaClient, data: Prisma.BountyCreateInput) =>
        prisma.bounty.create({data}),

    getById: (prisma: PrismaClient, id: string) =>
        prisma.bounty.findUnique({where: {id}}),

    getAvailable: (prisma: PrismaClient) =>
        prisma.bounty.findMany({
            where: {
                acceptedById: {
                    equals: null,
                },
            },
        }),

    getByStatusAndUser: (prisma: PrismaClient, userId: string, status: BountyStatus) =>
        prisma.bounty.findMany({
            where: {
                createdById: userId,
                status,
            },
        }),

    getAcceptedByUser: (prisma: PrismaClient, userId: string) =>
        prisma.bounty.findMany({
            where: {
                acceptedById: userId,
            },
        }),

    update: (prisma: PrismaClient, id: string, data: Prisma.BountyUpdateInput) =>
        prisma.bounty.update({where: {id}, data}),

    accept: (prisma: PrismaClient, bountyId: string, userId: string) =>
        prisma.bounty.update({
            where: {id: bountyId},
            data: {
                acceptedById: userId,
                status: BountyStatus.ACCEPTED,
            },
        }),

    post: (prisma: PrismaClient, bountyId: string) =>
        prisma.bounty.update({
            where: {id: bountyId},
            data: {
                status: BountyStatus.POSTED,
            },
        }),

    delete: (prisma: PrismaClient, id: string) => prisma.bounty.delete({where: {id}}),
};