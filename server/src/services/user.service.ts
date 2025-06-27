import { Context } from "../context";
import { userRepository } from "../repositories";
import { requireAuth, requireRoleAdmin } from "../utils";

export const userService = {
  getById: (id: string, ctx: Context) => {
    return userRepository.getById(ctx.prisma, id);
  },
  
  create: (email: string, password: string, ctx: Context) => {
    return userRepository.create(ctx.prisma, email, password);
  },
  
  getAllHunters: (ctx: Context) => {
    requireAuth(ctx)
    requireRoleAdmin(ctx)
    return userRepository.getAllHunters(ctx.prisma)
  },
};
