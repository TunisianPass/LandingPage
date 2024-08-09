import { Suspense } from 'react'
import Header from "@/components/Header";
import HeroB from "@/components/HeroB";
import FeaturesAccordion from "@/components/FeaturesAccordion";
import TextyB from "@/components/TextyB";
import FAQB from "@/components/FAQB";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";
import PicturePage from '@/components/PicturePage';


export const metadata = getSEOTags({
  title: "Tunsian Pass",
  description: "Profitez d'un accès à de nombreux avantages dans les restaurants, bars, spas, fitness, et bien plus encore. Commencez à prendre soin de vous dès maintenant. Seulement en Tunisie.",

})

const Business = () => {
  return (
    <>
    <Suspense>
      <Header />
    </Suspense>
    <main>
      <HeroB />
      <PicturePage />
      <TextyB />
      <FeaturesAccordion />
      <FAQB />
    </main>
    <Footer />
    </>
  )
}

export default Business