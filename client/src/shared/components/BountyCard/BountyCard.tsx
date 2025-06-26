import { Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { useAuthStore, useStarWarsStore } from "../../../store";
import type { BountyCardProps } from "../../../typings";
import { BountyStatus } from "../../constants";
import { BountyCardActionButton } from "../../ui";


export const BountyCard = ({
  bounty,
  onEdit,
  onPost,
  onAccept,
  onDelete,
  context = "private",
}: BountyCardProps) => {
  const {isAuth, user} = useAuthStore();
  const isOwner = user?.id === bounty.createdBy?.id;
  
  const {getCharacterById} = useStarWarsStore()
  const target = getCharacterById(bounty.targetId)
  
  const renderActions = () => {
    if (!isAuth) return null;
    
    if (context === "public" && bounty.status === BountyStatus.POSTED && isOwner) {
      return (
        <BountyCardActionButton label="Posted by me" disabled/>
      );
    }
    
    if (isOwner) {
      // for bounty owner
      switch (bounty.status) {
        case BountyStatus.CREATED:
          return (
            <>
              {onEdit && <BountyCardActionButton label={"Edit"} color={"success"} onClick={() => onEdit(bounty)}/>}
              {onPost && <BountyCardActionButton label={"Post"} color={"primary"} onClick={() => onPost(bounty.id)}/>}
              {onDelete && <BountyCardActionButton label="Delete" color={"error"} onClick={() => onDelete(bounty.id)}/>}
            </>
          );
        
        case BountyStatus.POSTED:
          return (
            <>
              {onEdit && <BountyCardActionButton label={"Edit"} color={"success"} onClick={() => onEdit(bounty)}/>}
              {onDelete && <BountyCardActionButton label="Delete" color={"error"} onClick={() => onDelete(bounty.id)}/>}
            </>
          );
        
        case BountyStatus.ACCEPTED:
          return (
            <>
              <BountyCardActionButton label={"Accepted by me"} disabled={true}/>
            </>
          );
      }
    } else {
      // for not bounty owner
      if (bounty.status === BountyStatus.POSTED) {
        return (
          <>
            {onAccept && (
              <>
                <BountyCardActionButton
                  label="Accept"
                  color="success"
                  onClick={() => onAccept(bounty.id)}
                />
              </>
            )}
          </>
        )
      }
      if (bounty.status === BountyStatus.ACCEPTED) {
        return (
          <>
            <BountyCardActionButton label={"Accepted by me"} disabled={true}/>
          </>
        )
      }
    }
    return null;
  }
  
  return (
    <Card sx={{width: 250, height: "100%", display: "flex", flexDirection: "column"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
          image={target?.image}
          alt={bounty.planet}
          sx={{objectFit: "contain", pt: 2}}
        />
        <CardContent sx={{height: "100%", minHeight: 250}}>
          <Typography gutterBottom variant="h5" sx={{
            fontWeight: "bold",
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 1,
            WebkitBoxOrient: "vertical",
          }}>
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
      </CardActions>
    </Card>
  );
};
