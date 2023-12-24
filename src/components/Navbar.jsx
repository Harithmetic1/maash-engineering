"use client";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

function Navbar() {

    const [showNav, setShowNav] = useState(false);
    const [showSearch, setShowSearch] = useState(false);

    const handleShowSearch = () => {
        setShowSearch(!showSearch);
        setShowNav(false);
    }

    const handleShowNav = () => {
        setShowNav(!showNav);
        setShowSearch(false);
    }

  return (
    <>
    <nav className='p-3 hidden sm:flex text-sm lg:text-base xl:px-20  justify-evenly items-center w-full'>
        <div className="nav-icon w-full md:w-5/12">
            <Image 
            src='/maash_eng_logo.png' 
            alt='Maash Engineering Logo'
            width={186}
            height={60} 
            />
        </div>
        <div className="nav-links w-full md:w-7/12 flex justify-center gap-10 items-center">
            <div className="links border-r-2 border-black">
                <ul className='flex justify-between items-center'>
                    <li className='inline-block mr-5 cursor-pointer'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='inline-block mr-5 cursor-pointer'>
                        <Link href="/equipments">Equipments</Link>
                    </li>
                    <li className='inline-block mr-5 cursor-pointer'>
                        <Link href="/about">About Us</Link>
                    </li>
                </ul>
            </div>
            <div className="button">
                <button className='bg-black text-white font-bold py-2 px-3 rounded'>
                    Contact Us
                </button>
            </div>
        </div>
    </nav>

    <nav className={`p-3 flex flex-col sm:hidden text-sm lg:text-base xl:px-20 justify-evenly items-center w-full`}>
        <div className="mobile-navbar w-full z-10 flex justify-between items-center">
            <div className="hamburger-menu" onClick={handleShowNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
            </div>
            <div className="nav-icon flex items-center justify-center w-full">
                <Image 
                src='/maash_eng_logo.png' 
                alt='Maash Engineering Logo'
                width={186}
                height={60} 
                />
            </div>
            <div className='search-icon' onClick={handleShowSearch}>
                <FontAwesomeIcon icon={faSearch} className='text-black text-[24px] text-center'/>
            </div>
        </div>
        <div className={`nav-links z-0 ${showNav ? "reveal-nav" : "hide-nav"} w-full flex flex-col justify-center gap-4 items-center`}>
            <div className="links w-full">
                <ul className='flex flex-col gap-4 w-full justify-between items-center'>
                    <li className='inline-block cursor-pointer'>
                        <Link href="/">Home</Link>
                    </li>
                    <li className='inline-block cursor-pointer'>
                        <Link href="/equipments">Equipments</Link>
                    </li>
                    <li className='inline-block cursor-pointer'>
                        <Link href="/about">About Us</Link>
                    </li>
                </ul>
            </div>
            <div className="button">
                <button className='bg-black text-white font-bold py-2 px-3 rounded'>
                    Contact Us
                </button>
            </div>
        </div>
        <div className={`search-bar z-0 ${showSearch ? "reveal-search" : "hide-search"} w-full flex flex-col justify-center gap-4 items-center`}>
            <div className="search-bar-input w-full">
                <input type="text" placeholder='Search for equipments' className='w-full h-full p-3 rounded border border-black outline-none'/>
            </div>
            <div className="search-bar-button w-full">
                <button className='bg-black text-white font-bold py-2 px-3 rounded'>
                    Search
                </button>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar;