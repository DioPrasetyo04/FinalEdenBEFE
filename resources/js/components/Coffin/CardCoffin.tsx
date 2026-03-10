import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";
import { ArrowRight } from "lucide-react";

interface CardCoffinProps {
    product: any;
}

const CardCoffin = ({ product }: CardCoffinProps) => {
    const { language } = useLanguage();
    return (
        <motion.div
            whileHover={{ y: -12 }}
            transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-full bg-[#FAFBFC] dark:bg-[#1E293B] rounded-2xl overflow-hidden cursor-pointer"
            style={{
                boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
            }}
        >
            {/* Hover Shadow */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0"
                style={{
                    boxShadow: "0 25px 50px -12px rgba(200, 164, 92, 0.4)",
                }}
            ></div>

            {/* Image Container */}
            <div className="relative aspect-[3/4] overflow-hidden">
                <motion.img
                    src={product.image}
                    alt={language === "ID" ? product.nameID : product.nameEN}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-sm text-[#C8A45C] dark:text-[#D4AF37] rounded-full text-xs font-semibold shadow-lg">
                        {language === "ID"
                            ? product.category
                            : product.categoryEN}
                    </span>
                </div>

                {/* Quick View Overlay */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{
                            scale: 1,
                            opacity: 1,
                        }}
                        transition={{ delay: 0.1 }}
                        className="px-6 py-3 bg-white dark:bg-[#1E293B] rounded-xl text-[#C8A45C] dark:text-[#D4AF37] font-semibold text-sm shadow-2xl"
                        // onClick={() => onOrderClick(product.id)}
                    >
                        {language === "ID" ? "Lihat Detail" : "View Details"}
                    </motion.div>
                </motion.div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-6">
                {/* Product Name */}
                <h3
                    className="text-xl md:text-2xl text-[#111827] dark:text-[#F9FAFB] mb-3 group-hover:text-[#C8A45C] dark:group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-2"
                    style={{
                        fontFamily: "Playfair Display, serif",
                    }}
                >
                    {language === "ID" ? product.nameID : product.nameEN}
                </h3>

                {/* description */}
                <p className="text-[#6B7280] dark:text-[#CBD5E1] mb-6 text-sm font-medium line-clamp-5">
                    {product.description}
                </p>

                {/* CTA Button */}
                <motion.button
                    // onClick={() => onOrderClick(product.id)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] text-white rounded-xl font-medium text-sm shadow-lg group-hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <span>
                        {language === "ID" ? "Lihat Detail" : "View Details"}
                    </span>
                    <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                        }}
                    >
                        <ArrowRight className="w-4 h-4" />
                    </motion.div>
                </motion.button>
            </div>

            {/* Decorative Accent */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#C8A45C]/10 to-transparent dark:from-[#D4AF37]/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
    );
};

export default CardCoffin;
