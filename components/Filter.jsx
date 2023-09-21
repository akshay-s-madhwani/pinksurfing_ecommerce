"use client";

import React from 'react';

const Filter = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-xl flex flex-col justify-between h-[80%] bottom-60 left-0 top-36 fixed w-60 z-10">
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Filters</h2>
        <div className="mb-4">
          <h3 className="font-medium text-white mb-2">Color</h3>
          <div className="flex space-x-1">
            <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none hover:bg-gray-300"></button>
            <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none hover:bg-gray-600"></button>
            <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none hover:bg-red-600"></button>
          </div>
        </div>
        <div className="mb-4 bg-gray-700 rounded-lg p-2">
          <h3 className="font-medium text-white mb-2">Size</h3>
          <select className="rounded border border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10 bg-gray-700 text-white">
            <option>SM</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>
        <div className="mb-4">
          <h3 className="font-medium text-white mb-2">Price Range</h3>
          <div className="flex items-center space-x-2">
            <input type="number" className="rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-red-500 w-1/2" placeholder="Min" />
            <span className="text-white">-</span>
            <input type="number" className="rounded border border-gray-400 py-2 px-3 focus:outline-none focus:border-red-500 w-1/2" placeholder="Max" />
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-medium text-white mb-2">Rating</h3>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="rating-4" className="rounded border-gray-400 focus:outline-none focus:border-red-500" />
            <label htmlFor="rating-4" className="text-white">4 Stars &amp; Up</label>
          </div>
        </div>
        <div className="mb-4">
          <h3 className="font-medium text-white mb-2">Category</h3>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="category-1" className="rounded border-gray-400 focus:outline-none focus:border-red-500" />
            <label htmlFor="category-1" className="text-white">Category 1</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="category-2" className="rounded border-gray-400 focus:outline-none focus:border-red-500" />
            <label htmlFor="category-2" className="text-white">Category 2</label>
          </div>
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="category-3" className="rounded border-gray-400 focus:outline-none focus:border-red-500" />
            <label htmlFor="category-3" className="text-white">Category 3</label>
          </div>
        </div>
      </div>
      <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Apply</button>
    </div>
  );
};

export default Filter;