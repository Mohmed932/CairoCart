"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";

const SimpleSlider = () => {
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
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={
          {
            // prevEl: <ArrowLeft />,
            // nextEl: <ArrowRight />,
          }
        }
        modules={[Autoplay, Pagination, Navigation]}
        className="h-[410px] bg-white w-3/4 flex"
      >
        {items.map(
          ({ image, onetext, twoText, threeText, link, color }, idx) => (
            <SwiperSlide key={idx} style={{ backgroundColor: color }}>
              <div className="flex items-center justify-around">
                <img src={image} alt={twoText} className="w-3/5" />
                <div className="w-1/4 flex flex-col items-center justify-center">
                  <h3>{onetext}</h3>
                  <h1 className="text-xl">{twoText}</h1>
                  <span className="text-sm italic">{threeText}</span>
                  <button className="mt-2 border-2 p-2 border-black border-it">
                    Shop Now
                  </button>
                </div>
              </div>
            </SwiperSlide>
          )
        )}
        <ArrowLeft />
        <ArrowRight />
      </Swiper>
    </>
  );
};

export default SimpleSlider;
