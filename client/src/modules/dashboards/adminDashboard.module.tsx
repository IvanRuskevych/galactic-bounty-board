import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Container, Typography } from "@mui/material";
import { useEffect, useMemo } from "react";
import { BountyCard, EmptyState } from "../../shared/components";
import { sortBounties } from "../../shared/utils";
import { useStarWarsStore } from "../../store";
import { userStore } from "../../store/user.store.ts";

export const AdminDashboard = () => {
  const {users, fetchAllUsersWithAcceptedBounties, error, loading} = userStore()
  const {fetchCharacters} = useStarWarsStore()
  
  useEffect(() => {
    fetchCharacters()
    fetchAllUsersWithAcceptedBounties();
  }, [fetchAllUsersWithAcceptedBounties]);
  
  return (
    <Container maxWidth="md" sx={{py: 4}}>
      <Typography variant="h4" gutterBottom>
        Accepted Bounties by Users
      </Typography>
      
      {users?.map((user) => {
          const sortedAccepted = useMemo(() => {
            return sortBounties(user.bountiesAccepted || [], "title", "asc");
          }, [user.bountiesAccepted]);
          
          return (
            <Accordion key={user.id} sx={{mb: 2}}>
              <AccordionSummary expandIcon={<ExpandMoreIcon/>}>
                <Typography fontWeight="bold">{user.email}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box display="flex" flexWrap="wrap" gap={2}>
                  {sortedAccepted?.length > 0 ? (
                    sortedAccepted?.map((bounty) => (
                      <BountyCard key={bounty.id} bounty={bounty}/>
                    ))
                  ) : (
                    <Typography>No accepted bounties</Typography>
                  )}
                </Box>
              </AccordionDetails>
            </Accordion>
          )
        },
      )}
      
      <EmptyState
        empty={users.length === 0}
        emptyMessage={"No users found"}
        loading={loading}
        error={error}
      />
    </Container>
  );
};
