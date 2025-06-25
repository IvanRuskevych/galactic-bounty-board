import Grid from "@mui/material/Grid";
import type { FC } from "react";
import type { BountyListProps } from "../../../typings";
import { BountyCard } from "../BountyCard/BountyCard.tsx";

export const BountyList: FC<BountyListProps> = ({bounties}) => {
  return (
    <Grid container spacing={2} sx={{display: "flex", justifyContent: "center"}}>
      {bounties.map((bounty) => (
        <Grid key={bounty.id} sx={{height: "100%"}}>
          <BountyCard bounty={bounty} onAccept={() => {}}/>
        </Grid>
      ))}
    </Grid>
  );
};
