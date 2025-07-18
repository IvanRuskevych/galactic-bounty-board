import { Box, MenuItem, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { useBountyStore, useStarWarsStore } from "~/store";
import { Bounty } from "~graphql/generated/graphql";

export const BountyForm = ({
	initialValues,
	onSubmitSuccess,
}: {
	initialValues?: Bounty | null;
	onSubmitSuccess?: () => void;
}) => {
	const isEdit = Boolean(initialValues);

	// const [targetId, setTargetId] = useState(initialValues?.targetId || 0);
	const [targetId, setTargetId] = useState<number | string>(initialValues?.targetId ?? "");
	const [title, setTitle] = useState(initialValues?.title || "");
	const [planet, setPlanet] = useState(initialValues?.planet || "");
	const [reward, setReward] = useState(initialValues?.reward || 0);
	const [description, setDescription] = useState(initialValues?.description || "");

	const { characters } = useStarWarsStore();
	const { createBounty, updateBounty, resetErrors, fieldErrors } = useBountyStore();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		resetErrors();

		const data = {
			title,
			description,
			planet,
			reward: Number(reward),
			targetId,
		};

		let result;
		if (isEdit && initialValues?.id) {
			result = await updateBounty(initialValues.id, data);
		} else {
			result = await createBounty(data);
		}

		if (!result.success) return;

		onSubmitSuccess?.();
	};

	useEffect(() => {
		const selectedCharacter = characters.find((item) => item.id === targetId);
		if (selectedCharacter) setPlanet(selectedCharacter.homeworld);
	}, [characters, targetId]);

	return (
		<Box component="form" onSubmit={handleSubmit} id="bounty-form" sx={{ mt: 2 }}>
			<TextField
				label="Title"
				fullWidth
				value={title}
				onChange={(e) => setTitle(e.target.value)}
				margin="normal"
				required
				error={Boolean(fieldErrors?.title)}
				helperText={fieldErrors?.title?.join(", ")}
			/>

			<TextField
				select
				label="Target"
				fullWidth
				value={targetId}
				onChange={(e) => setTargetId(Number(e.target.value))}
				margin="normal"
				required
				error={Boolean(fieldErrors?.targetId)}
				helperText={fieldErrors?.targetId?.join(", ")}
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
				error={Boolean(fieldErrors?.planet)}
				helperText={fieldErrors?.planet?.join(", ")}
			/>

			<TextField
				label="Reward"
				fullWidth
				type="number"
				value={reward}
				onChange={(e) => setReward(Number(e.target.value))}
				margin="normal"
				required
				error={Boolean(fieldErrors?.reward)}
				helperText={fieldErrors?.reward?.join(", ")}
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
				error={Boolean(fieldErrors?.description)}
				helperText={fieldErrors?.description?.join(", ")}
			/>
		</Box>
	);
};
