import {Route} from "react-router-dom";
import {Dashboard, Home} from "../components/pages";
import {ROUTER_KEYS} from "../shared/keys";
import {PrivateRoutes} from "./routes.tsx";

export const privateRoutes = (
    <Route element={<PrivateRoutes requiredRole={"hunter"} />}>
        <Route path={ROUTER_KEYS.HOME} element={<Home />} />
        <Route path={ROUTER_KEYS.DASHBOARD} element={<Dashboard />} />
    </Route>
);