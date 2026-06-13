import Contact from "@/features/contact-us/contact";
import Header from "@/features/header/header";
import { FaqSection } from "@/features/home-page/faq/faq";

export default function ContactUsPage() {
  return (
    <>
      <Header variant="contact" />
      <Contact />
      <FaqSection />
    </>
  );
}
