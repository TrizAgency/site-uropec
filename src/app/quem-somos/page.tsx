import AosInit from "@/components/AosInit";
import BannerQuemSomos from "@/components/BannerQuemSomos";
import Companies from "@/components/Companies";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Location from "@/components/Location";
import MissionVisionValues from "@/components/MissionVisionValues";
import WhatsApp from "@/components/WhatsApp";
import WhoWeAre from "@/components/WhoWeAre";

export default function QuemSomos() {
    return (
        <main className="font-[family-name:var(--font-inter)] bg-[#f6f6f6]">
          <AosInit />
          <Header />
          <BannerQuemSomos />
          <WhoWeAre />
          <MissionVisionValues />
          <Companies />
          <Location />
          <Footer />
          <WhatsApp />
        </main>
    );
}