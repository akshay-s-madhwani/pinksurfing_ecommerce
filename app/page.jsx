import Search from "@/components/Search";
import SmallCards from "@/components/SmallCards";
import StoreCarousel from "@/components/StoreCarousel";
import Link from "next/link";

const homepage = () => {
  return (
    <div>
      <Search/>
      <div className="uppercards grid xs:grid-cols-2 sm:grid-cols-3 xs:gap-x-0 sm:gap-x-5 gap-y-10 px-2 md:px-14 pt-3 md:pt-14 place-items-center grid-cols-2">
        {/* Mobile  */}
        <div className="card w-40 h-36 md:w-50 md:h-60 bg-[#2d1e5f] rounded-xl shadow-md relative md:hidden flex justify-center items-center">
          <img
            src="/mall.png"
            alt=""
            className="w-32 h-32 md:w-50 md:h-60 rounded-xl"
          />
          <div className="text-center absolute left-0 right-0 -bottom-7">
            Shopping Mall
          </div>
        </div>
        <div className="card w-40 h-36 md:w-50 md:h-60 bg-[#2d1e5f] rounded-xl shadow-md relative md:hidden flex justify-center items-center">
          <img
            src="/real Estate.png"
            alt=""
            className="w-32 h-32 md:w-50 md:h-60 rounded-xl"
          />
          <div className="text-center absolute left-0 right-0 -bottom-7">
            Real Estate
          </div>
        </div>
        <div className="card w-[90vw] sm:w-40 h-36 mx-auto bg-[#2d1e5f] rounded-xl shadow-md relative md:hidden flex justify-center items-center xs:ml-3 ml-1 ">
          <img
            src="/cars and trucks.png"
            alt=""
            className="md:w-50 md:h-60 rounded-xl w-[50vw] h-32 "
          />
          <div className="text-center absolute left-0 right-0 -bottom-7">
            Cars and Trucks
          </div>
        </div>
        {/* Desktop */}
        <Link href={"/list-items"}>
          <div className="card w-[27vw] h-60 bg-[#2d1e5f] rounded-xl shadow-md relative hidden md:flex justify-center items-center">
            <img src="/mall.png" alt="" className=" h-48 rounded-xl" />
            <div className="text-center absolute left-0 right-0 -bottom-8 text-lg">
              Shopping Mall
            </div>
          </div>
        </Link>
        <div className="card w-[27vw] h-60 bg-[#2d1e5f] rounded-xl shadow-md relative hidden md:flex justify-center items-center">
          <img src="/real Estate.png" alt="" className=" h-48 rounded-xl" />
          <div className="text-center absolute left-0 right-0 -bottom-8 text-lg">
            Real Estate
          </div>
        </div>
        <div className="card w-[27vw] h-60 bg-[#2d1e5f] rounded-xl shadow-md relative hidden md:flex justify-center items-center">
          <img src="/cars and trucks.png" alt="" className=" h-48 rounded-xl" />
          <div className="text-center absolute left-0 right-0 -bottom-8 text-lg">
            Cars and Trucks
          </div>
        </div>
      </div>
      <SmallCards
        image1="/cards.gif"
        text1="Trading Cards"
        image2="/beauty.png"
        text2="Beauty/Makeup"
        image3="/toy.gif"
        text3="Toys"
        image4="/electronics.png"
        text4="Electronics"
        image5="/job.png"
        text5="Jobs"
        image6="/pharmacy.png"
        text6="Pharmacy"
        image7="/computer.png"
        text7="Computer Parts"
        image8="/breakfast.png"
        text8="Breakfast"
      />
      <SmallCards
        image1="/renovation.png"
        text1="Home Improve"
        image2="/businessman.png"
        text2="Jobs"
        image3="hongry.png"
        text3="Hongry"
        image4="/game.gif"
        text4="Video Games"
        image5="furniture.png"
        text5="Furniture"
        image6="book.png"
        text6="Books"
        image7="nft.png"
        text7="NFTs"
        image8="boat.gif"
        text8="Boats"
      />
      <SmallCards
        image1="/movies.png"
        text1="Entertainment"
        image2="hotel.png"
        text2="Hotels"
        image3="/acquisition.png"
        text3="Business 4 Sale"
        image4="store.png"
        text4="My Store"
        image5="/brake.png"
        text5="Auto Parts"
        image6="/seller.png"
        text6="Estate Sale"
        image7="/coupon.png"
        text7="Coupon"
        image8="/free.png"
        text8="Free"
      />
      <StoreCarousel />
    </div>
  );
};

export default homepage;
