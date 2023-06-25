import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <div className="navbar text-white">
            <div className="navbar-start">
                <p className='text-xl font-bold text-white'><span className='text-3xl'>Banglar </span> Ranna<span className='text-amber-500 text-3xl'>Ghor</span></p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <button className="ml-6 text-xl font-semi-bold text-white hover:text-amber-500"><Link to='/'>Home</Link></button>
                    <button className="ml-6 text-xl font-semi-bold text-white hover:text-amber-500"><Link to='/blog'>Blog</Link></button>
                    <button className="ml-6 text-xl font-semi-bold text-white hover:text-amber-500"><Link to='/about'>About Us</Link></button>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn btn-outline btn-warning px-6">Login</button>
            </div>
        </div>
    );
};

export default NavigationBar;