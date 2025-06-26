const AnimatedLogoCloud = () => {
  const logos = [
    // {
    //   name: "Closerie",
    //   url: '/Restau/closerie.png',
    // },

    // {
    //   name: "Sindbad",
    //   url: "/Restau/sindbad.png",
    // },
    // {
    //   name: "White",
    //   url: "/Restau/white.png",
    // },
    // {
    //   name: "Village",
    //   url: "/Restau/thevillage.png",
    // },
    // {
    //   name: "NOA",
    //   url: "/Restau/noa.png",
    // },
    // {
    //   name: "royaltulip",
    //   url: "/Restau/royaltulip.png",
    // },
    // {
    //   name: "origami",
    //   url: "/Restau/origami.png",
    // },
    // {
    //   name: "terraza",
    //   url: "/Restau/terraza.png",
    // },
    // {
    //   name: "zink",
    //   url: "/Restau/zink.png",
    // },
    // {
    //   name: "thebigdip.png",
    //   url: "/Restau/thebigdip.png",
    // },
    // {
    //   name: "thevillage",
    //   url: "/Restau/thevillage.png",
    // },
    // {
    //   name: "antony1",
    //   url: "/Restau/antony1.png",
    // },
    { name: "fumoir", url: "/Restau/fumoir.png" },
    // {
    //   name: "716",
    //   url: "/Restau/716.png",
    // },
    // {
    //   name: "aqualounge",
    //   url: "/Restau/aqualounge.png",
    // },
    // {
    //   name: "Tchevap",
    //   url: "/Restau/tchevap.png",
    // },
    // {
    //   name: "Les Dunes",
    //   url: "/Restau/lesdunes.png",
    // },
    // {
    //   "name": "Kenko",
    //   "url": "/Restau/kenko.png"
    // }
    {
      name : "Kenko Food Bar",
      url: "/Restau/kenko.png"
    },
    {
      name: "Sidi Bou Bar & Restaurant",
      url: "/Restau/sidiboubar.png"
    },
    {
      name: "bylilideco",
      url: "/Restau/bylilideco.png"
    },
    {
      name: "Les Muses",
      url: "/Restau/lesmuses.png"
    },
    {
      name: "Sakura Pasta",
      url: "/Restau/sakurapasta.png"
    },
    {
      name: "Le Safran",
      url: "/Restau/lesafran.png"
    },
    {
      name: "Smoky Buns",
      url: "/Restau/smokybuns.png"
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
                    className="h-34 w-40 px-2 brightness-0"
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
