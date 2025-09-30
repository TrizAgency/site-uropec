import Image from "next/image";

export default function WhoWeAre() {
    return (
        <section className="py-10 lg:py-20" id="presenca" data-aos="fade-up">
            <div className="container-lg flex flex-col items-center justify-center gap-8 lg:gap-10 bg-white overflow-visible lg:rounded-[88px] rounded-[38px] text-blue py-10 px-3 lg:px-20">
                <h2 className="uppercase font-bold text-xl text-blue lg:text-3xl">
                    Quem Somos
                </h2>

                <div className="container flex justify-center">
                    <p className="lg:max-w-2/3">Na UROPEC, acreditamos que inovação em urologia vai além de bons produtos, é sobre compromisso com pessoas. Criamos a empresa para suprir as demandas do mercado hospitalar, oferecendo equipamentos e descartáveis urológicos com qualidade, seriedade e suporte em cada detalhe.
                    <br />
                    <br />
                    Nosso foco é fazer com que clínicas, hospitais e médicos se sintam valorizados: ouvimos suas necessidades, entregamos no prazo e oferecemos assistência técnica sempre que necessário. Mesmo não realizando cirurgias, sabemos que fazemos parte de algo maior: a saúde do paciente.
                    <br />
                    <br />
                    Aqui, mais que fornecedores, somos parceiros. Relacionamentos duradouros se constroem com confiança, transparência e excelência em cada contato.</p>
                </div>
            </div>
        </section>
    )
}