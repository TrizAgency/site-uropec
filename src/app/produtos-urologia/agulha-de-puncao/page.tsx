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
            <section className="container lg:py-20 py-10 flex flex-col lg:flex-row gap-5 lg:gap-20 items-center lg:items-start">
                <Image src="/produtos/agulha-puncao.jpg" alt="Agulha de Punção" width={450} height={450} className="rounded-[40px] " />

                <div className="text-blue flex flex-col gap-5 lg:w-1/2">
                    <h1 className="lg:text-3xl text-xl font-bold">Agulha de Punção</h1>
                    <p>
                        Agulha de Punção é utilizada para a punção em procedimentos via percutânea. Sua ponta permite melhor visualização pela ultra-sonografia. 
                        <br />
                        Alças de RTU: 
                        <img src="/produtos/alcas-de-rtu.jpg" alt="Alcas RTU" className="w-1/3 my-2" />
                        Utilizadas em procedimentos de Ressecção. 
                        Agulha Chiba: Agulha com ponta tipo Chiba permite a aspiração de amostras citológicas e introdução de fio guia 0.035". Agulha Sling – Transobturatorias: Usada em procedimentos de Sling. Agulha Sling – Suprapubicas: Usada em procedimentos de Sling Sling: O sling pubovaginal oferece um suporte lateral e posterior à uretra proximal, aumentando a resistência contra a perda urinária no momento do aumento de pressão intra-abdominal (tosse, espirro, esforço). Fibra laser: As fibras são adequadas para endoscópios flexíveis e semi-rígidos. Elas são flexíveis e permitem o alcance a estenoses ou cálculos em praticamente qualquer parte do rim, ureter ou bexiga.
                    
                    </p>

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