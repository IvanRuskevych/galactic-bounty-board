import { Bounty, BountyStatus, Prisma } from "@prisma/client";
import { prismaClient } from "~/prisma";

export const bountyRepository = {
	create(input: Prisma.BountyCreateInput, args?: Omit<Prisma.BountyCreateArgs, "data">): Promise<Bounty> {
		return prismaClient.bounty.create({
			data: input,
			...args,
		});
	},

	update(
		bountyId: string,
		input: Prisma.BountyUpdateInput,
		args?: Omit<Prisma.BountyUpdateArgs, "where" | "data">,
	): Promise<Bounty> {
		return prismaClient.bounty.update({
			where: { id: bountyId },
			data: input,
			...args,
		});
	},

	delete(bountyId: string) {
		return prismaClient.bounty.delete({ where: { id: bountyId } });
	},

	findById(bountyId: string, args?: Omit<Prisma.BountyFindUniqueArgs, "where">): Promise<Bounty> {
		return prismaClient.bounty.findUniqueOrThrow({
			where: { id: bountyId },
			...args,
		});
	},

	findManyWithStatus(status: BountyStatus, args?: Omit<Prisma.BountyFindUniqueArgs, "where">): Promise<Bounty[]> {
		return prismaClient.bounty.findMany({
			where: { status },
			...args,
		});
	},

	findManyByCreatorIdWithStatus(
		userId: string,
		status: BountyStatus,
		args?: Omit<Prisma.BountyFindManyArgs, "where">,
	): Promise<Bounty[]> {
		return prismaClient.bounty.findMany({
			where: {
				createdById: userId,
				status,
			},
			...args,
		});
	},

	findManyByAcceptorId(userId: string, args?: Omit<Prisma.BountyFindManyArgs, "where">): Promise<Bounty[]> {
		return prismaClient.bounty.findMany({
			where: {
				acceptedById: userId,
			},
			...args,
		});
	},

	post(bountyId: string, args?: Omit<Prisma.BountyUpdateArgs, "where">): Promise<Bounty> {
		return prismaClient.bounty.update({
			where: { id: bountyId },
			data: {
				status: BountyStatus.POSTED,
			},
			...args,
		});
	},

	accept(bountyId: string, userId: string, args?: Omit<Prisma.BountyUpdateArgs, "where" | "data">): Promise<Bounty> {
		return prismaClient.bounty.update({
			where: { id: bountyId },
			data: {
				acceptedById: userId,
				status: BountyStatus.ACCEPTED,
			},
			...args,
		});
	},
};
