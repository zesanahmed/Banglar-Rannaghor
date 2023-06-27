import React, { useState } from 'react';
import { FaCaretRight, FaCircle, FaRegStar } from 'react-icons/fa';
import { PiDotOutlineBold } from "react-icons/pi";
import { toast } from 'react-toastify';

const RecipeCard = ({ recipe }) => {
    const { rating, recipe_name, recipe_img, method, ingredients } = recipe;

    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const handleToastClick = () => {
        setIsButtonDisabled(true);
        toast.success('Added to favorites!');
    };
    return (

        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img className='w-72' src={recipe_img} alt="Album" /></figure>
            <div className="card-body">
                <div className='flex items-center justify-between'>
                    <h2 className="card-title">{recipe_name}</h2>
                    <button className='btn' onClick={handleToastClick} disabled={isButtonDisabled}><FaRegStar className='text-xl'></FaRegStar></button>

                </div>
                <div>
                    <p className='font-bold '>Method:</p>
                    <p className='w-64 mx-0'>{method}</p>
                </div>
                <div>
                    <p className='font-bold '>Ingredients:</p>
                    <div> {ingredients.map((element, index) => (
                        <p className='flex' key={index}>
                            {element}</p>
                    ))}</div>
                </div>
            </div>
        </div>

    );
};

export default RecipeCard;