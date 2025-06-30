import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import type { FC } from "react";
import type { AuthActionProps } from "./types.ts";

export const AuthActions: FC<AuthActionProps> = ({
  isAuth,
  onLogout,
  onLogin,
}) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={isAuth ? onLogout : onLogin}>
        <ListItemIcon>
          {isAuth ? <LogoutIcon/> : <LoginIcon/>}
        </ListItemIcon>
        <ListItemText primary={isAuth ? "Logout" : "Login"}/>
      </ListItemButton>
    </ListItem>
  )
}