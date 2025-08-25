import { useRef, useState, useCallback, useMemo, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VideoImg from "../assets/stock.png";
import UploadCloud from "../assets/icons/tabs_1.svg";
import Tabs2 from "../assets/icons/tabs_2.svg";
import Tabs3 from "../assets/icons/tabs_3.svg";

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
        icon: Tabs2,
      },
      {
        title: "Live Whiteboard",
        desc: "Reliable quality for distraction-free calls",
        icon: Tabs3,
      },
    ],
    description:
      "One-on-One calls to connect directly, answer questions and share knowledge in real time.",
    image: "https://meetmymentor.me/assets/videomodal4-3e2c7b23.png",
  },
  {
    label: "1:1 DMs",
    features: [
      {
        title: "Stay On-Platform",
        desc: "No need to share your email or phone number.",
        icon: UploadCloud,
      },
      {
        title: "Clean Interface",
        desc: "Simple layout for smooth back-and-forth messaging.",
        icon: UploadCloud,
      },
      {
        title: "File Sharing",
        desc: "Send resumes, mockups, presentations and more.",
        icon: UploadCloud,
      },
    ],
    description:
      "Direct messaging without sharing personal contact details. Built for quick, focused conversations.",
    image: "https://meetmymentor.me/assets/chat4-7bf7d93a.png",
  },
  {
    label: "Webinars",
    features: [
      {
        title: "One-Click Setup",
        desc: "Create and publish webinars for any topic or audience.",
        icon: UploadCloud,
      },
      {
        title: "End-to-End Support",
        desc: "Handles payments, confirmations, meet links, and reminders automatically.",
        icon: UploadCloud,
      },
      {
        title: "Participant Tracking",
        desc: " View attendees, monitor status, and manage email and whatsapp follow-ups.",
        icon: UploadCloud,
      },
    ],
    description:
      "Host paid webinars with full support across setup, access, and post-session tracking.",
    image: "https://meetmymentor.me/assets/webinar4-f7f42ee1.png",
  },
  {
    label: "Digital Content",
    features: [
      {
        title: "Course Hosting",
        desc: "Upload videos, PDFs or audio files for paid, gated access.",
        icon: UploadCloud,
      },
      {
        title: "Anti-Piracy Protection",
        desc: "Includes DRM encryption, IP restriction and screen capture blocking.",
        icon: UploadCloud,
      },
      {
        title: "Direct Checkout",
        desc: "Buyers can purchase and access content directly from creator profiles.",
        icon: UploadCloud,
      },
    ],
    description:
      "Upload and sell exclusive digital content with built-in protection and flexible access control.",
    image: "https://meetmymentor.me/assets/courses4-9e10f9d1.png",
  },
];

// Memoized Card Component for better performance
const OptimizedCard = ({ card, index, scrollYProgress, isVisible }) => {
  // Only calculate transforms if component is visible
  const cardStart = useMemo(() => index * 0.18, [index]);
  const cardEnd = useMemo(() => cardStart + 0.18, [cardStart]);

  // Reduced complexity transforms with throttling
  const y = useTransform(
    scrollYProgress,
    [cardStart, cardEnd],
    index === 0 ? [0, 0] : [250, index * 18] // Reduced distance and stacking
  );

  const opacity = useTransform(
    scrollYProgress,
    [cardStart, cardStart + 0.06],
    index === 0 ? [1, 1] : [0, 1]
  );

  if (!isVisible && index > 0) {
    return null; // Don't render off-screen cards for better performance
  }

  return (
    <motion.div
      className="absolute w-full h-[550px] lg:h-[500px] bg-white border border-gray-200 rounded-2xl shadow-lg"
      style={{
        y: isVisible ? y : 0,
        opacity: isVisible ? opacity : index === 0 ? 1 : 0,
        zIndex: index + 1,
        x: "-50%",
        left: "50%",
        top: "50%",
        translateY: "-50%",
        // Reduce GPU usage on low-end devices
        transform: isVisible ? undefined : "translate3d(-50%, -50%, 0)",
      }}
      // Conditional will-change for performance
      animate={{
        willChange: isVisible ? "transform, opacity" : "auto",
      }}
      transition={{
        type: "spring",
        damping: 25,
        stiffness: 120,
        mass: 0.8,
      }}
    >
      {/* Mobile Layout */}
      <div className="h-full flex flex-col gap-2 p-6 lg:hidden">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 text-left">
          {card.label}
        </h2>

        <div className="flex justify-center mb-4">
          <img
            src={card.image}
            alt={card.label}
            className="w-full h-48 object-cover rounded-xl shadow-lg opacity-90"
            loading="lazy"
            decoding="async"
            fetchPriority={index === 0 ? "high" : "low"}
          />
        </div>

        <p className="text-gray-700 text-base mb-4 leading-relaxed text-left">
          {card.description}
        </p>

        <div className="space-y-3">
          {card.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center gap-3">
              <img
                src={feature.icon}
                alt=""
                className="w-4 h-4 opacity-70 flex-shrink-0"
                loading="lazy"
              />
              <div className="text-left">
                <span className="text-gray-900 font-semibold text-sm">
                  {feature.title}
                </span>
                <p className="text-gray-600 text-xs">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-full items-center justify-between p-12">
        <div className="flex-1 text-gray-900 text-left">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            {card.label}
          </h2>
          <p className="text-gray-700 text-xl mb-8 leading-relaxed">
            {card.description}
          </p>

          <div className="space-y-4">
            {card.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center gap-4">
                <img
                  src={feature.icon}
                  alt=""
                  className="w-6 h-6 opacity-70 flex-shrink-0"
                  loading="lazy"
                />
                <div className="text-left">
                  <span className="text-gray-900 font-semibold text-lg">
                    {feature.title}
                  </span>
                  <p className="text-gray-600 text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center pl-12">
          <img
            src={card.image}
            alt={card.label}
            className="w-96 h-72 object-cover rounded-xl shadow-lg opacity-90"
            loading="lazy"
            decoding="async"
            fetchPriority={index === 0 ? "high" : "low"}
          />
        </div>
      </div>
    </motion.div>
  );
};

const Stack = () => {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  // Intersection Observer for visibility-based optimization
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Track scroll progress with throttling
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Memoize tabs data
  const cards = useMemo(() => tabs, []);

  return (
    <div className="text-white bg-[#FAF3EC] min-h-screen flex flex-col">
      {/* Stack Container - Reduced height for better performance */}
      <div ref={containerRef} className="relative h-[400vh]">
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
              {cards.map((card, index) => (
                <OptimizedCard
                  key={`card-${index}`}
                  card={card}
                  index={index}
                  scrollYProgress={scrollYProgress}
                  isVisible={isVisible}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;
