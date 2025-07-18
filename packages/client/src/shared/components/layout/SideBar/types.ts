import { User } from "~graphql/generated/graphql";

export interface SideBarHeaderProps {
	onClose: () => void;
	direction: "ltr" | "rtl";
	currentUser: User | null;
}

export interface AuthActionProps {
	isAuth: boolean;
	onLogout: () => void;
	onLogin: () => void;
}

export interface SideBarProps {
	open: boolean;
	isAuth: boolean;
	hasAdminRole: boolean;
	hasHunterRole: boolean;
	handleSideBarClose: () => void;
	handleLogout: () => void;
	handleNavigate: (path: string) => void;
	currentUser: User | null;
}

export interface SideBarLinkProps {
	hasAdminRole?: boolean;
	hasHunterRole?: boolean;
	onNavigate: (path: string) => void;
}
