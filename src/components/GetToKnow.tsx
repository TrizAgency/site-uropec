'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "./ArrowRight";

export default function GetToKnow() {
    const cards = [
        {
            title: "Uropec",
            image: "/uropec-logo.svg",
            description: "Especializada na distribuição de descartáveis e soluções cirúrgicas para urologia, cirurgia geral, ginecologia e bariátrica."
        },
        {
            title: "Laptech",
            image: "/laptech-logo.svg",
            description: "Responsável pela fabricação de equipamentos e materiais de alta performance, unindo tecnologia e rigor técnico em cada desenvolvimento."
        },
        {
            title: "Finanpec",
            image: "/finanpec-logo.svg",
            description: "Aproximamos pacientes dos melhores cirurgiões por meio de um atendimento personalizado e descomplicado."
        },
        {
            title: "Uropec",
            image: "/uropec-logo.svg",
            description: "Especializada na distribuição de descartáveis e soluções cirúrgicas para urologia, cirurgia geral, ginecologia e bariátrica."
        },
        {
            title: "Laptech",
            image: "/laptech-logo.svg",
            description: "Responsável pela fabricação de equipamentos e materiais de alta performance, unindo tecnologia e rigor técnico em cada desenvolvimento."
        },
        {
            title: "Finanpec",
            image: "/finanpec-logo.svg",
            description: "Aproximamos pacientes dos melhores cirurgiões por meio de um atendimento personalizado e descomplicado."
        },
    ];

    return (
        <section className="relative py-10 lg:py-20" id="conheca-o-grupo" data-aos="fade-up">
            <div className="lg:container mx-auto">
                <div className="flex flex-col text-light-green items-center gap-10 lg:gap-16">
                <h2 className="uppercase font-bold px-10 md:px-16 lg:px-0 text-xl lg:text-3xl">
                    Conheça o Grupo Uropec
                </h2>

                <div className="relative w-full lg:w-[110%] swiper-cards">
                    <Swiper 
                    breakpoints={{
                        768: {
                        slidesPerView: 2.6,
                        },
                        1024: {
                        slidesPerView: 2.9,
                        },
                        1366: {
                        slidesPerView: 3
                        }
                    }}
                    // className="w-full relative !overflow-hidden"
                    slidesPerView={1.3}
                    effect={"coverflow"}
                    modules={[EffectCoverflow, Autoplay]}
                    coverflowEffect={{
                        slideShadows: false,
                        rotate: 0,
                        stretch: 50,
                        depth: 100,
                    }}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    autoplay={{ delay: 3000 }}
                    // cardsEffect={{
                    //   perSlideOffset: 30,
                    //   rotate: false,
                    //   slideShadows: false,
                    // }}
                    // navigation={{
                    //     nextEl: ".swiper-button-next-card",
                    //     prevEl: ".swiper-button-prev-card",
                    // }}
                    >
                    {cards.map((card, index) => (
                        <SwiperSlide key={card.title + index}>
                            <div className="bg-white text-blue leading-tight lg:text-xl lg:rounded-[88px] rounded-4xl aspect-[496/367]  shadow py-14 px-10 lg:px-20 flex flex-col justify-center items-center gap-10 lg:gap-14">
                                <Image 
                                    className="text-2xl lg:text-4xl uppercase font-neulis-bold-italic text-center hashtag"
                                    src={card.image}
                                    alt={card.title}
                                    width={250}
                                    height={67}
                                />
                                <p>{card.description}</p>
                            </div>
                            <Link href="/quem-somos" className="flex gap-6 justify-center items-center w-fit rounded-full bg-blue text-white hover:bg-white hover:text-blue border border-blue font-bold py-2 pl-4 pr-2 place-self-center transition-all duration-300">
                                Saiba mais
                                <ArrowRight bgColor="#065084" arrowColor="#fff" />     
                            </Link>
                        </SwiperSlide>
                    ))}
                    </Swiper>

                    {/* <div className="absolute w-full lg:flex justify-between top-1/2 -translate-y-[50%] z-20 hidden">
                        <button className="swiper-button-prev-card relative cursor-pointer lg:text-3xl rotate-180 disabled:opacity-0" title="Anterior">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px" height="36px">
                            <path fillRule="evenodd"  fill="rgb(175, 152, 191)"
                            d="M1.451,-0.008 C1.811,-0.008 2.171,0.126 2.451,0.397 L19.568,16.964 C19.848,17.235 20.006,17.607 20.006,17.996 C20.006,18.385 19.848,18.757 19.568,19.028 L2.451,35.595 C1.881,36.147 0.971,36.133 0.419,35.563 C-0.133,34.993 -0.119,34.084 0.451,33.532 L16.503,17.996 L0.451,2.459 C-0.119,1.908 -0.133,0.999 0.419,0.429 C0.701,0.139 1.076,-0.008 1.451,-0.008 Z"/>
                            </svg>
                        </button>
                        <button className="swiper-button-next-card relative cursor-pointer lg:text-3xl disabled:opacity-0" title="Próximo">
                            <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            width="20px" height="36px">
                            <path fillRule="evenodd"  fill="rgb(175, 152, 191)"
                            d="M1.451,-0.008 C1.811,-0.008 2.171,0.126 2.451,0.397 L19.568,16.964 C19.848,17.235 20.006,17.607 20.006,17.996 C20.006,18.385 19.848,18.757 19.568,19.028 L2.451,35.595 C1.881,36.147 0.971,36.133 0.419,35.563 C-0.133,34.993 -0.119,34.084 0.451,33.532 L16.503,17.996 L0.451,2.459 C-0.119,1.908 -0.133,0.999 0.419,0.429 C0.701,0.139 1.076,-0.008 1.451,-0.008 Z"/>
                            </svg>
                        </button>
                    </div> */}
                </div>
                </div>
            </div>
        </section>
    )
}