"use client"
import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { motion } from "framer-motion";

const Menu = ({ showBargerMenu }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  const items = [
    {
      name: "سوبر ماركت",
      icon: <LocalGroceryStoreIcon />,
      link: "/Supermarket",
    },
    {
      name: "موضه",
      icon: <CheckroomIcon />,
      link: "/fashion",
    },
    {
      name: "صحه وجمال",
      icon: <FitnessCenterIcon />,
      link: "/healthandbeauty",
    },
    {
      name: "هواتف ذكيه",
      icon: <PhoneAndroidIcon />,
      link: "/smartphones",
    },
  ];
  return (
    <>
      {showBargerMenu ? (
        <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
          className="absolute right-10 top-16 w-fit h-auto bg-white shadow-md p-2 m-5"
        >
          {items.map(({ name, icon, link }) => (
            <div
              key={name}
              variants={item}
              className="flex items-center justify-between my-3 text-xl"
            >
              <span className="mx-5">{icon}</span>
              <span className="mx-5">{name}</span>
            </div>
          ))}
        </motion.div>
      ) : null}
    </>
  );
  
};

export default Menu;
