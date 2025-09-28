import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-[#054F85] via-[#047184] to-[#029383] py-10 mt-10">
            <div className="container flex flex-col lg:flex-row gap-5 lg:justify-between lg:items-center text-white">
                <Image className="hidden lg:block" src="/logo-footer-uropec.svg" width={260} height={187} alt="Logo Branco Grupo Uropec" />
                <Image className="block lg:hidden" src="/logo-footer-uropec.svg" width={180} height={187} alt="Logo Branco Grupo Uropec" />

                <div className="flex flex-col gap-5 text-sm">
                    <Link href="https://maps.app.goo.gl/YeJA2HYy5XVFqpXb7" target="_blank" className="underline decoration-transparent hover:decoration-white transition-all duration-300" >
                        Rua das Castanheiras, 200 - Galpão 49A<br />
                        Jd. São Pedro - Hortolândia/SP
                    </Link>

                    <Link href="mailto:uropec@yahoo.com.br" target="_blank" className="underline decoration-transparent hover:decoration-white transition-all duration-300">
                        uropec@yahoo.com.br
                    </Link>

                    <div>
                        <Link href="tel:+551932821811" target="_blank" className="underline decoration-transparent hover:decoration-white transition-all duration-300">+55 19 3282-1811</Link> 
                        <span className="mx-1.5">|</span>
                        <Link href="https://wa.me/5519988048662" target="_blank" className="underline decoration-transparent hover:decoration-white transition-all duration-300">+55 19 98804-8662</Link>
                    </div>
                </div>

                <div className="flex flex-row gap-5 text-xs">
                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <strong>Home</strong>
                            <Link href="/#areas-de-atuacao" title="Trabalhe conosco" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Áreas de atuação</Link>
                            <Link href="/#areas-de-atuacao" title="Trabalhe conosco" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Áreas de atuação</Link>
                            <Link href="/#areas-de-atuacao" title="Trabalhe conosco" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Áreas de atuação</Link>
                        </div>

                        <div className="flex flex-col">
                            <strong>Grupo Uropec</strong>
                            <Link href="/#areas-de-atuacao" title="Trabalhe conosco" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Áreas de atuação</Link>
                            <Link href="/#areas-de-atuacao" title="Trabalhe conosco" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Áreas de atuação</Link>
                            <Link href="/#areas-de-atuacao" title="Trabalhe conosco" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Áreas de atuação</Link>
                            <Link href="/#areas-de-atuacao" title="Trabalhe conosco" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Áreas de atuação</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3">
                        <div className="flex flex-col">
                            <strong>Produtos</strong>
                            <Link href="/#areas-de-atuacao" title="Trabalhe conosco" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Áreas de atuação</Link>
                            <Link href="/#areas-de-atuacao" title="Trabalhe conosco" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Áreas de atuação</Link>
                            <Link href="/#areas-de-atuacao" title="Trabalhe conosco" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Áreas de atuação</Link>
                        </div>

                        <div className="flex flex-col">
                            <strong>Contato</strong>
                            <Link href="/#contato" title="Contato" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Quero ser um cliente Uropec</Link>
                            <Link href="/#contato" title="Contato" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Quero ser um distribuidor Laptech</Link>
                            <Link href="/#contato" title="Contato" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Quero fazer uma cirurgia</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
};