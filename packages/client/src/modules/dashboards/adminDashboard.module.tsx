import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { BountyCard, EmptyState } from "~/shared/components";
import { useStarWarsStore, useUserStore } from "~/store";
import { Bounty } from "~graphql/generated/graphql";

export const AdminDashboard = () => {
	const { users, fetchAllUsersWithAcceptedBounties, error, loading } = useUserStore();
	const { fetchCharacters } = useStarWarsStore();

	useEffect(() => {
		fetchCharacters();
		fetchAllUsersWithAcceptedBounties();
	}, [fetchAllUsersWithAcceptedBounties]);

	return (
		<Container maxWidth="md" sx={{ py: 4 }}>
			<Typography variant="h4" gutterBottom>
				Accepted Bounties by Users
			</Typography>
			{users?.map((user) => {
				return (
					<Accordion key={user.id} sx={{ mb: 2 }}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />}>
							<Typography fontWeight="bold">{user.email}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Box display="flex" flexWrap="wrap" gap={2}>
								{user.bountiesAccepted?.length > 0 ? (
									user.bountiesAccepted?.map((bounty: Bounty) => <BountyCard key={bounty.id} bounty={bounty} />)
								) : (
									<Typography>No accepted bounties</Typography>
								)}
							</Box>
						</AccordionDetails>
					</Accordion>
				);
			})}

			<EmptyState
				empty={Array.isArray(users) && users.length === 0}
				emptyMessage={"No users found"}
				loading={loading}
				error={error}
			/>
		</Container>
	);
};
