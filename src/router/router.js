import React from "react";
import { createBrowserRouter } from "react-router";
import HomePage from "../pages/Home/Homepage";
import MainLayout from "../components/MainLayout/MainLayout";
import Connect from "../pages/Connect/Connect";
import Develop from "../pages/Develop/Develop";
import Refference from "../pages/Refference/Refference";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/side-bar1", // tương đương với /layout
                element: <HomePage />,
            },
            {
                path: "/side-bar2", // tương đương với /layout
                element: <Connect />,
            },
            {
                path: "/side-bar3", // tương đương với /layout
                element: <Develop />,
            },
            {
                path: "/side-bar4", // tương đương với /layout
                element: <Refference />,
            },
        ]
    }
]);
