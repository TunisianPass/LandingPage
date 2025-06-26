const TextyC = () => {
  return (
    <div className="mt-20 items-center justify-center flex flex-row">
      <div className="md:max-w-[670px] max-w-[350px] flex flex-col  items-center sm:mt-[200px]">
        <p className="text-[28px] md:text-5xl text-[#111111] font-bold bricolage-grotesque-font leading-9 text-center">
          <span className="animate-textGradient bg-gradient-to-r from-blue-500 via-[#47BEB9] to-[#DDCD86] inline-block text-transparent bg-clip-text">
            Encourage your customers
          </span>{" "}
          to speak up easily while having fun
        </p>
        <p className="mt-6 text-[15px] font-medium poppins leading-6 text-center">
          Tunisian Pass helps you promote your business by offering new products
          in exchange for reviews or online actions.
        </p>
        <div className="col-span-1 flex flex-col">
          <ul className="mt-20 flex flex-col gap-8">
            <li className="text-[18px] poppins leading-6 font-light flex gap-5 items-center">
              <span className="inter">✓</span>
              <span>Be number 1 on Google</span>
            </li>
            <li className="text-[18px] poppins leading-6 font-light flex gap-5 items-center">
              <span className="inter">✓</span>
              <span>
                Increase your brand visibility through Google reviews
              </span>
            </li>
            <li className="text-[18px] poppins leading-6 font-light flex gap-5 items-center">
              <span className="inter">✓</span>
              <span>
                Boost your revenue by bringing customers back.
              </span>
            </li>
            <li className="text-[18px] poppins leading-6 font-light flex gap-5 items-center">
              <span className="inter">✓</span>
              <span>
                Gain more followers on your social media.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TextyC;
