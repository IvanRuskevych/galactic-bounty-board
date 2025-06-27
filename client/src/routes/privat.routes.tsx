import { Route } from "react-router-dom";
import { HunterDashboard, PublicDashboard } from "../modules";
import { UserRoles } from "../shared/constants";
import { ROUTER_KEYS } from "../shared/keys";
import { AuthGuard } from "./auth.guard.tsx";

export const privateRoutes = (
  <Route element={<AuthGuard allowedRoles={[UserRoles.HUNTER]}/>}>
    <Route path={ROUTER_KEYS.HOME} element={<PublicDashboard/>}/>
    <Route path={ROUTER_KEYS.DASHBOARD} element={<HunterDashboard/>}/>
  </Route>
);