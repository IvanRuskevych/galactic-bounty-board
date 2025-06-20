import type {FC} from "react";
import {Navigate, Outlet, useLocation} from "react-router-dom";
import {ROUTER_KEYS} from "../shared/keys";

// todo: will get from state
let role = "hunter";
let isAuth = true;

export const PrivateRoutes: FC<{ requiredRole?: string }> = ({requiredRole}) => {
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
    const location = useLocation();

    if (isAuth && location.pathname !== ROUTER_KEYS.HOME) {
        return <Navigate to={ROUTER_KEYS.DASHBOARD} replace />;
    }

    return <Outlet />;
};
