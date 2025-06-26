import { Suspense } from 'react'
import Header from "@/components/en/Header";
import HeroC from "@/components/en/HeroC";
import FeaturesAccordionC from "@/components/en/FeaturesAccordionC";
import TextyC from "@/components/en/TextyC";
import FAQC from "@/components/en/FAQC";
import Footer from "@/components/en/Footer";
import { getSEOTags } from "@/libs/seo";


export const metadata = getSEOTags({
  title: "Tunsian Pass",
  description: "Increase your establishment’s visibility by boosting your online presence. Exchange experiences to gain influence.",

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