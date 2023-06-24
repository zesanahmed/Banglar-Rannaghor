import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-800 py-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
                        <p className="text-gray-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at risus ligula.</p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-semibold mb-4">Explore</h3>
                        <nav className="text-gray-300">
                            <ul>
                                <li><Link to="/" className="hover:text-white">Home</Link></li>
                                <li><Link to="/chefs" className="hover:text-white">Chefs</Link></li>
                                <li><Link to="/recipes" className="hover:text-white">Recipes</Link></li>
                                <li><Link to="/about" className="hover:text-white">About</Link></li>
                                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
                        <p className="text-gray-300">123 Main Street, City</p>
                        <p className="text-gray-300">Email: info@example.com</p>
                        <p className="text-gray-300">Phone: 123-456-7890</p>
                    </div>
                    <div className="col-span-1">
                        <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <FaFacebook className='text-white'></FaFacebook>
                            <FaInstagram className='text-white'></FaInstagram>
                            <FaYoutube className='text-white'></FaYoutube>
                            <FaTwitter className='text-white'></FaTwitter>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-8 text-gray-500">
                    &copy; {new Date().getFullYear()} Your Chef Website. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;