import type { FC } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserRoles } from "../shared/constants";
import { ROUTER_KEYS } from "../shared/keys";
import { useAuthStore } from "../store";

interface AuthGuardProps {
  allowedRoles?: string[];
}

export const AuthGuard: FC<AuthGuardProps> = ({allowedRoles}) => {
  const {isAuth, user} = useAuthStore()
  
  if (!isAuth) return <Navigate to={ROUTER_KEYS.LOGIN} replace/>;
  
  if (allowedRoles && !allowedRoles.includes(user?.role || "")) {
    if (user?.role === UserRoles.ADMIN) return <Navigate to={ROUTER_KEYS.ADMIN} replace/>
    
    return <Navigate to={ROUTER_KEYS.DASHBOARD} replace/>
  }
  
  return <Outlet/>
}

export const HomeAccessGuard = () => {
  const {isAuth, user} = useAuthStore();
  
  if (!isAuth || user?.role === "HUNTER") {
    return <Outlet/>;
  }
  
  return <Navigate to={ROUTER_KEYS.ADMIN} replace/>;
};
