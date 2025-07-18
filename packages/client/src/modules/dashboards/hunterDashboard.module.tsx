import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { BountyDialog, BountyList, EmptyState } from "~/shared/components";
import { BOUNTY_FILTERS, BountyFilterType, contextPage } from "~/shared/constants";
import { useInfiniteScroll } from "~/shared/hooks";
import { filterBounties, sortBounties } from "~/shared/utils";
import { useBountyStore, useStarWarsStore } from "~/store";
import { Bounty } from "~graphql/generated/graphql";

export const HunterDashboard = () => {
	const {
		created = [],
		posted = [],
		accepted = [],
		fetchCurrentUserBounties,
		resetErrors,
		deleteBounty,
		postBounty,
		acceptBounty,
		error,
		loading,
	} = useBountyStore();
	const { fetchCharacters } = useStarWarsStore();

	const [filter, setFilter] = useState<BountyFilterType>("ALL");
	const [editingBounty, setEditingBounty] = useState<Bounty | null>(null);
	const [search, setSearch] = useState("");
	const [dialogOpen, setDialogOpen] = useState(false);

	// const allBounties = [...created, ...posted, ...accepted];
	const allBounties = useMemo(() => [...created, ...posted, ...accepted], [created, posted, accepted]);
	const filteredBounties = useMemo(() => {
		return filterBounties(allBounties, filter, search);
	}, [allBounties, filter, search]);

	const sortedBounties = useMemo(() => {
		return sortBounties(filteredBounties, "title", "asc");
	}, [filteredBounties]);

	const handleEdit = (bounty: Bounty) => {
		setEditingBounty(bounty);
		setDialogOpen(true);
	};

	const handlePost = (bountyId: string) => {
		postBounty(bountyId);
	};
	const handleDelete = (bountyId: string) => {
		deleteBounty(bountyId);
	};
	const handleAccept = (bountyId: string) => {
		acceptBounty(bountyId);
	};

	const { items, hasMore, loadMore } = useInfiniteScroll(sortedBounties);

	useEffect(() => {
		fetchCurrentUserBounties();
		fetchCharacters();
	}, [fetchCurrentUserBounties, fetchCharacters]);

	return (
		<>
			<Container>
				<Box display="flex" justifyContent="space-between" alignItems="center" sx={{ py: 1 }}>
					<Typography variant="h4">My Bounties</Typography>
					<Button variant="contained" onClick={() => setDialogOpen(true)}>
						Create Bounty
					</Button>
				</Box>

				<Box
					display="flex"
					gap={1}
					justifyContent="space-between"
					alignItems="center"
					mb={2}
					flexDirection={{ xs: "column", md: "row" }}
				>
					<TextField
						label="Search"
						variant="outlined"
						size="small"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						sx={{ width: "100%", maxWidth: { xs: 250 } }}
					/>

					<Box display="flex" gap={1} flexWrap="wrap" justifyContent={{ xs: "center", sm: "flex-start" }}>
						{BOUNTY_FILTERS.map((type) => (
							<Button key={type} variant={filter === type ? "contained" : "outlined"} onClick={() => setFilter(type)}>
								{type}
							</Button>
						))}
					</Box>
				</Box>

				<InfiniteScroll next={loadMore} hasMore={hasMore} loader={""} dataLength={items.length}>
					<BountyList
						bounties={sortedBounties}
						onEdit={handleEdit}
						onPost={handlePost}
						onAccept={handleAccept}
						onDelete={handleDelete}
						context={contextPage.PRIVATE}
					/>
				</InfiniteScroll>

				<EmptyState
					empty={Array.isArray(filteredBounties) && filteredBounties.length === 0}
					emptyMessage={"No bounties found"}
					loading={loading}
					error={error}
				/>
			</Container>

			<BountyDialog
				open={dialogOpen}
				onClose={() => {
					setDialogOpen(false);
					resetErrors();
					setEditingBounty(null);
				}}
				onSuccess={() => {
					setDialogOpen(false);
					fetchCurrentUserBounties();
					setEditingBounty(null);
				}}
				initialData={editingBounty}
			/>
		</>
	);
};
