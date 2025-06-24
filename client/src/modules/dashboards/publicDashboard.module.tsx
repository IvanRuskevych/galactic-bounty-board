import { CircularProgress, Container, Typography } from "@mui/material";
import { useEffect } from "react";
import { BountyList } from "../../shared/components";
import { useBountyStore } from "../../store";

export const PublicDashboard = () => {
  
  const {bounties, loading, error, fetchPublicBounties} = useBountyStore();
  
  useEffect(() => {
    fetchPublicBounties();
  }, [fetchPublicBounties]);
  
  if (loading) return <CircularProgress/>;
  if (error) return <Typography color="error">{error}</Typography>;
  if (bounties.length === 0) return <Typography>No bounties found.</Typography>;
  
  return (
    <Container>
      <Typography variant="h4" sx={{my: 2}}>
        Available Bounties
      </Typography>
      <BountyList bounties={bounties}/>
    </Container>
  );
};