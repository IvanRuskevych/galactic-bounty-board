import { Route } from "react-router-dom";
import { Auth, PublicDashboard } from "~/modules";
import { AuthAction } from "~/shared/constants";
import { ROUTER_KEYS } from "~/shared/keys";
import { GuestGuard, HomeAccessGuard } from "./auth.guard";

export const publicRoutes = (
	<Route>
		<Route element={<HomeAccessGuard />}>
			<Route path={ROUTER_KEYS.HOME} element={<PublicDashboard />} />
		</Route>
		<Route element={<GuestGuard />}>
			<Route path={ROUTER_KEYS.REGISTER} element={<Auth mode={AuthAction.REGISTER} />} />
			<Route path={ROUTER_KEYS.LOGIN} element={<Auth mode={AuthAction.LOGIN} />} />
		</Route>
	</Route>
);
