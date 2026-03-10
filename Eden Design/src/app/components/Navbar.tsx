import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Globe,
  Phone,
  Bot,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  language: string;
  setLanguage: (value: string) => void;
  onContactClick: () => void;
  onAIChatClick?: () => void;
}

export function Navbar({
  darkMode,
  setDarkMode,
  language,
  setLanguage,
  onContactClick,
  onAIChatClick,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = [
        "home",
        "services",
        "products",
        "about",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", labelID: "Home", labelEN: "Home" },
    { id: "services", labelID: "Layanan", labelEN: "Services" },
    {
      id: "products",
      labelID: "Produk Peti",
      labelEN: "Casket Products",
    },
    {
      id: "about",
      labelID: "Tentang Kami",
      labelEN: "About Us",
    },
    { id: "contact", labelID: "Kontak", labelEN: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition =
        element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/90 dark:bg-[#0A0F1E]/90 backdrop-blur-xl shadow-lg border-b border-[#E5E7EB]/50 dark:border-[#334155]/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <motion.div
              className="flex items-center cursor-pointer group"
              onClick={() => scrollToSection("home")}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative">
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.5,
                  }}
                  className={`relative px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? "text-[#C8A45C] dark:text-[#D4AF37]"
                      : "text-[#111827] dark:text-[#F9FAFB] hover:text-[#C8A45C] dark:hover:text-[#D4AF37]"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {language === "ID"
                    ? item.labelID
                    : item.labelEN}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 rounded-lg"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center gap-5 xl:gap-6">
              {/* Settings Group - Language & Dark Mode */}
              <div className="flex items-center gap-3">
                {/* Language Switcher */}
                <motion.div
                  className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F9FAFB] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155]"
                  whileHover={{ scale: 1.02 }}
                >
                  <Globe className="w-4 h-4 text-[#6B7280] dark:text-[#94A3B8]" />
                  <button
                    onClick={() => setLanguage("ID")}
                    className={`text-xs font-medium transition-all duration-200 ${
                      language === "ID"
                        ? "text-[#C8A45C] dark:text-[#D4AF37]"
                        : "text-[#6B7280] dark:text-[#94A3B8] hover:text-[#111827] dark:hover:text-[#CBD5E1]"
                    }`}
                  >
                    ID
                  </button>
                  <div className="w-px h-3 bg-[#E5E7EB] dark:bg-[#334155]" />
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
                </motion.div>

                {/* Dark Mode Toggle */}
                <motion.button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2.5 rounded-lg bg-[#F9FAFB] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] hover:border-[#C8A45C] dark:hover:border-[#D4AF37] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait">
                    {darkMode ? (
                      <motion.div
                        key="sun"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Sun className="w-4 h-4 text-[#D4AF37]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="moon"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
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

              {/* CTA Buttons Group */}
              <div className="flex items-center gap-3">
                {/* Chat dengan AI Button - Outline Style */}

                {/* Contact CTA Button - Solid Style */}
                <motion.button
                  onClick={onContactClick}
                  className="relative flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] text-white text-sm font-medium rounded-lg overflow-hidden group"
                  whileHover={{
                    scale: 1.02,
                    boxShadow:
                      "0 10px 30px -10px rgba(200, 164, 92, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-[#B69449] to-[#C8A45C] dark:from-[#E8C862] dark:to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Phone className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">
                    {language === "ID"
                      ? "Hubungi Kami"
                      : "Contact Us"}
                  </span>
                </motion.button>
              </div>
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
                    <Menu className="w-6 h-6 text-[#111827] dark:text-[#F9FAFB]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
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
                    className="p-2 rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#1E293B]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-6 py-8 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
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
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-[#F9FAFB] dark:bg-[#1E293B]">
                    <Globe className="w-5 h-5 text-[#6B7280] dark:text-[#94A3B8]" />
                    <button
                      onClick={() => setLanguage("ID")}
                      className={`text-sm font-medium transition-colors ${
                        language === "ID"
                          ? "text-[#C8A45C] dark:text-[#D4AF37]"
                          : "text-[#6B7280] dark:text-[#94A3B8]"
                      }`}
                    >
                      Indonesia
                    </button>
                    <div className="w-px h-4 bg-[#E5E7EB] dark:bg-[#334155]" />
                    <button
                      onClick={() => setLanguage("EN")}
                      className={`text-sm font-medium transition-colors ${
                        language === "EN"
                          ? "text-[#C8A45C] dark:text-[#D4AF37]"
                          : "text-[#6B7280] dark:text-[#94A3B8]"
                      }`}
                    >
                      English
                    </button>
                  </div>

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

                  {/* Chat dengan AI Button */}
                  <motion.button
                    onClick={() => {
                      if (onAIChatClick) {
                        onAIChatClick();
                      } else {
                        alert(
                          language === "ID"
                            ? "Fitur AI Personal sedang dalam pengembangan."
                            : "AI Personal feature is under development.",
                        );
                      }
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#8B7355] to-[#6B5345] dark:from-[#A8844C] dark:to-[#8B7355] text-white text-sm font-medium rounded-lg"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Bot className="w-4 h-4" />
                    {language === "ID"
                      ? "Chat dengan AI"
                      : "Chat with AI"}
                  </motion.button>

                  {/* Contact CTA Button */}
                  <motion.button
                    onClick={() => {
                      onContactClick();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] text-white text-sm font-medium rounded-lg"
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-4 h-4" />
                    {language === "ID"
                      ? "Hubungi Kami"
                      : "Contact Us"}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}