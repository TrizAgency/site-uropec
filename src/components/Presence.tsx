import Image from "next/image";

export default function Presence() {
    return (
        <section className="lg:py-32 py-10" id="presenca" data-aos="fade-up">
            <div className="container-lg flex flex-col lg:flex-row items-center justify-center gap-20 bg-white overflow-visible lg:rounded-[88px] rounded-[38px] text-blue lg:py-20 py-10 px-10 lg:px-20 lg:h-96">
                <Image src="/mapa-brasil.png" width={600} height={600} alt="Mapa do Brasil" className="max-w-[390px] lg:max-w-[600px]" />

                <div className="">
                    <h2 className="text-xl lg:text-5xl mb-3">
                        Presença em <br className="hidden lg:block" /> <strong>todo o Brasil</strong>
                    </h2>

                    <p className="lg:max-w-72">A UROPEC atende hospitais, clínicas e distribuidores em todo o território nacional, com agilidade, suporte técnico e compromisso com a qualidade.</p>
                </div>
            </div>
        </section>
    )
}