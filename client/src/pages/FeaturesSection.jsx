import React, { useEffect, useState } from "react";
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

const FeaturesSection = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);
  return (
    <div
      className={`min-h-screen bg-[#FAF3EC] px-4 flex flex-col justify-center transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <h2 className="lg:hidden text-left font-bold font-sans text-[#FC8019] text-[36px] leading-10 my-6">
        <span className="text-[#163C50]">Platform</span> <br /> Features
      </h2>
      <h2 className="sm:hidden lg:inline text-center font-bold font-sans text-[#FC8019] text-[67px] mb-10">
        <span className="text-[#163C50]">Platform</span> Features
      </h2>
      <div className="flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 sm:mb-10 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {features.map((feature, idx) => (
            <div
              key={feature.title}
              className="bg-white rounded-md p-8 flex flex-col lg:gap-3 justify-center items-start sm:min-h-[220px] lg:min-h-[320px] transition-transform duration-200 lg:hover:scale-105 lg:hover:shadow-md"
              style={{
                transitionProperty: "box-shadow, transform",
              }}
            >
              <img className="mb-4 ml-[-10px] sm:h-[60px] lg:h-[80px]" src={feature.icon} />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
