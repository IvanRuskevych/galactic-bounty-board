import { CircularProgress, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { BountyList } from "../../shared/components";
import { useBountyStore } from "../../store";

export const PublicDashboard = () => {
  
  const {bounties, loading, error, fetchPublicBounties} = useBountyStore();
  
  useEffect(() => {
    fetchPublicBounties();
  }, [fetchPublicBounties]);
  
  return (
    <Container>
      <Typography variant="h4">
        Available Bounties
      </Typography>
      <BountyList bounties={bounties}/>
      {bounties.length === 0 && <Typography>No bounties found.</Typography>}
      {error && <Typography color="error">{error}</Typography>}
      {loading && <CircularProgress/>}
    </Container>
  );
};