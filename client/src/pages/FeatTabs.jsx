import React, { useState, useRef, useEffect } from "react";
import VideoImg from "../assets/stock.png";
import UploadCloud from "../assets/icons/upload.svg";

const mentorFeatures = [
  {
    id: 1,
    label: "1:1 Video Calls",
    emoji: "📹",
    tagline: "Face-to-face connections",
    features: [
      {
        title: "Crystal-Clear Video",
        desc: "HD quality for distraction-free conversations",
        icon: UploadCloud,
        metric: "99.9% uptime",
      },
      {
        title: "Screen Share",
        desc: "Real-time collaboration and demos",
        icon: UploadCloud,
        metric: "0ms delay",
      },
      {
        title: "Live Whiteboard",
        desc: "Visual brainstorming together",
        icon: UploadCloud,
        metric: "Infinite canvas",
      },
    ],
    description:
      "Transform your mentoring with high-quality video calls that feel like sitting in the same room.",
    image: VideoImg,
    primaryColor: "from-[#FC8019] to-orange-600",
    accentColor: "bg-orange-100",
    particleColor: "bg-orange-300",
  },
  {
    id: 2,
    label: "1:1 DMs",
    emoji: "💬",
    tagline: "Instant connections",
    features: [
      {
        title: "Smart Messaging",
        desc: "AI-enhanced chat experience",
        icon: UploadCloud,
        metric: "<1s delivery",
      },
      {
        title: "Rich Media",
        desc: "Share files, images, and code",
        icon: UploadCloud,
        metric: "500MB limit",
      },
      {
        title: "Message History",
        desc: "Never lose important conversations",
        icon: UploadCloud,
        metric: "Unlimited storage",
      },
    ],
    description:
      "Stay connected with mentors through intelligent messaging that understands context and urgency.",
    image: VideoImg,
    primaryColor: "from-[#FC8019] to-orange-600",
    accentColor: "bg-orange-100",
    particleColor: "bg-orange-300",
  },
  {
    id: 3,
    label: "Live Webinars",
    emoji: "🎭",
    tagline: "Group wisdom",
    features: [
      {
        title: "Interactive Sessions",
        desc: "Polls, Q&A, and breakout rooms",
        icon: UploadCloud,
        metric: "500+ attendees",
      },
      {
        title: "Smart Recording",
        desc: "Auto-generated highlights and chapters",
        icon: UploadCloud,
        metric: "AI-powered",
      },
      {
        title: "Live Analytics",
        desc: "Real-time engagement insights",
        icon: UploadCloud,
        metric: "15+ metrics",
      },
    ],
    description:
      "Host dynamic webinars that engage audiences and create lasting learning experiences.",
    image: VideoImg,
    primaryColor: "from-[#FC8019] to-orange-600",
    accentColor: "bg-orange-100",
    particleColor: "bg-orange-300",
  },
  {
    id: 4,
    label: "Digital Assets",
    emoji: "🎨",
    tagline: "Knowledge library",
    features: [
      {
        title: "Smart Curation",
        desc: "AI organizes your content library",
        icon: UploadCloud,
        metric: "Auto-tagged",
      },
      {
        title: "Interactive Docs",
        desc: "Multimedia guides and tutorials",
        icon: UploadCloud,
        metric: "Rich format",
      },
      {
        title: "Progress Tracking",
        desc: "See how mentees engage with content",
        icon: UploadCloud,
        metric: "Deep insights",
      },
    ],
    description:
      "Build a comprehensive knowledge base with interactive content that adapts to each mentee's needs.",
    image: VideoImg,
    primaryColor: "from-[#FC8019] to-orange-600",
    accentColor: "bg-orange-100",
    particleColor: "bg-orange-300",
  },
];

const MorphingCard = ({ feature, isActive, onClick, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(index)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden rounded-3xl cursor-pointer transition-all duration-700 transform-gpu ${
        isActive
          ? "scale-110 rotate-1 shadow-2xl ring-4 ring-white ring-opacity-50"
          : isHovered
          ? "scale-105 -rotate-1 shadow-xl"
          : "hover:scale-102 shadow-lg"
      }`}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {/* Morphing gradient background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          feature.primaryColor
        } transition-all duration-700 ${
          isActive ? "opacity-95" : isHovered ? "opacity-85" : "opacity-75"
        }`}
      />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative p-8 h-full min-h-[180px] flex flex-col justify-between text-white">
        {/* Floating emoji */}
        {/* <div
          className={`text-6xl mb-4 transition-all duration-500 ${
            isActive ? "animate-bounce" : isHovered ? "animate-pulse" : ""
          }`}
        >
          {feature.emoji}
        </div> */}

        <div className="flex-1">
          <h3 className="font-bold text-2xl mb-2">{feature.label}</h3>
          <p className="text-white/80 text-sm font-medium mb-4">
            {feature.tagline}
          </p>
        </div>

        {/* Active indicator with ripple effect */}
        {isActive && (
          <div className="absolute top-6 right-6">
            <div className="relative">
              <div className="w-4 h-4 bg-white rounded-full"></div>
              <div className="absolute inset-0 w-4 h-4 bg-white rounded-full animate-ping opacity-40"></div>
            </div>
          </div>
        )}

        {/* Bottom glow line */}
        <div
          className={`h-1 rounded-full bg-white/30 transform transition-all duration-500 ${
            isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
          }`}
        />
      </div>
    </div>
  );
};

const ImmersiveDetails = ({ feature }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, [feature.id]);

  return (
    <div
      className={`max-h-screen overflow-y-auto transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {/* Header Section */}
      <div className="flex justify-between items-start gap-8">
        <div className="mb-6 flex flex-col max-w-md ">
          <h2 className="text-4xl font-bold text-[#163C50] mb-3 ">
            {feature.label}
          </h2>
          <p className="text-xl text-gray-500 font-medium mb-3">
            {feature.tagline}
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">{feature.description}</p>
          {/* Simple Features List */}
          <div className="space-y-4">
            {feature.features.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-start gap-4 transition-all duration-500 transform ${
                  isVisible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
                style={{
                  transitionDelay: `${index * 100 + 300}ms`,
                }}
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 hover:bg-orange-50 transition-all duration-300">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-6 h-6 filter brightness-0 opacity-70"
                    style={{
                      filter:
                        "invert(45%) sepia(96%) saturate(2028%) hue-rotate(16deg) brightness(96%) contrast(106%)",
                    }}
                  />
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-lg text-[#163C50] mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Large Image */}
        <div className="mb-3 flex-shrink-0">
          <img
            src={feature.image}
            alt={feature.label}
            className="w-48 h-64 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

const FeaTab = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="w-full py-20 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50"
    >
      {/* Animated header with floating elements */}
      <div
        className={`text-center mb-20 relative transform transition-all duration-1200 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <h2 className="font-black text-5xl md:text-7xl lg:text-8xl mb-6 relative">
          <span className="text-[#163C50]">Empower</span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC8019] to-red-500 relative">
            Mentors
            <div className="absolute -bottom-4 left-0 w-full h-2 bg-gradient-to-r from-[#FC8019]/30 to-red-500/30 rounded-full blur-sm"></div>
          </span>
        </h2>
        <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
          Revolutionary tools that transform how mentors connect, teach, and
          inspire the next generation
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Desktop: Floating islands layout */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Left floating cards */}
            <div className="absolute left-0 top-0 w-96 space-y-6 z-10">
              {mentorFeatures.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`transform transition-all duration-700 ${
                    isInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-12"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <MorphingCard
                    feature={feature}
                    isActive={activeFeature === index}
                    onClick={setActiveFeature}
                    index={index}
                  />
                </div>
              ))}
            </div>

            {/* Right immersive content */}
            <div className="ml-96 pl-12">
              <div className="min-h-[800px]">
                <ImmersiveDetails feature={mentorFeatures[activeFeature]} />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Immersive cards */}
        <div className="lg:hidden space-y-16">
          {mentorFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`transform transition-all duration-1000 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{ transitionDelay: `${index * 300}ms` }}
            >
              {/* Mobile immersive card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                {/* Background gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.primaryColor} opacity-90`}
                />

                {/* Content */}
                <div className="relative p-8 text-white">
                  <div className="flex items-center gap-4 mb-6">
                    {/* <div className="text-6xl animate-bounce">
                      {feature.emoji}
                    </div> */}
                    <div>
                      <h3 className="font-bold text-3xl mb-1">
                        {feature.label}
                      </h3>
                      <p className="text-white/80">{feature.tagline}</p>
                    </div>
                  </div>

                  <p className="text-white/90 mb-6 text-lg leading-relaxed">
                    {feature.description}
                  </p>

                  <img
                    src={feature.image}
                    alt={feature.label}
                    className="w-1/2 h-48 object-cover rounded-2xl shadow-xl mb-6 opacity-90"
                  />

                  {/* Mobile features */}
                  <div className="space-y-4">
                    {feature.features.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 p-4 rounded-xl bg-white/10 backdrop-blur-sm"
                      >
                        <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                          <img
                            src={item.icon}
                            alt=""
                            className="w-5 h-5 filter brightness-0 invert"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-semibold text-white">
                              {item.title}
                            </h4>
                            <span className="text-xs font-medium text-white/70">
                              {item.metric}
                            </span>
                          </div>
                          <p className="text-white/80 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaTab;
