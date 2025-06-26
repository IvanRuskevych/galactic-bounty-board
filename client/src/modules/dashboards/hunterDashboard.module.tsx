import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import type { Bounty } from "../../generated/graphql.ts";
import { BountyDialog, BountyList } from "../../shared/components";
import { filterBounties } from "../../shared/utils";
import { useBountyStore, useStarWarsStore } from "../../store";

const FILTERS = ["ALL", "CREATED", "POSTED", "ACCEPTED"] as const;
type FilterType = typeof FILTERS[number];

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
  } = useBountyStore();
  const {fetchCharacters} = useStarWarsStore();
  
  const [filter, setFilter] = useState<FilterType>("ALL");
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
            {FILTERS.map((type) => (
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
        />
        {filteredBounties.length === 0 && <Typography>No bounties found.</Typography>}
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

