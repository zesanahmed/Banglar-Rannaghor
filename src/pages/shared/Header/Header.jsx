import React from 'react';

const Header = () => {
    return (
        <div className="carousel w-full h-screen">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-photo/chef-adds-salt-steaming-hot-pan_192985-2749.jpg?w=900" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/composition-delicious-fresh-vegetables-with-copy-space_23-2148642972.jpg?w=1060&t=st=1687609675~exp=1687610275~hmac=05acd04e475a4a16c6d43477557c9d79ad4ddfd4a224b4418800edc9a3a4090f
                " className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-photo/ingredients-near-pizza_23-2147772081.jpg?w=1060&t=st=1687611325~exp=1687611925~hmac=c900ee06d466e345da607fd62a42fe8560544534b3dc16c767bc332ef364067a" className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Header;
