import {Route} from "react-router-dom";
import {HunterDashboard, PublicDashboard} from "../modules";
import {ROUTER_KEYS} from "../shared/keys";
import {PrivateRoutes} from "./routes.tsx";

export const privateRoutes = (
    <Route element={<PrivateRoutes requiredRole={"hunter"} />}>
        <Route path={ROUTER_KEYS.HOME} element={<PublicDashboard />} />
        <Route path={ROUTER_KEYS.DASHBOARD} element={<HunterDashboard />} />
    </Route>
);