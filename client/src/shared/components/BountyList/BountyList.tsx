import Grid from "@mui/material/Grid";
import type { FC } from "react";
import type { BountyListProps } from "../../../typings";
import { BountyCard } from "../BountyCard/BountyCard.tsx";

export const BountyList: FC<BountyListProps> = ({
  bounties,
  onEdit,
  onPost,
  onDelete,
  onAccept,
  context,
}) => {
  return (
    <Grid container spacing={2} sx={{display: "flex", justifyContent: "center", py: 2}}>
      {bounties.map((bounty) => (
        <Grid key={bounty.id} sx={{height: "100%"}}>
          <BountyCard
            bounty={bounty}
            onEdit={onEdit}
            onPost={onPost}
            onDelete={onDelete}
            onAccept={onAccept}
            context={context}
          />
        </Grid>
      ))}
    </Grid>
  );
};
