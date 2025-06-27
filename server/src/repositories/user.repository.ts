import { PrismaClient, UserRole } from "@prisma/client";

export const userRepository = {
  create: (prisma: PrismaClient, email: string, password: string) =>
    prisma.user.create({
      data: {email, password},
    }),
  
  getById: (prisma: PrismaClient, id: string) =>
    prisma.user.findUniqueOrThrow({where: {id}}),
  
  getByEmail: (prisma: PrismaClient, email: string) => {
    return prisma.user.findUnique({
      where: {email},
    });
  },
  
  getAllHunters: (prisma: PrismaClient) => {
    return prisma.user.findMany({where: {role: UserRole.HUNTER}});
  },
  
  // update: (prisma: PrismaClient, id: string, data: Prisma.UserUpdateInput) =>
  //     prisma.user.update({where: {id}, data}),
  
  // delete: (prisma: PrismaClient, id: string) => prisma.bounty.delete({where: {id}}),
};