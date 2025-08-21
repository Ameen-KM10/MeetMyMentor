import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Photo1 from "../assets/profile/photo1.webp";
import Photo2 from "../assets/profile/photo2.webp";
import Photo3 from "../assets/profile/photo3.webp";
import Photo4 from "../assets/profile/photo4.webp";
import Photo5 from "../assets/profile/photo5.webp";

const testimonials = [
  {
    name: "Surya Jayaraman",
    title: "CEO, Giamiti Metal Formers",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar: Photo1,
    profile: Photo1,
  },
  {
    name: "Surya Jayaraman",
    title: "CEO, Giamiti Metal Formers",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar: Photo2,
    profile: Photo2,
  },
  {
    name: "Surya Jayaraman",
    title: "CEO, Giamiti Metal Formers",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar: Photo3,
    profile: Photo3,
  },
  {
    name: "Surya Jayaraman",
    title: "CEO, Giamiti Metal Formers",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar: Photo4,
    profile: Photo4,
  },
  {
    name: "Surya Jayaraman",
    title: "CEO, Giamiti Metal Formers",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar: Photo4,
    profile: Photo4,
  },
  {
    name: "Surya Jayaraman",
    title: "CEO, Giamiti Metal Formers",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    avatar: Photo4,
    profile: Photo4,
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
        <h2 className="font-bold text-[2.2rem] text-[#18405A] mb-0 leading-tight">
          Don’t take our word for it Hear it from our Mentors
        </h2>
      </motion.div>
      <div className="w-full max-w-screen pb-2 hide-scrollbar overflow-x-auto md:overflow-hidden">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex gap-8 py-2 flex-nowrap md:justify-center md:overflow-hidden"
        >
          {testimonials.slice(0, visibleCount).map((t, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex items-center justify-center flex-shrink-0 w-[300px] h-[360px] md:w-[300px] md:h-[360px] md:flex-shrink-0"
              animate={inView ? "show" : "hidden"}
            >
              <FlipCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>
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
    <div className="relative flex items-center justify-center w-[300px] h-[360px] p-8 rounded-3xl overflow-hidden border border-[#cccccc] transition-all duration-300 ease-in-out lg:hover:shadow-[4px_4px_0_0_#18405A] lg:hover:border-[#18405A] lg:hover:-translate-x-1 lg:hover:-translate-y-1 bg-white">
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
          <p className="opacity-80 text-base line-clamp-3">
            {testimonial.text}
          </p>
          <button className="relative font-bold bg-transparent text-black text-base py-1 px-0 cursor-pointer overflow-hidden transition-all duration-500 ease-in-out group">
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
