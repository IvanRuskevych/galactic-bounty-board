import { Navigate } from "react-router-dom";
import { UserRoles } from "~/shared/constants";
import { ROUTER_KEYS } from "~/shared/keys";
import { useAuthStore } from "~/store";

export const InitialRedirectRoute = () => {
	const { isAuth, user } = useAuthStore();

	if (!isAuth) return <Navigate to={ROUTER_KEYS.HOME} replace />;
	if (user?.role === UserRoles.ADMIN) return <Navigate to={ROUTER_KEYS.ADMIN} replace />;

	return <Navigate to={ROUTER_KEYS.DASHBOARD} replace />;
};
