import React from "react";
import { motion } from "framer-motion";
import { useScrollToSection } from "@/hooks/Navbar/useScrollToSection";
import { useActiveScroll } from "@/hooks/Navbar/hasActiveScroll";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";

interface Props {
    item: {
        id: string;
        labelID: string;
        labelEN: string;
    };
    index: number;
}

const NavbarDekstop = ({ item, index }: Props) => {
    const { scrollToSection } = useScrollToSection();
    const { activeSection } = useActiveScroll();
    const { language } = useLanguage();

    const handleClickScrollToSection = (id: string) => {
        scrollToSection(id);
    };
    return (
        <motion.button
            key={item.id}
            onClick={() => handleClickScrollToSection(item.id)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: index * 0.1,
                duration: 0.5,
            }}
            className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === item.id
                    ? "text-[#ac8c4d] dark:text-[#D4AF37]"
                    : "text-[#C8A45C] dark:text-[#C8A45C] hover:text-[#C8A45C] dark:hover:text-[#D4AF37]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {language === "ID" ? item.labelID : item.labelEN}
            {activeSection === item.id && (
                <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-[#C8A45C]/30 dark:bg-[#D4AF37]/30 rounded-lg"
                    transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                    }}
                />
            )}
        </motion.button>
    );
};

export default NavbarDekstop;
