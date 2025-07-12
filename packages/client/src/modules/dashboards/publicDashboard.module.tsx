import { Container, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BountyList, EmptyState } from "~/shared/components";
import { contextPage } from "~/shared/constants";
import { useInfiniteScroll } from "~/shared/hooks";
import { sortBounties } from "~/shared/utils";
import { useBountyStore, useStarWarsStore } from "~/store";

export const PublicDashboard = () => {
	const { bounties, loading, error, fetchPublicBounties, acceptBounty } = useBountyStore();
	const { fetchCharacters } = useStarWarsStore();
	const handleAccept = async (bountyId: string) => {
		acceptBounty(bountyId);
	};

	const sortedBounties = useMemo(() => {
		return sortBounties(bounties, "title", "asc");
	}, [bounties]);

	const { items, loadMore, hasMore } = useInfiniteScroll(sortedBounties);

	useEffect(() => {
		fetchPublicBounties();
		fetchCharacters();
	}, [fetchPublicBounties, fetchCharacters]);

	return (
		<Container>
			<Typography variant="h4" sx={{ p: 1 }}>
				Available Bounties
			</Typography>
			<InfiniteScroll
				dataLength={items.length}
				next={loadMore}
				hasMore={hasMore}
				loader={""}
				scrollThreshold={0.9}
			>
				<BountyList bounties={sortedBounties} onAccept={handleAccept} context={contextPage.PUBLIC} />
			</InfiniteScroll>
			<EmptyState
				empty={bounties.length === 0}
				emptyMessage={"No bounties found"}
				loading={loading}
				error={error}
			/>
		</Container>
	);
};
