import Image from "next/image";
import Link from "next/link";
import ArrowRight from "./ArrowRight";

export default function Acting() {
    return (
        <section className="py-10" id="areas-de-atuacao" >
            <div className="container flex flex-col lg:flex-row gap-7 lg:gap-10 items-center text-light-green lg:px-28">
                <h2 className="uppercase font-bold text-xl whitespace-nowrap lg:text-3xl">
                    Nossa atuação
                </h2>

                <div className="h-28 w-2 bg-[#3DCF84] mx-10 hidden lg:block" />

                <p className="lg:text-xl text-center lg:text-start">A UROPEC é reconhecida pela confiabilidade e pelo alto padrão de seus produtos. Atuamos lado a lado com clínicas e hospitais, oferecendo materiais seguros, práticos e estéreis, que asseguram eficiência e tranquilidade no dia a dia dos procedimentos.</p>
            </div>

            <div className="container grid grid-cols-1 lg:grid-cols-3 gap-4 pt-12 lg:pt-20 pb-2">
                <Image src="/doctors.png" width={500} height={300} quality={100} alt="Médicos" className="" data-aos="fade-right"/>

                <div className="bg-white text-dark-green py-5 px-8 flex flex-col justify-between gap-5 rounded-[38px]" data-aos="fade-right" data-aos-delay="200">
                    <h3 className="text-xl lg:text-3xl font-bold ">Bariátrica</h3>
                    <p>Para cirurgias bariátricas, a UROPEC fornece descartáveis especializados que garantem suporte seguro e eficaz...</p>
                    <Link href="/produtos-bariatrica" className="flex gap-6 justify-center items-center w-fit rounded-full bg-white text-dark-green hover:bg-dark-green hover:text-white border border-dark-green font-bold py-2 pl-4 pr-2 transition-all duration-300">
                        Saiba mais
                        <ArrowRight bgColor="#026E6A" arrowColor="#fff" />     
                    </Link>
                </div>

                <div className="bg-dark-green text-white py-5 px-8 flex flex-col justify-between gap-5 rounded-[38px]" data-aos="fade-right" data-aos-delay="300">
                    <h3 className="text-xl lg:text-3xl font-bold ">Urologia</h3>
                    <p>Linha completa de descartáveis para urologia, desenvolvidos para garantir precisão, segurança e confiabilidade...</p>
                    <Link href="/produtos-urologia" className="flex gap-6 justify-center items-center w-fit rounded-full bg-dark-green text-white hover:bg-white hover:text-dark-green border border-white font-bold py-2 pl-4 pr-2 transition-all duration-300">
                        Saiba mais
                        <ArrowRight bgColor="#fff" arrowColor="#026E6A" />     
                    </Link>
                </div>
            </div>

            <div className="container flex flex-col-reverse lg:flex-row gap-2">
                <div className="bg-dark-green text-white py-5 px-8 gap-5 flex flex-col justify-between rounded-[38px]" data-aos="fade-right" data-aos-delay="400">
                    <h3 className="text-xl lg:text-3xl font-bold ">Ginecologia</h3>
                    <p>Nossa linha inclui materiais desenvolvidos para atender às necessidades específicas da área...</p>
                    <Link href="/produtos-ginecologia" className="flex gap-6 justify-center items-center w-fit rounded-full bg-dark-green text-white hover:bg-white hover:text-dark-green border border-white font-bold py-2 pl-4 pr-2 transition-all duration-300">
                        Saiba mais
                        <ArrowRight bgColor="#fff" arrowColor="#026E6A" />     
                    </Link>
                </div>

                <div className="bg-white text-dark-green py-5 px-8 flex flex-col justify-between gap-5 rounded-[38px]" data-aos="fade-right" data-aos-delay="500">
                    <h3 className="text-xl lg:text-3xl font-bold ">Cirurgia Geral</h3>
                    <p>Na cirurgia geral, a UROPEC disponibiliza uma linha completa de descartáveis de alta qualidade, desenvolvidos para garantir segurança, praticidade e eficiência em diferentes tipos de procedimentos...</p>
                    <Link href="/produtos-cirurgia-geral" className="flex gap-6 justify-center items-center w-fit rounded-full bg-white text-dark-green hover:bg-dark-green hover:text-white border border-dark-green font-bold py-2 pl-4 pr-2 transition-all duration-300">
                        Saiba mais
                        <ArrowRight bgColor="#026E6A" arrowColor="#fff" />     
                    </Link>
                </div>

                <Image src="/surgery.png" width={220} height={204} quality={100} alt="Cirurgia" className="hidden lg:block shrink-0 object-cover rounded-[38px]" data-aos="fade-right" data-aos-delay="600" />
            </div>
        </section>
    )
}