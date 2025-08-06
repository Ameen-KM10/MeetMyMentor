import React from "react";

const MarqueeCard = React.forwardRef(({ card }, ref) => (
  <div ref={ref} className="sm:min-w-[138px] lg:min-w-[216px] sm:min-h-[158px] lg:min-h-[244px] mx-2 bg-gray-200 rounded shadow p-2 flex items-end">
    <div className="bg-white w-full sm:h-[42px] lg:h-[48px] rounded-sm p-1">
      <p className="font-sans font-semibold text-[12px]">{card.title}</p>
      <p className="font-sans font-medium text-[10px]">{card.description}</p>
    </div>
  </div>
));

export default MarqueeCard;
