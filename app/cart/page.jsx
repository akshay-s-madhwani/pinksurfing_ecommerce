import React from 'react';
import SubNav from '../../components/SubNav';
import { BsCart } from 'react-icons/bs';


const Cart = () => {
  return (
    <div className="relative bg-white w-full h-screen  overflow-hidden text-left text-xl text-gray font-inter flex px-11 flex-col">
      <SubNav/>
      <div className="flex justify-center items-center w-full h-5/6">
    <div className="flex justify-center bg-zinc-400 w-full mx-8 h-40 rounded-lg p-4 shadow-lg text-center" style={{minWidth:"300px",maxWidth:"650px" , minHeight:'200px' , maxHeight:'350px'}}>
    <div className='flex gap-4 m-auto'>
    
    <BsCart className='w-32 h-32' fill="teal"/>
    <div className='flex flex-col gap-2'>
    <h1 className="text-2xl font-semibold mb-2">Your cart is empty</h1>
    <p className="text-gray-600">comeback after adding some</p>
    </div>
    </div>
   </div>
   </div>

    </div>
  );
};

export default Cart;
