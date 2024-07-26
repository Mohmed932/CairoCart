"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BargerMenu from "./BargerMenu";
import Menu from "./Menu";

const Nanbar = () => {
  const [showBargerMenu, setShowBargerMenu] = useState(false);
  return (
    <div className="relative shadow-sm bg-white w-full h-10 flex items-center justify-between p-10 max-sm:px-3">
      <div className="flex items-center uppercase font-bold">
        <img src="/cairo.png" className="w-14 h-14" />
        {/* <span>Cairo cart</span> */}
      </div>
      <div className="w-2/5 flex items-center justify-between border-2 max-lg:hidden">
        <input
          type="search"
          placeholder="Search Products"
          className="w-[95%] border-none outline-none p-3"
        />
        <SearchIcon className="mr-5" />
      </div>
      <div className="flex items-center">
        <SearchIcon className="cursor-pointer" />
        <div className="m-4 cursor-pointer">
          <span className="mr-2 border-2 p-2 rounded-md hover:border-neutral-500 duration-500 max-sm:m-0">
            Log in
          </span>
        </div>
        <div className="m-4 cursor-pointer max-sm:m-2">
          <span className="mr-2">Cart</span>
          <ShoppingCartIcon />
        </div>
        <div className="m-4 cursor-pointer max-sm:m-0">
          <BargerMenu
            showBargerMenu={showBargerMenu}
            setShowBargerMenu={setShowBargerMenu}
          />
        </div>
      </div>
      <Menu showBargerMenu={showBargerMenu} />
    </div>
  );
};

export default Nanbar;
