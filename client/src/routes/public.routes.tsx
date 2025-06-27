import { Route } from "react-router-dom";
import { Auth, PublicDashboard } from "../modules";
import { ROUTER_KEYS } from "../shared/keys";
import { HomeAccessGuard } from "./auth.guard.tsx";

export const publicRoutes = (
  <Route>
    <Route element={<HomeAccessGuard/>}>
      <Route path={ROUTER_KEYS.HOME} element={<PublicDashboard/>}/>
    </Route>
    <Route path={ROUTER_KEYS.REGISTER} element={<Auth mode={"register"}/>}/>
    <Route path={ROUTER_KEYS.LOGIN} element={<Auth mode={"login"}/>}/>
  </Route>
);