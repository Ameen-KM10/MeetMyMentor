import { forwardRef } from "react";

const MarqueeCard = forwardRef(({ card }, ref) => (
  <div
    ref={ref}
    className="
      sm:w-[138px] sm:min-h-[158px] sm:p-2
      lg:min-w-[216px] lg:min-h-[244px] lg:p-[10px]
      mx-2 bg-gray-200 rounded-lg shadow flex items-end hover:scale-105 transition-all"
    style={{
      backgroundImage: `url(${card.image ? card.image : ProfileImage})`,
      backgroundSize: "100% 100%",
    }}
  >
    <div
      className="
        sm:h-[42px] sm:p-1
        lg:h-[60px] lg:p-2
        rounded-[3px] p-1 bg-white w-full truncate"
    >
      <p className="font-sans font-semibold truncate sm:text-[12px] lg:text-[16px]">
        {card.title}
      </p>
      <p className="font-sans font-regular truncate sm:text-[10px] lg:text-[14px] text-gray-600">
        {card.description}
      </p>
    </div>
  </div>
));

export default MarqueeCard;
