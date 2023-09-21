import Link from "next/link";

const Search = () => {
  return (
    <div className="search-components flex md:space-x-8 items-center md:justify-center justify-around py-6 md:py-0 my-3">
      <div className="dropdown categories">
        <label
          tabIndex={0}
          className="btn m-1 bg-[#2d1e5f] text-white hover:bg-[#261c46] hidden sm:flex"
        >
          <div className="bars space-y-1 cursor-pointer mr-2">
            <div className="bar w-5 h-0.5 bg-white"></div>
            <div className="bar w-5 h-0.5 bg-white"></div>
            <div className="bar w-5 h-0.5 bg-white"></div>
          </div>
          Shop by Categories
        </label>
        <label
          tabIndex={0}
          className="btn btn-sm m-1 bg-white text-white hover:bg-[#51408b] sm:hidden h-10 w-10 flex"
        >
          <div className="bars space-y-1 cursor-pointer mx-auto">
            <div className="bar w-5 h-0.5 bg-black"></div>
            <div className="bar w-5 h-0.5 bg-black"></div>
            <div className="bar w-5 h-0.5 bg-black"></div>
          </div>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-4 shadow rounded-box w-52 space-y-1 text-white bg-[#51408b]"
        >
          <Link href="">
            <li>Real Estate</li>
          </Link>
          <Link href="">
            <li>Beauty</li>
          </Link>
          <Link href="">
            <li>Robots</li>
          </Link>
          <Link href="">
            <li>Bitcoin</li>
          </Link>
          <Link href="">
            <li>Human</li>
          </Link>
        </ul>
      </div>
      <div className="search text-black relative">
        <input
          type="text"
          className="input input-bordered py-2 px-3  xs:px-5 xs:py-2.5 rounded-lg w-full xs:w-96 bg-white focus:outline-none border-2"
          placeholder="Search here..."
        />
        <button className="text-white px-2 py-1 md:px-3 md:py-1 bg-[#2d1e5f] rounded absolute right-1 md:right-3 top-2">
          Search
        </button>
      </div>
    </div>
  );
};

export default Search;
