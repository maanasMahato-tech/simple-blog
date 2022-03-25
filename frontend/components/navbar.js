import React, { useState } from 'react';
import Link from 'next/link';

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <div className="bg-gradient-to-r from-blue-200 to-blue-100">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            {menuOpen &&
                <div className="no-underline text-gray-800 font-semibold hover:text-gray-600 flex flex-col p-4 list-none">
                    <li className='my-2'><Link href="/" passHref>Blog</Link></li>
                    <li className='my-2'><Link href="/contact" passHref>Contact</Link></li>
                    <li className='my-2'><Link href="/policy" passHref>Policy</Link></li>
                </div>
            }
        </div>
    );
};

const Navbar = ({ menuOpen, setMenuOpen }) => (
    <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
            <a href="#home" className="text-xl font-bold no-underline text-gray-800 hover:text-gray-600">Simple Blog</a>
        </div>
        <nav className="hidden md:block space-x-6">
            <div className="no-underline text-gray-800 font-semibold hover:text-gray-600 flex flex-row list-none">
                <li className='mx-2'><Link href="/" passHref>Blog</Link></li>
                <li className='mx-2'><Link href="/contact" passHref>Contact</Link></li>
                <li className='mx-2'><Link href="/policy" passHref>Policy</Link></li>
            </div>
        </nav>
        <button type="button" aria-label="Toggle mobile menu" onClick={() => setMenuOpen(!menuOpen)} className="rounded md:hidden focus:outline-none focus:ring focus:ring-gray-500 focus:ring-opacity-50"><MenuAlt4Svg menuOpen={menuOpen} /></button>
    </div>
);
const MenuAlt4Svg = ({ menuOpen }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`transition duration-100 ease h-8 w-8 ${menuOpen ? 'transform rotate-90' : ''}`} viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
    </svg>
);