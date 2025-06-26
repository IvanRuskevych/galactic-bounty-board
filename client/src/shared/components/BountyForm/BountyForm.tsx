// import { useMutation } from "@apollo/client";
// import { Box, MenuItem, TextField } from "@mui/material";
// import { type FormEvent, useEffect, useState } from "react";
// import type { Bounty } from "../../../generated/graphql";
// import { CREATE_BOUNTY, EDIT_BOUNTY } from "../../../graphql/mutations";
// import { useBountyStore, useStarWarsStore } from "../../../store";
//
// export interface BountyFormValues {
//   title: string;
//   description: string;
//   planet: string;
//   reward: number;
//   targetId: number;
// }
//
// export const BountyForm = ({
//   initialValues, onSubmitSuccess,
// }: { initialValues?: Bounty | null; onSubmitSuccess?: () => void }) => {
//   const isEdit = Boolean(initialValues);
//
//   const [targetId, setTargetId] = useState(0);
//   const [title, setTitle] = useState(initialValues?.title || "");
//   const [planet, setPlanet] = useState(initialValues?.planet || "");
//   const [reward, setReward] = useState(initialValues?.reward || 0);
//   const [description, setDescription] = useState(initialValues?.description || "");
//
//   const {characters} = useStarWarsStore();
//   const {fetchCurrentUserBounties} = useBountyStore()
//   const [createBounty] = useMutation(CREATE_BOUNTY);
//   const [updateBounty] = useMutation(EDIT_BOUNTY);
//
//   const handleSubmit = async (e: FormEvent) => {
//     e.preventDefault();
//     const data = {
//       title,
//       description,
//       planet,
//       reward: Number(reward),
//       targetId,
//     };
//
//     try {
//       if (isEdit && initialValues?.id) {
//         await updateBounty({variables: {id: initialValues.id, data}});
//         fetchCurrentUserBounties();
//       } else {
//         await createBounty({variables: {data}});
//         fetchCurrentUserBounties();
//       }
//
//       if (onSubmitSuccess) onSubmitSuccess();
//     } catch (error) {
//       console.error("Error submitting bounty:", error);
//     }
//   };
//
//   useEffect(() => {
//     const selectedCharacter = characters.find(item => item.id === targetId);
//     if (selectedCharacter) setPlanet(selectedCharacter.homeworld)
//   })
//
//   return (
//     <Box
//       component="form"
//       onSubmit={handleSubmit}
//       id="bounty-form"
//       sx={{mt: 2}}
//     >
//       <TextField
//         label="Title"
//         fullWidth
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         margin="normal"
//         required
//       />
//
//       <TextField
//         select
//         label="Target"
//         fullWidth
//         value={targetId}
//         onChange={(e) => setTargetId(Number(e.target.value))}
//         margin="normal"
//         required
//       >
//         {characters.map((item) => (
//           <MenuItem key={item.id} value={item.id}>
//             {item.name}
//           </MenuItem>
//         ))}
//       </TextField>
//
//       <TextField
//         label="Planet"
//         fullWidth
//         value={planet}
//         onChange={(e) => setPlanet(e.target.value)}
//         margin="normal"
//       />
//
//       <TextField
//         label="Reward"
//         fullWidth
//         type="number"
//         value={reward}
//         onChange={(e) => setReward(Number(e.target.value))}
//         margin="normal"
//         required
//       />
//
//       <TextField
//         label="Description"
//         fullWidth
//         multiline
//         rows={3}
//         value={description}
//         onChange={(e) => setDescription(e.target.value)}
//         margin="normal"
//         required
//       />
//     </Box>
//   );
// };


import { useMutation } from "@apollo/client";
import { Box, MenuItem, TextField } from "@mui/material";
import { type FormEvent, useEffect, useState } from "react";
import type { Bounty } from "../../../generated/graphql";
import { CREATE_BOUNTY, EDIT_BOUNTY } from "../../../graphql/mutations";
import { useBountyStore, useStarWarsStore } from "../../../store";

export interface BountyFormValues {
  title: string;
  description: string;
  planet: string;
  reward: number;
  targetId: number;
}

export const BountyForm = ({
  initialValues,
  onSubmitSuccess,
}: {
  initialValues?: Bounty | null;
  onSubmitSuccess?: () => void
}) => {
  const editingBountyId = initialValues?.id;
  const isEdit = Boolean(initialValues);
  console.log("editingBountyId: ", editingBountyId);
  console.log("isEdit: ", isEdit);
  
  const [targetId, setTargetId] = useState(initialValues?.targetId || 0);
  const [title, setTitle] = useState(initialValues?.title || "");
  const [planet, setPlanet] = useState(initialValues?.planet || "");
  const [reward, setReward] = useState(initialValues?.reward || 0);
  const [description, setDescription] = useState(initialValues?.description || "");
  
  const {characters} = useStarWarsStore();
  const {fetchCurrentUserBounties} = useBountyStore()
  const [createBounty] = useMutation(CREATE_BOUNTY);
  const [updateBounty] = useMutation(EDIT_BOUNTY);
  
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const data = {
      title,
      description,
      planet,
      reward: Number(reward),
      targetId,
    };
    
    try {
      if (isEdit && editingBountyId) {
        console.log("updateBounty 1")
        await updateBounty({variables: {bountyId: initialValues.id, data}});
        console.log("updateBounty 2")
      } else {
        await createBounty({variables: {data}});
      }
      fetchCurrentUserBounties();
      onSubmitSuccess?.()
    } catch (error) {
      console.error("Error submitting bounty:", error);
    }
  };
  
  useEffect(() => {
    const selectedCharacter = characters.find(item => item.id === targetId);
    if (selectedCharacter) setPlanet(selectedCharacter.homeworld)
  }, [characters, targetId]);
  
  return (
    <Box component="form" onSubmit={handleSubmit} id="bounty-form" sx={{mt: 2}}>
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        margin="normal"
        required
      />
      
      <TextField
        select
        label="Target"
        fullWidth
        value={targetId}
        onChange={(e) => setTargetId(Number(e.target.value))}
        margin="normal"
        required
      >
        {characters.map((item) => (
          <MenuItem key={item.id} value={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </TextField>
      
      <TextField
        label="Planet"
        fullWidth
        value={planet}
        onChange={(e) => setPlanet(e.target.value)}
        margin="normal"
      />
      
      <TextField
        label="Reward"
        fullWidth
        type="number"
        value={reward}
        onChange={(e) => setReward(Number(e.target.value))}
        margin="normal"
        required
      />
      
      <TextField
        label="Description"
        fullWidth
        multiline
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        margin="normal"
        required
      />
    </Box>
  );
};
