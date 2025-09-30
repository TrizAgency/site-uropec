'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BannerProdutos({ image, title, description }: any) {
    const router = useRouter();
    const isCoracaoOrGinecologia = image.includes("coracao") || image.includes("ginecologia");
    return (
        <section className="container-lg rounded-4xl lg:rounded-[88px] bg-light-green lg:py-20 pb-10 lg:px-32 flex relative lg:!mt-36 !mt-22">
            <h1 className="sr-only">Uropec Produtos - Urologia</h1>
            <div className="container flex flex-col items-center lg:flex-row lg:gap-20 2xl:px-20">
                <Image src={image} width={isCoracaoOrGinecologia ? 544 :414} height={isCoracaoOrGinecologia ? 526 : 584} quality={100} alt="Ilustração de rins" className={`lg:absolute -mt-20 lg:m-auto ${isCoracaoOrGinecologia ? 'lg:bottom-20' : 'lg:bottom-0' }`} data-aos="fade-up" />

                <div className="w-1/2 hidden lg:block" />

                <div className="lg:w-1/2 text-white flex flex-col gap-6 lg:gap-10">
                    <h1 className="lg:text-5xl text-3xl font-bold">{title}</h1>
                    <p className="lg:text-xl text-lg leading-tight" dangerouslySetInnerHTML={{ __html: description }}></p>
                </div>
            </div>
        </section>
    )
}