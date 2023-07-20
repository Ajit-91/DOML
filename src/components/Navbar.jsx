import React, { useState } from 'react';
import logo from "../assets/logo.png"
import Button from './Button';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-transparent mb-7">
            <div className="flex items-center h-16">
                <div className="h-1/2 flex items-center">
                    {/* <div className="flex-shrink-0 text-white font-bold text-xl">Your Logo</div> */}
                    <img src={logo} alt="logo" className='h-full' />
                </div>
                <div className="hidden w-full ml-4 md:block">
                    <div className='flex justify-between items-center'>
                        {/* links */}
                        <div className="flex items-center space-x-2">
                            <a href="#home" className="text-gray-300 hover:bg-[#272F43] px-3 py-2 rounded-md">
                                Product
                            </a>
                            <a href="#about" className="text-gray-300 hover:bg-[#272F43] px-3 py-2 rounded-md">
                                Team
                            </a>
                            <a href="#services" className="text-gray-300 hover:bg-[#272F43] px-3 py-2 rounded-md">
                                Enterprise
                            </a>
                            <a href="#contact" className="text-gray-300 hover:bg-[#272F43] px-3 py-2 rounded-md">
                                Explore
                            </a>
                            <a href="#contact" className="text-gray-300 hover:bg-[#272F43] px-3 py-2 rounded-md">
                                Marketplace
                            </a>
                            <a href="#contact" className="text-gray-300 hover:bg-[#272F43] px-3 py-2 rounded-md">
                                Pricing
                            </a>
                        </div>
                        {/*  */}
                        <div className='flex items-center space-x-1'>
                            <input 
                                type="text" 
                                placeholder='Search DOML' 
                                className='bg-[#272F43] rounded-md px-5 py-2 text-sm text-gray-300' 
                            />
                            <Button px={3}>Sign In</Button>
                            <Button 
                                px={3}
                                rounded='md'
                                outline
                            >Sign Up</Button>
                        </div>
                    </div>
                </div>

                <div className="block md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
                    >
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </div>


            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#home" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md">
                            Home
                        </a>
                        <a href="#about" className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md">
                            About
                        </a>
                        <a
                            href="#services"
                            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md"
                        >
                            Services
                        </a>
                        <a
                            href="#contact"
                            className="text-gray-300 hover:bg-gray-700 block px-3 py-2 rounded-md"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
