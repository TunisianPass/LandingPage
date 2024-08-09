const PicturePage = () => {
    return (
      <section>
        <center>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="bg-black h-[450px] sm:h-[630px] w-[300px] sm:w-[455px] rounded-lg m-4">
            <img
              src="/aethetic.gif"
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
          
          <div className="bg-black h-[450px] sm:h-[630px] w-[300px] sm:w-[455px] rounded-lg m-4">
            <img
              src="/ugc.gif"
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
        </center>
      </section>
    );
};

export default PicturePage;
