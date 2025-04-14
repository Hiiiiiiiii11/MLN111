import React from "react";
import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home/Homepage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    // {
    //     path: "/about",
    //     element: <AboutPage />,
    // },
]);
