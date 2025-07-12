import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import App from "~/modules/app/app.module";
import { privateRoutes } from "~/routes/privat.routes";
import { publicRoutes } from "~/routes/public.routes";
import { InitialRedirectRoute } from "~/routes/routes";
import { ROUTER_KEYS } from "~/shared/keys";
import { adminRoutes } from "./admin.routes";

export const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={ROUTER_KEYS.MAIN} element={<App />}>
			<Route index element={<InitialRedirectRoute />} />
			{publicRoutes},{privateRoutes},{adminRoutes}
			<Route path="*" element={<Navigate to={ROUTER_KEYS.HOME} replace />} />
		</Route>,
	),
);
