import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import ChefCard from '../pages/home/ChefCard';
import RightNav from '../pages/shared/RightNav/RightNav';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';

const MainLayout = () => {
    return (
        <div>
            <div className='relative'>
                <div>
                    <Header></Header>
                </div>
                <div className='absolute top-0 w-full'>
                    <NavigationBar></NavigationBar>
                </div>
                <div className='absolute top-48 w-full'>
                    <h2 className='text-center text-7xl font-semibold text-orange-400'>Quality Ingredients <br />
                        Incredible Taste
                    </h2>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                    <ChefCard></ChefCard>
                </div>
                <div className="">
                    <RightNav></RightNav>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;