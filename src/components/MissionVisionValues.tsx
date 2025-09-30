import Image from "next/image";

export default function MissionVisionValues() {
    return (
        <section className="w-full flex flex-col gap-10" id="missao">

            {/* Missão */}
            <div className="w-full container-lg relative h-auto lg:h-[450px] pt-[250px] lg:pt-0" data-aos="fade-up">
                <div className="absolute left-0 top-0 w-full lg:w-1/2 h-[300px] lg:h-[450px] overflow-hidden rounded-4xl lg:rounded-[88px]">
                    <Image 
                        width={500}
                        height={300}
                        src="/mission.jpg" 
                        alt="Missão"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <div className="relative lg:absolute lg:right-0 lg:top-0 w-full lg:w-2/3 h-auto lg:h-[450px] bg-light-green rounded-4xl lg:rounded-[88px] p-8 lg:p-12 flex flex-col justify-center -mt-12 lg:mt-0">
                    <div className="w-full lg:w-2/3 mx-auto">
                        <h3 className="text-white text-xl lg:text-3xl font-bold mb-6">Missão</h3>
                        <p className="text-white text-base leading-relaxed">
                            Contribuir para o sucesso de cada procedimento cirúrgico, construindo parcerias sólidas com médicos, clínicas e hospitais, e posicionando a UROPEC como referência em soluções para urologia no mercado hospitalar.
                        </p>
                    </div>
                </div>
            </div>

            {/* Visão */}
            <div className="w-full container-lg relative h-auto lg:h-[450px] pt-[250px] lg:pt-0" data-aos="fade-up">
                <div className="absolute right-0 top-0 w-full lg:w-1/2 h-[300px] lg:h-[450px] overflow-hidden rounded-4xl lg:rounded-[88px]">
                    <Image 
                        width={500}
                        height={300}
                        src="/vision.jpg" 
                        alt="Visão"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <div className="relative lg:absolute lg:left-0 lg:top-0 w-full lg:w-2/3 h-auto lg:h-[450px] bg-light-green rounded-4xl lg:rounded-[88px] p-8 lg:p-12 flex flex-col justify-center -mt-12 lg:mt-0">
                    <div className="w-full lg:w-2/3 mx-auto">
                        <h3 className="text-white text-xl lg:text-3xl font-bold mb-6">Visão</h3>
                        <p className="text-white text-base leading-relaxed">
                            Ser reconhecida nacionalmente como a principal fornecedora de equipamentos e materiais urológicos, destacando-se pela excelência, inovação e fidelização de nossos clientes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Valores */}
            <div className="w-full container-lg relative h-auto lg:h-[450px] pt-[250px] lg:pt-0" data-aos="fade-up">
                <div className="absolute left-0 top-0 w-full lg:w-1/2 h-[300px] lg:h-[450px] overflow-hidden rounded-4xl lg:rounded-[88px]">
                    <Image 
                        width={500}
                        height={300}
                        src="/values.jpg" 
                        alt="Valores"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
                <div className="relative lg:absolute lg:right-0 lg:top-0 w-full lg:w-2/3 h-auto lg:h-[450px] bg-light-green rounded-4xl lg:rounded-[88px] p-8 lg:p-12 flex flex-col justify-center -mt-12 lg:mt-0">
                    <div className="w-full lg:w-2/3 mx-auto">
                        <h3 className="text-white text-xl lg:text-3xl font-bold mb-6">Valores</h3>
                        <p className="text-white text-base leading-relaxed">
                            Comprometimento, ética, respeito, perseverança e foco em resultados. Acreditamos na construção de relacionamentos duradouros com base em confiança, agilidade e qualidade. Cada produto representa nosso compromisso com o alto padrão exigido pelo segmento hospitalar
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}