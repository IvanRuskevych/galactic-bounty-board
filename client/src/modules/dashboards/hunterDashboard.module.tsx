import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import type { Bounty } from "../../generated/graphql.ts";
import { BountyDialog, BountyList, EmptyState } from "../../shared/components";
import { BOUNTY_FILTERS, type BountyFilterType, contextPage } from "../../shared/constants";
import { filterBounties } from "../../shared/utils";
import { useBountyStore, useStarWarsStore } from "../../store";

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
  const {fetchCharacters} = useStarWarsStore();
  
  const [filter, setFilter] = useState<BountyFilterType>("ALL");
  const [editingBounty, setEditingBounty] = useState<Bounty | null>(null)
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  
  const allBounties = [...created, ...posted, ...accepted];
  
  const filteredBounties = useMemo(() => {
    return filterBounties(allBounties, filter, search);
  }, [allBounties, filter, search]);
  
  
  const handleEdit = (bounty: Bounty) => {
    setEditingBounty(bounty);
    setDialogOpen(true);
  };
  
  const handlePost = (bountyId: string) => {
    postBounty(bountyId);
  }
  const handleDelete = (bountyId: string) => {
    deleteBounty(bountyId);
  }
  const handleAccept = (bountyId: string) => {
    acceptBounty(bountyId);
  }
  
  useEffect(() => {
    fetchCurrentUserBounties();
    fetchCharacters()
  }, [fetchCurrentUserBounties, fetchCharacters]);
  
  return (
    <>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{py: 1}}>
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
          flexDirection={{xs: "column", md: "row"}}
        >
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{width: "100%", maxWidth: {xs: 250}}}
          />
          
          <Box display="flex" gap={1} flexWrap="wrap" justifyContent={{xs: "center", sm: "flex-start"}}>
            {BOUNTY_FILTERS.map((type) => (
              <Button
                key={type}
                variant={filter === type ? "contained" : "outlined"}
                onClick={() => setFilter(type)}
              >
                {type}
              </Button>
            ))}
          </Box>
        </Box>
        
        <BountyList
          bounties={filteredBounties}
          onEdit={handleEdit}
          onPost={handlePost}
          onAccept={handleAccept}
          onDelete={handleDelete}
          context={contextPage.PRIVATE}
        />
        
        <EmptyState
          empty={filteredBounties.length === 0}
          emptyMessage={"No bounties found"}
          loading={loading}
          error={error}
        />
      </Container>
      
      <BountyDialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false)
          setEditingBounty(null)
          resetErrors()
        }}
        onSuccess={() => {
          fetchCurrentUserBounties()
          setDialogOpen(false)
          setEditingBounty(null)
        }}
        initialData={editingBounty}
      />
    </>
  );
};

