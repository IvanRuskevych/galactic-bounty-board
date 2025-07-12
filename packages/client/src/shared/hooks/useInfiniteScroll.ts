import { useState } from "react";
import { Bounty } from "~graphql/generated/graphql";

const PER_PAGE = 1;

export const useInfiniteScroll = (items: Bounty[]) => {
	const [visibleCount, setVisibleCount] = useState(PER_PAGE);

	const loadMore = () => {
		setVisibleCount((prev) => prev + PER_PAGE);
	};

	return {
		items: items.slice(0, visibleCount),
		hasMore: visibleCount < items.length,
		loadMore,
	};
};
