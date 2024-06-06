"use client";

import { useState, useRef } from "react";
import Image from "next/image";

// The features array is a list of features that will be displayed in the accordion.
// - title: The title of the feature
// - description: The description of the feature (when clicked)
// - type: The type of media (video or image)
// - path: The path to the media (for better SEO, try to use a local path)
// - format: The format of the media (if type is 'video')
// - alt: The alt text of the image (if type is 'image')
const features = [
  {
    title: "Emails",
    description:
      "Send transactional emails, setup your DNS to avoid spam folder (DKIM, DMARC, SPF in subdomain), and listen to webhook to receive & forward emails",
    type: "video",
    path: "https://d3m8mk7e1mf7xn.cloudfront.net/app/newsletter.webm",
    format: "video/webm",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
        />
      </svg>
    ),
  },
  {
    title: "Payments",
    description:
      "Create checkout sessions, handle webhooks to update user's account (subscriptions, one-time payments...) and tips to setup your account & reduce chargebacks",
    type: "image",
    path: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    alt: "A computer",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
        />
      </svg>
    ),
  },
  {
    title: "Authentication",
    description:
      "Magic links setup, login with Google walkthrough, save user in MongoDB/Supabase, private/protected pages & API calls",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Style",
    description:
      "Components, animations & sections (like this features section), 20+ themes with daisyUI, automatic dark mode",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
        />
      </svg>
    ),
  },
];

// An SEO-friendly accordion component including the title and a description (when clicked.)
const Item = ({ feature, isOpen, setFeatureSelected }) => {
  const accordion = useRef(null);
  const { title, description, svg } = feature;

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-medium text-left md:text-lg"
        onClick={(e) => {
          e.preventDefault();
          setFeatureSelected();
        }}
        aria-expanded={isOpen}
      >
        <span className={`duration-100 ${isOpen ? "text-primary" : ""}`}>
          {svg}
        </span>
        <span
          className={`flex-1 text-base-content ${
            isOpen ? "text-primary font-semibold" : ""
          }`}
        >
          <h3 className="inline">{title}</h3>
        </span>
      </button>

      <div
        ref={accordion}
        className={`transition-all duration-300 ease-in-out text-base-content-secondary overflow-hidden`}
        style={
          isOpen
            ? { maxHeight: accordion?.current?.scrollHeight, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{description}</div>
      </div>
    </li>
  );
};

// A component to display the media (video or image) of the feature. If the type is not specified, it will display an empty div.
// Video are set to autoplay for best UX.
const Media = ({ feature }) => {
  const { type, path, format, alt } = feature;
  const style = "rounded-2xl aspect-square w-full sm:w-[26rem]";
  const size = {
    width: 500,
    height: 500,
  };

  if (type === "video") {
    return (
      <video
        className={style}
        autoPlay
        muted
        loop
        playsInline
        controls
        width={size.width}
        height={size.height}
      >
        <source src={path} type={format} />
      </video>
    );
  } else if (type === "image") {
    return (
      <Image
        src={path}
        alt={alt}
        className={`${style} object-cover object-center`}
        width={size.width}
        height={size.height}
      />
    );
  } else {
    return <div className={`${style} !border-none`}></div>;
  }
};

// A component to display 2 to 5 features in an accordion.
// By default, the first feature is selected. When a feature is clicked, the others are closed.
const FeaturesAccordion = () => {
  const [featureSelected, setFeatureSelected] = useState(0);

  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-20 2xl:px-0 my-[150px] outer_container">
    <p className="flex justify-center gap-2">
      <span className="text-black text-[28px] sm:text-[54px] bricolage-grotesque-font font-medium leading-[64px] bg-gradient-to-r from-[#47BEB9] via-[#47BEB9] to-[#DDCD86] inline-block text-transparent bg-clip-text">Comment ça marche</span>
    </p>
    <div className="grid grid-cols-2 mt-6 sm:mt-[200px] ">
      <div className="col-span-2 sm:col-span-1 flex justify-center">
        <div className="bg-black h-[450px] sm:h-[630px] w-[300px] sm:w-[455px] rounded-lg">
          <video 
            src="/1.mp4" 
            autoPlay 
            muted 
            loop 
            className="w-full h-full object-cover rounded-lg" 
            playsInline 
          />
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1 flex mt-16 sm:mt-0">
        <ol className="text-black flex flex-col justify-center items-center gap-12 sm:gap-16">
          <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
            <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">1</div>
            <div className="text-center sm:text-start space-y-2">
              <p className="text-[42px] font-bold bricolage-grotesque-font leading-7">Créer votre offre</p>
              <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
              Mettez les termes de votre offre pour nos membres, le reste est automatique.
              </p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
            <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">2</div>
            <div className="text-center sm:text-start space-y-2">
              <p className="text-[42px] font-bold bricolage-grotesque-font leading-7">Engagez nos membres</p>
              <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
              Choisissez l’influenceur qui vous convient le mieux          </p>
            </div>
          </li>
          <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
            <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">3</div>
            <div className="text-center sm:text-start space-y-2">
              <p className="text-[42px] font-bold bricolage-grotesque-font leading-7">Laissez nous faire</p>
              <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
              oncentrez-vous sur votre activité ! Tunisian Pass s'occupe de votre croissance.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </div>
  );
};

export default FeaturesAccordion;
