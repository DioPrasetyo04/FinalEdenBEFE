import { motion } from "motion/react";
import { Package } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { contentProductCoffin, productCoffins } from "@/data/Datas";
import CardCoffin from "@/components/Coffin/CardCoffin";

export interface ProductsProps {
    onOrderClick: (slug: string) => void;
}
export function CoffinProducts({ onOrderClick }: ProductsProps) {
    const { language } = useLanguage();

    const text =
        language === "ID" ? contentProductCoffin.ID : contentProductCoffin.EN;
    return (
        <section
            id="products"
            className="py-24 lg:py-32 bg-white dark:bg-[#0A0F1E] relative overflow-hidden"
        >
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 text-[#C8A45C] dark:text-[#D4AF37] rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
                    >
                        <Package className="w-3.5 h-3.5" />
                        {language === "ID"
                            ? "Katalog Produk"
                            : "Product Catalog"}
                    </motion.div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl text-[#111827] dark:text-[#F9FAFB] mb-6 tracking-tight"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        {text.title}
                    </h2>
                    <p className="text-lg md:text-xl text-[#6B7280] dark:text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">
                        {text.subtitle}
                    </p>
                </motion.div>

                {/* Product Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {productCoffins.length > 0 ? (
                        productCoffins.map((product, index) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{
                                    delay: index * 0.1,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group"
                            >
                                <CardCoffin product={product}></CardCoffin>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-4 text-center py-16 text-[#6B7280] dark:text-[#CBD5E1]">
                            {language === "ID"
                                ? "Belum ada produk peti tersedia."
                                : "No coffin products available yet."}
                        </div>
                    )}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-[#6B7280] dark:text-[#CBD5E1] text-sm">
                        {language === "ID"
                            ? "Memerlukan konsultasi untuk produk lain?"
                            : "Need consultation for other products?"}{" "}
                        <a
                            href="#contact"
                            className="text-[#C8A45C] dark:text-[#D4AF37] font-semibold hover:underline"
                        >
                            {language === "ID" ? "Hubungi Kami" : "Contact Us"}
                        </a>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
