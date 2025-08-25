import React, { useState } from "react";

const faqs = [
  {
    question: "How do I book a mentorship session?",
    answer:
      "Booking a mentorship session on MeetMyMentor is easy. Simply browse our list of verified mentors, select the one you're interested in, and choose a time that works for both you and the mentor. Once you've confirmed your booking, you'll receive a notification and a WhatsApp message with all the details.",
  },
  {
    question: "Can I cancel a mentorship session?",
    answer:
      "Yes, you can cancel a mentorship session on MeetMyMentor. Our cancellation policy states that if you cancel before the scheduled session, you may or may not receive a full refund. Please contact our support team, and we'll work with you to find a solution.",
  },
  {
    question: "How are mentors verified?",
    answer:
      "We take the verification process seriously to ensure that our mentors are qualified and experienced professionals. Mentors can link their social media accounts and get them verified with us to increase discovery and authenticity. Our team also reviews their profiles and credentials to ensure that they meet our standards.",
  },
  {
    question: "How does MeetMyMentor guarantee session quality?",
    answer:
      "We encourage our users to leave feedback and ratings after each mentorship session to help us ensure the quality of our services. We also have a team that monitors sessions to ensure that they meet our standards of quality and professionalism.",
  },
  {
    question: "Refund policy for unsatisfactory sessions?",
    answer:
      "Yes, we offer a satisfaction guarantee to our users. If you're not satisfied with a mentorship session, please contact our support team, and we'll work with you to find a solution, which may include a full or partial refund.",
  },
];

const FaqDropdown = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const [show, setShow] = useState(false);

  React.useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div
      className={`w-full flex justify-center min-h-[70vh] bg-white transition-all duration-700 ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-start mt-10 md:mt-20 px-4 md:px-10 py-6 md:py-8">
          <div className="font-semibold text-gray-400 text-base mb-2">FAQs</div>
          <h2 className="font-bold text-2xl md:text-4xl text-gray-900 mb-4 leading-tight">
            Frequently Asked <br />
            Questions
          </h2>
        </div>
        {/* Right Side */}
        <div className="flex-[1.2] flex flex-col justify-start px-4 md:px-10 py-6 md:py-8">
          <div className="bg-white rounded-2xl ">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`border-b ${
                  idx !== faqs.length - 1 ? "border-gray-100" : ""
                } bg-white overflow-hidden`}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full text-left bg-transparent border-none outline-none py-4 md:py-6 px-4 md:px-8 text-base md:text-lg font-medium text-gray-900 flex items-center justify-between cursor-pointer focus:outline-none"
                >
                  <span className="flex items-center gap-2">
                    {faq.question}
                  </span>
                  <span className="text-xl md:text-2xl ml-2 md:ml-4 select-none font-light text-[24px] md:text-[30px] text-black">
                    {openIdx === idx ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`px-4 md:px-8 pb-4 md:pb-6 text-sm md:text-base text-gray-700 bg-white transition-all duration-500 ease-in-out ${
                    openIdx === idx
                      ? "max-h-40 opacity-100 scale-y-100"
                      : "max-h-0 opacity-0 scale-y-95"
                  } origin-top`}
                  style={{
                    pointerEvents: openIdx === idx ? "auto" : "none",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqDropdown;
