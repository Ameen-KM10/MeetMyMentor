import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is MeetMyMentor?',
    answer: 'MeetMyMentor is a platform that connects mentees with verified mentors for personalized guidance, mentorship sessions, and professional growth.'
  },
  {
    question: 'Can I conduct paid sessions?',
    answer: 'Yes, you can offer paid mentorship sessions, webinars, and consultations. MeetMyMentor provides secure payment and session management.'
  },
  {
    question: 'How much can I charge for my sessions?',
    answer: 'You set your own prices for mentorship sessions, webinars, and digital products. MeetMyMentor gives you full control over your earnings.'
  },
  {
    question: 'How do the payments work?',
    answer: 'Payments are collected securely and transferred to your preferred payout method. MeetMyMentor supports multiple payout channels.'
  },
  {
    question: 'Is MeetMyMentor free?',
    answer: 'You can get started for free. There are transaction charges for paid sessions and products. See our pricing page for details.'
  },
];

const FaqDropdown = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const [show, setShow] = useState(false);

  React.useEffect(() => {
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className={`w-full flex justify-center min-h-[70vh] bg-white transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto">
        {/* Left Side */}
        <div className="flex-1 flex flex-col justify-start mt-10 md:mt-20 px-4 md:px-10 py-6 md:py-8">
          <div className="font-semibold text-gray-400 text-base mb-2">FAQs</div>
          <h2 className="font-bold text-2xl md:text-4xl text-gray-900 mb-4 leading-tight">
            Frequently Asked <br />Questions
          </h2>

        </div>
        {/* Right Side */}
        <div className="flex-[1.2] flex flex-col justify-start px-4 md:px-10 py-6 md:py-8">
          <div className="bg-white rounded-2xl ">
            {faqs.map((faq, idx) => (
              <div key={idx} className={`border-b ${idx !== faqs.length - 1 ? 'border-gray-100' : ''} bg-white overflow-hidden`}> 
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full text-left bg-transparent border-none outline-none py-4 md:py-6 px-4 md:px-8 text-base md:text-lg font-medium text-gray-900 flex items-center justify-between cursor-pointer focus:outline-none"
                >
                  <span className="flex items-center gap-2">
                    {faq.question}
                  </span>
                  <span className="text-xl md:text-2xl ml-2 md:ml-4 select-none font-light text-[24px] md:text-[30px] text-black">{openIdx === idx ? '−' : '+'}</span>
                </button>
                <div
                  className={`px-4 md:px-8 pb-4 md:pb-6 text-sm md:text-base text-gray-700 bg-white transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-40 opacity-100 scale-y-100' : 'max-h-0 opacity-0 scale-y-95'} origin-top`}
                  style={{
                    pointerEvents: openIdx === idx ? 'auto' : 'none',
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