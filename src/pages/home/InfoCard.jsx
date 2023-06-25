import React from 'react';
import { FaHamburger, FaUserFriends, } from 'react-icons/fa';
import { BiBowlRice } from "react-icons/bi";
import { LuChefHat } from "react-icons/lu";

const InfoCard = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 mx-16 text-center'>
            <div className="card bg-base-100 shadow-2xl hover:text-amber-500">
                <p className='card-body items-center text-center text-6xl pt-16 pb-0'><FaHamburger /></p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl mb-2">Fresh Product</h2>
                    <p className='text-lg text-zinc-500'> From Farm to Table: Discover the Freshness of Our Handpicked Selection.</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-2xl hover:text-amber-500">
                <p className='card-body items-center text-center text-6xl pt-16 pb-0'><FaUserFriends /></p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl mb-2">Skilled Chefs</h2>
                    <p className='text-lg text-zinc-500'> The Culinary Virtuoso: Unveiling the Skill and Mastery of <br /> Chef.</p>
                </div>
            </div>
            <div className="card  bg-base-100 shadow-2xl hover:text-amber-500">
                <p className='card-body items-center text-center text-6xl pt-16 pb-0'><BiBowlRice /></p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl mb-2">Vegan Cuisine</h2>
                    <p className='text-lg text-zinc-500'> Elevating Plant-Based Delights: <br /> Indulge in the Flavors of Vegan Cuisine</p>
                </div>
            </div>
            <div className="card bg-base-100 shadow-2xl hover:text-amber-500">
                <p className='card-body items-center text-center text-6xl pt-16 pb-0'> <LuChefHat /></p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl mb-2">Master Chef</h2>
                    <p className='text-lg text-zinc-500'> From Farm to Table: Discover the Freshness of Our Handpicked Selection.</p>
                </div>
            </div>

        </div>
    );
};

export default InfoCard;