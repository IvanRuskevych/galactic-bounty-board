import { Route } from "react-router-dom";
import { AdminDashboard } from "~/modules";
import { AuthGuard } from "~/routes/auth.guard";
import { UserRoles } from "~/shared/constants";
import { ROUTER_KEYS } from "~/shared/keys";

export const adminRoutes = (
	<Route element={<AuthGuard allowedRoles={[UserRoles.ADMIN]} />}>
		<Route path={ROUTER_KEYS.ADMIN} element={<AdminDashboard />} />
	</Route>
);
