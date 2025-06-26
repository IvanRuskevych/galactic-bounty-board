import { CircularProgress, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { BountyList } from "../../shared/components";
import { useBountyStore, useStarWarsStore } from "../../store";

export const PublicDashboard = () => {
  const {bounties, loading, error, fetchPublicBounties, acceptBounty} = useBountyStore();
  const {fetchCharacters} = useStarWarsStore();
  
  const handleAccept = async (bountyId: string) => {
    acceptBounty(bountyId);
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