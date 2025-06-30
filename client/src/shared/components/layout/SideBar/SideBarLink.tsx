import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import PersonIcon from "@mui/icons-material/Person";
import PublicIcon from "@mui/icons-material/Public";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import type { FC } from "react";
import { ROUTER_KEYS } from "../../../keys";
import type { SideBarLinkProps } from "./types.ts";

export const SideBarLink: FC<SideBarLinkProps> = (
  {
    hasAdminRole,
    hasHunterRole,
    onNavigate,
  },
) => {
  return (
    <>
      {/*Admin Dashboard*/}
      {hasAdminRole && (
        <ListItem disablePadding>
          <ListItemButton onClick={() => onNavigate(ROUTER_KEYS.ADMIN)}>
            <ListItemIcon>
              <AdminPanelSettingsIcon/>
            </ListItemIcon>
            <ListItemText primary={"Admin Dashboard"}/>
          </ListItemButton>
        </ListItem>
      )}
      
      {/*Hunter Dashboard*/}
      {hasHunterRole && (
        <ListItem disablePadding>
          <ListItemButton onClick={() => onNavigate(ROUTER_KEYS.DASHBOARD)}>
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>
            <ListItemText primary={"My Dashboard"}/>
          </ListItemButton>
        </ListItem>
      )}
      
      {/*Public Dashboard*/}
      {!hasAdminRole && (
        <ListItem disablePadding>
          <ListItemButton onClick={() => onNavigate(ROUTER_KEYS.HOME)}>
            <ListItemIcon>
              <PublicIcon/>
            </ListItemIcon>
            <ListItemText primary={"Public Dashboard"}/>
          </ListItemButton>
        </ListItem>
      )}
    </>
  )
}