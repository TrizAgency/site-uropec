'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const menuItems = [
    { 
        label: "Grupo Uropec", 
        children: [
            { label: "Quem somos", href: "/quem-somos" },
            { label: "Uropec", href: "/quem-somos#uropec" },
            { label: "Laptech", href: "/quem-somos#laptech" },
            { label: "Finanpec", href: "/quem-somos#finanpec" },
            { label: "Áreas de Atuação", href: "/#areas-de-atuacao" },
            { label: "Trabalhe conosco", href: "/trabalhe-conosco" },
        ]
    },
    { label: "Parceiros", href: "#parceiros" },
    { label: "Produtos", href: "/produtos" },
    { label: "Fale conosco", href: "#contato" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
        <div className="w-full bg-dark-green py-5 hidden lg:block">
            <div className="container">
                <Link href="https://wa.me/5519988048662" target="_blank" className="text-white font-bold underline decoration-transparent hover:decoration-white transition-all duration-300">
                    Atendimento ao cliente: +55 19 98804-8662
                </Link>
            </div>
        </div>

        {/* Desktop Menu */}
        <div className="container items-center justify-between py-7 hidden lg:flex">
            <Link href="/">
                <Image src="/grupo-uropec-logo.svg" width={280} height={76} alt="Logo Grupo Uropec" />
            </Link>

            <nav>
                <ul className="flex gap-5">
                    {menuItems.map((item, index) => (
                        <li key={index} className="relative uppercase group menu-group">
                            {item.children ? (
                                <>
                                    <span className="cursor-pointer text-light-green py-3 px-4 hover:bg-white rounded-t-xl font-medium transition-colors duration-300 tracking-widest">
                                        {item.label}
                                    </span>
                                        <ul className="absolute normal-case mt-1 w-full text-center bg-white rounded-b-xl opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto z-0 group-hover:z-10 transition-opacity duration-300">
                                            {item.children.map((subItem, subIndex) => (
                                                <li key={subIndex} className="text-light-green hover:bg-light-green hover:text-white hover:font-bold text-sm transition-all duration-300 last:rounded-b-xl">
                                                    <Link 
                                                        href={subItem.href} 
                                                        className="block px-4 py-2 "
                                                    >
                                                        {subItem.label}
                                                    </Link>
                                                </li>                                        
                                            ))}
                                        </ul>
                                </>
                            ) : (
                                <Link href={item.href} className="text-light-green py-3 px-4 hover:bg-white rounded-xl font-medium transition-colors duration-300 tracking-widest">
                                    {item.label}
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

        {/* Mobile Menu */}
            <div className="bg-white w-full shadow-sm border-b border-gray-300 block lg:hidden">
                <div className="container flex items-center justify-between py-5">
                    <div
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToTop();
                        }}
                    >
                        <Image src="/grupo-uropec-logo.svg" alt="Logo Grupo Uropec" width={160} height={97} />
                    </div>

                    <button
                        type="button"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`z-[100] flex items-center justify-center outline-none transition-all duration-300 lg:block cursor-pointer rounded-lg`}
                        title="Open menu"
                    >
                        <div className="flex w-9 flex-col items-center">
                        <div
                            className={`relative mt-1.5 h-[3px] w-9 ${isMenuOpen ? 'bg-white top-[9px] rotate-45 transition-all duration-300' : 'bg-dark-green top-0 rotate-0 transition-all duration-300'}`}
                        />
                        <div
                            className={`mt-1.5 h-[3px] w-9 bg-dark-green ${isMenuOpen ? 'bg-white -rotate-45 transition-all duration-300' : 'bg-dark-green rotate-0 transition-all duration-300'}`}
                        />
                        <div
                            className={`relative mt-1.5 h-[3px] w-9 bg-dark-green ${isMenuOpen ? 'bg-white top-[-9px] -rotate-45 transition-all duration-300' : 'bg-dark-green top-0 rotate-0 transition-all duration-300'}`}
                        />
                        </div>
                    </button>

                    <div className={`fixed flex flex-col items-start p-7 top-0 right-0 w-[250px] bg-dark-green z-[99] shadow-xl transform transition-transform duration-300 rounded-l-2xl ${isMenuOpen ? "translate-x-[0]" : "translate-x-full"}`}>

                        <ul className="flex flex-col gap-4 font-normal text-white mt-2">
                            {menuItems.map((item) => (
                                <li key={item.label} className="">
                                    
                                    <Link
                                        href={item.href ?? '#'}
                                        title={item.label}
                                        className={`uppercase`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                    {item.children && (
                                        <ul>
                                            {item.children.map((subItem, subIndex) => (
                                                <li key={subIndex} className="text-white normal-case transition-all duration-300">
                                                    <Link   
                                                        href={subItem.href} 
                                                        className="block p-2 "
                                                    >
                                                        - {subItem.label}
                                                    </Link>
                                                </li>                                        
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
    </header>
  );
}