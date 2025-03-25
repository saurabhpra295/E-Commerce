
"use client";
import React, { useState } from "react";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import Products from "./Products";

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all"); 

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); 
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex items-start w-full">
          <nav className="w-full flex justify-around items-center p-2 border-b-2 border-b-[#f3f3f3] z-[999]">
            <div>
             <input
               className="py-2 px-5 bg-white mr-5 rounded-sm relative w-[14rem] outline-none placeholder-gray-700 text-gray-800"  // Set text color to dark gray
               type="text"
               placeholder="Enter your search"
               value={searchQuery}
               onChange={handleSearchChange}
             />


            </div>
            <div className="flex justify-between items-center space-x-5">
              
              <button onClick={() => handleCategoryClick("jewelry")} className="text-gray-700">Jewelry</button>
              <button onClick={() => handleCategoryClick("men's clothing")} className="text-gray-700">Men's Clothing</button>
              <button onClick={() => handleCategoryClick("electronics")} className="text-gray-700">Electronics</button>
              <button onClick={() => handleCategoryClick("women's clothing")} className="text-gray-700">Women's Clothing</button>
              <button onClick={() => handleCategoryClick("all")} className="text-gray-700">All</button>
              
              
              <a href="/">
                <FiHeart className="text-xl text-gray-700" />
              </a>
              <AiOutlineShoppingCart className="text-xl text-gray-700" />
              <AiOutlineUserAdd className="text-xl text-gray-700" />
            </div>
          </nav>
        </div>
      
        <Products searchQuery={searchQuery} selectedCategory={selectedCategory} />
      </div>
    </>
  );
};

export default Navigation;

