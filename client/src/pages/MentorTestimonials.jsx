import React, { useRef } from "react";
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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="bg-[#FAF3EC] py-14 min-h-[70vh] flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-[1100px] mb-8"
      >
        <div className="font-bold text-[#888] text-[1.1rem] mb-2">
          TESTIMONIALS
        </div>
        <h2 className="font-bold text-[2.2rem] text-[#18405A] mb-0 leading-tight">
          Don’t take our word for it Hear it from our Mentors
        </h2>
      </motion.div>
      <div className="w-full max-w-[1100px] pb-2 hide-scrollbar overflow-x-auto md:overflow-x-visible">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex gap-8 py-2 min-w-[1100px] md:min-w-0 md:flex-wrap"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="flex items-center justify-center"
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
    <div className="w-[260px] h-[340px] rounded-xl shadow-lg bg-white flex flex-col items-center justify-start p-8 transition-shadow duration-200">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-[54px] h-[54px] rounded-full object-cover mb-4"
      />
      <p className="text-base text-[#444] mb-6 text-left leading-relaxed line-clamp-5">
        {testimonial.text}
      </p>
      <div className="mt-auto w-full">
        <div className="font-cursive text-lg text-[#18405A] mb-1">
          {testimonial.name}
        </div>
        <div className="text-sm text-[#888]">{testimonial.title}</div>
      </div>
    </div>
  );
}

export default MentorTestimonials;
