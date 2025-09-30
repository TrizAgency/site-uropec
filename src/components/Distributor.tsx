import Image from "next/image";
import Link from "next/link";

export default function Distributor() {
    return (
        <section className="lg:py-20 py-10" id="distribuidor" data-aos="fade-up">
            <Link href="#contato" className="container-lg lg:rounded-[88px] rounded-[38px] overflow-hidden relative lg:px-40 px-5 py-20 pt-32 flex flex-col items-center justify-center gap-8 group">
                <div className="inset-0 bg-light-green/60 absolute z-10" />
                <Image src="/frete.jpg" alt="Distribuidor" fill className="object-cover object-[25%_25%] z-0 blur-[1.5px] group-hover:scale-105 transition-all duration-300 group-hover:blur-none" />
                <Image src="/distributor.svg" width={2000} height={1000} alt="Distribuidor" className="z-10 lg:max-w-[830px]" />
                <Image src="/laptech-logo-white.svg" width={220} height={60} alt="Laptech" className="z-10 px-10 lg:px-0" />
            </Link>
        </section>
    )
}