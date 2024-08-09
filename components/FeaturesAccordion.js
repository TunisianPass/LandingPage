const FeaturesAccordion = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-20 2xl:px-0 my-[150px] outer_container">
      <p className="flex justify-center gap-2">
        <span className="text-[28px] sm:text-[54px] bricolage-grotesque-font font-medium leading-[64px] bg-gradient-to-r animate-textGradient from-[#47BEB9] via-[#47BEB9] to-[#DDCD86] inline-block text-transparent bg-clip-text">
          Comment ça marche
        </span>
      </p>
      <div className="grid grid-cols-2 mt-6 sm:mt-[200px] ">
        <div className="col-span-2 sm:col-span-1 flex justify-center">
          <div className="bg-black h-[450px] sm:h-[630px] w-[300px] sm:w-[455px] rounded-lg">
            <img
              src="/Intro.gif"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover rounded-lg"
              playsInline
              webkit-playsinline="true"
              x-webkit-airplay="allow"
              x5-playsinline="true"
              x5-video-player-type="h5"
              x5-video-player-fullscreen="true"
            />
          </div>
        </div>
        <div className="col-span-2 sm:col-span-1 flex mt-16 sm:mt-0">
          <ol className="text-black flex flex-col justify-center items-center gap-12 sm:gap-16">
            <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
              <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">
                1
              </div>
              <div className="text-center sm:text-start space-y-2">
                <p className="text-[42px] font-bold bricolage-grotesque-font leading-10">
                  Créer votre offre
                </p>
                <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
                  Mettez les termes de votre offre pour nos membres, le reste
                  est automatique.
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
              <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">
                2
              </div>
              <div className="text-center sm:text-start space-y-2">
                <p className="text-[42px] font-bold bricolage-grotesque-font leading-10">
                  Engagez nos membres
                </p>
                <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
                  Choisissez l&apos;influenceur qui vous convient le mieux{" "}
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
              <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">
                3
              </div>
              <div className="text-center sm:text-start space-y-2">
                <p className="text-[42px] font-bold bricolage-grotesque-font leading-10">
                  Laissez nous faire
                </p>
                <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
                  Concentrez-vous sur votre activité ! Tunisian Pass
                  s&apos;occupe de votre croissance.
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
