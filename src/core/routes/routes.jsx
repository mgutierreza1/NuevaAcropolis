import { createBrowserRouter, Outlet } from "react-router-dom";
import { HomeContainer } from "./imports";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Outlet />,
        children: [
            {
                index: true,
                element: <HomeContainer />,
            }
        ],
    },
]);