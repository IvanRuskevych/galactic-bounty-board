import { Prisma, User } from "@prisma/client";
import { prismaClient } from "~/prisma";

export const userRepository = {
	create(data: Prisma.UserCreateInput, args?: Omit<Prisma.UserCreateArgs, "data">): Promise<User> {
		return prismaClient.user.create({ data, ...args });
	},

	update(
		userId: string,
		data: Prisma.UserUpdateInput,
		args?: Omit<Prisma.UserUpdateArgs, "data" | "where">,
	): Promise<User> {
		return prismaClient.user.update({ where: { id: userId }, data, ...args });
	},

	delete(userId: string): Promise<User> {
		return prismaClient.user.delete({ where: { id: userId } });
	},

	findById(userId: string, args?: Omit<Prisma.UserFindUniqueArgs, "where">): Promise<User> {
		return prismaClient.user.findUniqueOrThrow({ where: { id: userId }, ...args });
	},

	findByEmail(email: string, args?: Omit<Prisma.UserFindUniqueArgs, "where">) {
		return prismaClient.user.findUnique({ where: { email: email }, ...args });
	},

	findAll(args?: Prisma.UserFindManyArgs) {
		return prismaClient.user.findMany({ ...args });
	},
};
