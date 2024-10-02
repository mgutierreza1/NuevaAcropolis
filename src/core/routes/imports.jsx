import { lazy } from "react";

export const MainLayout = lazy(
    () => import("../layouts/mainlayout.layout.jsx")
);

export const LoginContainer = lazy(
    () => import("../../modules/login/containers/LoginContainer.jsx")
);

export const MainContainer = lazy(
    () => import("../../modules/home/containers/MainContainer.jsx")
);

export const WorkshopContainer = lazy(
    () => import("../../modules/workshop/containers/MainContainer.jsx")
);

export const CreateWorkshopContainer = lazy(
    () => import("../../modules/workshop/containers/CreateWorkshopContainer.jsx")
);

export const UpdateWorkshopContainer = lazy(
    () => import("../../modules/workshop/containers/UpdateWorkshopContainer.jsx")
);

export const Page1 = lazy(
    () => import("../../modules/home/pages/Page1.jsx")
);

export const Page2 = lazy(
    () => import("../../modules/home/pages/Page2.jsx")
);
