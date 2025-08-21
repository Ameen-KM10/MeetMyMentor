import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VideoImg from "../assets/stock.png";
import UploadCloud from "../assets/icons/upload.svg";

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

const Stack = () => {
  const containerRef = useRef(null);

  // Track scroll progress of the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Use tabs data for cards instead of simple card data
  const cards = tabs;

  return (
    <div className="text-white min-h-screen flex flex-col mb-20">
      {/* Stack Container */}
      <div ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
          {/* Centered Heading */}
          <div className="mb-8 lg:mb-16">
            <h2 className="text-center font-bold font-sans text-[#FC8019] text-[36px] leading-10 lg:text-[67px] lg:leading-none">
              <span className="text-[#163C50]">For the</span> Mentors
            </h2>
          </div>

          {/* Centered Cards Container */}
          <div className="relative w-full max-w-6xl mx-auto px-4 lg:px-8">
            <div className="relative h-[600px] lg:h-[500px] flex items-center justify-center">
              {cards.map((card, index) => {
                // Each card animates at different scroll positions
                const cardStart = index * 0.2;
                const cardEnd = cardStart + 0.2;

                // Transform values based on scroll progress
                const y = useTransform(
                  scrollYProgress,
                  [cardStart, cardEnd],
                  // First card starts at center (0), others start from bottom and move to stack position
                  index === 0 ? [0, 0] : [400, index * 25]
                );

                // Opacity - smoother transition for cards appearing from bottom
                const opacity = useTransform(
                  scrollYProgress,
                  [cardStart, cardStart + 0.1], // Longer opacity transition for smooth appearance
                  index === 0 ? [1, 1] : [0, 1]
                );

                // Define colors for each card - now white with mild borders
                const cardStyle = "bg-white border border-gray-200";

                return (
                  <motion.div
                    key={index}
                    className={`absolute w-full h-[550px] lg:h-[500px] ${cardStyle} rounded-2xl shadow-lg`}
                    style={{
                      y,
                      opacity,
                      zIndex: index + 1,
                      x: "-50%", // Center horizontally
                      left: "50%",
                      top: "50%",
                      translateY: "-50%", // Center vertically, but allow y animation
                    }}
                  >
                    {/* Mobile Layout */}
                    <div className="h-full flex flex-col gap-2 p-6 lg:hidden">
                      {/* Title */}
                      <h2 className="text-2xl font-bold mb-4 text-gray-900 text-left">
                        {card.label}
                      </h2>

                      {/* Image */}
                      <div className="flex justify-center mb-4">
                        <img
                          src={card.image}
                          alt={card.label}
                          className="w-full h-48 object-cover rounded-xl shadow-lg opacity-90"
                        />
                      </div>

                      {/* Description */}
                      <p className="text-gray-700 text-base mb-4 leading-relaxed text-left">
                        {card.description}
                      </p>

                      {/* Features List */}
                      <div className="space-y-3">
                        {card.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-3"
                          >
                            <img
                              src={feature.icon}
                              alt=""
                              className="w-4 h-4 opacity-70 flex-shrink-0"
                            />
                            <div className="text-left">
                              <span className="text-gray-900 font-semibold text-sm">
                                {feature.title}
                              </span>
                              <p className="text-gray-600 text-xs">
                                {feature.desc}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Desktop Layout */}
                    <div className="hidden lg:flex h-full items-center justify-between p-12">
                      {/* Left Side: Content */}
                      <div className="flex-1 text-gray-900 text-left">
                        <h2 className="text-5xl font-bold mb-6 text-gray-900">
                          {card.label}
                        </h2>
                        <p className="text-gray-700 text-xl mb-8 leading-relaxed">
                          {card.description}
                        </p>

                        {/* Features List - Show all 3 features */}
                        <div className="space-y-4">
                          {card.features.map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center gap-4"
                            >
                              <img
                                src={feature.icon}
                                alt=""
                                className="w-6 h-6 opacity-70 flex-shrink-0"
                              />
                              <div className="text-left">
                                <span className="text-gray-900 font-semibold text-lg">
                                  {feature.title}
                                </span>
                                <p className="text-gray-600 text-sm">
                                  {feature.desc}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Right Side: Image */}
                      <div className="flex-1 flex justify-center items-center pl-12">
                        <img
                          src={card.image}
                          alt={card.label}
                          className="w-96 h-72 object-cover rounded-xl shadow-lg opacity-90"
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
