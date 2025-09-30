'use client';

import Image from "next/image";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Clients() {
  const logos = [
    {
        key: "1",
        image: "/logos/clients/rede-dor.png",
        alt: "Rede D'Or",
        width: 261,
        height: 76,
    },
    {
        key: "2",
        image: "/logos/clients/hapvida.png",
        alt: "Hapvida",
        width: 261,
        height: 90,
    },
    {
        key: "3",
        image: "/logos/clients/amil.png",
        alt: "Amil",
        width: 155,
        height: 76,
    },
    {
        key: "4",
        image: "/logos/clients/dasa.png",
        alt: "Dasa",
        width: 156,
        height: 43,
    },
    {
        key: "5",
        image: "/logos/clients/unimed.png",
        alt: "Unimed",
        width: 204,
        height: 73,
    },
    {
        key: "6",
        image: "/logos/clients/bradesco.png",
        alt: "Bradesco Saúde",
        width: 174,
        height: 49,
    },
    {
        key: "7",
        image: "/logos/clients/def.png",
        alt: "HBB",
        width: 150,
        height: 45,
    },
    {
        key: "8",
        image: "/logos/clients/rmg.png",
        alt: "RMG",
        width: 173,
        height: 67,
    },
    {
        key: "9",
        image: "/logos/clients/sulamerica.png",
        alt: "Sulamerica",
        width: 173,
        height: 42,
    }
  ]

  return (
    <section className="lg:py-20 py-10" id="clientes" data-aos="fade-up">
        <div className="container text-center">
            <h2 className="uppercase font-bold text-xl text-light-green lg:text-3xl">
                Nossos clientes
            </h2>
        </div>

        <Swiper
            slidesPerView={2}
            modules={[FreeMode, Autoplay]}
            freeMode={true}
            autoplay={{
                delay: 0,
                disableOnInteraction: false,
            }}
            loop={true}
            speed={2000}
            breakpoints={{
                768: {
                slidesPerView: 6,
                },
            }}
            grabCursor={true}
            className="h-24 mt-14"
        >
            {logos.map((logo: any) => (
                <SwiperSlide
                key={logo.key}
                className="!flex items-center justify-center px-7"
                >
                <Image
                    src={logo.image}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className=""
                />
                </SwiperSlide>
            ))}
        </Swiper>
    </section>
  );
}