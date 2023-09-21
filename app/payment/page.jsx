import React from 'react';
import ProductCard from '../../components/ProductCard';
import PaymentForm from '../../components/PaymentForm';

const Payment = () => {
  return (
    <div className="flex flex-col h-screen bg-white text-[1.25rem] text-gray font-inter">
   
      <div className="flex items-center justify-between bg-white p-4">
        <div className="flex space-x-4">
          <img alt="" src="/ic-add-shopping-cart-48px.svg" />
          <img alt="" src="/ic-account-circle-48px.svg" />
          <img alt="" src="/ic-add-alert-48px.svg" />
          <img alt="" src="/ic-zoom-in-24px.svg" />
          <img alt="" src="/ic-mic-none-48px.svg" />
        </div>
        <div className="flex space-x-4">
          <div className="bg-whitesmoke w-72 h-8 rounded-full" />
          <div className="text-[1.13rem] text-gray flex items-center">Search</div>
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
            <PaymentForm />
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

export default Payment;
