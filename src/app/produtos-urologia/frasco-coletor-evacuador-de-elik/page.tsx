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
                <Image src="/produtos/frasco-coletor.jpg" alt="Frasco Coletor Evacuador de Elik" width={450} height={450} className="rounded-[40px] " />

                <div className="text-blue flex flex-col gap-5 lg:w-1/2">
                    <h1 className="lg:text-3xl text-xl font-bold">Frasco Coletor Evacuador de Elik</h1>
                    <p>O CollectEVAC foi desenvolvido para fazer tanto a irrigação quanto a aspiração dos resíduos de tecido da próstata durante uma RTU. Seu sistema de trava evita que haja vazamento e consequentemente contaminação. Possui internamento um copo coletor de resíduos que ao ser retirado pode ser facilmente transferido para um recipiente maior de análise patológica.</p>

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