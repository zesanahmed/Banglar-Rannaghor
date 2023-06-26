import React from 'react';

const RecipeCard = ({ recipe }) => {
    const { rating, recipe_name, recipe_img } = recipe;
    return (

        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={recipe_img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipe_name}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>

    );
};

export default RecipeCard;