import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { cardVariants } from "../variants/cardVariants";

interface PropsCard {
    feature: any;
    index: number;
    language: string;
}

const CardChooseUs = ({ feature, index, language }: PropsCard) => {
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.2 }}
            whileHover={{
                y: -10,
                boxShadow: "0 20px 40px rgba(200, 164, 92, 0.2)",
                border: "2px solid #C8A45C",
            }}
            className={cn(cardVariants())}
        >
            <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] rounded-full mb-6"
            >
                <feature.icon className="w-8 h-8 text-white" />
            </motion.div>

            <h3
                className="text-xl md:text-2xl text-[#1F2937] dark:text-[#F9FAFB] mb-4"
                style={{
                    fontFamily: "Playfair Display, serif",
                }}
            >
                {language === "ID" ? feature.titleID : feature.titleEN}
            </h3>

            <p className="text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed">
                {language === "ID" ? feature.descID : feature.descEN}
            </p>
        </motion.div>
    );
};

export default CardChooseUs;
