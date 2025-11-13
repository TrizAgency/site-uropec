import ArrowRight from "@/components/ArrowRight";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import WhatsApp from "@/components/WhatsApp";
import Image from "next/image";
import Link from "next/link";

export default function Page () {
    return (
        <main className="font-[family-name:var(--font-inter)] bg-[#f6f6f6]">
            <Header />
            <section className="container lg:py-20 py-10 flex flex-col lg:flex-row gap-5 lg:gap-20 items-center">
                <div className="lg:w-[450px] h-[450px] w-full bg-[#c4c4c4] rounded-[40px] flex items-center justify-center">
                    <p className="text-black">Foto não disponível</p>
                </div>

                <div className="text-blue flex flex-col gap-5 lg:w-1/2">
                    <h1 className="lg:text-3xl text-xl font-bold">Irrigador Manual</h1>
                    <p>O Irrigador Manual proporciona controle operacional ao médico. O mesmo proporciona maior precisão e assegura um ótimo fluxo de soro/água durante processos endoscópicos ajudando tanto na dilatação do ureter, como também na limpeza da parte distal do endoscópio.</p>

                    <Link href="https://wa.me/5519984080060" target="_blank" className="inline-flex gap-6 justify-center items-center w-fit rounded-full bg-transparent text-dark-green hover:bg-dark-green hover:text-white border border-dark-green font-bold py-2 pl-4 pr-2 mt-5 transition-all duration-300">
                        Fazer orçamento
                        <ArrowRight bgColor="#026E6A" arrowColor="#fff" />     
                    </Link>
                </div>
            </section>
            <Footer />
            <WhatsApp />
        </main>
    )
}