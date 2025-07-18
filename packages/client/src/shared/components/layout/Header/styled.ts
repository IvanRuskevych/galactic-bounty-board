import { AppBar, type AppBarProps, styled } from "@mui/material";

export interface StyledAppProps extends AppBarProps {
	open?: boolean;
	drawerwidth?: number;
}

export const StyledAppBar = styled(AppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<StyledAppProps>(({ theme, open, drawerwidth }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerwidth,
		width: `calc(100% - ${drawerwidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));
