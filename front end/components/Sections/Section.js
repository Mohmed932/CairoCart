import React from "react";

const Section = () => {
  const items = [
    {
      title: "Sodling",
      desc: "Computers & Accessories For Sale - DarkOrange",
      img: "https://new-ella-demo.myshopify.com/cdn/shop/products/product-9-6_870x.jpg",
      discount: {
        status: true,
        OldPrice: "429.00",
        CurrentPrice: "309.00",
      },
    },
    {
      title: "Ella - Halothemes",
      desc: "Computers & Accessories For Sale - Black",
      img: "https://new-ella-demo.myshopify.com/cdn/shop/products/product-7-1_870x.jpg",
      discount: {
        status: false,
        OldPrice: "",
        CurrentPrice: "49.00",
      },
    },
    {
      title: "Ella - Halothemes",
      desc: "Computers & Accessories For Sale - Black",
      img: "https://new-ella-demo.myshopify.com/cdn/shop/products/product-3-2_870x.jpg",
      discount: {
        status: false,
        OldPrice: "",
        CurrentPrice: "49.00",
      },
    },
    {
      title: "Sodling",
      desc: "Computers & Accessories For Sale - DarkOrange",
      img: "https://new-ella-demo.myshopify.com/cdn/shop/products/product-11-2_a1b33940-f66d-40b7-ae4b-d2ff12806c0a_870x.jpg",
      discount: {
        status: true,
        OldPrice: "429.00",
        CurrentPrice: "309.00",
      },
    },
    {
      title: "Ella - Halothemes",
      desc: "Computers & Accessories For Sale - Black",
      img: "https://new-ella-demo.myshopify.com/cdn/shop/products/product-6-1_870x.jpg",
      discount: {
        status: false,
        OldPrice: "",
        CurrentPrice: "49.00",
      },
    },
  ];
  return (
    <div className="w-full flex items-center justify-center mb-10">
      <div className="w-3/6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl uppercase">Fashion</h1>
          <span className="text-xs">See more</span>
        </div>
        <div className="flex items-start justify-start">
          {items.map(
            (
              {
                title,
                desc,
                img,
                discount: { status, OldPrice, CurrentPrice },
              },
              idx
            ) => (
              <div
                key={idx}
                className="w-1/5 bg-white shadow-md m-2 py-10 relative"
              >
                {status ? (
                  <span className="absolute right-2 top-5 text-sm bg-red-600 p-1 text-white text-center rounded-md">
                    Sale
                  </span>
                ) : (
                  ""
                )}
                <img src={img} alt={title} />
                <div className="px-3">
                  <h3 className="text-md">{title}</h3>
                  <p className="text-xs">{desc}</p>
                  <div>
                    <span
                      className={`text-neutral-500 text-xs line-through ${
                        status ? "mr-3" : ""
                      }`}
                    >
                      {status ? OldPrice : ""}
                    </span>
                    <span>{CurrentPrice}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center my-2 px-2">
                  <button className="border-2 w-full p-2 border-black rounded-md hover:bg-blue-600 hover:text-white hover:border-none duration-500">
                    Add To Cart
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Section;
