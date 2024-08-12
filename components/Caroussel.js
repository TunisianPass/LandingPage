const AnimatedLogoCloud = () => {
  const logos = [
    {
      name: "Closerie",
      url: '/Restau/closerie.png',
    },


    {
      name: "Sindbad",
      url: "/Restau/sindbad.png",
    },
    {
      name: "Tchevap",
      url: "/Restau/tchevap.png",
    },
    {
      name: "Les Dunes",
      url: "/Restau/lesdunes.png",
    }
  ];
  return (
    <div className="w-full py-12">
        
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              "linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)",
          }}
        >
          {Array(5)
            .fill(null)
            .map((index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-34 w-40 px-2 "
                    alt={`${logo.name}`}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
