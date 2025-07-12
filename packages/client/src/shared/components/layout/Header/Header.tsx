import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Toolbar, Typography } from "@mui/material";
import { StyledAppBar } from "~/shared/components/layout/Header/styled";

interface HeaderProps {
	open?: boolean;
	drawerWidth: number;
	onClick: () => void;
}

export const Header = ({ open, drawerWidth, onClick }: HeaderProps) => {
	return (
		<StyledAppBar position="fixed" open={open} drawerwidth={drawerWidth}>
			<Toolbar>
				<IconButton
					color="inherit"
					onClick={onClick}
					edge="start"
					aria-label={"open sidebar"}
					sx={{ mr: 2, ...(open && { display: "none" }) }}
				>
					<MenuIcon />
				</IconButton>
				<Typography variant="h6">Galactic Bounty Board</Typography>
			</Toolbar>
		</StyledAppBar>
	);
};
