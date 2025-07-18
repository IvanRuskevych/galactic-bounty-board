import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IconButton, Typography } from "@mui/material";
import type { FC } from "react";
import { HeaderContainer } from "./styled";
import type { SideBarHeaderProps } from "./types.ts";

export const SideBarHeader: FC<SideBarHeaderProps> = ({ onClose, direction, currentUser }) => {
	return (
		<HeaderContainer>
			<Typography variant="subtitle1" sx={{ ml: 1 }}>
				{currentUser?.email}
			</Typography>
			<IconButton onClick={onClose}>{direction === "ltr" ? <ChevronLeftIcon /> : <ChevronRightIcon />}</IconButton>
		</HeaderContainer>
	);
};
