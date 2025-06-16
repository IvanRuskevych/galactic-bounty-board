import {Context} from "../context";

export const userService = {
    getById: (ctx: Context, userId: string) => {
        return ctx.prisma.user.findUnique({
            where: {id: userId},
        });
    },

    getByEmail: (ctx: Context, email: string) => {
        return ctx.prisma.user.findUnique({
            where: {email},
        });
    },

    create: (ctx: Context, email: string, hashedPassword: string) => {
        return ctx.prisma.user.create({
            data: {
                email,
                password: hashedPassword,
            },
        });
    },

    getAllUsers: (ctx: Context) => {
        return ctx.prisma.user.findMany();
    }
};
