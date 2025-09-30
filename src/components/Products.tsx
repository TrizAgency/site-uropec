import Image from "next/image";
import Link from "next/link";

interface Product {
    key: string;
    image?: string;
    link: string;
    name: string;
}

interface ProductsProps {
    title: string;
    description?: string;
    products?: Product[];
}

export default function Products({ title, description, products }: ProductsProps) {
    return (
        <section className="lg:py-20 py-10" data-aos="fade-up">
            <div className="container flex flex-col items-center justify-center gap-10">
                <h2 className="text-xl lg:text-3xl mb-3 text-center text-blue font-bold uppercase tracking-wider">
                    {title}
                </h2>

                {description && (
                    <p className="text-xl lg:text-3xl text-blue text-center">{description}</p>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-12 gap-8 w-full">
                    {products?.map((product) => (
                        <div className="flex flex-col items-center gap-2" key={product.key}>
                            <Link 
                                href={product.link}
                                title={product.link}
                                className="group relative overflow-hidden transition-all duration-300 h-56 w-56 rounded-3xl lg:rounded-[40px] bg-[#c4c4c4]"
                            >
                                {product.image && (    
                                    <Image 
                                        fill
                                        src={product.image} 
                                        alt={`Product ${product.key}`}
                                        className="w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                                    />
                                )}
                            </Link>

                            <p className="lg:text-xl text-lg font-bold text-light-green text-center">{product.name}</p>

                            <Link 
                                href={product.link}
                                title={product.link}
                                className="mt-3 inline-block lg:text-lg text-white bg-light-green px-6 py-2 rounded-full hover:bg-dark-green transition-colors duration-300"
                            >
                                Ver mais
                            </Link>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}