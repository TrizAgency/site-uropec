import AosInit from "@/components/AosInit";
import BannerProdutos from "@/components/BannerProdutos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import WhatsApp from "@/components/WhatsApp";

export default function ProdutosCirurgiaGeral() {
    return (
        <main className="font-[family-name:var(--font-inter)] bg-[#f6f6f6]">
            <AosInit />
            <Header />
            <BannerProdutos 
                image="/coracao.png" 
                title="Cirurgia Geral" 
                description="Na cirurgia geral, a UROPEC disponibiliza uma linha completa de descartáveis de alta qualidade, desenvolvidos para garantir segurança, praticidade e eficiência em diferentes tipos de procedimentos. Nossos produtos são projetados para oferecer confiabilidade e esterilidade em cada etapa, apoiando equipes médicas com materiais que facilitam o manuseio e proporcionam maior tranquilidade durante as intervenções. Com foco em inovação e alto padrão, buscamos contribuir para que clínicas e hospitais entreguem cuidados cada vez mais seguros e precisos aos pacientes." 
            />
            <Products 
                title="Produtos"
                description="Em breve"
            />
            <Footer />
            <WhatsApp />
        </main>
    );
}