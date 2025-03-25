import React, { useEffect, useState } from "react";
import { AiOutlineStar } from "react-icons/ai";
import Sidebar from "./Sidebar";

const Products = ({ searchQuery }) => {
  const [data, setData] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setData(json);
        setFilterProducts(json);

        const uniqueCategories = [...new Set(json.map((item) => item.category))];
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    
    if (searchQuery) {
      const filtered = data.filter(
        (item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilterProducts(filtered);
    } else {
      setFilterProducts(data); 
    }
  }, [searchQuery, data]);

  return (
    <div className="flex">
      
      <Sidebar categories={categories} filterByCategory={() => {}} />

     
      <div className="flex flex-wrap gap-x-2 gap-y-2.5 p-2 flex-1">
        {filterProducts.length > 0 ? (
          filterProducts.map((item, index) => (
            <div
              key={index}
              className="p-3 rounded-md border-1 border-[#f4f5f6] shadow-lg shadow-gray-400 pl-4 min-w-[250px] min-h-[350px] max-w-[350px] max-h-[520px]"
            >
              <img
                src={item.image}
                className="rounded-[10px] min-w-[200px] min-h-[250px] max-w-[250px] max-h-[300px]"
                alt={item.title}
              />
              <h1 className="text-xl my-1 font-bold text-gray-600">{item.title}</h1>
              <h3 className="text-lg my-1 font-medium text-gray-600">
                <del>$400</del> {item.price}
              </h3>
              <h3 className="text-lg my-1 font-medium text-gray-600 flex items-center">
                <AiOutlineStar className="text-yellow-500" />
                <AiOutlineStar className="text-yellow-500" />
                <AiOutlineStar className="text-yellow-500" />
                <AiOutlineStar className="text-yellow-500" />
                <span className="ml-2 text-sm">{item.rating.rate}</span>
              </h3>
              <h3 className="text-lg my-1 font-medium text-gray-600">
                {item.description.split(" ").slice(0, 10).join(" ")}...
              </h3>
              <p>{item.category}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;