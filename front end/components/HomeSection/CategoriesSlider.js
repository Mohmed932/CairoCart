"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const SimpleSlider = () => {
  const SampleNextArrow = ({ onClick, className }) => {
    return (
      <ArrowRight
        onClick={onClick}
        className={`${className} absolute right-0 z-30`}
      />
    );
  };

  const SamplePrevArrow = ({ onClick, className }) => {
    return (
      <ArrowLeft
        onClick={onClick}
        className={`${className} absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-500 text-yellow-500 z-30`}
      />
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const items = [
    {
      image: "s_1.webp",
      onetext: "New Arrival",
      twoText: "Women Fashion",
      threeText: "Last call for upto 25%",
      link: "/",
      color: "#0d6efd",
    },
    {
      image: "s_2.webp",
      onetext: "Latest Trending",
      twoText: "Fashion Wear",
      threeText: "Last call for upto 35%",
      link: "/",
      color: "#ff2c2c",
    },
    {
      image: "s_3.webp",
      onetext: "New Trending",
      twoText: "Kids Fashion",
      threeText: "Last call for upto 15%",
      link: "/",
      color: "#723da6",
    },
    {
      image: "s_4.webp",
      onetext: "Latest Trending",
      twoText: "Electronics Items",
      threeText: "Last call for upto 45%",
      link: "/",
      color: "#fdc200",
    },
    {
      image: "s_5.webp",
      onetext: "Super Deals",
      twoText: "Home Furniture",
      threeText: "Last call for upto 23%",
      link: "/",
      color: "#21ad61",
    },
  ];

  return (
    <div className="w-3/4 mx-auto">
      <Slider {...settings} className="bg-red-600 flex h-[410px]">
        {items.map(
          ({ image, onetext, twoText, threeText, link, color }, idx) => (
            <div key={idx} className=" flex items-center justify-between">
              <div className="w-2/4 p-5 flex items-center justify-between flex-col">
                <h3>{onetext}</h3>
                <h1>{twoText}</h1>
                <span>{threeText}</span>
                <button className="mt-2">Shop Now</button>
              </div>
              <img src={image} alt={twoText} className="w-2/4 object-cover" />
            </div>
          )
        )}
      </Slider>
    </div>
  );
};

export default SimpleSlider;

{
  /* <Slider {...settings} className="bg-red-600 flex h-[410px]">
{items.map(
  ({ image, onetext, twoText, threeText, link, color }, idx) => (
    <div key={idx} className="bg-purple-600 h-full flex">
      <div className="bg-green-600 w-2/4 h-full flex flex-col justify-center items-center p-4">
        <h3>{onetext}</h3>
        <h1>{twoText}</h1>
        <span>{threeText}</span>
        <button className="mt-2">Shop Now</button>
      </div>
      <img src={image} alt={twoText} className="w-2/4 object-cover" />
    </div>
  )
)}
</Slider> */
}
