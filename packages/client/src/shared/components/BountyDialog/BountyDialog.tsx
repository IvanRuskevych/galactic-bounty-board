import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { BountyForm } from "~/shared/components";
import { BountyDialogProps } from "~/typings";

export const BountyDialog = ({ open, onClose, onSuccess, initialData }: BountyDialogProps) => {
	const isEdit = Boolean(initialData);

	const handleSubmit = () => {
		if (onSuccess) onSuccess();
		onClose();
	};

	return (
		<Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
			<DialogTitle>{isEdit ? "Edit Bounty" : "Create New Bounty"}</DialogTitle>

			<DialogContent>
				<BountyForm initialValues={initialData} onSubmitSuccess={handleSubmit} />
			</DialogContent>

			<DialogActions>
				<Button onClick={onClose}>Cancel</Button>
				<Button form="bounty-form" type="submit" variant="contained">
					{isEdit ? "Update" : "Create"}
				</Button>
			</DialogActions>
		</Dialog>
	);
};
