"use client";

import { useRef, useState } from "react";

// <FAQ> component is a list of <Item> components
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "How long does it take to set up?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Setup is completed within 72 hours maximum after your registration.
      </div>
    ),
  },
  {
    question: "What goals can I achieve through the game?",
    answer: (
      <p>
        By having your in-store and/or online customers play, you can:
        <br />
        <br />
        - Encourage customers to return quickly  
        <br />
        - Collect opt-in emails and phone numbers  
        <br />
        - Gain social media followers  
        <br />
        - Get reviews on the platforms of your choice (Google, TripAdvisor, etc.)  
        <br />
        - Attract new potential customers  
        <br />
        - Run surveys or questionnaires  
        <br />
        - Stimulate word-of-mouth (viral game, Insta stories, etc.)  
        <br />
        - Generate referrals  
        <br />
        - Drive purchases / increase average basket size  
        <br />
        - Get UGC (User-Generated Content) such as photos/videos  
      </p>
    ),
  },
  {
    question: "Do I set up my campaign on my own or with assistance?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Our team supports you during the setup of your campaign. <br /><br />
        We take care of creating and configuring your account. Once your campaign is online, you can adjust the settings yourself (change prizes, quantities offered, etc.).
      </div>
    ),
  },
];

const Item = ({ item }) => {
  const accordion = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`flex-1 text-base-content ${isOpen ? "text-primary" : ""}`}
        >
          {item?.question}
        </span>
        <svg
          className={`flex-shrink-0 w-4 h-4 ml-auto fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              isOpen && "rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              isOpen && "rotate-180 hidden"
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out opacity-80 overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  );
};

const FAQC = () => {
  return (
    <section className="bg-base-200" id="faq">
      <div className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
        <div className="flex flex-col text-left basis-1/2">
          <p className="inline-block font-semibold text-primary mb-4">FAQ</p>
          <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
            Frequently Asked Questions
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQC;
