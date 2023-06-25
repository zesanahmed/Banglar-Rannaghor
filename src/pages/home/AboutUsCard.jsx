import React from 'react';

const AboutUsCard = () => {
    return (
        <div className=''>
            <p className='text-2xl font-bold underline underline-offset-8 text-amber-500'>About Us</p>
            <p className='mt-4 text-5xl font-bold'>Have A Enjoyable Time With <br /> Foods</p>
            <div className='relative'>
                <img className='rounded-md mt-10' src="https://img.freepik.com/premium-photo/cook-man-holds-tablet-pc-thinking-how-prepare-fresh-vegetable-cocktail-blender_613910-9979.jpg" alt="" />
                <p className='absolute mx-10 rounded-2xl drop-shadow-lg px-4 py-5 bg-white  border -bottom-16 text-xl font-bold'>Preserving the Essence of Bangladesh: Honoring the Traditional Bangladeshi Chef</p>
            </div>
        </div>
    );
};

export default AboutUsCard;