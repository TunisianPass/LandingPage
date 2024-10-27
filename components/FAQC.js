"use client";

import { useRef, useState } from "react";

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList

const faqList = [
  {
    question: "Combien de temps prend la mise en place ?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        La mise en place s&apos;effectue sous 72h maximum après votre
        inscription.
      </div>
    ),
  },
  {
    question: "Quels objectifs puis-je atteindre par le jeu ?",
    answer: (
      <p>
        En faisant jouer vos clients ainsi que vos visiteurs physique et/ou en
        ligne vous pouvez :
        <br />
        <br />
        - Inciter vos clients à revenir vite
        <br />
        - Obtenir des emails et numéros de téléphones « opt-in »
        <br />
        - Obtenir des abonnés sur vos réseaux sociaux
        <br />
        - Obtenir des avis sur les plateformes de votre choix (Google, Trip
        Advisor, ou autre)
        <br />
        - Inciter un client potentiel à vous découvrir
        <br />
        - Administrer un questionnaire ou un sondage
        <br />
        - Stimuler le bouche à oreille (jeu viral, story Insta etc.)
        <br />
        - Générer du parrainage
        <br />
        - Inciter à l&apos;achat / augmenter le panier moyen
        <br />
        - Obtenir des UGC (User Generated Content) sous forme de photos / vidéos
        <br />
      </p>
    ),
  },
  {
    question:
      "Est-ce que je mets en place ma campagne seul ou avec un accompagnement ?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        Notre équipe vous accompagne lors de la mise en place de votre campagne. <br/><br/>
        Notre équipe s&apos;occupe de créer et configurer votre compte. Une fois
        votre campagne en ligne, vous avez la possibilité d&apos;ajuster en toute
        autonomie votre configuration (changer les cadeaux, les quantités
        offertes…)
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
