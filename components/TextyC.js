const TextyC = () => {
  return (
    <div className="mt-20 items-center justify-center flex flex-row">
      <div className="md:max-w-[670px] max-w-[350px] flex flex-col  items-center sm:mt-[200px]">
        <p className="text-[28px] md:text-5xl text-[#111111] font-bold bricolage-grotesque-font leading-9 text-center">
          <span className="animate-textGradient bg-gradient-to-r from-blue-500 via-[#47BEB9] to-[#DDCD86] inline-block text-transparent bg-clip-text">
            Encouragez vos clients
          </span>{" "}
          à s&apos;exprimer facilement tout en s&apos;amusant
        </p>
        <p className="mt-6 text-[15px] font-medium poppins leading-6 text-center">
          Tunisian Pass vous aide à promouvoir votre business en offrant de
          nouveaux produits en échange d&apos;avis ou d&apos;actions en ligne.
        </p>
        <div className="col-span-1 flex flex-col">
          <ul className="mt-20 flex flex-col gap-8">
            <li className="text-[18px] poppins leading-6 font-light flex gap-5 items-center">
              <span className="inter">✓</span>
              <span>Soyez numéro 1 sur Google</span>
            </li>
            <li className="text-[18px] poppins leading-6 font-light flex gap-5 items-center">
              <span className="inter">✓</span>
              <span>
                Augmentez la visibilité de votre marque grâce aux avis Google
              </span>
            </li>
            <li className="text-[18px] poppins leading-6 font-light flex gap-5 items-center">
              <span className="inter">✓</span>
              <span>
                Booster votre chiffre d&apos;affaires en faisant revenir vos
                clients.
              </span>
            </li>
            <li className="text-[18px] poppins leading-6 font-light flex gap-5 items-center">
              <span className="inter">✓</span>
              <span>
                Décrochez plus d&apos;abonnés sur vos réseaux sociaux.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextyC;
