import { BountyStatus, Prisma } from "@prisma/client";
import { prismaClient } from "~/prisma";

export const bountyRepository = {
	create: (input: Prisma.BountyCreateInput) =>
		prismaClient.bounty.create({
			data: input,
			include: {
				createdBy: true,
			},
		}),

	update: (bountyId: string, input: Prisma.BountyUpdateInput) =>
		prismaClient.bounty.update({ where: { id: bountyId }, data: input }),

	delete: (bountyId: string) => prismaClient.bounty.delete({ where: { id: bountyId } }),

	findById: (bountyId: string) => prismaClient.bounty.findUnique({ where: { id: bountyId } }),

	findManyWithStatus: (status: BountyStatus) =>
		prismaClient.bounty.findMany({
			where: { status },
		}),

	findManyByCreatorIdWithStatus: (userId: string, status: BountyStatus) =>
		prismaClient.bounty.findMany({
			where: {
				createdById: userId,
				status,
			},
		}),

	findManyByAcceptorId: (userId: string) =>
		prismaClient.bounty.findMany({
			where: {
				acceptedById: userId,
			},
		}),

	post: (bountyId: string) =>
		prismaClient.bounty.update({
			where: { id: bountyId },
			data: {
				status: BountyStatus.POSTED,
			},
		}),

	accept: (bountyId: string, userId: string) =>
		prismaClient.bounty.update({
			where: { id: bountyId },
			data: {
				acceptedById: userId,
				status: BountyStatus.ACCEPTED,
			},
		}),
};
