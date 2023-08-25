import React, { useState, useEffect } from 'react';
import './style.css';
const brandLogo = require('../assets/images/logo.png');
const bagLogo = require('../assets/icons/bag.png');
const menuLogo = require('../assets/icons/menu.png');

const Header = () => {

    const [showNav, setShowNav] = useState(false);

    const showNavContent = () => {
        setShowNav(!showNav);
    }
    return (
        <header>
            <nav className="p-4 mx-12 navbar">
                <div className="container mx-auto flex justify-between content-center items-center flex-wrap">
                    {/* Logo and Brand Name */}
                    <div className="flex items-center mb-2 md:mb-0">
                        <img src={brandLogo} alt="Logo" className="w-12 h-12 mr-2 cursor-pointer" />
                        <span className="text-white text-2xl font-bold cursor-pointer">Olfactors</span>
                    </div>

                    {/* Navigation Links */}
                    <ul className="flex flex-wrap md:space-x-5 menu-list justify-evenly item-center visible">
                        <li><a href="/" className="text-white hover:text-gray-600">Home</a></li>
                        <li><a href="/products" className="text-white hover:text-gray-600">Shop</a></li>
                        <li><a href="/about" className="text-white hover:text-gray-600">About</a></li>
                        <li><a href="/contact" className="text-white hover:text-gray-600">Contact</a></li>
                    </ul>

                    {/* Cart Link */}
                    <div className='flex items-center flex-wrap cart-button'>
                        <img src={bagLogo} alt="bag" className="w-6 h-6 mr-2 cursor-pointer cart-logo" />
                        <a href="/cart" className="text-white ml-auto md:ml-0">
                            Cart
                        </a>
                    </div>

                    <div className='menu-icon' onClick={showNavContent}>
                        <img src={menuLogo} alt="" className="w-6 h-6 mr-2 cursor-pointer" />
                    </div>

                    {showNav ?
                        <ul className="flex flex-wrap md:space-x-5 menu-list justify-evenly item-center mobile-menu">
                            <li><a href="/" className="text-white hover:text-gray-600">Home</a></li>
                            <li><a href="/cart" className="text-white hover:text-gray-600">Cart</a></li>
                            <li><a href="/products" className="text-white hover:text-gray-600">Shop</a></li>
                            <li><a href="/about" className="text-white hover:text-gray-600">About</a></li>
                            <li><a href="/contact" className="text-white hover:text-gray-600">Contact</a></li>
                        </ul>
                        :
                        <></>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header