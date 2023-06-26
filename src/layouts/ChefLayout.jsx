import React from 'react';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';
import { Outlet, useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import Footer from '../pages/shared/Footer/Footer';
import RecipeCard from '../pages/home/RecipeCard';

const ChefLayout = () => {
    const { id, img, name, experience, recipes, likes, bio } = useLoaderData();
    return (
        <div>
            <img className='w-full h-screen relative' src="https://img.freepik.com/premium-photo/table-with-candle-candles-it_168501-423.jpg?w=1060" alt="" />
            <p className='absolute top-0 w-full p-4'><NavigationBar></NavigationBar></p>
            <div className='flex text-end  ml-20 gap-20 absolute top-28 pt-10'>
                <figure><img className='lg:w-80 lg:h-5/6 border-2 border-white rounded-xl ' src={img} alt="" /></figure>
                <div className='mt-6 text-left'>
                    <p className='text-4xl font-bold text-amber-500'>{name}</p>
                    <p className='text-white text-xl mt-3'>{experience} Years of experience</p>
                    <p className='text-white text-xl mt-1'>Numbers of Recipes: {recipes.length}</p>
                    <div className='flex gap-3 border-2 border-amber-400 rounded-lg px-4 text-white mt-2 w-28'>
                        <p className='mt-1'><FaThumbsUp /></p>
                        <p>{likes}</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
            <div className='mx-10'>
                <p className='text-slate-900 text-4xl font-bold mt-5'>Description:</p>
                <p className='mt-2 pr-5 pl-1 text-gray-500'>{bio}</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 mx-10 my-16'>
                {
                    recipes.map(recipe => <RecipeCard
                        key={recipe.rating}
                        recipe={recipe}
                    ></RecipeCard>)
                }
            </div>
            <Footer></Footer>
        </div >
    );
};

export default ChefLayout;