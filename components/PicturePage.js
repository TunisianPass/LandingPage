const PicturePage = () => {
    return (
      <section>
        <center>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <div className="bg-black h-[450px] sm:h-[630px] w-[300px] sm:w-[455px] rounded-lg m-4">
            <img
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHB1YmR3ZmxjdWhkZXY0YjU0eWlib2M2dXZsdm54MGMzZDUzeXowNSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SAYDOFkVRrIEAxWyrP/giphy.gif"
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
              src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExeDJ4N2hqbHdjaG91c2J6aTNrZDY5MzhxMWtoZGY5bG5zc2diZzV6aSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jhw9EjXh4iu6pz59TD/giphy.gif"
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
