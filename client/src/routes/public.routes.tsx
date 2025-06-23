import {Route} from "react-router-dom";
import {Auth, PublicDashboard} from "../modules";
import {ROUTER_KEYS} from "../shared/keys";
import {PublicRoutes} from "./routes.tsx";

export const publicRoutes = (
    <Route element={<PublicRoutes />}>
        <Route path={ROUTER_KEYS.HOME} element={<PublicDashboard />} />
        <Route path={ROUTER_KEYS.REGISTER} element={<Auth mode={"register"} />} />
        <Route path={ROUTER_KEYS.LOGIN} element={<Auth mode={"login"} />} />
    </Route>
);