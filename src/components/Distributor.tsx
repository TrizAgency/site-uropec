import Image from "next/image";
import Link from "next/link";
import ArrowRight from "./ArrowRight";

export default function Distributor() {
    return (
        <section className="lg:py-20 py-5" id="distribuidor" data-aos="fade-up">
            <Link href="https://wa.me/5519984080060" target="_blank" className="container-lg lg:rounded-[88px] rounded-[38px] overflow-hidden relative lg:px-40 px-5 py-20 lg:pt-32 flex flex-col items-center justify-center lg:gap-8 gap-6 group">
                <div className="inset-0 bg-light-green/60 absolute z-10" />
                <Image src="/frete.jpg" alt="Distribuidor" fill className="object-cover lg:object-[25%_25%] z-0 blur-[1.5px] group-hover:scale-105 transition-all duration-300 group-hover:blur-none" />
                <Image src="/distributor.svg" width={2000} height={1000} alt="Distribuidor" className="z-10 lg:max-w-[830px] hidden lg:block" />
                <div className="flex flex-col mt-8 lg:hidden z-10 text-center items-center text-xl text-white">
                    
                    <p className="text-center mb-3">
                        <span className="font-bold">Seja um  <br/>distribuidor Laptech</span>
                    </p>

                    <ArrowRight bgColor="#fff" arrowColor="#026E6A" />
                </div>
                <Image src="/laptech-logo-white.svg" width={220} height={60} alt="Laptech" className="z-10 pr-10 pl-6 lg:px-0" />
            </Link>
        </section>
    )
}