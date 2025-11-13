import Image from "next/image";
import Link from "next/link";
import ArrowRight from "./ArrowRight";

export default function Companies() {
  return (
    <section className="lg:py-20 py-10" id="empresas" data-aos="fade-up">
        <div className="container-lg text-center flex flex-col items-center">
            <h2 className="uppercase font-bold text-xl text-blue lg:text-3xl mb-10">
                Empresas do Grupo
            </h2>

            <div className="lg:container-lg bg-white w-full rounded-4xl lg:rounded-[88px] flex flex-col gap-20">

                <div className="container py-10 lg:py-20 lg:px-52 flex flex-col lg:gap-36 gap-20 text-blue relative">
                    {/* <div className="absolute top-32 left-[20vw] -translate-x-1/2 h-[70%] w-0.5 bg-blue z-0 hidden lg:block"></div> */}

                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 z-10" data-aos="fade-up">
                        <Image src="/uropec-1.svg" width={188} height={188} alt="UROPEC" className="z-10" />

                        <div className="flex flex-col text-start gap-2" id="uropec">
                            <h3 className="text-xl lg:text-3xl font-bold">Uropec</h3>
                            <p className="lg:text-xl">Especializada na distribuição de descartáveis e soluções cirúrgicas para urologia, cirurgia geral, ginecologia e bariátrica, a UROPEC é reconhecida pela confiabilidade e pelo alto padrão de seus produtos. Atuamos lado a lado com clínicas e hospitais, oferecendo materiais seguros, práticos e estéreis, que asseguram eficiência e tranquilidade no dia a dia dos procedimentos.</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 z-10" data-aos="fade-up">
                        <Image src="/finanpec-1.svg" width={188} height={188} alt="UROPEC" className="" />

                        <div className="flex flex-col text-start gap-2" id="finanpec">
                            <h3 className="text-xl lg:text-3xl font-bold">Finanpec</h3>
                            <p className="lg:text-xl">Na FINANPEC, aproximamos pacientes dos melhores cirurgiões por meio de um atendimento personalizado e descomplicado. Cuidamos de toda a intermediação financeira e administrativa, para que o paciente se concentre no que realmente importa: sua saúde. Nosso compromisso é simplificar processos e oferecer confiança em cada etapa do tratamento.</p>
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 z-10" data-aos="fade-up">
                        <Image src="/laptech-1.svg" width={188} height={188} alt="UROPEC" className="" />

                        <div className="flex flex-col text-start gap-2" id="laptech">
                            <h3 className="text-xl lg:text-3xl font-bold">Laptech</h3>
                            <p className="lg:text-xl mb-10">A LAPTECH é com foco em inovação e qualidade, a empresa contribui para que o mercado hospitalar tenha acesso a soluções modernas, duráveis e eficazes, acompanhadas de assistência técnica especializada.</p>

                            <Link href="https://wa.me/5519984080060" target="_blank" title="Seja um distribuidor Laptech" className='bg-transparent text-dark-green rounded-full border border-dark-green py-2 px-4 w-fit hover:text-white hover:bg-dark-green transition-all duration-300 flex gap-5 items-center'>
                                <Image src="/carro.svg" width={45} height={30} alt="Laptech" />
                                <p className='leading-tight text-sm'>Seja um distribuidor Laptech</p>
                                <ArrowRight arrowColor="#fff" bgColor="#026E6A" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}