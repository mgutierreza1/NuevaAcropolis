import { lazy } from "react";

export const HomeContainer = lazy(
    () => import("../../modules/home/containers/HomeContainer.jsx")
);