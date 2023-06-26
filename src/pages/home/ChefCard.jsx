import React from 'react';
import { FaCaretRight, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const { id, img, name, experience, recipes, likes } = chef;
    return (
        <div className="card w-80 mb-4 glass">
            <figure className='h-96'><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl font-bold">{name}</h2>
                <div className='ml-2'>
                    <div className='flex'>
                        <div className='mt-1'><FaCaretRight /></div>
                        <p> {experience} Years of experience</p>
                    </div>
                    <div className='flex'>
                        <div className='mt-1'><FaCaretRight /></div>
                        <p> Numbers of recipes: {recipes.length}</p>
                    </div>
                </div>
                <div className="card-actions justify-between">
                    <div className='flex gap-3 ml-2 border-2 border-amber-400 rounded-lg px-4'>
                        <p className='mt-1'><FaThumbsUp /></p>
                        <p>{likes}</p>
                    </div>
                    <button className="btn btn-warning"><Link to={`/chefLayout/${id}`}>View Recipes</Link></button>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;