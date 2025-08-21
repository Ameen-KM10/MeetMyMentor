import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ic1 from "../assets/icons/feature_1.svg";
import ic2 from "../assets/icons/feature_2.svg";
import ic3 from "../assets/icons/feature_3.svg";
import ic4 from "../assets/icons/feature_4.svg";
import ic5 from "../assets/icons/feature_5.svg";
import ic6 from "../assets/icons/feature_6.svg";

const features = [
  {
    title: "Automated Reminders",
    description:
      "Reminders are sent to users before every session you host. No manual follow-ups needed.",
    icon: ic1,
  },
  {
    title: "In-Built Paywall",
    description:
      "All paid sessions, content and webinars are automatically gated behind a secure checkout.",
    icon: ic2,
  },
  {
    title: "Multi-Channel Payout",
    description:
      "Withdraw your earnings through bank transfer, UPI, or PayPal, with full control over payouts.",
    icon: ic3,
  },
  {
    title: "Enhanced Privacy",
    description:
      "Your personal contact details are never shared. All interactions stay within the platform.",
    icon: ic4,
  },
  {
    title: "Verified Profiles",
    description:
      "Apply for verification to add a trusted badge to your profile and increase visibility.",
    icon: ic5,
  },
  {
    title: "All-in-One Dashboard",
    description:
      "View and manage your sessions, digital content, availability and payouts from one dashboard.",
    icon: ic6,
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

const FeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      // initial="hidden"
      // animate={inView ? "show" : "hidden"}
      className={`min-h-screen bg-[#FAF3EC] px-4 flex flex-col justify-center transition-all `}
    >
      <h2 className="lg:hidden text-left font-bold font-sans text-[#FC8019] text-[36px] leading-10 my-6">
        <span className="text-[#163C50]">Platform</span> <br /> Features
      </h2>
      <h2 className="sm:hidden lg:inline text-center font-bold font-sans text-[#FC8019] text-[67px] mb-10">
        <span className="text-[#163C50]">Platform</span> Features
      </h2>
      <div className="flex flex-col justify-center items-center">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-1 sm:mb-10 lg:grid-cols-3 gap-8 w-full max-w-7xl"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              className="bg-white rounded-md p-8 flex flex-col lg:gap-3 justify-center items-start sm:min-h-[220px] lg:min-h-[320px] lg:hover:scale-105 lg:hover:shadow-md"
              style={{
                transitionProperty: "box-shadow, transform",
              }}
            >
              <img
                className="mb-4 ml-[-10px] sm:h-[60px] lg:h-[80px]"
                src={feature.icon}
              />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
