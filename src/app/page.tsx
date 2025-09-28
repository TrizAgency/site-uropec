import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsApp from "@/components/WhatsApp";
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-[family-name:var(--font-lexend)] bg-[#f6f6f6]">
      <Header />
      <Footer />
      <WhatsApp />
    </main>
  );
}
