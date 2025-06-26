import { Suspense } from 'react'
import Header from "@/components/Header";
import HeroC from "@/components/HeroC";
import FeaturesAccordionC from "@/components/FeaturesAccordionC";
import TextyC from "@/components/TextyC";
import FAQC from "@/components/FAQC";
import Footer from "@/components/Footer";
import { getSEOTags } from "@/libs/seo";


export const metadata = getSEOTags({
  title: "Tunsian Pass",
  description: "Augmentez la visibilité de votre établissement en boostant votre presence en ligne. Échangez des expériences pour gagner en influence.",

})

const Business = () => {
  return (
    <>
    <Suspense>
      <Header />
    </Suspense>
    <main>
      <HeroC />
      <TextyC />
      <FeaturesAccordionC />
      <FAQC />
    </main>
    <Footer />
    </>
  )
}

export default Business