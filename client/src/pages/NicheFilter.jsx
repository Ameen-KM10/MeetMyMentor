import { useState } from "react";
import { motion } from "framer-motion";
import BackgroundImage from "../assets/niche_background.png";
import nicheCards from "../data/nicheCardsData";
import NicheCard from "../component/NicheCard";

const filters = [
  "Web Dev",
  "UI/UX",
  "Fitness",
  "Career",
  "Marketing",
  "Finance",
  "Software",
  "View More",
];

const FilterButton = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`
      sm:px-2 sm:py-1 sm:text-[14px] sm:rounded-md
      lg:px-4 lg:py-2 lg:text-[16px] lg:rounded-lg
      border font-semibold transition-colors duration-150
      ${active
        ? "bg-[#FF7A00] text-white border-[#FF7A00]"
        : "bg-white text-[#163C50] border-[#163C50]"
      }
    `}
  >
    {label}
  </button>
);

const NicheFilter = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const filteredCards =
    activeFilter !== "View More"
      ? nicheCards.filter((card) => card.role === activeFilter)
      : nicheCards;

  const handleFilterChange = (filter) => {
    if (filter === "View More") {
      window.location.href = "#";
    } else {
      setActiveFilter(filter);
    }
  };

  return (
    <div
      className="bg-cover bg-center min-h-screen flex justify-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      <div className="sm:px-4 sm:py-8 sm:w-full
                      lg:items-center lg:justify-center
                      w-full max-w-[1440px] mx-auto flex flex-col">
        
        {/* Heading */}
        <h1 className="sm:text-4xl sm:text-left
                       lg:text-6xl
                       font-bold font-sans text-[#163C50] mb-2">
          Find Your Ideal <span className="text-[#FF7A00]">Mentor</span>
        </h1>

        {/* Tagline */}
        <p className="sm:hidden
                      lg:inline lg:w-[622px] lg:text-[16px]
                      mx-auto font-sans font-medium text-center text-gray-600 mb-6">
          Want to grow in your chosen field? Let us help you find a mentor who’s
          not only experienced but also aligned with your interests and ambitions
        </p>
        <p className="lg:hidden font-sans font-medium text-left text-gray-600 mb-6">
          Find a mentor to kick start your career
        </p>

        {/* Filter Buttons */}
        <div className="sm:gap-2 sm:flex-wrap
                        lg:justify-center
                        flex gap-2 mb-8">
          {filters.map((filter) => (
            <FilterButton
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onClick={() => handleFilterChange(filter)}
            />
          ))}
        </div>

        {/* Card Grid */}
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          className="sm:flex-nowrap sm:overflow-x-auto sm:gap-4 sm:w-screen sm:pb-4
                     lg:flex-wrap lg:justify-center lg:gap-6 lg:w-full
                     flex max-w-screen scrollbar-hide"
        >
          {filteredCards.map((card) => (
            <div key={card.name + card.role} className="sm:mb-2 lg:mb-0 flex-shrink-0">
              <NicheCard {...card} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NicheFilter;
