import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // You can use any icon library

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const navLinkClass = ({ isActive }) =>
        `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 
        ${isActive ? "text-orange-700" : "text-gray-700"} 
        lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`;

    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link to="/" className="flex items-center">
                        <img
                            src="https://res.cloudinary.com/dmcyloryn/image/upload/v1743830366/dh3p8ez1jfdtc1h0q99e.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>

                    {/* Hamburger Button */}
                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Navigation Links */}
                    <div
                        className={`${isOpen ? "block" : "hidden"} w-full lg:flex lg:w-auto lg:order-1`}
                        id="mobile-menu"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
                            <li><NavLink to="/about" className={navLinkClass}>About</NavLink></li>
                            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
                            <li><NavLink to="/project" className={navLinkClass}>Projects</NavLink></li>
                            <li><NavLink to="/map" className={navLinkClass}>Map</NavLink></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
