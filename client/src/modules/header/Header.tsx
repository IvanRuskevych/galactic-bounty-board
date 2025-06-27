import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { UserRoles } from "../../shared/constants";
import { ROUTER_KEYS } from "../../shared/keys";
import { AuthButton, NavigationButton } from "../../shared/ui";
import { useAuthStore } from "../../store";

export const Header = () => {
  const navigate = useNavigate();
  const {isAuth, logout, user} = useAuthStore();
  
  const hasAdminRole = user?.role === UserRoles.ADMIN;
  const hasHunterRole = user?.role === UserRoles.HUNTER;
  
  const handleLogout = async () => {
    logout();
    navigate(ROUTER_KEYS.HOME);
  };
  
  return (
    <AppBar position="static">
      <Toolbar sx={{display: "flex", justifyContent: "space-between"}}>
        {/* Left: Logo */}
        <Typography variant="h6" sx={{textAlign: "center"}}>
          <NavigationButton to={ROUTER_KEYS.HOME} label="Galactic Bounty Board"/>
        </Typography>
        
        {/* Center: Navigation buttons */}
        <Box sx={{display: "flex", textAlign: "center"}}>
          {hasAdminRole && <NavigationButton to={ROUTER_KEYS.ADMIN} label="Admin panel"/>}
          {hasHunterRole && <NavigationButton to={ROUTER_KEYS.HOME} label="Public Bounties"/>}
          {isAuth && hasHunterRole && <NavigationButton to={ROUTER_KEYS.DASHBOARD} label="My Bounties"/>}
        </Box>
        
        {/* Right: Auth buttons */}
        <Box>
          {isAuth ?
            (<AuthButton type="logout" onClick={handleLogout}/>)
            :
            (<NavigationButton to={ROUTER_KEYS.LOGIN} label="Login"/>)}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
