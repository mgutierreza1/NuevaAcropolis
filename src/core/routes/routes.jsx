import { createBrowserRouter } from "react-router-dom";
import { CreateWorkshopContainer, LoginContainer, MainContainer, MainLayout, Page1, Page2, UpdateWorkshopContainer, WorkshopContainer } from "./imports";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "",
                children: [
                    {
                        index: true,
                        path: "",
                        element: <MainContainer />,
                    },
                    {
                        path: "page1",
                        element: <Page1 />,
                    },
                ],
            },
            {
                path: "workshop",
                children: [
                    {
                        path: "",
                        index: true,
                        element: <WorkshopContainer />,
                    },
                    {
                        path: "create_workshop",
                        element: <CreateWorkshopContainer />
                    },
                    {
                        path: "update_workshop/:id",
                        element: <UpdateWorkshopContainer />
                    }
                ]
            },
            {
                path: "page2",
                element: <Page2 />,
            }
        ],
    },
    {
        path: "/login",
        element: <LoginContainer />,
    },
]);