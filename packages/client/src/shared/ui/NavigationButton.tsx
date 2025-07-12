import { Button } from "@mui/material";
import type { FC } from "react";
import { Link as RouterLink } from "react-router-dom";

interface NavigationButtonProps {
	to: string;
	label: string;
}

export const NavigationButton: FC<NavigationButtonProps> = ({ to, label, ...props }) => {
	return (
		<Button
			color="inherit"
			component={RouterLink}
			to={to}
			sx={{ textTransform: "none", minWidth: "auto" }}
			{...props}
		>
			{label}
		</Button>
	);
};
