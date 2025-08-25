import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Tabs1 from "../assets/icons/tabs_1.svg";
import Tabs2 from "../assets/icons/tabs_2.svg";
import Tabs3 from "../assets/icons/tabs_3.svg";
import Tabs4 from "../assets/icons/tabs_4.svg";
import Tabs5 from "../assets/icons/tabs_5.svg";
import Tabs6 from "../assets/icons/tabs_6.svg";
import Tabs7 from "../assets/icons/tabs_7.svg";
import Tabs8 from "../assets/icons/tabs_8.svg";
import Tabs9 from "../assets/icons/tabs_9.svg";
import Tabs10 from "../assets/icons/tabs_10.svg";
import Tabs11 from "../assets/icons/tabs_11.svg";
import Tabs12 from "../assets/icons/tabs_12.svg";

const tabs = [
  {
    label: "1:1 Video Calls",
    features: [
      {
        title: "Crystal-Clear Video",
        desc: "Reliable quality for distraction-free calls",
        icon: Tabs1,
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
        icon: Tabs4,
      },
      {
        title: "Clean Interface",
        desc: "Simple layout for smooth back-and-forth messaging.",
        icon: Tabs5,
      },
      {
        title: "File Sharing",
        desc: "Send resumes, mockups, presentations and more.",
        icon: Tabs6,
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
        icon: Tabs7,
      },
      {
        title: "End-to-End Support",
        desc: "Handles payments, confirmations, meet links, and reminders automatically.",
        icon: Tabs8,
      },
      {
        title: "Participant Tracking",
        desc: " View attendees, monitor status, and manage email and whatsapp follow-ups.",
        icon: Tabs9,
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
        icon: Tabs10,
      },
      {
        title: "Anti-Piracy Protection",
        desc: "Includes DRM encryption, IP restriction and screen capture blocking.",
        icon: Tabs11,
      },
      {
        title: "Direct Checkout",
        desc: "Buyers can purchase and access content directly from creator profiles.",
        icon: Tabs12,
      },
    ],
    description:
      "Upload and sell exclusive digital content with built-in protection and flexible access control.",
    image: "https://meetmymentor.me/assets/courses4-9e10f9d1.png",
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
                  <span>
                    <img
                      src={feature.icon}
                      style={{
                        width: 24,
                        height: 24,
                        minWidth: 24,
                        minHeight: 24,
                        maxWidth: 24,
                        maxHeight: 24,
                      }}
                    />
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
