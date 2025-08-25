import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import VideoImg from "../assets/stock.png"; // Use any stock image you have
import UploadCloud from "../assets/icons/tabs_1.svg";

const tabs = [
  {
    label: "1:1 Video Calls",
    features: [
      {
        title: "Crystal-Clear Video",
        desc: "Reliable quality for distraction-free calls",
        icon: UploadCloud,
      },
      {
        title: "Screen Share",
        desc: "Walk through work, demos in real time",
        icon: UploadCloud,
      },
      {
        title: "Live Whiteboard",
        desc: "Reliable quality for distraction-free calls",
        icon: UploadCloud,
      },
    ],
    description:
      "One-on-One calls to connect directly, answer questions and share knowledge in real time.",
    image: VideoImg,
  },
  {
    label: "1:1 DMs",
    features: [
      {
        title: "Direct Messaging",
        desc: "Chat privately with your mentor",
        icon: UploadCloud,
      },
      {
        title: "File Sharing",
        desc: "Share resources and notes easily",
        icon: UploadCloud,
      },
      {
        title: "Instant Replies",
        desc: "Get answers in real time",
        icon: UploadCloud,
      },
    ],
    description:
      "Message mentors directly to ask questions, share files, and get instant feedback.",
    image: VideoImg,
  },
  {
    label: "Webinars",
    features: [
      {
        title: "Group Sessions",
        desc: "Learn with others in live webinars",
        icon: UploadCloud,
      },
      {
        title: "Q&A",
        desc: "Ask questions and get answers live",
        icon: UploadCloud,
      },
      {
        title: "Session Recordings",
        desc: "Access past webinars anytime",
        icon: UploadCloud,
      },
    ],
    description:
      "Join live webinars to learn from mentors, ask questions, and access recordings.",
    image: VideoImg,
  },
  {
    label: "Digital Content",
    features: [
      {
        title: "Exclusive Resources",
        desc: "Access curated guides and templates",
        icon: UploadCloud,
      },
      {
        title: "Video Tutorials",
        desc: "Learn at your own pace",
        icon: UploadCloud,
      },
      {
        title: "Downloadable Content",
        desc: "Save materials for future use",
        icon: UploadCloud,
      },
    ],
    description:
      "Get access to exclusive digital content, tutorials, and downloadable resources.",
    image: VideoImg,
  },
];

const tabContentVariants = {
  initial: { opacity: 0, y: 30, scale: 0.98 },
  animate: { opacity: 1, y: 0, scale: 1 },
  exit: { opacity: 0, y: -30, scale: 0.98 },
};

const FeaturesTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full flex flex-col lg:items-center py-12 px-4">
      <h2 className="sm:hidden lg:inline text-center font-bold font-sans text-[#FC8019] text-[67px] mb-10">
        <span className="text-[#163C50]">For the</span> Mentors
      </h2>
      {/* Tabs for desktop */}
      <div className="hidden lg:flex gap-12 w-4/7 max-w-[1440px] justify-center border-b mb-8">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`px-6 py-2 font-semibold text-[20px] transition-colors ${
              activeTab === idx
                ? "text-[#FC8019] border-b-4 border-[#FC8019]"
                : "text-[#222] border-b-4 border-transparent"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Tab content for desktop with animation */}
      <div className="hidden lg:flex w-full max-w-4xl items-center justify-between gap-12 min-h-[320px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={tabContentVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.18, ease: "easeOut" }} // <-- Faster animation
            className="flex w-full items-center justify-between gap-12"
          >
            {/* Left: Features */}
            <div className="flex-1">
              <h3 className="font-semibold text-[#222] text-[40px] mb-2">
                {tabs[activeTab].label}
              </h3>
              <p className="text-gray-600 font-sans text-[16px] mb-6">
                {tabs[activeTab].description}
              </p>
              <ul className="flex flex-col just gap-4">
                {tabs[activeTab].features.map((feature) => (
                  <li key={feature.title} className="flex items-center gap-5">
                    {/* <span className="text-2xl">{feature.icon}</span> */}
                    <span>
                      <img src={feature.icon} />
                    </span>
                    <div>
                      <span className="font-semibold text-[18px] text-[#222]">
                        {feature.title}
                      </span>
                      <div className="text-gray-500 text-[16px]">
                        {feature.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            {/* Right: Image */}
            <div className="flex-1 flex justify-center">
              <motion.img
                key={tabs[activeTab].image + activeTab}
                src={tabs[activeTab].image}
                alt={tabs[activeTab].label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.18, ease: "easeOut" }} // <-- Faster animation
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Mobile: show all tab contents one after another */}
      <h2 className="lg:hidden text-left font-bold font-sans text-[#FC8019] text-[36px] leading-10 mb-4">
        <span className="text-[#163C50]">For the</span> <br /> Mentors
      </h2>
      <div className="flex flex-col gap-12 w-full lg:hidden">
        {tabs.map((tab) => (
          <motion.div
            key={tab.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2, ease: "easeOut" }} // <-- Faster animation
            className="flex flex-col justify-center"
          >
            <h3 className="font-semibold text-[#222] text-[24px] text-left mb-2">
              {tab.label}
            </h3>
            <p className="text-gray-600 font-sans text-[16px] font-medium mb-4 text-left">
              {tab.description}
            </p>
            <img
              src={tab.image}
              alt={tab.label}
              className="w-full h-auto mb-6"
            />
            <ul className="flex flex-col gap-4 ml-10 mb-4">
              {tab.features.map((feature) => (
                <li key={feature.title} className="flex items-center gap-3">
                  {/* <span className="text-2xl">{feature.icon}</span> */}
                  <span>
                    <img src={feature.icon} />
                  </span>
                  <div>
                    <span className="font-medium text-[#222]">
                      {feature.title}
                    </span>
                    <div className="text-gray-500 text-sm">{feature.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesTab;
