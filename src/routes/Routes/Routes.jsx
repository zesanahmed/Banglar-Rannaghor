import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from '../../layouts/MainLayout';
import Home from '../../pages/home/Home';
import Chef from '../../pages/chef/Chef';

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Chef></Chef>,
                loader: () => fetch('http://localhost:5000/chefData')
            }
        ]
    },
]);

export default router;