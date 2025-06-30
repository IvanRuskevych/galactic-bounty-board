import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header, SideBar } from "../../shared/components/layout";
import { drawerWidth } from "../../shared/components/layout/SideBar/styled";
import { UserRoles } from "../../shared/constants";
import { ROUTER_KEYS } from "../../shared/keys";
import { notifySuccess } from "../../shared/utils/toastify";
import { useAuthStore } from "../../store";
import { useUserStore } from "../../store/user.store.ts";

export const NavigationBar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  
  const {isAuth, logout, user} = useAuthStore();
  const {currentUser, fetchCurrentUser} = useUserStore()
  
  const hasAdminRole = user?.role === UserRoles.ADMIN;
  const hasHunterRole = user?.role === UserRoles.HUNTER;
  
  const handleSideBarOpen = () => setOpen(true);
  const handleSideBarClose = () => setOpen(false);
  
  const handleNavigate = (to: string) => {
    navigate(to);
    handleSideBarClose();
  };
  
  const handleLogout = async () => {
    await logout();
    navigate(ROUTER_KEYS.HOME);
    handleSideBarClose();
    notifySuccess("Logout successful");
  };
  
  useEffect(() => {
    if (isAuth) fetchCurrentUser()
  }, [fetchCurrentUser, isAuth])
  
  return (
    <Box sx={{display: "flex"}}>
      <Header
        drawerWidth={drawerWidth}
        open={open}
        onClick={handleSideBarOpen}/>
      
      <SideBar
        open={open}
        isAuth={isAuth}
        hasHunterRole={hasHunterRole}
        hasAdminRole={hasAdminRole}
        handleNavigate={handleNavigate}
        handleLogout={handleLogout}
        handleSideBarClose={handleSideBarClose}
        currentUser={currentUser}/>
    </Box>
  );
};
