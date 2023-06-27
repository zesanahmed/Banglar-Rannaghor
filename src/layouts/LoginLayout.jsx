import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayout = () => {
    return (
        <div>
            <div className='bg-slate-700 px-6 py-2'>
                <NavigationBar></NavigationBar>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginLayout;