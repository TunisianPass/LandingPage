import AnimatedLogoCloud from "../Caroussel";
import { FlipWords } from "../ui/flip-words";

const HeroC = () => {
  const words = [
    "be number 1 on Google",
    "increase your Google reviews",
    "boost your revenue",
    "bring your customers back",
    "gain more followers on your social media",
  ];

  return (
    <section>
      <div className="max-w-3xl 2xl:max-w-5xl mx-auto">
        <p className="pt-32 max-w-[537px] mx-auto lg:max-w-[595px] 2xl:max-w-[800px] text-[#111111] text-[28px] lg:text-5xl 2xl:text-5xl font-semibold leading-12 lg:leading-14 2xl:leading-[64px] bricolage-grotesque-font text-center">
          Boost your Google reviews{" "}
          <span className="animate-textGradient bg-gradient-to-r from-[#FBC570] via-yellow-700 to-yellow-500 inline-block text-transparent bg-clip-text">
            it&apos;s child&apos;s play!
          </span>{" "}
        </p>
        <br />
        <div className="text-center text-[16px] leading-6 mt-6 sm:mt-12 px-6 sm:px-20 lg:px-24 max-w-[595x] xl:max-w-[800px] mx-auto poppins text-[#000000]">
          <div className="text-xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            One single QR code to
            <FlipWords className="text-center font-bold" words={words} />
          </div>
          <br />
          <br />
        </div>

        <p className="text-center text-[12px] leading-5 mt-2 sm:mt-12 px-6 sm:px-20 lg:px-24 max-w-[560px] xl:max-w-[800px] mx-auto poppins text-[#000000]">
          <span className="inline lg:block">
            Reward your customers with gifts thanks to a QR Code game in exchange for online actions.
          </span>
          <br />
          <br />
        </p>
        <div className="text-center flex flex-col items-center gap-4">
          <a
            className="animate-buttonheartbeat text-white font-normal text-[17px] poppins leading-4 bg-[#111111] py-4 px-8 rounded-full"
            title="Get started"
            href="/en/contact"
          >
            Contact us
          </a>
          <p className="text-[#111111] text-sm font-light leading-5 poppins">
            <span className="inter">✓</span> Enjoy our exclusive benefits now.
          </p>
        </div>
        <br />
        <br />
      </div>
      <AnimatedLogoCloud />
    </section>
  );
};

export default HeroC;
