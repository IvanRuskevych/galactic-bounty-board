import { Divider, Drawer, List, useTheme } from "@mui/material";
import type { FC } from "react";
import { ROUTER_KEYS } from "~/shared/keys";
import { AuthActions } from "./AuthAction.js";
import { SideBarHeader } from "./SideBarHeader";
import { SideBarLink } from "./SideBarLink.js";
import { drawerWidth } from "./styled";
import type { SideBarProps } from "./types.ts";

export const SideBar: FC<SideBarProps> = ({
	open,
	isAuth,
	hasAdminRole,
	hasHunterRole,
	handleNavigate,
	handleLogout,
	handleSideBarClose,
	currentUser,
}) => {
	const them = useTheme();

	return (
		<Drawer
			open={open}
			variant={"persistent"}
			anchor={"left"}
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: drawerWidth,
					boxSizing: "border-box",
				},
			}}
		>
			<SideBarHeader onClose={handleSideBarClose} direction={them.direction} currentUser={currentUser} />
			<Divider />

			<List>
				<SideBarLink onNavigate={handleNavigate} hasAdminRole={hasAdminRole} hasHunterRole={hasHunterRole} />
			</List>
			<Divider />

			<List>
				<AuthActions isAuth={isAuth} onLogout={handleLogout} onLogin={() => handleNavigate(ROUTER_KEYS.LOGIN)} />
			</List>
		</Drawer>
	);
};
