import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefCard from '../home/ChefCard';

const Chef = () => {
    const allChef = useLoaderData();

    return (
        <div className='grid grid-cols-2 gap-4 px-6 mt-20'>
            {
                allChef.map(chef => <ChefCard
                    key={chef.id}
                    chef={chef}
                ></ChefCard>)
            }
        </div>
    );
};

export default Chef;