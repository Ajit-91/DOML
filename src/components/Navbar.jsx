import React, { useState } from 'react';
import logo from "../assets/logo.png"
import Button from './Button';
import routes from '../routes';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const rightMenu = () => {
        return (
            <>
                <input
                    type="text"
                    placeholder='Search DOML'
                    className='bg-[#272F43] rounded-md px-5 py-2 text-sm text-gray-300 outline-0'
                />
                <Button px={3}>Sign In</Button>
                <Button
                    px={3}
                    rounded='md'
                    outline
                >Sign Up
                </Button>
            </>
        )
    }

    const renderRoutes = () => {
        return routes.map((route, index) => (
            <Link
                key={index}
                to={route.path}
                className={`text-gray-300 hover:bg-[#272F43] px-2 py-2 rounded-md block}`}
            > {route.name}
            </Link>
        ))
    }

    return (
        <nav className="bg-transparent mb-7">
            <div className="flex items-center justify-between lg:justify-left h-16">

                <div className="h-6 w-auto flex items-center">
                    <img src={logo} alt="logo" className='h-full' />
                </div>
                <div className="hidden w-full ml-4 lg:block">
                    <div className='flex justify-between items-center'>
                        {/* routes */}
                        <div className="flex items-center space-x-1">
                            {renderRoutes()}
                         </div>
                        {/*  */}
                        <div className='flex items-center space-x-1'>
                            {rightMenu()}
                        </div>
                    </div>
                </div>

                <div className="block lg:hidden">
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
                <div className="lg:hidden">
                    <div className="flex justify-left items-left flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {/* routes */}
                        {renderRoutes()}
                        {/*  */}
                        {rightMenu()}
                    
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
