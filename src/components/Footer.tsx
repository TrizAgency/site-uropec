import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-[#054F85] via-[#047184] to-[#029383] py-22 mt-10">
            <div className="container flex flex-col lg:flex-row gap-5 lg:justify-between lg:items-center text-white">
                <Image className="hidden lg:block" src="/logo-footer-uropec.svg" width={260} height={187} alt="Logo Branco Grupo Uropec" />
                <Image className="block lg:hidden mx-auto" src="/logo-footer-uropec.svg" width={160} height={187} alt="Logo Branco Grupo Uropec" />

                <div className="flex flex-col gap-5 text-sm text-center lg:text-start mb-5 lg:mb-0">
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

                <div className="flex flex-row gap-7 text-xs">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1 lg:gap-0">
                            <strong>Home</strong>
                            <Link href="/#areas-de-atuacao" title="Áreas de atuação" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Áreas de atuação</Link>
                            <Link href="/#clientes" title="Parceiros" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Parceiros</Link>
                            <Link href="/#juntos-somos" title="Território Nacional" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Território Nacional</Link>
                        </div>

                        <div className="flex flex-col gap-1 lg:gap-0">
                            <strong>Grupo Uropec</strong>
                            <Link href="/quem-somos" title="Quem somos" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Quem somos</Link>
                            <Link href="/quem-somos#missao" title="Missão, Visão e Valores" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Missão, Visão e Valores</Link>
                            <Link href="/quem-somos#empresas" title="Uropec, Laptech e Finanpec" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Uropec, Laptech e Finanpec</Link>
                            <Link href="/quem-somos#localizacao" title="Localização" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Localização</Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1 lg:gap-0">
                            <strong>Produtos</strong>
                            <Link href="/produtos-bariatrica" title="Produtos Bariátrica" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Bariátrica</Link>
                            <Link href="/produtos-urologia" title="Produtos Urologia" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Urologia</Link>
                            <Link href="/produtos-ginecologia" title="Produtos Ginecologia" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Ginecologia</Link>
                            <Link href="/produtos-cirurgia-geral" title="Produtos Cirurgia Geral" className="underline decoration-transparent hover:decoration-white transition-all duration-300">Cirurgia Geral</Link>
                        </div>

                        <div className="flex flex-col gap-1 lg:gap-0">
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