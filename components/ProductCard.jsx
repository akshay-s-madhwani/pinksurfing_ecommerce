"use client";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const ProductCard = ({ index, payload }) => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="bg-white p-4 rounded-xl shadow-2xl w-[550px] h-60 " key={index}>
      <div className="flex  lg:flex-row w-[320px]">
        <img
          style={{ borderRadius: "5px" }}
          className="w-[200px] h-[200px] object-cover "
          alt=""
        src={"/auth_images/oil.png"}
        />
        <div className="flex flex-col ml-4">
          <h3 className="font-large">Lush Locks Hair Oil</h3>
          <p className="text-black text-left mt-2 text-base w-4/5 break-words">
            Say goodbye to dull, lifeless hair and welcome luscious, luxurious
            locks ...
          </p>
          <div className=" mt-4">
            <p className="text-black text-left">Price: $24.99</p>
          </div>
          <div className="flex items-center justify-center mt-4 w-80">
            <div className="rounded-3xs bg-whitesmoke flex items-center h-10">
              <div className="flex items-center justify-between w-32 bg-gray-900">
                <div className="w-1/3 h-10 bg-neutral-800 text-white rounded-l-lg  flex items-center justify-center ">
                  <AiOutlinePlus onClick={()=>{setQuantity(quantity+1)}} />
                </div>
                <input
                  type="number"
                  placeholder="1"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-1/3 min-w-12 h-10 text-black pl-4 bg-transparent"
                />
                <div className="w-1/3 h-10  rounded-r-lg bg-neutral-800 text-white  flex items-center justify-center ">
                  <AiOutlineMinus  onClick={()=>{quantity < 2 ? null :  setQuantity(quantity-1)}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
