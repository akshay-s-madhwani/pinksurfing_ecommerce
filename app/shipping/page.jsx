import React from 'react';
import ProductCard from '../../components/ProductCard';
import { AiOutlineShoppingCart, AiOutlineSearch ,AiOutlineBell } from "react-icons/ai";
import { BsFillMicFill, BsCartPlus ,BsMic } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { RxAvatar } from "react-icons/rx";

const Shipping = () => {
  return (
    <div className="flex flex-col h-screen bg-white text-[1.25rem] text-gray font-inter">
  
    <div className="flex items-center left-[44px] w-screen h-[79px] text-center text-black my-4">
    
    <div className="text-[18px] text-gray text-left flex w-1/2 h-[45px] bg-whitesmoke items-center mr-4">
    <AiOutlineSearch
    className="w-10"
    ></AiOutlineSearch>
    <input placeholder="Search" name="Search" className="flex-1 bg-whitesmoke"/>
    <BsMic className="w-10">
    </BsMic>
    </div>
    <div className="flex items-center justify-center w-38 h-[78px] ml-1">
    <AiOutlineBell className="w-10"></AiOutlineBell>
    Notifications
    </div>
    <div className="flex items-center justify-center w-32 h-[78px] mx-2">
    Orders
    </div>
    <div className="flex items-center justify-center h-[78px] mx-2">
        <AiOutlineShoppingCart className="w-10"
        ></AiOutlineShoppingCart>
        Cart
        </div>
        <div className="flex flex-4 items-center mx-2">
          <RxAvatar className="w-10"></RxAvatar>
          Sign In
        </div>
          </div>
   
      <div className="flex flex-grow p-4">
     
        <div className="w-full lg:w-1/2 pr-4">
          <div className="flex flex-col items-center justify-between">
            <h2 className="text-2xl font-medium mb-4">Your Order</h2>
            <div className="w-full">
              
              <ProductCard />
            </div>
            <div className="w-full mt-4">
             
              <ProductCard />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 pl-4">
          <div className="flex flex-col items-center justify-between">
            <h2 className="text-2xl font-medium mb-4">Payment</h2>
          
          </div>
        </div>
      </div>

     
      <div className="flex items-center space-x-2 mt-4 cursor-pointer">
        <img alt="" src="/ic-chevron-left-48px.svg" className="w-6 h-6" />
        <div className="font-medium">Back</div>
      </div>
    </div>
  );
};

export default Shipping;
