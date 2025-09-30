import AosInit from "@/components/AosInit";
import BannerProdutos from "@/components/BannerProdutos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import WhatsApp from "@/components/WhatsApp";

export default function ProdutosGinecologia() {
    return (
        <main className="font-[family-name:var(--font-inter)] bg-[#f6f6f6]">
            <AosInit />
            <Header />
            <BannerProdutos 
                image="/ginecologia.png" 
                title="Ginecologia" 
                description="Na ginecologia, a UROPEC disponibiliza descartáveis de qualidade hospitalar que oferecem conforto, praticidade e máxima segurança no dia a dia dos procedimentos. Nossa linha inclui materiais desenvolvidos para atender às necessidades específicas da área, sempre com foco em confiabilidade, esterilidade e facilidade de uso, contribuindo para maior eficiência no trabalho das equipes médicas. <br/><br/> Com produtos de alto padrão, buscamos apoiar clínicas e hospitais na entrega de cuidados cada vez mais seguros às pacientes." 
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