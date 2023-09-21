"use client";
import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import ProductCard from '../../components/ProductCard';
import PaymentForm from '../../components/PaymentForm';
import ShippingForm from '../../components/ShippingForm';
import SubNav from '../../components/SubNav'
import { useSearchParams } from 'next/navigation'
import axios from 'axios';

const Checkout = () => {
  const router = useSearchParams();
  const type = router.get('type')
  const product_id = router.get('id');
  const BASE_URL = "https://ecommerce.pinksurfing.com"

  const [isMobile, setIsMobile] = useState(false);
  const [ products , setProducts ] = useState([])
  const [ checkout , setCheckout] = useState(null);

  useEffect(() => {
    const width = window.innerWidth;
    setIsMobile(width <= 768);
  }, []);

  useMemo(()=>{
    if(type === 'product'){
      axios.get(`${BASE_URL}/api/product/product/${product_id}/`)
      .then(data=>{
          setProducts([data.data['Products']])
          console.log(data)
      })
      .catch(error=>{
        console.error(`Error from Fetching products: ${error}`)
      })   
    }
    else if( type === 'cart'){

    }
  },[])

  return (
    <div className="relative bg-white w-full h-full  overflow-hidden text-left text-xl text-gray flex px-11 flex-col">
          <SubNav/>
          {/* Main Content */}
        <div className={`  w-screen mx-10 bg-gray-100`}>
          
        {/* Product cards */}
        <h1 className="text-xl text-black w-full text-start mb-2">Order Summary</h1>
        <div className={`${checkout?'grid grid-cols-2':'flex flex-col'}`}>
        <div className={`flex flex-row flex-wrap min-h-screen w-full col-start-1 content-baseline gap-8`}>
          {[{},{},{},{}].map((_, index) => (
            <ProductCard key={index} payload={_}/>
          ))}
        </div>
        {
          checkout ?
          <div className=' col-start-2'>
          {
            checkout === 'shipping' ?
              <ShippingForm checkout={checkout} setCheckout={setCheckout}/>
              :
              <PaymentForm/>
          }
          </div>
          :
          null
        }
      </div>
      </div>

      {/* Footer */}
      <div className="bg-white w-full h-16 fixed bottom-0 left-0 flex items-center justify-between p-4">
        <button onClick={()=>checkout?setCheckout(null):null} style={{ padding: '8px' }} className="bg-whitesmoke flex items-center space-x-5 rounded-lg">
          <IoIosArrowBack className="w-5 h-5 text-black" /> 
          <span  className="text-black">Back</span>
        </button>
        {
          checkout ?
          null
          :
        <div className="flex space-x-4">
          <button className="bg-whitesmoke text-black px-4 py-2 rounded-lg">Save for later</button>
          <button className="bg-black text-white px-4 py-2 rounded-lg"
          onClick={()=>setCheckout('shipping')}
          >Checkout</button>
        </div>
        
        }
      </div>
    </div>
  );
};

export default Checkout;
