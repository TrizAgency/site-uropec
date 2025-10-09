import Acting from "@/components/Acting";
import AosInit from "@/components/AosInit";
import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Distributor from "@/components/Distributor";
import Footer from "@/components/Footer";
import GetToKnow from "@/components/GetToKnow";
import Header from "@/components/Header";
import Presence from "@/components/Presence";
import Together from "@/components/Together";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-inter)] bg-[#f6f6f6]">
      <AosInit />
      <Header />
      <Banner />
      <GetToKnow />
      <Clients />
      <Acting />
      <Brands />
      <Together />
      <Presence />
      <Distributor />
      <Contact />
      <Footer />
      <WhatsApp />
    </main>
  );
}
