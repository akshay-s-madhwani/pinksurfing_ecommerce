"use client";
import { AiTwotoneHeart, AiFillStar } from "react-icons/ai";
import { useRef, useState, useEffect } from "react";
import Filter from "@/components/Filter";
import Search from "@/components/Search";
import Link from 'next/link';

const Page = () => {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const [val, setVal] = useState(1);

  const showDetails = () => {
    if (ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("hidden");
      ref.current.classList.add("card");
      ref.current.classList.add("w-96");
      ref.current.classList.add("glass");
    }
  };

  const hideDetails = () => {
    if (!ref.current.classList.contains("hidden")) {
      ref.current.classList.remove("card");
      ref.current.classList.remove("w-96");
      ref.current.classList.remove("glass");
      ref.current.classList.add("hidden");
    }
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.classList.add("hidden");
    }
  }, []);

  const increment = () => {
    setVal((prev) => prev + 1);
    ref2.current.value = val;
  };
  const decrement = () => {
    if (val > 0) {
      setVal((prev) => prev - 1);
      ref2.current.value = val;
    } else {
      setVal(0);
      ref2.current.value = val;
    }
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-8 px-14 py-10">
      <Search/>
      <Filter />
      <div
        className="w-[30rem] glass z-10 fixed top-72 bottom-5 left-1/2 right-1/2 -ml-[192px] -mt-[203.75px]"
        ref={ref}
      >
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="car!"
          className="rounded-t-xl"
        />
        <div className="card-body text-black">
          <h2 className="card-title">Nike Jordan</h2>
          <div className="flex justify-between">
            <div className="flex items-center">
              4.7 <AiFillStar className="text-[#908128] text-xl ml-1" />{" "}
            </div>
            <div className="flex items-center">
              200 <AiTwotoneHeart className="text-[#908128] text-xl ml-1" />{" "}
            </div>
          </div>
          <div className="divider"></div>
          <details className="">
            <summary>The best shoes</summary>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              maiores cum alias nesciunt sint commodi quos quibusdam iusto totam
              inventore. Ipsa, aliquid fuga. Optio ratione voluptas eaque eos,
              expedita similique.
            </p>
          </details>
          <div className="divider"></div>
          <div className="card-actions flex-col justify-start">
            <h5 className="font-semibold text-sm">Extras</h5>
            <div className="type flex justify-between items-center w-full">
              <p>Type</p>
              <select className="select bg-transparent">
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
          </div>
          <div className="divider"></div>
          <div className="card-actions flex-col justify-start">
            <div className="quantity-price flex justify-between items-center w-full">
              <div class="flex items-center space-x-1">
                <button
                  className="btn rounded btn-sm bg-[#2d1e5f] text-white border-none text-xl"
                  onClick={decrement}
                >
                  -
                </button>
                <input
                  type="text"
                  name=""
                  id=""
                  className="input w-16 h-8 bg-transparent focus:outline-none text-xl font-semibold text-center"
                  ref={ref2}
                  value={0}
                />
                <button
                  className="btn rounded btn-sm bg-[#2d1e5f] text-white border-none text-xl"
                  onClick={increment}
                >
                  +
                </button>
              </div>
              <div className="price">
                <p className="text-2xl font-bold">$100</p>
              </div>
            </div>
            <button className="btn btn-block my-3 bg-transparent">
              Add to Cart
            </button>
            <button
              className="btn btn-circle btn-sm mx-auto btn-error"
              onClick={hideDetails}
            >
              X
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8">
        <Link href={"/product?product_id=80830f50-7d24-4866-97d4-8753ad90f0ee"} className="h-auto max-w-[236px] w-screen padding-10  rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </Link>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="h-auto pb-5 max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-8">
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-auto max-w-[236px] w-screen padding-10 rounded-2xl shadow-[0.3rem_0.3rem_0.3rem_0_rgb(208,208,208),-0.3rem_-0.3rem_0.3rem_0_rgb(155,155,155)]">
          <img
            className="h-[70%] w-full p-5 rounded-t-2xl shadow-xl"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
            alt=""
          />
          <div className="details bg-white text-black h-[30%] rounded-b-2xl relative">
            <div className="desc flex flex-col px-4 py-2 items-center">
              <h1 className="product_name text-xl font-semibold">Product 1</h1>
              <h1 className="product_pricing text-lg font-semibold mt-2">
                $1000
              </h1>
              <button onClick={showDetails}>View</button>
              <button className="like absolute right-3 bottom-3 h-button w-button m-2">
                <AiTwotoneHeart className="text-2xl text-red-700" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
