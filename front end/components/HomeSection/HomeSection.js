import React from "react";
import Categories from "./Categories";
import SimpleSlider from "./CategoriesSlider";

const HomeSection = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="w-3/6 flex items-start justify-start my-10">
        <SimpleSlider />
        <Categories />
      </div>
    </div>
  );
};

export default HomeSection;
