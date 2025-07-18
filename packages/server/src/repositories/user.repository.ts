import { Prisma, User } from "@prisma/client";
import { prismaClient } from "~/prisma";

export const userRepository = {
	create(input: Prisma.UserCreateInput, args?: Omit<Prisma.UserCreateArgs, "data">): Promise<User> {
		return prismaClient.user.create({ data: input, ...args });
	},

	update(
		userId: string,
		data: Prisma.UserUpdateInput,
		args?: Omit<Prisma.UserUpdateArgs, "data" | "where">,
	): Promise<User> {
		return prismaClient.user.update({
			where: { id: userId },
			data,
			...args,
		});
	},

	delete(userId: string): Promise<User> {
		return prismaClient.user.delete({ where: { id: userId } });
	},

	findById(userId: string, args?: Omit<Prisma.UserFindUniqueArgs, "where">): Promise<User> {
		return prismaClient.user.findUniqueOrThrow({
			where: { id: userId },
			...args,
		});
	},

	findByEmail(email: string, args?: Omit<Prisma.UserFindUniqueArgs, "where">): Promise<User | null> {
		return prismaClient.user.findUnique({
			where: { email },
			...args,
		});
	},

	findAll(args?: Prisma.UserFindManyArgs) {
		return prismaClient.user.findMany({ ...args });
	},
};
