import {Route} from "react-router-dom";
import {Auth, Home} from "../components/pages";
import {ROUTER_KEYS} from "../shared/keys";
import {PublicRoutes} from "./routes.tsx";

export const publicRoutes = (
    <Route element={<PublicRoutes />}>
        <Route path={ROUTER_KEYS.HOME} element={<Home />} />
        <Route path={ROUTER_KEYS.REGISTER} element={<Auth />} />
        <Route path={ROUTER_KEYS.LOGIN} element={<Auth />} />
    </Route>
);