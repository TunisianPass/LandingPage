const FeaturesAccordionC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-20 2xl:px-0 my-[150px] outer_container">
      <p className="flex justify-center gap-2">
        <span className="text-[28px] sm:text-[54px] bricolage-grotesque-font font-medium leading-[64px] bg-gradient-to-r animate-textGradient from-[#47BEB9] via-[#47BEB9] to-[#DDCD86] inline-block text-transparent bg-clip-text ">
          Comment ça marche
        </span>
      </p>
      <div className="grid grid-cols-1  sm:mt-[200px] ">

        <div className="col-span-1 sm:col-span-1 flex mt-16 sm:mt-0">
          <ol className="text-black flex flex-col justify-center items-center gap-12 sm:gap-16">
            <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
              <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">
                1
              </div>
              <div className="text-center sm:text-start space-y-2">
                <p className="text-[42px] font-bold bricolage-grotesque-font leading-10">
                  Vos clients scannent votre QR code
                </p>
                <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
                  Mettez à la disposition de vos clients le support visuel, créé
                  par notre équipe afin de leur permettre de tourner la roue et
                  tenter de remporter un cadeau.
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
              <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">
                2
              </div>
              <div className="text-center sm:text-start space-y-2">
                <p className="text-[42px] font-bold bricolage-grotesque-font leading-10">
                  Ils vous laissent un avis Google
                </p>
                <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
                  Avant de pouvoir tenter de remporter un cadeau, vos clients
                  doivent réaliser une action, comme vous laisser un avis Google
                  ou s&apos;engager sur vos réseaux sociaux.
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
              <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">
                3
              </div>
              <div className="text-center sm:text-start space-y-2">
                <p className="text-[42px] font-bold bricolage-grotesque-font leading-10">
                  C&apos;est parti la roue tourne
                </p>
                <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
                  C&apos;est le moment pour vos clients de faire tourner la roue et
                  de tenter de gagner un cadeau. Un avis Google en plus et un
                  client fidélisé !
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAccordionC;
