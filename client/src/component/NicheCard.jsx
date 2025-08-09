import { useState } from "react";

const NicheCard = ({ image, name, role, description }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`
        sm:w-[159px] sm:h-[182px]
        lg:w-[216px] lg:h-[244px]
        relative bg-white rounded-xl shadow-lg overflow-hidden
        transition-all duration-300 cursor-pointer flex flex-col justify-end
      `}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100% 100%",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`
          sm:h-[52px]
          lg:${hovered ? "h-[156px]" : "h-[68px]"}
          w-full bg-white transition-all px-4 py-2
        `}
      >
        <p
          className={`
            sm:text-[14px]
            lg:text-[16px]
            font-sans font-semibold truncate
          `}
        >
          {name}
        </p>
        <p
          className={`
            sm:text-[10px]
            lg:text-[14px]
            font-sans font-regular truncate text-gray-600
          `}
        >
          {role}
        </p>
        <p
          className={`
            sm:hidden
            lg:inline lg:text-[14px] lg:line-clamp-4
            font-sans font-regular mt-2 text-gray-600 transform transition-all duration-300
            ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
          `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default NicheCard;
