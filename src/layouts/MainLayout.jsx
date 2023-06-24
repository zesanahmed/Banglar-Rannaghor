import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import ChefCard from '../pages/home/ChefCard';
import RightNav from '../pages/shared/RightNav/RightNav';

const MainLayout = () => {
    return (
        <div>
            <Header></Header>
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