import AosInit from "@/components/AosInit";
import BannerProdutos from "@/components/BannerProdutos";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";
import WhatsApp from "@/components/WhatsApp";
import { productsDisposables, productsSurgery } from "@/helpers/productsList";

export default function ProdutosUrologia() {
    return (
        <main className="font-[family-name:var(--font-inter)] bg-[#f6f6f6]">
            <AosInit />
            <Header />
            <BannerProdutos 
                image="/rim.png" 
                title="Urologia" 
                description="A UROPEC oferece uma linha completa de descartáveis para urologia, desenvolvidos para garantir precisão, segurança e confiabilidade em cada procedimento. Entre nossos principais produtos estão cateteres, fios-guia hidrofílicos, agulhas de punção e kits dilatadores, todos fabricados com materiais de alta performance e compatíveis com os padrões mais exigentes de hospitais e clínicas." 
            />
            <Products 
                title="Produtos | Laser"
                products={[
                    { key: "1", name: "Laser", image: "/produtos/laser.jpg", link: "#" },
                ]}
            />
            <Products 
                title="Produtos | Equipamentos Cirúrgicos"
                products={productsSurgery}
            />
            <Products 
                title="Produtos | Materiais Descartáveis"
                products={productsDisposables}
            />
            <Footer />
            <WhatsApp />
        </main>
    );
}