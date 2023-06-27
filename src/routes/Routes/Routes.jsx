import React from 'react';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import MainLayout from '../../layouts/MainLayout';
import Home from '../../pages/home/Home';
import Chef from '../../pages/chef/Chef';
import ChefLayout from '../../layouts/ChefLayout';
import ChefDetailsLayout from '../../pages/shared/ChefDetails/ChefDetailsLayout';
import LoginLayout from '../../layouts/LoginLayout';
import Login from '../../pages/login/Login/Login';
import Register from '../../pages/login/Register/Register';

const router = createBrowserRouter([

    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/mainLayout'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]
    },
    {
        path: "/mainLayout",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '',
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