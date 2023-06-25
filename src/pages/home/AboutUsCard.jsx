import React from 'react';

const AboutUsCard = () => {
    return (
        <div className=''>
            <p className='text-2xl font-bold underline underline-offset-8 text-amber-500 ml-2 lg:ml-0'>About Us</p>
            <p className='mt-4 ml-2 lg:ml-0 text-5xl font-bold'>Have A Enjoyable Time With <br /> Foods</p>
            <div className='relative'>
                <img className='rounded-md mt-10' src="https://img.freepik.com/premium-photo/cook-man-holds-tablet-pc-thinking-how-prepare-fresh-vegetable-cocktail-blender_613910-9979.jpg" alt="" />
                <p className='absolute mx-10 rounded-2xl drop-shadow-lg px-4 py-5 bg-white  border -bottom-16 text-xl font-bold'>Preserving the Essence of Bangladesh: Honoring the Traditional Bangladeshi Chef</p>
            </div>
            <div className='relative mt-28'>
                <img className='rounded-md mt-10 w-full' src="https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?w=360&t=st=1687709188~exp=1687709788~hmac=b25bf5a4b29803fb363d117d80cd1f067926637bd1d2928e6824eda439d362a3" alt="" />
                <p className='absolute mx-10 rounded-2xl drop-shadow-lg px-4 py-5 bg-white  border -bottom-16 text-xl font-bold'>Preserving the Essence of Bangladesh: Honoring the Traditional Bangladeshi Chef</p>
            </div>
            <img className='mt-20 w-full ' src="https://img.freepik.com/premium-vector/cartoon-happy-chef-with-ok-sign_29190-5460.jpg?w=740" alt="" />
        </div>
    );
};

export default AboutUsCard;