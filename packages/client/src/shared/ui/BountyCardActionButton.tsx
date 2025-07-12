import { Button } from "@mui/material";

interface BountyCardActionButtonProps {
	onClick?: () => void;
	label: string;
	color?: "primary" | "success" | "warning" | "error";
	disabled?: boolean;
}

export const BountyCardActionButton = ({
	onClick,
	label,
	color = "primary",
	disabled = false,
}: BountyCardActionButtonProps) => {
	return (
		<Button size="small" color={color} onClick={onClick} disabled={disabled} sx={{ fontWeight: "bold" }}>
			{label}
		</Button>
	);
};
