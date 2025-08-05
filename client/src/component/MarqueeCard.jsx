import React from "react";

const MarqueeCard = ({ card }) => (
  <div className="min-w-[138px] min-h-[158px] mx-2 bg-gray-200 rounded shadow p-2 flex items-end">
    <div className="bg-white w-full h-[42px] rounded-sm p-1">
    <p className="font-sans font-semibold text-[12px]">{card.title}</p>
    <p className="font-sans font-medium text-[10px]">{card.description}</p>
    </div>
  </div>
);

export default MarqueeCard;
