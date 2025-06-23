import type {FC} from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {ROUTER_KEYS} from "../shared/keys";
import {useAuthStore} from "../store";

// todo: will get from state
let role = "hunter";

export const PrivateRoutes: FC<{ requiredRole?: string }> = ({requiredRole}) => {
    const {isAuth} = useAuthStore();

    if (!isAuth) return <Navigate to={ROUTER_KEYS.LOGIN} replace />;
    if (requiredRole && role !== requiredRole) {
        const redirectMap = {
            hunter: ROUTER_KEYS.DASHBOARD,
            admin: ROUTER_KEYS.ADMIN,
        };
        const target = redirectMap[role as keyof typeof redirectMap] || ROUTER_KEYS.HOME;

        return <Navigate to={target} replace />;
    }

    return <Outlet />;
};

export const PublicRoutes: FC = () => {
    const {isAuth} = useAuthStore();
    const location = useLocation();

    if (isAuth && location.pathname !== ROUTER_KEYS.HOME) {
        return <Navigate to={ROUTER_KEYS.DASHBOARD} replace />;
    }

    return <Outlet />;
};
