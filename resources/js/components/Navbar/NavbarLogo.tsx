import React from "react";
import { motion } from "framer-motion";
import { useScrollToSection } from "@/hooks/Navbar/useScrollToSection";

const NavbarLogo = () => {
    const { scrollToSection } = useScrollToSection();
    return (
        <>
            {/* Logo */}
            <motion.div
                className="flex items-center cursor-pointer group"
                onClick={() => scrollToSection("home")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
            >
                <div className="flex flex-row gap-[5px] p-3 relative justify-center items-center">
                    <div className="bg-cover bg-center">
                        <img
                            src="/assets/image/new-eden.png"
                            alt="image eden logo"
                            className="w-[80px] h-[80px] rounded-tl-4xl rounded-tr-4xl p-0"
                        />
                    </div>
                    <div
                        className="text-2xl font-bold tracking-tight"
                        style={{
                            fontFamily: "Playfair Display, serif",
                        }}
                    >
                        <span className="text-[#C8A45C] dark:text-[#D4AF37] group-hover:text-[#B69449] dark:group-hover:text-[#E8C862] transition-colors duration-300">
                            NEW EDEN
                        </span>
                    </div>
                    <motion.div
                        className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#C8A45C] to-transparent dark:from-[#D4AF37]"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                    />
                </div>
            </motion.div>
        </>
    );
};

export default NavbarLogo;
