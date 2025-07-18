import { Prisma } from "@prisma/client";

export const MAX_RECORDS_LIMIT = 100;
export const DEFAULT_ORDER_BY: Prisma.UserOrderByWithRelationInput = {
	email: "desc",
};

export function normalizeUserFindArgs<T extends { take?: number; orderBy?: unknown }>(
	args: T,
	defaultOrderBy = DEFAULT_ORDER_BY,
	maxLimit = MAX_RECORDS_LIMIT,
): T {
	if (!args.take || args.take > maxLimit) args.take = maxLimit;
	if (!args.orderBy) args.orderBy = defaultOrderBy;

	return args;
}
