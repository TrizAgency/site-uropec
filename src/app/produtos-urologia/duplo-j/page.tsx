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
                <Image src="/produtos/duplo-j.jpg" alt="Duplo J" width={450} height={450} className="rounded-[40px] " />

                <div className="text-blue flex flex-col gap-5 lg:w-1/2">
                    <h1 className="lg:text-3xl text-xl font-bold">Duplo J</h1>
                    <p>O cateter / stent em Duplo J é utilizado na remoção de cálculos, tumores no ureter e rim, faz reparação de cicatrizes e estenoses no ureter. 
                    <br /><br />Dimensões: 12 cm x 3 fr (uso infantil)
                    <br /><br /> 24 cm x 6 fr
                    <br /><br /> 26 cm x 4,7 fr
                    <br /><br /> 26 cm x 6 fr
                    <br /><br /> 28 cm x 6 fr.</p>

                    <Link href="/#contato" className="inline-flex gap-6 justify-center items-center w-fit rounded-full bg-transparent text-dark-green hover:bg-dark-green hover:text-white border border-dark-green font-bold py-2 pl-4 pr-2 mt-5 transition-all duration-300">
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