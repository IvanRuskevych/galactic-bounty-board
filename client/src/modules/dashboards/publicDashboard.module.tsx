import { useMutation } from "@apollo/client";
import { CircularProgress, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { ACCEPT_BOUNTY } from "../../graphql/mutations";
import { BountyList } from "../../shared/components";
import { useBountyStore, useStarWarsStore } from "../../store";

export const PublicDashboard = () => {
  const {bounties, loading, error, fetchPublicBounties} = useBountyStore();
  const {fetchCharacters} = useStarWarsStore();
  
  const [acceptBounty] = useMutation(ACCEPT_BOUNTY)
  const handleAccept = async (bountyId: string) => {
    await acceptBounty({variables: {bountyId}});
    fetchPublicBounties()
  }
  
  useEffect(() => {
    fetchPublicBounties();
    fetchCharacters()
  }, [fetchPublicBounties, fetchCharacters]);
  
  return (
    <Container>
      <Typography variant="h4" sx={{p: 1}}> Available Bounties </Typography>
      <BountyList
        bounties={bounties}
        onAccept={handleAccept}
        context={"public"}
      />
      {bounties.length === 0 && <Typography>No bounties found.</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {loading && <CircularProgress/>}
    </Container>
  );
};