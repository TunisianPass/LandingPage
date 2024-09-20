import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturesAccordionB from "@/components/FeaturesAccordionB";
import Texty from "@/components/Texty";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import PicturePage from '@/components/PicturePage';
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "TunsianPass",
  description: "Découvrez Tunisian Pass, l'application qui connecte créateurs de contenu et micro-influenceurs avec des établissements en Tunisie. Rejoignez-nous dès maintenant !",

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
        <FeaturesAccordionB />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};


export default Models;

