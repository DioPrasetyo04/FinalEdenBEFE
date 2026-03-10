import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { navItems } from "@/data/Datas";
import NavbarDekstop from "./NavbarDekstop";
import NavbarLogo from "./NavbarLogo";
import NavbarActions from "./NavbarActions";
import { useScroll } from "@/hooks/Navbar/useScroll";
import NavbarMobile from "./NavbarMobile";

export function Navbar() {
    const { isScrolled } = useScroll();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
                    mobileMenuOpen ? "z-30" : "z-50"
                } ${
                    isScrolled
                        ? "bg-white/90 dark:bg-[#0A0F1E]/90 backdrop-blur-xl shadow-lg border-b border-[#E5E7EB]/50 dark:border-[#334155]/50"
                        : "bg-tranparent"
                }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-24">
                        {/* Logo */}
                        <NavbarLogo></NavbarLogo>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-2 xl:gap-3">
                            {navItems.map((item, index) => (
                                <NavbarDekstop
                                    key={index}
                                    item={item}
                                    index={index}
                                ></NavbarDekstop>
                            ))}
                        </div>

                        {/* Right Side Actions */}
                        <div className="hidden lg:flex items-center gap-5 xl:gap-6">
                            {/* Settings Group - Language & Dark Mode */}
                            <NavbarActions></NavbarActions>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="lg:hidden p-2 rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#1E293B] transition-colors"
                            whileTap={{ scale: 0.9 }}
                        >
                            <AnimatePresence mode="wait">
                                {mobileMenuOpen ? (
                                    <motion.div
                                        key="close"
                                        initial={{ rotate: -90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: 90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <X className="w-6 h-6 text-[#111827] dark:text-[#F9FAFB]" />
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="menu"
                                        initial={{ rotate: 90, opacity: 0 }}
                                        animate={{ rotate: 0, opacity: 1 }}
                                        exit={{ rotate: -90, opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Menu className="w-6 h-6 text-[#D4AF37] dark:text-[#D4AF37]" />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <NavbarMobile mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        </>
    );
}
