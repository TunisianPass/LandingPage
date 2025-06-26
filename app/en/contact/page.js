import SendMails from "@/components/en/SendMails";
import { Suspense } from "react";
import Header from "@/components/en/Header";
import Footer from "@/components/en/Footer";
const Contact = () => {
  return (
    <div>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <SendMails />
      </main>
      <Suspense>
        <Footer/>
      </Suspense>
    </div>
  );
};

export default Contact;
