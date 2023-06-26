import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import MainLayout from '../../layouts/MainLayout';
import Home from '../../pages/home/Home';
import Chef from '../../pages/chef/Chef';
import ChefLayout from '../../layouts/ChefLayout';
import ChefDetailsLayout from '../../pages/shared/ChefDetails/ChefDetailsLayout';

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
    {
        path: "/chefLayout/:id",
        element: <ChefLayout></ChefLayout>,
        loader: ({ params }) => fetch(`http://localhost:5000/chefData/${params.id}`),
    }

]);

export default router;