// import { createBrowserRouter, Outlet } from "react-router-dom";
// import { MainContainer, LoginContainer, Page1, Page2 } from "./imports";

// export const router = createBrowserRouter([
//     {
//         path: "/*",
//         element: <Outlet />,
//         children: [
//             {
//                 index: true,
//                 element: <MainContainer />,
//             }
//         ],
//     },
//     {
//         path: "/page1",
//         element: <Outlet />,
//         children: [
//             {
//                 index: true,
//                 element: <Page1 />,
//             }
//         ],
//     },
//     {
//         path: "/page2",
//         element: <Outlet />,
//         children: [
//             {
//                 index: true,
//                 element: <Page2 />,
//             }
//         ],
//     },
//     {
//         path: "/login",
//         element: <Outlet />,
//         children: [
//             {
//                 index: true,
//                 element: <LoginContainer />,
//             }
//         ],
//     },
// ]);

import { createBrowserRouter, Outlet } from "react-router-dom";
import { MainContainer, LoginContainer, Page1, Page2 } from "./imports";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainContainer />,
        children: [
            {
                path: "/page1",
                element: <Page1 />,
            },
            {
                path: "/page2",
                element: <Page2 />,
            }
        ],
    },
    {
        path: "/login",
        element: <LoginContainer />,
    },
]);
