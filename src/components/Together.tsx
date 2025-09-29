import Image from "next/image";
import CountUp from "./CountUp";

export default function Together() {
    return (
        <section className="py-20" id="marcas" data-aos="fade-up">
            <div className="container text-center flex flex-col items-center">
                <h2 className="uppercase font-bold text-xl text-light-green lg:text-3xl">
                    Juntos Somos
                </h2>
    
                <div className="flex w-full px-36 items-center justify-around mt-14 text-blue">
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/coracao.svg" width={76} height={76} alt="Coração" className="mb-6" />
                        <CountUp 
                            start={0} 
                            end={100} 
                            duration={2000} 
                            prefix="+"
                            sufix="k"
                            className="font-black text-5xl" 
                        />
                        <p className="uppercase tracking-wider mt-2">Pacientes</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <Image src="/bisturi.svg" width={76} height={76} alt="Bisturi" className="mb-6" />
                        <CountUp 
                            start={0} 
                            end={100} 
                            duration={2000} 
                            prefix="+"
                            sufix="k"
                            className="font-black text-5xl" 
                        />
                        <p className="uppercase tracking-wider mt-2">Cirurgias</p>
                    </div>

                    <div className="flex flex-col items-center justify-center">
                        <Image src="/maleta.svg" width={76} height={76} alt="Maleta" className="mb-6" />
                        <CountUp 
                            start={0} 
                            end={500}   
                            duration={2000} 
                            prefix="+"
                            className="font-black text-5xl" 
                        />
                        <p className="uppercase tracking-wider mt-2">Hospitais<br /> cadastrados</p>
                    </div>
                </div>
            </div>
        </section>
    );
}