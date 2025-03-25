
import React from 'react';

const Sidebar = ({ categories=[], filterByCategory }) => {
  return (
    <div className="w-[250px] p-4 bg-black">
      <h2 className="text-lg font-bold mb-4 text-white">Categories</h2>
      <button
        className="block w-full text-left px-4 py-2 bg-black text-white rounded-md mb-2"
        onClick={() => filterByCategory('all')}
      >
        All
      </button>
      {categories.map((category, index) => (
        <button
          key={index}
          className="block w-full text-left px-4 py-2 bg-black text-white rounded-md mb-2"
          onClick={() => filterByCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
