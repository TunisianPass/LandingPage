const FeaturesAccordionC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 sm:px-20 2xl:px-0 my-[150px] outer_container">
      <p className="flex justify-center gap-2">
        <span className="text-[28px] sm:text-[54px] bricolage-grotesque-font font-medium leading-[64px] bg-gradient-to-r animate-textGradient from-[#47BEB9] via-[#47BEB9] to-[#DDCD86] inline-block text-transparent bg-clip-text ">
          How it works
        </span>
      </p>
      <div className="grid grid-cols-1 sm:mt-[200px]">
        <div className="col-span-1 sm:col-span-1 flex mt-16 sm:mt-0">
          <ol className="text-black flex flex-col justify-center items-center gap-12 sm:gap-16">
            <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
              <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">
                1
              </div>
              <div className="text-center sm:text-start space-y-2">
                <p className="text-[42px] font-bold bricolage-grotesque-font leading-10">
                  Your customers scan the QR code
                </p>
                <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
                  Provide your customers with the visual support created by our team so they can spin the wheel and try to win a prize.
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
              <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">
                2
              </div>
              <div className="text-center sm:text-start space-y-2">
                <p className="text-[42px] font-bold bricolage-grotesque-font leading-10">
                  They leave you a Google review
                </p>
                <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
                  Before trying to win a prize, your customers must complete an action — such as leaving you a Google review or engaging with your social media.
                </p>
              </div>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-1 sm:gap-10">
              <div className="text-center text-[80px] sm:text-[100px] font-bold bricolage-grotesque-font min-w-[90px]">
                3
              </div>
              <div className="text-center sm:text-start space-y-2">
                <p className="text-[42px] font-bold bricolage-grotesque-font leading-10">
                  Let the wheel spin!
                </p>
                <p className="text-[15px] sm:text-lg font-normal poppins leading-6 sm:leading-7">
                  It&apos;s time for your customers to spin the wheel and try their luck at winning a prize. One more Google review and one more loyal customer!
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
