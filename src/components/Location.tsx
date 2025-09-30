import Image from "next/image";
import Link from "next/link";

export default function Location() {
  return (
    <section className="lg:py-20 py-10" id="localizacao" data-aos="fade-up">
        <div className="container text-start flex flex-col items-start">
            <h2 className="uppercase text-center w-full font-bold text-xl text-blue lg:text-3xl">
                Localização
            </h2>

            <iframe className="rounded-[38px] mt-8" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3233679972827!2d-47.210642850000006!3d-22.9014407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8b925326aa509%3A0xdf7b3d40561935b4!2sR.%20das%20Castanheiras%2C%20200%20-%20Jardim%20Sao%20Pedro%2C%20Hortol%C3%A2ndia%20-%20SP%2C%2013187-065!5e0!3m2!1spt-BR!2sbr!4v1759183614256!5m2!1spt-BR!2sbr" width="100%" height="500" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <Link href="https://maps.app.goo.gl/YeJA2HYy5XVFqpXb7" target="_blank" className="text-blue underline decoration-transparent hover:decoration-blue transition-all duration-300 mt-7" >
                Rua das Castanheiras, 200 - Galpão 49A<br />
                Jd. São Pedro - Hortolândia/SP
            </Link>
        </div>
    </section>
  );
}