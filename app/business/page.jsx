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
  description: "Augmentez votre visibilité en connectant votre établissement avec des créateurs de contenu et micro-influenceurs locaux. Échangez des expériences pour gagner en influence.",

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