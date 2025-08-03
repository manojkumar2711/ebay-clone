import React from "react";
import Logo from "../../assets/img-logo/ebay-logo.PNG";

function Searchbar() {
  return (
    <>
      <div className="navbar flex bg-base-100 shadow-sm">
        <div className="flex-none">
          <a className="btn btn-ghost text-xl">
            {" "}
            <img src={Logo}></img>
          </a>

             <ul className=" hidden md:inline-flex menu menu-horizontal  hover:none">
                  <li>
                    <details className="hover:none">
                      <summary>Shop by <br/> category</summary>
                      <ul className="bg-base-100 rounded-t-none p-2">
                        <li>
                          <a>Link 1</a>
                        </li>
                        <li>
                          <a>Link 2</a>
                        </li>
                      </ul>
                    </details>
                  </li>
                </ul>
        </div>
       <div className="flex-1">
  <div className="flex items-center gap-4"> {/* replace join */}
    <div className="flex-grow">
      <label className="input w-full validator rounded-full outline-none focus-within:outline-none focus:ring-0 border border-3 border-black h-12 flex items-center gap-2">
        <svg
          className="h-[2em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          className="w-full bg-transparent outline-none text-base"
          type="text"
          placeholder="Search for anything"
          required
        />

        <ul className="hidden md:inline-flex menu menu-horizontal">
          <li>
            <details>
              <summary>All Categories</summary>
              <ul className="bg-base-100 rounded-t-none p-2">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
        <button className=" md:hidden btn rounded-full bg-[#1A77F2] text-white border-[#005fd8] px-6 pr-2 pl-2">
       <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
    </button>
      </label>
    </div>

    <button className="hidden md:inline-flex btn rounded-full bg-[#1A77F2] text-white border-[#005fd8] px-6 pr-15 pl-15">
      Search
    </button>
  </div>
</div>

        <div className="flex-none gap-2 hidden md:inline-flex">
         
           <a className="pl-4 pr-5 text-sm"> Advanced</a>
        </div>
      </div>
    </>
  );
}

export default Searchbar;
