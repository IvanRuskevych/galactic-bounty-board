import {Prisma, PrismaClient} from "@prisma/client";

export const userRepository = {
    create: (prisma: PrismaClient, data: Prisma.UserCreateInput) =>
        prisma.user.create({data}),

    getById: (prisma: PrismaClient, id: string) =>
        prisma.user.findUniqueOrThrow({where: {id}}),

    getByEmail: (prisma: PrismaClient, email: string) => {
        return prisma.user.findUnique({
            where: {email},
        });
    },

    update: (prisma: PrismaClient, id: string, data: Prisma.UserUpdateInput) =>
        prisma.user.update({where: {id}, data}),

    // delete: (prisma: PrismaClient, id: string) => prisma.bounty.delete({where: {id}}),
};