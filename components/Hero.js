import AnimatedLogoCloud from "./Caroussel";
const Hero = () => {
  return (
    <section>
      <div className="max-w-3xl 2xl:max-w-5xl mx-auto">
        <p className="pt-32 max-w-[537px] mx-auto lg:max-w-[595px] 2xl:max-w-[800px] text-[#111111] text-[28px] lg:text-5xl 2xl:text-5xl font-semibold leading-12 lg:leading-14 2xl:leading-[64px] bricolage-grotesque-font text-center">
          Accédez à des{" "}
          <span className="animate-textGradient bg-gradient-to-r from-[#FBC570] via-yellow-700 to-yellow-500 inline-block text-transparent bg-clip-text">
            offres exclusives
          </span>{" "}
          des meilleurs business en Tunisie.
        </p>

        <p className="text-center text-[16px] leading-6 mt-6 sm:mt-12 px-6 sm:px-20 lg:px-24 max-w-[560px] xl:max-w-[800px] mx-auto poppins text-[#000000]">
          <span className="inline lg:block">
            Créez du contenu en échange de contenu ou de services.
          </span>
          <br />
          <br />
        </p>
        <div className="text-center flex flex-col items-center gap-4">
            <a
              className="animate-buttonheartbeat text-white font-normal text-[17px] poppins leading-4 bg-[#111111] py-4 px-8 rounded-full"
              title="Get started"
              href="/sign-up"
            >
              Nous rejoindre
            </a>
            <p className="text-[#111111] text-sm font-light leading-5 poppins">
              <span className="inter">✓</span> Profitez dès maintenant de nos avantages exclusifs.
            </p>
          </div>
          <br />
          <br />
      </div>
      <AnimatedLogoCloud />
    </section>
  );
};

export default Hero;
