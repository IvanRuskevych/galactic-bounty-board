import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { BountyList } from "../../shared/components";
import { filterBounties } from "../../shared/utils";
import { useBountyStore } from "../../store";

const FILTERS = ["ALL", "CREATED", "POSTED", "ACCEPTED"] as const;
type FilterType = typeof FILTERS[number];

export const HunterDashboard = () => {
  const {
    created = [],
    posted = [],
    accepted = [],
    fetchCurrentUserBounties,
  } = useBountyStore();
  
  const [filter, setFilter] = useState<FilterType>("ALL");
  const [search, setSearch] = useState("");
  
  const allBounties = [...created, ...posted, ...accepted];
  const filteredBounties = useMemo(() => {
    return filterBounties(allBounties, filter, search);
  }, [allBounties, filter, search]);
  
  useEffect(() => {
    fetchCurrentUserBounties();
  }, [fetchCurrentUserBounties]);
  
  return (
    <Container>
      <Typography variant="h4" sx={{my: 2}}>
        My Bounties
      </Typography>
      
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
      
      <BountyList bounties={filteredBounties}/>
      {filteredBounties.length === 0 && <Typography>No bounties found.</Typography>}
    </Container>
  );
};

