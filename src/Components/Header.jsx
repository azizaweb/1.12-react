import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline, IoPersonOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="w-full bg-white border-b shadow-sm ">
      <div className="flex items-center justify-between px-10 py-8 w-full">
        
        <div className="flex items-center p-5   gap-25">
          <h1 className="text-2xl  font-semibold text-black">Exclusive</h1>
          <nav>
            <ul className="flex gap-8 text-gray-800 font-medium">
              <li><a href="#" className="hover:text-black">Home</a></li>
              <li><a href="#" className="hover:text-black">Contact</a></li>
              <li><a href="#" className="hover:text-black">About</a></li>
              <li><a href="#" className="hover:text-black">Sign Up</a></li>
            </ul>
          </nav>
        </div>

     
        <div className="flex items-center gap-6">
        
          <div className="relative w-[300px]">
            <input 
              type="text" 
              placeholder="What are you looking for?" 
              className="w-full py-2 px-4 pr-10 rounded bg-gray-100 text-sm border border-gray-300 outline-none"
            />
            <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
          </div>

        
          <div className="flex gap-6 text-xl text-gray-800">
            <button className="hover:text-black"><FaRegHeart /></button>
            <button className="hover:text-black"><IoCartOutline /></button>
            <button className="hover:text-black"><IoPersonOutline /></button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

