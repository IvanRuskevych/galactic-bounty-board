import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from "react-router-dom";
import App from "../modules/app/app.module.tsx";
import { ROUTER_KEYS } from "../shared/keys";
import { adminRoutes } from "./admin.routes.tsx";
import { privateRoutes } from "./privat.routes.tsx";
import { publicRoutes } from "./public.routes.tsx";
import { InitialRedirectRoute } from "./routes.tsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTER_KEYS.MAIN} element={<App/>}>
      <Route index element={<InitialRedirectRoute/>}/>
      {publicRoutes},
      {privateRoutes},
      {adminRoutes}
      
      <Route path="*" element={<Navigate to={ROUTER_KEYS.HOME} replace/>}/>
    </Route>,
  ));