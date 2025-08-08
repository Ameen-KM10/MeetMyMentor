import BackgroundImage from "../assets/niche_background.png";
import nicheCards from "../data/nicheCards";
import NicheCard from "../component/NicheCard";

const filters = [
  "Web Dev", "UI/UX", "Fitness", "Career", "Marketing", "Finance", "Software", "View More"
];

import { useState } from "react";

const NicheFilter = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  // Filter cards by role, except "View More"
  const filteredCards =
    activeFilter && activeFilter !== "View More"
      ? nicheCards.filter(card => card.role === activeFilter)
      : nicheCards;

  return (
    <div
      className="bg-cover bg-center min-h-screen relative flex justify-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="w-full max-w-[1440px] px-4 py-8 mx-auto flex flex-col items-center justify-center">
        {/* Heading */}
        <h1 className="text-center font-bold font-sans text-[#163C50] text-4xl lg:text-6xl mb-2">
          Find Your Ideal <span className="text-[#FF7A00]">Mentor</span>
        </h1>
        {/* Tagline */}
        <p className="
        sm:w-[300px] sm:text-[12px] 
            lg:w-[822px] lg:text-[16px] 
            mx-auto font-sans font-medium text-center text-gray-600 mb-6">
          Want to grow in your chosen field? Let us help you find a mentor who’s not only experienced but also aligned with your interests and ambitions
        </p>
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-lg border font-semibold text-base transition-colors duration-150 ${
                activeFilter === filter
                  ? "bg-[#FF7A00] text-white border-[#FF7A00]"
                  : "bg-white text-[#163C50] border-[#163C50]"
              }`}
              onClick={() => {
                if (filter === "View More") {
                  window.location.href = "#";
                } else {
                  setActiveFilter(filter);
                }
              }}
            >
              {filter}
            </button>
          ))}
        </div>
        {/* Card Grid */}
        <div className="flex flex-wrap justify-center gap-6 w-[1000px]">
          {filteredCards.map(card => (
            <NicheCard
              key={card.name + card.role}
              image={card.image}
              name={card.name}
              role={card.role}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NicheFilter;