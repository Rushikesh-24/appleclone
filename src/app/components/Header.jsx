'use client'
import React, { useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    
  };
  return (
    <header className='h-10 justify-center items-center flex z-50 fixed w-screen opacity-75 bg-black'>
        <div className="flex fixed justify-between w-auto items-center m-5 right-0 top-0">
        <button
          onClick={handleClick}
          className="relative flex-col justify-center items-center mr-3 z-50 md:hidden"
        >
          <span
            className={`bg-gray-200 block transition-all duration-300 ease-out 
                      h-0.5 md:w-10 rounded-sm w-5 ${
                        isOpen
                          ? "rotate-45 md:translate-y-2.5 translate-y-1 bg-gray-600"
                          : "-translate-y-0.5"
                      }`}
          ></span>
          <span
            className={`bg-gray-200 block transition-all duration-300 ease-out 
                      h-0.5 md:w-10 rounded-sm md:my-2 my-0.5 w-5 ${
                        isOpen ? "opacity-0" : "opacity-100 "
                      }`}
          ></span>
          <span
            className={`bg-gray-200 block transition-all duration-300 ease-out 
                      h-0.5 md:w-10 rounded-sm w-5 ${
                        isOpen
                          ? "-rotate-45 md:-translate-y-2.5 -translate-y-1 bg-gray-600"
                          : "translate-y-0.5"
                      }`}
          ></span>
        </button>
        </div>
        <ul className='text-gray-400 flex flex-row fixed gap-9 text-xs justify-center items-center text-center w-screen'>
            <li className='text-lg'></li>
            <li>Store</li>
            <li>Mac</li>
            <li>iPad</li>
            <li>iPhone</li>
            <li>Watch</li>  
            <li>Vision</li>
            <li>AirPods</li>
            <li>TV & Home</li>
            <li>Entertaintment</li>
            <li>Ascessories</li>
            <li>Support</li>
            <li><img src="asset/search.png" alt="" /></li>
            <li><img src="asset/shopping-bag.png" alt="" className='w-4'/></li>
        </ul>
    </header>
  )
}

export default Header