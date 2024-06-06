const TextyB = () => {
  return (
    <div className="items-center justify-center flex flex-row">
      <div className="md:max-w-[670px] max-w-[350px] flex flex-col  items-center sm:mt-[200px]">
        <p className="text-[28px] md:text-5xl text-[#111111] font-bold bricolage-grotesque-font leading-9 text-center">
          <span className="bg-gradient-to-r from-[#47BEB9] via-[#47BEB9] to-[#DDCD86] inline-block text-transparent bg-clip-text">
            Mettez en avant
          </span>{" "}
          votre marque en échange de vos produits et services.
        </p>
        <p className="mt-6 text-[15px] font-medium poppins leading-6 text-center">
          Tunisian Pass vous aide à promouvoir votre business en offrant de
          nouveaux produits en échange de promotions sur les réseaux sociaux de
          nos membres.
        </p>
        <div className="col-span-1 flex flex-col">
          <ul className="mt-20 flex flex-col gap-8">
            <li className="text-[18px] poppins leading-6 font-light flex gap-5 items-center">
              <span className="inter">✓</span>
              <span>
                Augmentez la visibilité de votre marque grâce à une promotion
                authentique sur les réseaux sociaux.
              </span>
            </li>
            <li className="text-[18px] poppins leading-6 font-light flex gap-5 items-center">
              <span className="inter">✓</span>
              <span>
                Ajoutez du trafic à votre business en ligne ou en physique.
              </span>
            </li>
            <li className="text-[18px] poppins leading-6 font-light flex gap-5 items-center">
              <span className="inter">✓</span>
              <span>
                Planifiez vos offres adaptées à votre stratégie marketing.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextyB;
