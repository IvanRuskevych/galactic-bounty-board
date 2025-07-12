import { Bounty } from "~graphql/generated/graphql";

type SortField = "title" | "reward";
type SortOrder = "asc" | "desc";

export function sortBounties(bounties: Bounty[], field: SortField = "title", order: SortOrder = "asc"): Bounty[] {
	const sorted = [...bounties].sort((a, b) => {
		const aValue = a[field];
		const bValue = b[field];

		if (typeof aValue === "string" && typeof bValue === "string") {
			return aValue.localeCompare(bValue);
		}

		if (typeof aValue === "number" && typeof bValue === "number") {
			return aValue - bValue;
		}

		return 0;
	});

	return order === "asc" ? sorted : sorted.reverse();
}
