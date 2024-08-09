const HeroB = () => {
  return (
    <div className="md:max-w-[670px] max-w-[350px] mt-28 mx-auto flex flex-col justify-center">
      <h1 className="text-[#111111] text-[28px] lg:text-4xl 2xl:text-5xl font-semibold leading-9 bricolage-grotesque-font text-center flex flex-col">
          Laisser les influenceurs
          <span className="animate-textGradient bg-gradient-to-r from-[#47BEB9] via-[#47BEB9] to-[#DDCD86] inline-block text-transparent bg-clip-text">
            {" "}
            promouvoir votre marque.
          </span>
           Pas de DM.
          Pas de collaborations payantes.
      </h1>
      <p className="text-center text-[16px] leading-6 mt-12 sm:px-20 lg:px-[160px] poppins text-[#000000]">
        Atteignez de nouveaux publics en collaborant avec
        <span className="font-semibold"> le top des influenceurs locaux.</span>
      </p>
      <div className="mt-8 text-center flex flex-col items-center gap-4">
      <a
              className="animate-buttonheartbeat text-white font-normal text-[17px] poppins leading-4 bg-[#111111] py-4 px-8 rounded-full"
              title="Get started"
              href="/sign-up"
            >
              Nous rejoindre
            </a>
        <p className="text-[#111111] text-sm font-light leading-5 poppins">
          <span className="inter">✓</span> Profitez dès maintenant de nos
          avantages exclusifs.
        </p>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default HeroB;
