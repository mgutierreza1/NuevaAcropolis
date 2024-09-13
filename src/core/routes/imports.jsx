import { lazy } from "react";

export const MainContainer = lazy(
    () => import("../../modules/home/containers/MainContainer.jsx")
);

export const LoginContainer = lazy(
    () => import("../../modules/login/containers/LoginContainer.jsx")
);

export const Page1 = lazy(
    () => import("../../modules/home/pages/Page1.jsx")
);

export const Page2 = lazy(
    () => import("../../modules/home/pages/Page2.jsx")
);