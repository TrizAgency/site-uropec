import AosInit from "@/components/AosInit";
import BannerProdutos from "@/components/BannerProdutos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import WhatsApp from "@/components/WhatsApp";

export default function ProdutosBariatrica() {
    return (
        <main className="font-[family-name:var(--font-inter)] bg-[#f6f6f6]">
            <AosInit />
            <Header />
            <BannerProdutos 
                image="/estomago.png" 
                title="Bariátrica" 
                description="Para cirurgias bariátricas, a UROPEC fornece descartáveis especializados que garantem suporte seguro e eficaz em cada etapa do procedimento. Nossos materiais são desenvolvidos para assegurar praticidade, confiabilidade e conformidade com os mais rigorosos padrões de qualidade, proporcionando ao cirurgião maior tranquilidade e precisão durante as intervenções." 
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