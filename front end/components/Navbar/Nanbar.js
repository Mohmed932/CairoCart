import React from "react";
import SearchIcon from "@mui/icons-material/Search";
// import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BargerMenu from "./BargerMenu";

const Nanbar = () => {
  return (
    <div className="shadow-sm bg-white w-full h-10 flex items-center justify-between p-10">
      <div className="flex items-center uppercase font-bold">
        <img src="/logo.png" className="w-14 h-14"/>
        <span>Cairo cart</span>
      </div>
      <div className="w-2/5 flex items-center justify-between border-2">
        <input
          type="search"
          placeholder="Search Products"
          className="w-[95%] border-none outline-none p-3"
        />
        <SearchIcon className="mr-5" />
      </div>
      <div className="flex items-center">
        <div className="m-4 cursor-pointer">
          <span className="mr-2 border-2 p-2 rounded-md hover:border-neutral-500 duration-500">Log in</span>
        </div>
        <div className="m-4 cursor-pointer">
          <span className="mr-2">Cart</span>
          <ShoppingCartIcon />
        </div>
        <div className="m-4 cursor-pointer">
        <BargerMenu/>
        </div>
      </div>
    </div>
  );
};

export default Nanbar;
