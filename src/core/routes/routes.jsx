import { createBrowserRouter } from "react-router-dom";
import { LoginContainer, MainContainer, MainLayout, Page1, PeopleContainer, WorkshopContainer } from "./imports";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <MainContainer />,
                children: [
                    {
                        path: "page1",
                        element: <Page1 />,
                    },
                ],
            },
            {
                path: "workshop",
                element: <WorkshopContainer />,
            },
            {
                path: "people",
                element: <PeopleContainer />,
            }
        ],
    },
    {
        path: "/login",
        element: <LoginContainer />,
    },
]);