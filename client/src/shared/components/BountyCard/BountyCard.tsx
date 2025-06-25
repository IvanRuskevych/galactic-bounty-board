import { Box, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import type { Bounty } from "../../../generated/graphql";
import { useAuthStore, useStarWarsStore } from "../../../store";
import { BountyStatus } from "../../constants";
import { BountyCardActionButton } from "../../ui";

interface BountyCardProps {
  bounty: Bounty;
  onEdit?: () => void;
  onPost?: () => void;
  onAccept?: () => void;
  onDelete?: () => void;
}

export const BountyCard = ({
  bounty,
  onEdit,
  onPost,
  onAccept,
  onDelete,
}: BountyCardProps) => {
  const {isAuth} = useAuthStore();
  const {getCharacterById} = useStarWarsStore()
  const target = getCharacterById(bounty.targetId)
  
  const renderActions = () => {
    if (!isAuth) return null;
    
    switch (bounty.status) {
      case BountyStatus.CREATED:
        return (
          <>
            {onEdit && <BountyCardActionButton label={"Post"} color={"warning"}/>}
            {onPost && <BountyCardActionButton label={"Edit"} color={"primary"}/>}
          </>
        );
      case BountyStatus.POSTED:
        return (
          <>
            {onEdit && <BountyCardActionButton label={"Edit"} color="warning"/>}
            {onAccept && <BountyCardActionButton label={"Accept"} color="success"/>}
          </>
        );
      case BountyStatus.ACCEPTED:
        return (
          <>
            <Box
              sx={{
                fontSize: "0.875rem",
                color: "white",
                bg: "success.main",
                px: 2,
                py: 0.5,
                borderRadius: 1,
              }}
            >
              Accepted by: {bounty.acceptedBy?.email || "Unknown"}
            </Box>
          </>
        );
      default:
        return null;
    }
  }
  
  return (
    <Card sx={{width: 250, height: "100%", display: "flex", flexDirection: "column"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={target?.image}
          alt={bounty.planet}
          sx={{objectFit: "contain"}}
        />
        <CardContent sx={{height: "100%", minHeight: 250}}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {bounty.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Target: {target?.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Planet: {bounty.planet}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Reward: {bounty.reward} credits
          </Typography>
          
          {isAuth && (
            <Typography variant="body2" color="text.secondary">
              Owner: {bounty.createdBy?.email}
            </Typography>
          )}
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: 4,
              WebkitBoxOrient: "vertical",
              mt: 1,
            }}
          >
            {bounty.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      
      <CardActions sx={{mt: "auto", justifyContent: "space-between"}}>
        {renderActions()}
        {onDelete && isAuth && bounty.status !== "ACCEPTED" && (
          <BountyCardActionButton label={"Delete"} onClick={onDelete}/>
        )}
      </CardActions>
    </Card>
  );
};
