'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "./ArrowRight";

export default function Banner() {
    const images = [
        {
            src: '/banner-uropec-principal-1.png',
            srcMob: '/banner1-mobile.jpg',
            alt: 'Background cirurgia',
            title: '<strong>Excelência</strong> <br/> em qualidade',
            description: '<strong>O Grupo UROPEC</strong> reúne empresas que atuam de forma integrada para oferecer soluções completas ao setor da saúde.<br/> Da distribuição de materiais cirúrgicos à fabricação de equipamentos de alta performance, passando pelo apoio direto ao paciente, unimos excelência técnica, inovação e proximidade no cuidado.',
            button: {
                text: 'Conheça nossas <br />  <strong>Áreas de atuação</strong>',
                link: '#areas-de-atuacao',
            },
            rightImage: {
            },
        },
        {
            src: '/banner-uropec-principal-2.png',
            srcMob: '/banner2-mobile.jpg',
            alt: 'Background products',
            title: '<strong>Tecnologia</strong> de ponta para <strong>Urologia</strong> moderna',
            description: 'A UROPEC fornece equipamentos a laser de última geração para clínicas e hospitais que exigem excelência em performance cirúrgica.',
            button: {
            text: 'Ver produtos',
            link: '/produtos',
            },
            leftImage: {
            },
        },
        {
            src: '/Banner-descartaveis.jpg',
            srcMob: '/Banner-descartaveis.jpg',
            alt: 'Background descavartáveis',
            title: '<strong>Descartáveis Urológicos Premium</strong>',
            description: 'Equipamentos descartáveis com fabricação de excelência, que asseguram proteção, eficiência cirúrgica e facilidade no uso.',
            button: {
                text: 'Ver produtos',
                link: '/produtos',
            },
            rightImage: {
                src: '/seringa.png',
                alt: 'Seringa Uropec',
            },
        },
        {
            src: '/Banner-cirurgia.jpg',
            srcMob: '/Banner-cirurgia.jpg',
            alt: 'Background cirurgia',
            title: '<strong>Equipamentos Cirúrgicos de Alta Performance</strong>',
            description: 'Soluções robustas, certificadas e tecnologicamente avançadas para que hospitais e cirurgiões alcancem o máximo em segurança e precisão.',
            button: {
                text: 'Ver produtos',
                link: '/produtos',
            },
            rightImage: {
                src: '/pinca.png',
                alt: 'Pinça Uropec',
            },
        },
    ];

    return (
        <section className="carousel-fullscreen my-3 lg:my-0">
            <h1 className="sr-only">Uropec</h1>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 5000 }}
                grabCursor={true}
                pagination={{ clickable: true }}
                className="carousel-swiper w-screen h-[85vh] container-lg relative"
            >
                {images.map((slide, idx) => (
                    <SwiperSlide key={idx} className=''>
                        <div className="carousel-slide h-full">
                            <Image fill src={slide.src} alt={slide.alt} quality={100} className="carousel-image object-cover lg:object-left object-center hidden lg:block rounded-[88px]" />
                            <Image fill src={slide.srcMob} alt={slide.alt} quality={100} className="carousel-image object-cover lg:object-left object-center block lg:hidden rounded-4xl" />
                            <div className="carousel-text text-white absolute w-full h-full container left-1/2 -translate-x-1/2 z-20">
                                <div className='flex flex-col lg:flex-row items-center justify-center gap-5 h-full'>
                                    {slide.leftImage && (    
                                        <div className='w-1/2 items-center justify-center min-h-40 lg:min-h-auto hidden lg:flex'>
                                        </div>
                                    )}

                                    <div className={`flex flex-col gap-5 lg:gap-10 lg:w-1/2 lg:pl-24 px-3 text-start ${!slide.rightImage ? 'mb-80 lg:mb-0' : ''}`}>
                                        <h2 className='lg:text-4xl text-3xl' dangerouslySetInnerHTML={{ __html: slide.title }}></h2>
                                        <p className='lg:text-xl leading-tight lg:max-w-[420px]' dangerouslySetInnerHTML={{ __html: slide.description }}></p>
                                        <div className='flex flex-col lg:flex-row lg:gap-2 gap-3 items-start'>
                                        <Link href={slide.button?.link} title={slide.button.text} className='bg-transparent text-white rounded-full border border-white py-2 px-4 w-fit hover:text-dark-green hover:bg-white transition-all duration-300 flex gap-5 items-center'>
                                            <p className='leading-tight' dangerouslySetInnerHTML={{ __html: slide.button.text }} />
                                            <ArrowRight arrowColor="#026E6A" bgColor="#fff" />
                                        </Link>
                                        </div>
                                    </div>
    
                                    {slide.rightImage && (    
                                        <div className='lg:w-1/2 flex items-center justify-center min-h-64 max-h-80 lg:min-h-auto'> 
                                            {slide.rightImage.src && (
                                                <Image src={slide.rightImage.src} alt={slide.rightImage.alt} width={600} height={600} quality={100} className="w-full h-full object-cover" />
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}