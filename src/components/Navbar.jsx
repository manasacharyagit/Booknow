import React from "react";
import logo from '../assets/logo.png'
const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white px-4 py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo/Brand Name */}
                <a href="/" className="text-2xl font-bold">
                    BookNow
                </a>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-6">
                    <a href="#" className="hover:text-yellow-500">
                        Home
                    </a>
                    <a href="#" className="hover:text-yellow-500">
                        About
                    </a>
                    <a href="#" className="hover:text-yellow-500">
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
