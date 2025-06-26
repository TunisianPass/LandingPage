import SendMails from "@/components/SendMails";
import { Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
