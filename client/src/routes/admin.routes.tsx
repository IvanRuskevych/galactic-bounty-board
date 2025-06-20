import {Route} from "react-router-dom";
import {Admin} from "../components/pages";
import {ROUTER_KEYS} from "../shared/keys";
import {PrivateRoutes} from "./routes.tsx";

export const adminRoutes = (
    <Route element={<PrivateRoutes requiredRole="admin" />}>
        <Route path={ROUTER_KEYS.ADMIN} element={<Admin />} />
    </Route>
);