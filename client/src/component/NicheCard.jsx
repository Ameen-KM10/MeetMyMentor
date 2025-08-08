import { useState } from "react";

const NicheCard = ({ image, name, role, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="
      lg:w-[216px] lg:h-[244px]
      relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 cursor-pointer flex flex-col justify-end"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100% 100%",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`w-full bg-white transition-all px-4 py-2 ${
          hovered ? "h-[156px]" : "h-[68px]"
        }`}
      >
        <p className="font-sans font-semibold truncate sm:text-[12px] lg:text-[16px]">
          {name}
        </p>
        <p className="font-sans font-regular truncate sm:text-[10px] lg:text-[14px] text-gray-600">
          {role}
        </p>
        <p
          className={`font-sans font-regular line-clamp-4 sm:text-[10px] lg:text-[14px] mt-2 text-gray-600 transform transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default NicheCard;
