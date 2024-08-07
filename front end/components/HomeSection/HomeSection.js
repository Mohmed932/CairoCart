import React from "react";
import Categories from "./Categories";
import SimpleSlider from "./CategoriesSlider";

const HomeSection = () => {
  return (
    <div className="w-3/4  absolute left-0 right-0 m-auto flex items-start justify-around my-10">
      <SimpleSlider />
      <Categories />
    </div>
  );
};

export default HomeSection;
