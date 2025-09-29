import Acting from "@/components/Acting";
import AosInit from "@/components/AosInit";
import Banner from "@/components/Banner";
import Brands from "@/components/Brands";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import GetToKnow from "@/components/GetToKnow";
import Header from "@/components/Header";
import Together from "@/components/Together";
import WhatsApp from "@/components/WhatsApp";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-lexend)] bg-[#f6f6f6]">
      <AosInit />
      <Header />
      <Banner />
      <GetToKnow />
      <Acting />
      <Clients />
      <Brands />
      <Together />
      <Footer />
      <WhatsApp />
    </main>
  );
}
