import { Route } from "react-router-dom";
import { HunterDashboard, PublicDashboard } from "~/modules";
import { AuthGuard } from "~/routes/auth.guard";
import { UserRoles } from "~/shared/constants";
import { ROUTER_KEYS } from "~/shared/keys";

export const privateRoutes = (
	<Route element={<AuthGuard allowedRoles={[UserRoles.HUNTER]} />}>
		<Route path={ROUTER_KEYS.HOME} element={<PublicDashboard />} />
		<Route path={ROUTER_KEYS.DASHBOARD} element={<HunterDashboard />} />
	</Route>
);
