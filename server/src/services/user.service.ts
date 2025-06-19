import {Context} from "../context";
import {userRepository} from "../repositories";
import {requireAuth} from "../utils";

export const userService = {
    getById: (id: string, ctx: Context) => {
        requireAuth(ctx);
        return userRepository.getById(ctx.prisma, id);
    },

    getByEmail: (ctx: Context, email: string) => {
        return ctx.prisma.user.findUnique({
            where: {email},
        });
    },

    create: (ctx: Context, email: string, password: string) => {
        return ctx.prisma.user.create({
            data: {
                email,
                password,
            },
        });
    },

    getAllUsers: (ctx: Context) => {
        return ctx.prisma.user.findMany();
    },
};
