import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Nanbar = () => {
  return (
    <div className="shadow-sm bg-white w-full h-10 flex items-center justify-between p-10">
      <div>
        <h1>Cairo Cart</h1>
      </div>
      <div className="w-2/5 flex items-center justify-between border-2">
        <input
          type="search"
          placeholder="Search Products"
          className="w-[95%] border-none outline-none p-3"
        />
        <SearchIcon className="mr-5" />
      </div>
      <div className="flex">
        <div className="m-4 cursor-pointer">
          <span className="mr-2">login</span>
          <PersonIcon />
        </div>
        <div className="m-4 cursor-pointer">
          <span className="mr-2">Cart</span>
          <ShoppingCartIcon />
        </div>
      </div>
    </div>
  );
};

export default Nanbar;
