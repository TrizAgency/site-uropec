import Image from "next/image";

export default function Brands() {
  return (
    <section className="lg:py-20 py-10" id="parceiros" data-aos="fade-up">
        <div className="container text-center flex flex-col items-center">
            <h2 className="uppercase font-bold text-xl text-light-green lg:text-3xl">
                Marcas Parceiras
            </h2>

            <div className="flex items-center gap-8 mt-14">
                <Image src="/logos/brands/david.png" width={248} height={81} alt="David" />
                <Image src="/logos/brands/biorad.png" width={241} height={42} alt="Biorad" className="mt-3" />
            </div>
        </div>
    </section>
  );
}