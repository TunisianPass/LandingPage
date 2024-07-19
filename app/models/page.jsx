import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import Texty from "@/components/Texty";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import PicturePage from '@/components/PicturePage';
import { getSEOTags } from "@/libs/seo";


export const metadata = getSEOTags({
  title: "TunsianPass",
  description: "Profitez d'un accès à de nombreux avantages dans les restaurants, bars, spas, fitness, et bien plus encore. Commencez à prendre soin de vous dès maintenant. Seulement en Tunisie.",

})

const Models = () => {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        {/* <Problem /> */}
        <PicturePage />
        <Texty />
        <FeaturesAccordion />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Models;
