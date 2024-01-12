'use client'
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
    
  };
  const [dropdownStates, setDropdownStates] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
    item6: false,
    item7: false,
    item8: false,
    item9: false,
    item10: false,
    item11: false,
    item12: false,
  });

  const handleMouseEnter = (itemName) => {
    setDropdownStates({ ...dropdownStates, [itemName]: true });
  };

  const handleMouseLeave = (itemName) => {
    setDropdownStates({ ...dropdownStates, [itemName]: false });
  };

  const handleDropdownMouseEnter = (itemName) => {
    setDropdownStates({ ...dropdownStates, [itemName]: true });
  };
  const handleDropdownMouseLeave = (itemName) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.relatedTarget)) {
      setDropdownStates({ ...dropdownStates, item1: false,item2:false,item3:false,item4:false,item5:false,item6:false,item7:false,item8:false,item9:false,item10:false,item11:false,item12:false});
    }
  };
  useEffect(() => {
    // Event listener to handle dropdown mouse leave
    document.addEventListener('mouseout', handleDropdownMouseLeave);

    return () => {
      document.removeEventListener('mouseout', handleDropdownMouseLeave);
    };
  }, [dropdownStates]);
  return (
    <header className={`h-10 justify-center items-center flex z-50 fixed w-screen bg-black ${Object.values(dropdownStates).some((state) => state) ? '' : 'opacity-75'}`}>
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
        <ul className='text-gray-400 md:flex flex-row fixed gap-9 text-xs justify-center items-center text-center w-screen h-10 opacity-80 hidden'>
            <li className='text-lg'> <Link href={"/"}></Link></li>
            <li
            onMouseEnter={() => handleMouseEnter('item1')} onMouseLeave={() => handleMouseLeave('item1')}
            className='h-full items-center justify-center flex cursor-pointer'>Store</li>
            <li
             onMouseEnter={() => handleMouseEnter('item2')} onMouseLeave={() => handleMouseLeave('item2')}
             className='h-full items-center justify-center flex cursor-pointer'>Mac</li>
            <li
            onMouseEnter={() => handleMouseEnter('item3')} onMouseLeave={() => handleMouseLeave('item3')}
            className='h-full items-center justify-center flex cursor-pointer'>iPad</li>
            <li
            onMouseEnter={() => handleMouseEnter('item4')} onMouseLeave={() => handleMouseLeave('item4')}
            className='h-full items-center justify-center flex cursor-pointer'>iPhone</li>
            <li
            onMouseEnter={() => handleMouseEnter('item5')} onMouseLeave={() => handleMouseLeave('item5')}
            className='h-full items-center justify-center flex cursor-pointer'>Watch</li>  
            <li>Vision</li>
            <li
            onMouseEnter={() => handleMouseEnter('item6')} onMouseLeave={() => handleMouseLeave('item6')}
            className='h-full items-center justify-center flex cursor-pointer'>AirPods</li>
            <li
            onMouseEnter={() => handleMouseEnter('item7')} onMouseLeave={() => handleMouseLeave('item7')}
            className='h-full items-center justify-center flex cursor-pointer'>TV & Home</li>
            <li
            onMouseEnter={() => handleMouseEnter('item8')} onMouseLeave={() => handleMouseLeave('item8')}
            className='h-full items-center justify-center flex cursor-pointer'>Entertaintment</li>
            <li
            onMouseEnter={() => handleMouseEnter('item9')} onMouseLeave={() => handleMouseLeave('item9')}
            className='h-full items-center justify-center flex cursor-pointer'>Ascessories</li>
            <li
            onMouseEnter={() => handleMouseEnter('item10')} onMouseLeave={() => handleMouseLeave('item10')}
            className='h-full items-center justify-center flex cursor-pointer'>Support</li>
            <li
            onMouseEnter={() => handleMouseEnter('item11')} onMouseLeave={() => handleMouseLeave('item11')}
            className='h-full items-center justify-center flex cursor-pointer'><img src="asset/search.png" alt="" /></li>
            <li
            onMouseEnter={() => handleMouseEnter('item12')} onMouseLeave={() => handleMouseLeave('item12')}
            className='h-full items-center justify-center flex cursor-pointer'><img src="asset/shopping-bag.png" alt="" className='w-4'/></li>
        </ul>
        {/* Store  */}
        {dropdownStates.item1 && (
        <div
        className="bg-black w-screen flex h-screen justify-center text-white mt-20"
        onMouseEnter={() => handleDropdownMouseEnter('item1')}
        ref={dropdownRef}
        >
          <div className='absolute top-0 left-0 mt-20 ml-40 flex flex-row'>
          <ul id="dropdown" className='flex flex-col justify-start gap-2'>
            <li className='text-xs text-gray-500'>Shop</li>
            <li className='text-2xl font-medium cursor-pointer'>Shop The Latest</li>
            <li className='text-2xl font-medium cursor-pointer'>Mac</li>
            <li className='text-2xl font-medium cursor-pointer'>iPad</li>
            <li className='text-2xl font-medium cursor-pointer'>iPhone</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Watch</li>
            <li className='text-2xl font-medium cursor-pointer'>Accesories</li>
          </ul>
          <ul className='flex flex-col justify-start gap-2 ml-20'>
            <li className='text-xs text-gray-500'>Quick Links</li>
            <li className='text-xs mt-4 cursor-pointer'>Find a Store</li>
            <li className='text-xs cursor-pointer'>Order Status</li>
            <li className='text-xs cursor-pointer'>Apple Trade In</li>
            <li className='text-xs cursor-pointer'>Financing</li>
          </ul>
          <ul className='flex flex-col justify-start gap-2 ml-20'>
            <li className='text-xs text-gray-500'>Shop Special Bonus</li>
            <li className='text-xs mt-4 cursor-pointer'>Certified Refurbished</li>
            <li className='text-xs cursor-pointer'>Education</li>
            <li className='text-xs cursor-pointer'>Buisness</li>
            <li className='text-xs cursor-pointer'>Veterans and Military</li>
            <li className='text-xs cursor-pointer'>Government</li>
          </ul>
          </div>
        </div>
      )}
      {/* Mac  */}
      {dropdownStates.item2 && (
        <div
        id='dropdown-container' 
        className=" bg-black w-screen flex h-screen justify-center text-white mt-20"
        onMouseEnter={() => handleDropdownMouseEnter('item2')}
        ref={dropdownRef}>
          <div className='absolute top-0 left-0 mt-20 ml-40 flex flex-row'>
          <ul id="dropdown" className='flex flex-col justify-start gap-2'>
            <li className='text-xs text-gray-500'>Explore Mac</li>
            <li className='text-2xl font-medium cursor-pointer'>Explore All Mac</li>
            <li className='text-2xl font-medium cursor-pointer'>MacBook Air</li>
            <li className='text-2xl font-medium cursor-pointer'>MacBook Pro</li>
            <li className='text-2xl font-medium cursor-pointer'>iMac</li>
            <li className='text-2xl font-medium cursor-pointer'>Mac Mini</li>
            <li className='text-2xl font-medium cursor-pointer'>Mac Studio</li>
            <li className='text-2xl font-medium cursor-pointer'>MacPro</li>
            <li className='text-2xl font-medium cursor-pointer'>MacPro</li>
            <li className='text-2xl font-medium cursor-pointer'>Displays</li>
            <li className='text-xs mt-4 cursor-pointer'>ComapreMac</li>
            <li className='text-xs  cursor-pointer'>MacDoesThat</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>Shop Mac</li>
            <li className='text-xs cursor-pointer'>Shop Mac</li>
            <li className='text-xs cursor-pointer'>Mac Accessories</li>
            <li className='text-xs cursor-pointer'>Apple Trade In</li>
            <li className='text-xs cursor-pointer'>Financing</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>More from Mac</li>
            <li className='text-xs cursor-pointer'>Mac Support</li>
            <li className='text-xs cursor-pointer'>AppleCare+ for Mac</li>
            <li className='text-xs cursor-pointer'>macOS Sonoma</li>
            <li className='text-xs cursor-pointer'>Apps by Apple</li>
            <li className='text-xs cursor-pointer'>Continuity</li>
            <li className='text-xs cursor-pointer'>iCloud+</li>
            <li className='text-xs cursor-pointer'>Mac For Buisness</li>
            <li className='text-xs cursor-pointer'>Education</li>
          </ul>
          </div>
        </div>
      )}
      {/* iPad  */}
      {
        dropdownStates.item3 && (
          <div
        id='dropdown-container' 
        className=" bg-black w-screen flex h-screen justify-center text-white mt-20"
        onMouseEnter={() => handleDropdownMouseEnter('item3')}
        ref={dropdownRef}>
          <div className='absolute top-0 left-0 mt-20 ml-40 flex flex-row'>
          <ul id="dropdown" className='flex flex-col justify-start gap-2'>
            <li className='text-xs text-gray-500'>Explore iPad</li>
            <li className='text-2xl font-medium cursor-pointer'>Explore All iPad</li>
            <li className='text-2xl font-medium cursor-pointer'>iPad Pro</li>
            <li className='text-2xl font-medium cursor-pointer'>iPad Air</li>
            <li className='text-2xl font-medium cursor-pointer'>iPad</li>
            <li className='text-2xl font-medium cursor-pointer'>iPad Mini</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Pencil</li>
            <li className='text-2xl font-medium cursor-pointer'>Keyboards</li>
            <li className='text-xs mt-4 cursor-pointer'>Comapre iPad</li>
            <li className='text-xs cursor-pointer'>Why iPad</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>Shop iPad</li>
            <li className='text-xs cursor-pointer'>Shop iPad</li>
            <li className='text-xs cursor-pointer'>iPad Accessories</li>
            <li className='text-xs cursor-pointer'>Apple Trade In</li>
            <li className='text-xs cursor-pointer'>Financing</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>More from iPad</li>
            <li className='text-xs cursor-pointer'>iPad Support</li>
            <li className='text-xs cursor-pointer'>AppleCare+ for iPad</li>
            <li className='text-xs cursor-pointer'>iPadOS 17</li>
            <li className='text-xs cursor-pointer'>Apps by Apple</li>
            <li className='text-xs cursor-pointer'>iCloud+</li>
            <li className='text-xs cursor-pointer'>Education</li>
          </ul>
          </div>
        </div>
        )
      }
      {/* iPhone  */}
      {
        dropdownStates.item4 && (
          <div
        id='dropdown-container' 
        className=" bg-black w-screen flex h-screen justify-center text-white mt-20"
        onMouseEnter={() => handleDropdownMouseEnter('item4')}
        ref={dropdownRef}>
          <div className='absolute top-0 left-0 mt-20 ml-40 flex flex-row'>
          <ul id="dropdown" className='flex flex-col justify-start gap-2'>
            <li className='text-xs text-gray-500'>Explore iPhones</li>
            <li className='text-2xl font-medium cursor-pointer'>Explore All iPhones</li>
            <li className='text-2xl font-medium cursor-pointer'>iPhone 15 Pro</li>
            <li className='text-2xl font-medium cursor-pointer'>iPhone 15</li>
            <li className='text-2xl font-medium cursor-pointer'>iPhone 14</li>
            <li className='text-2xl font-medium cursor-pointer'>Phone 13</li>
            <li className='text-2xl font-medium cursor-pointer'>Phone SE</li>
            <li className='text-xs mt-4 cursor-pointer'>Comapre iPhone</li>
            <li className='text-xs  cursor-pointer'>Switch from Android</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>Shop iPhone</li>
            <li className='text-xs cursor-pointer'>Shop iPhone</li>
            <li className='text-xs cursor-pointer'>iPhone Accessories</li>
            <li className='text-xs cursor-pointer'>Apple Trade In</li>
            <li className='text-xs cursor-pointer'>Financing</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>More from iPhone</li>
            <li className='text-xs cursor-pointer'>iPhone Support</li>
            <li className='text-xs cursor-pointer'>AppleCare+ for iPhone</li>
            <li className='text-xs cursor-pointer'>iOS 17</li>
            <li className='text-xs cursor-pointer'>Apps by Apple</li>
            <li className='text-xs cursor-pointer'>iPhone Privacy</li>
            <li className='text-xs cursor-pointer'>iCloud+</li>
            <li className='text-xs cursor-pointer'>Wallet, Pay, Card</li>
            <li className='text-xs cursor-pointer'>Siri</li>
          </ul>
          </div>
        </div>
        )
      }
      {/* Watch  */}
      {
        dropdownStates.item5 && (
          <div
        id='dropdown-container' 
        className=" bg-black w-screen flex h-screen justify-center text-white mt-20"
        onMouseEnter={() => handleDropdownMouseEnter('item5')}
        ref={dropdownRef}>
          <div className='absolute top-0 left-0 mt-20 ml-40 flex flex-row'>
          <ul id="dropdown" className='flex flex-col justify-start gap-2'>
            <li className='text-xs text-gray-500'>Explore Watch</li>
            <li className='text-2xl font-medium cursor-pointer'>Explore All Apple Watch</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Watch Series 9</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Watch Ultra 2</li>
            <li className='text-2xl font-medium cursor-pointer'>iApple Watch SE</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Watch Nike</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Watch Hermès</li>
            <li className='text-xs mt-4 cursor-pointer'>Comapre Watch</li>
            <li className='text-xs  cursor-pointer'>Why Apple Watch</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>Shop Watch</li>
            <li className='text-xs cursor-pointer'>Shop Apple Watch</li>
            <li className='text-xs cursor-pointer'>Apple Watch Studio</li>
            <li className='text-xs cursor-pointer'>Apple Watch Bands</li>
            <li className='text-xs cursor-pointer'>Apple Watch Accessories</li>
            <li className='text-xs cursor-pointer'>Apple Trade in</li>
            <li className='text-xs cursor-pointer'>Financing</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>More from Watch</li>
            <li className='text-xs cursor-pointer'>Apple Watch Support</li>
            <li className='text-xs cursor-pointer'>AppleCare+</li>
            <li className='text-xs cursor-pointer'>WatchOS 10</li>
            <li className='text-xs cursor-pointer'>Apps by Apple</li>
            <li className='text-xs cursor-pointer'>Apple Fitness+</li>
          </ul>
          </div>
        </div>
        )
      }
      {/* AirPods  */}
      {
        dropdownStates.item6 && (
          <div
        className=" bg-black w-screen flex h-screen justify-center text-white mt-20"
        onMouseEnter={() => handleDropdownMouseEnter('item6')}
        ref={dropdownRef}>
          <div className='absolute top-0 left-0 mt-20 ml-40 flex flex-row'>
          <ul id="dropdown" className='flex flex-col justify-start gap-2'>
            <li className='text-xs text-gray-500'>Explore AirPods</li>
            <li className='text-2xl font-medium cursor-pointer'>Explore All AirPods</li>
            <li className='text-2xl font-medium cursor-pointer'>AirPods Pro 2nd generation</li>
            <li className='text-2xl font-medium cursor-pointer'>AirPods 2nd generation</li>
            <li className='text-2xl font-medium cursor-pointer'>AirPods 3nd generation</li>
            <li className='text-2xl font-medium cursor-pointer'>AirPods Max</li>
            <li className='text-xs  cursor-pointer'>Compare AirPods</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>Shop AirPods</li>
            <li className='text-xs cursor-pointer'>Shop AirPods</li>
            <li className='text-xs cursor-pointer'>AirPods Accessories</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>More from AipPods</li>
            <li className='text-xs cursor-pointer'>AirPods Support</li>
            <li className='text-xs cursor-pointer'>AppleCare+ fro Headpphones</li>
            <li className='text-xs cursor-pointer'>Apple Music</li>
          </ul>
          </div>
        </div>
        )
      }
      {/* Tv and Home  */}
      {
        dropdownStates.item7 && (
          <div
        className=" bg-black w-screen flex h-screen justify-center text-white mt-20"
        onMouseEnter={() => handleDropdownMouseEnter('item7')}
        ref={dropdownRef}>
          <div className='absolute top-0 left-0 mt-20 ml-40 flex flex-row'>
          <ul id="dropdown" className='flex flex-col justify-start gap-2'>
            <li className='text-xs text-gray-500'>Explore TV & Home</li>
            <li className='text-2xl font-medium cursor-pointer'>Explore TV & Home</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple TV 4K</li>
            <li className='text-2xl font-medium cursor-pointer'>HomePod</li>
            <li className='text-2xl font-medium cursor-pointer'>HomePod Mini</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>Shop TV & Home</li>
            <li className='text-xs cursor-pointer'>Shop Apple TV 4K</li>
            <li className='text-xs cursor-pointer'>Shop HomePod</li>
            <li className='text-xs cursor-pointer'>Shop HomePod mini</li>
            <li className='text-xs cursor-pointer'>Shop Siri Remote</li>
            <li className='text-xs cursor-pointer'>TV & Home Accessories</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>More from TV & Home</li>
            <li className='text-xs cursor-pointer'>Apple TV Support</li>
            <li className='text-xs cursor-pointer'>HomePod Support</li>
            <li className='text-xs cursor-pointer'>Apple Care+</li>
            <li className='text-xs cursor-pointer'>Apple TV app</li>
            <li className='text-xs cursor-pointer'>Apple TV+</li>
            <li className='text-xs cursor-pointer'>Home App</li>
            <li className='text-xs cursor-pointer'>Apple Music</li>
            <li className='text-xs cursor-pointer'>Siri</li>
            <li className='text-xs cursor-pointer'>AirPlay</li>
          </ul>
          </div>
        </div>
        )
      }
      {/* Entertainment  */}
      {
        dropdownStates.item8 && (
          <div
        id='dropdown-container' 
        className=" bg-black w-screen flex h-screen justify-center text-white mt-20"
        onMouseEnter={() => handleDropdownMouseEnter('item8')}
        ref={dropdownRef}>
          <div className='absolute top-0 left-0 mt-20 ml-40 flex flex-row'>
          <ul id="dropdown" className='flex flex-col justify-start gap-2'>
            <li className='text-xs text-gray-500'>Explore Entertainment</li>
            <li className='text-2xl font-medium cursor-pointer'>Explore Entertainment</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple One</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple TV+</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Music</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Arcade</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Fitness+</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple News+</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Podcasts</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Books</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Store</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>Support</li>
            <li className='text-xs cursor-pointer'>Apple TV+ Support</li>
            <li className='text-xs cursor-pointer'>Apple Music Support</li>
          </ul>
          </div>
        </div>
        )
      }
      {/* Accesories  */}
      {
        dropdownStates.item9 && (
          <div
        className=" bg-black w-screen flex h-screen justify-center text-white mt-20"
        onMouseEnter={() => handleDropdownMouseEnter('item9')}
        ref={dropdownRef}>
          <div className='absolute top-0 left-0 mt-20 ml-40 flex flex-row'>
          <ul id="dropdown" className='flex flex-col justify-start gap-2'>
            <li className='text-xs text-gray-500'>Shop Accessories</li>
            <li className='text-2xl font-medium cursor-pointer'>Shop All Accessories</li>
            <li className='text-2xl font-medium cursor-pointer'>Mac</li>
            <li className='text-2xl font-medium cursor-pointer'>iPad</li>
            <li className='text-2xl font-medium cursor-pointer'>iPhone</li>
            <li className='text-2xl font-medium cursor-pointer'>Apple Watch</li>
            <li className='text-2xl font-medium cursor-pointer'>AirPods</li>
            <li className='text-2xl font-medium cursor-pointer'>TV & Home</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>Explore Accessories</li>
            <li className='text-xs cursor-pointer'>Made by Apple</li>
            <li className='text-xs cursor-pointer'>Beats by Dr. Dre</li>
            <li className='text-xs cursor-pointer'>AirTag</li>
          </ul>
          </div>
        </div>
        )
      }
      {/* Support  */}
      {
        dropdownStates.item10 && (
          <div
        id='dropdown-container' 
        className=" bg-black w-screen flex h-screen justify-center text-white mt-20"
        onMouseEnter={() => handleDropdownMouseEnter('item10')}
        ref={dropdownRef}>
          <div className='absolute top-0 left-0 mt-20 ml-40 flex flex-row'>
          <ul id="dropdown" className='flex flex-col justify-start gap-2'>
            <li className='text-xs text-gray-500'>Explore Support</li>
            <li className='text-2xl font-medium cursor-pointer'>iPhone</li>
            <li className='text-2xl font-medium cursor-pointer'>Mac</li>
            <li className='text-2xl font-medium cursor-pointer'>iPad</li>
            <li className='text-2xl font-medium cursor-pointer'>Watch</li>
            <li className='text-2xl font-medium cursor-pointer'>AirPods</li>
            <li className='text-2xl font-medium cursor-pointer'>Music</li>
            <li className='text-2xl font-medium cursor-pointer'>TV</li>
            <li className='text-xs '>Explore Support</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>Get Help</li>
            <li className='text-xs cursor-pointer'>Community</li>
            <li className='text-xs cursor-pointer'>Repair</li>
            <li className='text-xs cursor-pointer'>Contact Us</li>
          </ul>
          <ul className='ml-20 flex gap-2 flex-col'>
            <li className='text-xs text-gray-500 mb-2'>Helpful Tpics</li>
            <li className='text-xs cursor-pointer'>Get AppleCare+</li>
            <li className='text-xs cursor-pointer'>Apple ID & Password</li>
            <li className='text-xs cursor-pointer'>Billing & Subscription</li>
            <li className='text-xs cursor-pointer'>Find My</li>
            <li className='text-xs cursor-pointer'>Accessibility</li>
          </ul>
          </div>
        </div>
        )
      }
    </header>
  )
}

export default Header
