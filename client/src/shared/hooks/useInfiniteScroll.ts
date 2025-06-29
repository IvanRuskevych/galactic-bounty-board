import { useState } from "react";
import type { Bounty } from "../../generated/graphql.ts";

const PER_PAGE = 1

export const useInfiniteScroll = (items: Bounty[]) => {
  const [visibleCount, setVisibleCount] = useState(PER_PAGE)
  
  const loadMore = () => {
    console.log("Loading more...");
    setVisibleCount(prev => prev + PER_PAGE)
  }
  
  return {
    items: items.slice(0, visibleCount),
    hasMore: visibleCount < items.length,
    loadMore,
  }
}