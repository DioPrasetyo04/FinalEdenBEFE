import { navItems } from "@/data/Datas";
import { useActiveScroll } from "@/hooks/Navbar/hasActiveScroll";
import { useScrollToSection } from "@/hooks/Navbar/useScrollToSection";
import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import { useAppActions } from "@/hooks/useAppActions";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Phone, Sun, X } from "lucide-react";

interface NavbarMobileProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

const NavbarMobile = ({
    mobileMenuOpen,
    setMobileMenuOpen,
}: NavbarMobileProps) => {
    const { darkMode, setDarkMode } = useTheme();

    const { language, setLanguage } = useLanguage();

    const { activeSection } = useActiveScroll();
    const { scrollToSection } = useScrollToSection();
    const { handleWhatsAppClick } = useAppActions();

    const handleClickButtonToSection = (id: string) => {
        scrollToSection(id);
        setMobileMenuOpen(false);
    };
    return (
        <AnimatePresence>
            {mobileMenuOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setMobileMenuOpen(false)}
                        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
                    />
                    {/* Menu Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{
                            type: "spring",
                            damping: 25,
                            stiffness: 200,
                        }}
                        className="fixed right-0 top-0 bottom-0 z-50 w-[85%] max-w-sm bg-white dark:bg-[#0A0F1E] lg:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col h-full">
                            {/* Header */}
                            <div className="flex items-center justify-between p-6 border-b border-[#E5E7EB] dark:border-[#334155]">
                                <div className="bg-cover bg-center">
                                    <img
                                        src="/assets/image/new-eden.png"
                                        alt="Logo Eden"
                                        className="w-[50px] h-[50px] object-cover object-center rounded-tl-4xl rounded-tr-4xl"
                                    />
                                </div>
                                <div
                                    className="text-xl font-bold"
                                    style={{
                                        fontFamily: "Playfair Display, serif",
                                    }}
                                >
                                    <span className="text-[#C8A45C] dark:text-[#D4AF37]">
                                        NEW EDEN
                                    </span>
                                </div>
                                <button
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-lg text-[#D4AF37] hover:bg-[#F9FAFB] dark:hover:bg-[#1E293B]"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            {/* Navigation Items */}
                            <div className="flex-1 px-6 py-8 space-y-2">
                                {navItems.map((item, index) => (
                                    <motion.button
                                        key={item.id}
                                        onClick={() =>
                                            handleClickButtonToSection(item.id)
                                        }
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all ${
                                            activeSection === item.id
                                                ? "bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 text-[#C8A45C] dark:text-[#D4AF37]"
                                                : "text-[#111827] dark:text-[#F9FAFB] hover:bg-[#F9FAFB] dark:hover:bg-[#1E293B]"
                                        }`}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {language === "ID"
                                            ? item.labelID
                                            : item.labelEN}
                                    </motion.button>
                                ))}
                            </div>

                            {/* Bottom Actions */}
                            <div className="p-6 border-t border-[#E5E7EB] dark:border-[#334155] space-y-4">
                                {/* Language Switcher */}
                                <motion.div
                                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F9FAFB] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] justify-evenly"
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div
                                        className="flex items-center justify-center gap-2 p-0 cursor-pointer"
                                        onClick={() => setLanguage("ID")}
                                    >
                                        <svg
                                            width="25"
                                            height="25"
                                            viewBox="0 0 64 64"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <rect width="64" height="32" fill="#E70011" />
                                            <rect y="32" width="64" height="32" fill="#FFFFFF" />
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
                                        className="flex items-center justify-center gap-2 p-0 cursor-pointer"
                                        onClick={() => setLanguage("EN")}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 60 30"
                                            width="25"
                                            height="25"
                                        >
                                            <rect width="60" height="30" fill="#012169" />
                                            <polygon points="0,0 6,0 60,24 60,30 54,30 0,6" fill="#FFFFFF" />
                                            <polygon points="60,0 54,0 0,24 0,30 6,30 60,6" fill="#FFFFFF" />
                                            <polygon points="0,0 4,0 60,26 60,30 56,30 0,4" fill="#C8102E" />
                                            <polygon points="60,0 56,0 0,26 0,30 4,30 60,4" fill="#C8102E" />
                                            <rect x="24" width="12" height="30" fill="#FFFFFF" />
                                            <rect y="9" width="60" height="12" fill="#FFFFFF" />
                                            <rect x="26" width="8" height="30" fill="#C8102E" />
                                            <rect y="11" width="60" height="8" fill="#C8102E" />
                                        </svg>
                                        <button
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
                                <button
                                    onClick={() => setDarkMode(!darkMode)}
                                    className="flex items-center justify-between w-full p-3 rounded-lg bg-[#F9FAFB] dark:bg-[#1E293B] hover:bg-[#F3F4F6] dark:hover:bg-[#293548] transition-colors"
                                >
                                    <span className="text-sm font-medium text-[#111827] dark:text-[#F9FAFB]">
                                        {darkMode
                                            ? language === "ID"
                                                ? "Mode Terang"
                                                : "Light Mode"
                                            : language === "ID"
                                              ? "Mode Gelap"
                                              : "Dark Mode"}
                                    </span>
                                    {darkMode ? (
                                        <Sun className="w-5 h-5 text-[#D4AF37]" />
                                    ) : (
                                        <Moon className="w-5 h-5 text-[#C8A45C]" />
                                    )}
                                </button>

                                {/* Contact CTA Button */}
                                <motion.button
                                    onClick={() => {
                                        handleWhatsAppClick();
                                        setMobileMenuOpen(false);
                                    }}
                                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] text-white text-sm font-medium rounded-lg"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Phone className="w-4 h-4" />
                                    {language === "ID"
                                        ? "Hubungi Kami (WhatsApp)"
                                        : "Contact Us (WhatsApp)"}
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default NavbarMobile;
