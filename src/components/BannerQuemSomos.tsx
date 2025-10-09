'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";

export default function BannerQuemSomos() {
    const images = [
        {
            src: '/consult.jpg',
            srcMob: '/consult.jpg',
            alt: 'Background consulta',
        },
    ];

    return (
        <section className="carousel-fullscreen my-3 lg:my-0">
            <h1 className="sr-only">Uropec - Quem Somos</h1>
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                spaceBetween={20}
                loop={true}
                autoplay={{ delay: 5000 }}
                grabCursor={true}
                pagination={{ clickable: true }}
                className="carousel-swiper w-screen lg:h-[80vh] 2xl:h-[60vh] h-[30vh] container-lg relative"
            >
                {images.map((slide, idx) => (
                    <SwiperSlide key={idx} className=''>
                        <div className="carousel-slide h-full">
                            <Image fill src={slide.src} alt={slide.alt} quality={100} className="carousel-image object-cover lg:object-left object-center hidden lg:block rounded-[88px]" />
                            <Image fill src={slide.srcMob} alt={slide.alt} quality={100} className="carousel-image object-cover lg:object-left object-center block lg:hidden rounded-4xl" />
                            
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}