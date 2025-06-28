import { Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { BountyList, EmptyState } from "../../shared/components";
import { contextPage } from "../../shared/constants";
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
        context={contextPage.PUBLIC}
      />
      
      <EmptyState
        empty={bounties.length === 0}
        emptyMessage={"No bounties found"}
        loading={loading}
        error={error}
      />
    
    </Container>
  );
};