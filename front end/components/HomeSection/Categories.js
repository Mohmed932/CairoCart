import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import Link from "next/link";

const Categories = () => {
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
    <div className="w-3/12 shadow-md p-3 mx-2 bg-white">
      {items.map(({ name, icon, link }, idx) => (
        <div
          key={idx}
          className="my-3 text-right w-full flex items-center justify-between"
        >
          <span>{icon}</span>
          <Link href={`/`}>{name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Categories;
