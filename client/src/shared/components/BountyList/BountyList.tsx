import Grid from "@mui/material/Grid";
import type { FC } from "react";
import type { BountyListProps } from "../../../typings";
import { BountyCard } from "../BountyCard/BountyCard.tsx";

export const BountyList: FC<BountyListProps> = ({bounties}) => {
  
  return (
    <Grid container spacing={2} columns={{xs: 4, sm: 8, md: 12}} sx={{display: "flex", justifyContent: "center"}}>
      {bounties.map((bounty) => (
        <BountyCard key={bounty.id} bounty={bounty} onAccept={() => {}}/>
      ))}
    </Grid>
  );
};
