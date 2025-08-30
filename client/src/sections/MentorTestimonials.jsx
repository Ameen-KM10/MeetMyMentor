import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Saranya SastiKumar",
    title: "Life coach",
    text: "It has helped me streamline my one to one coaching sessions and the reminders were really helpful",
    Link: "Saranya_SastiKumarC",
  },
  {
    name: "Brown mask",
    title: "Fitness trainer",
    text: "As an influence, Meet My Mentor was like a eureka moment for me. This is a very strong bridge that connects the gap between the mentors and mentees",
    Link: "Brown_Mask",
  },
  {
    name: "Kamalesh RV",
    title: "Finance Mentor",
    text: "Interacting with my audience in 1:1 realtime was a highlight of the session. I got a chance to understand different perspectives and tailor the discussion to their needs",
    Link: "kamalesh_rv",
  },
  {
    name: "Gamilel das",
    title: "Coding Coach",
    text: "Was a Great First leg considering SIH 2024 and needing a base platform for 1:1 Mentorships ! And it has set the base for all the future mentorship",
    Link: "dasandcode",
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 80, damping: 12 },
  },
};

const MentorTestimonials = () => {
  const ref = useRef(null);
  const [visibleCount, setVisibleCount] = useState(testimonials.length);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        // Desktop: show up to 4 cards
        setVisibleCount(Math.min(4, testimonials.length));
      } else {
        // Mobile: show all
        setVisibleCount(testimonials.length);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navigation functions for mobile
  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const goToIndex = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      className="bg-[#FAF3EC] py-14 px-5 items-center min-h-[70vh] flex flex-col "
    >
      <motion.div className="w-full max-w-[1300px] mb-8">
        <div className="font-bold text-[#888] text-[1.1rem] mb-2">
          TESTIMONIALS
        </div>
        <h2 className="font-bold text-[36px] lg:text-[2.2rem] text-[#18405A] mb-0 leading-tight">
          Don’t take our word for it Hear it from our Mentors
        </h2>
      </motion.div>
      {/* Desktop: Multiple cards */}
      <div className="hidden md:block w-full max-w-screen pb-2">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex gap-8 py-2 flex-nowrap justify-center"
        >
          {testimonials.slice(0, visibleCount).map((t, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex items-center justify-center flex-shrink-0 w-[300px] h-[400px]"
              animate={inView ? "show" : "hidden"}
            >
              <FlipCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Mobile: Single card with navigation */}
      <div className="md:hidden w-full flex flex-col items-center">
        <div className="flex items-center justify-center w-full">
          {/* Card Container */}
          <motion.div
            key={currentIndex}
            variants={cardVariants}
            initial="hidden"
            animate="show"
            className="flex items-center justify-center w-[300px] h-[400px]"
          >
            <FlipCard testimonial={testimonials[currentIndex]} />
          </motion.div>
        </div>
      </div>

      {/* Navigation arrows and radio dots for mobile */}
      <div className="flex items-center justify-center gap-4 mt-6 md:hidden">
        {/* Left Arrow */}
        <button
          onClick={goToPrevious}
          className="p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200"
          aria-label="Previous testimonial"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="15,18 9,12 15,6"></polyline>
          </svg>
        </button>

        {/* Radio dots */}
        <div className="flex gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "bg-[#18405A] scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${idx + 1}`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={goToNext}
          className="p-2 bg-white rounded-full shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200"
          aria-label="Next testimonial"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="9,18 15,12 9,6"></polyline>
          </svg>
        </button>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { scrollbar-width: none; -ms-overflow-style: none; }
      `}</style>
    </motion.section>
  );
};

function FlipCard({ testimonial }) {
  return (
    <div className="relative flex items-center justify-center w-[300px] h-[400px] p-8 rounded-3xl overflow-hidden border border-[#cccccc] transition-all duration-300 ease-in-out lg:hover:shadow-[4px_4px_0_0_#18405A] lg:hover:border-[#18405A] lg:hover:-translate-x-1 lg:hover:-translate-y-1 bg-white">
      <div className="flex flex-col h-full justify-between gap-2 text-black w-full">
        <div>
          <strong className="block text-lg font-bold">
            {testimonial.name}
          </strong>
          <p className="opacity-80 text-base">{testimonial.title}</p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <svg viewBox="0 0 24 24" className="w-12 h-12 mb-2">
            <path
              fill="black"
              d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"
            ></path>
          </svg>
          <p className="opacity-80 text-base ">{testimonial.text}</p>
          <button
            className="relative font-bold bg-transparent text-black text-base py-1 px-0 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out group"
            onClick={() => (window.location.href = `/${testimonial.Link}`)}
          >
            <span className="transition-all duration-500 ease-in-out">
              View profile
            </span>
            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#18405A] pointer-events-none -z-10 transition-transform duration-700 ease-in-out scale-x-0 origin-right group-hover:scale-x-100 group-hover:origin-left"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MentorTestimonials;
