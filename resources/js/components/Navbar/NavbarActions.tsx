import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Phone, Sun } from "lucide-react";
import React from "react";

const NavbarActions = () => {
    const { language, setLanguage } = useLanguage();
    const { darkMode, setDarkMode } = useTheme();

    const setDarkModeHandler = (darkMode: boolean) => {
        setDarkMode(!darkMode);
    };
    return (
        <>
            <div className="flex items-center gap-3">
                {/* Language Switcher */}
                <motion.div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F9FAFB] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155]"
                    whileHover={{ scale: 1.02 }}
                >
                    <div
                        className="flex items-center justify-center gap-2 p-0"
                        onClick={() => setLanguage("ID")}
                    >
                        <svg
                            width="25"
                            height="25"
                            viewBox="0 0 64 64"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect width="64" height="32" fill="#E70011" />
                            <rect
                                y="32"
                                width="64"
                                height="32"
                                fill="#FFFFFF"
                            />
                        </svg>
                        <button
                            className={`text-xs font-medium transition-all duration-200 ${
                                language === "ID"
                                    ? "text-[#C8A45C] dark:text-[#D4AF37]"
                                    : "text-[#6B7280] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-[#CBD5E1]"
                            }`}
                        >
                            ID
                        </button>
                    </div>
                    <div className="w-px h-5 bg-[#E5E7EB] dark:bg-[#334155]" />
                    <div
                        className="flex items-center justify-center gap-2 p-0"
                        onClick={() => setLanguage("EN")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 60 30"
                            width="25"
                            height="25"
                        >
                            <rect width="60" height="30" fill="#012169" />

                            <polygon
                                points="0,0 6,0 60,24 60,30 54,30 0,6"
                                fill="#FFFFFF"
                            />
                            <polygon
                                points="60,0 54,0 0,24 0,30 6,30 60,6"
                                fill="#FFFFFF"
                            />

                            <polygon
                                points="0,0 4,0 60,26 60,30 56,30 0,4"
                                fill="#C8102E"
                            />
                            <polygon
                                points="60,0 56,0 0,26 0,30 4,30 60,4"
                                fill="#C8102E"
                            />

                            <rect
                                x="24"
                                width="12"
                                height="30"
                                fill="#FFFFFF"
                            />
                            <rect y="9" width="60" height="12" fill="#FFFFFF" />

                            <rect x="26" width="8" height="30" fill="#C8102E" />
                            <rect y="11" width="60" height="8" fill="#C8102E" />
                        </svg>
                        <button
                            onClick={() => setLanguage("EN")}
                            className={`text-xs font-medium transition-all duration-200 ${
                                language === "EN"
                                    ? "text-[#C8A45C] dark:text-[#D4AF37]"
                                    : "text-[#6B7280] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-[#CBD5E1]"
                            }`}
                        >
                            EN
                        </button>
                    </div>
                </motion.div>

                {/* Dark Mode Toggle */}
                <motion.button
                    onClick={() => setDarkModeHandler(darkMode)}
                    className="p-2.5 rounded-lg bg-[#F9FAFB] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] hover:border-[#C8A45C] dark:hover:border-[#D4AF37] transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        {darkMode ? (
                            <motion.div
                                key="sun"
                                initial={{
                                    rotate: -90,
                                    opacity: 0,
                                }}
                                animate={{
                                    rotate: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    rotate: 90,
                                    opacity: 0,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Sun className="w-4 h-4 text-[#D4AF37]" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="moon"
                                initial={{
                                    rotate: 90,
                                    opacity: 0,
                                }}
                                animate={{
                                    rotate: 0,
                                    opacity: 1,
                                }}
                                exit={{
                                    rotate: -90,
                                    opacity: 0,
                                }}
                                transition={{ duration: 0.3 }}
                            >
                                <Moon className="w-4 h-4 text-[#C8A45C]" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

            {/* Divider */}
            <div className="h-9 w-px bg-[#E5E7EB] dark:bg-[#334155]" />

            {/* Contact CTA Button - Solid Style */}
            <motion.button
                className="relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] text-white text-sm font-medium rounded-lg overflow-hidden group"
                whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 30px -10px rgba(200, 164, 92, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
            >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-[#B69449] to-[#C8A45C] dark:from-[#E8C862] dark:to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Phone className="w-4 h-4 relative z-10" />
                <span className="relative z-10">
                    {language === "ID" ? "Hubungi Kami" : "Contact Us"}
                </span>
            </motion.button>
        </>
    );
};

export default NavbarActions;
