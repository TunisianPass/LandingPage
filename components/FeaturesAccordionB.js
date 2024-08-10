const FeaturesAccordionB = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-20 2xl:px-0 my-[150px] outer_container">
      <p className="flex justify-center gap-2">
        <span className="text-[28px] sm:text-[54px] bricolage-grotesque-font font-medium leading-[64px] bg-gradient-to-r animate-textGradient from-[#47BEB9] via-[#47BEB9] to-[#DDCD86] inline-block text-transparent bg-clip-text ">
          Comment ça marche
        </span>
      </p>
      <div className="grid grid-cols-2 mt-6 sm:mt-[200px] ">
        <div className="col-span-2 sm:col-span-1 flex justify-center">
          <div className="bg-black h-[450px] sm:h-[630px] w-[300px] sm:w-[455px] rounded-lg">
            <img
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnp2eTZtNXl3emZqMDNoNDByZGVxbWVlNW1zMmZvZnc0MDRzc2Z1aCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VSyglS6kwhZHbZ8gTP/giphy-downsized-large.gif"
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
                  Réservez
                </p>
                <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
                  Réservez une offre en utilisant des crédits gratuits. Votre
                  réservation sera confirmée par le business.
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
              <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">
                2
              </div>
              <div className="text-center sm:text-start space-y-2">
                <p className="text-[42px] font-bold bricolage-grotesque-font leading-10">
                  Confirmez
                </p>
                <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
                  Allez au lieu à l&apos;heure indiquée dans l&apos;offre et
                  enregistrez-vous. Il vous suffit de confirmer votre presence
                  en montrant votre reservation au lieu pour recevoir votre
                  offre.{" "}
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
              <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">
                3
              </div>
              <div className="text-center sm:text-start space-y-2">
                <p className="text-[42px] font-bold bricolage-grotesque-font leading-10">
                  Postez
                </p>
                <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
                  Après avoir reçu votre produit ou service, postez sur
                  Instagram en suivant les exigences de l&apos;offre.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default FeaturesAccordionB;
