import { Route } from "react-router-dom";
import { AdminDashboard } from "../modules";
import { UserRoles } from "../shared/constants";
import { ROUTER_KEYS } from "../shared/keys";
import { AuthGuard } from "./auth.guard.tsx";

export const adminRoutes = (
  <Route element={<AuthGuard allowedRoles={[UserRoles.ADMIN]}/>}>
    <Route path={ROUTER_KEYS.ADMIN} element={<AdminDashboard/>}/>
  </Route>
);