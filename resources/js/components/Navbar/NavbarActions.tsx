import { useLanguage } from "@/hooks/useLanguage";
import { useTheme } from "@/hooks/useTheme";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

const NavbarActions = () => {
    const { language, setLanguage } = useLanguage();
    const { darkMode, setDarkMode } = useTheme();

    const setDarkModeHandler = (darkMode: boolean) => {
        setDarkMode(!darkMode);
    };
    return (
        <>
            <div className="flex items-center gap-4">
                {/* Language Switcher - Premium Pill Style */}
                <div className="relative flex items-center p-1 rounded-full bg-[#F3F4F6] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-inner">
                    {/* Active Sliding Pill */}
                    <div className="absolute inset-y-1 left-1 right-1 pointer-events-none">
                        <motion.div
                            className="w-[calc(50%-2px)] h-full bg-white dark:bg-[#0A0F1E] rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-[#E5E7EB] dark:border-[#334155]/50"
                            animate={{
                                x: language === "ID" ? 0 : "100%",
                                marginLeft: language === "ID" ? 0 : "4px"
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 35,
                            }}
                        />
                    </div>

                    <button
                        onClick={() => setLanguage("ID")}
                        className={`relative z-10 px-4 py-1.5 text-xs font-bold tracking-wider transition-colors duration-300 ${
                            language === "ID"
                                ? "text-[#C8A45C] dark:text-[#D4AF37]"
                                : "text-[#6B7280] dark:text-[#94A3B8] hover:text-[#374151] dark:hover:text-[#E2E8F0]"
                        }`}
                    >
                        ID
                    </button>
                    <button
                        onClick={() => setLanguage("EN")}
                        className={`relative z-10 px-4 py-1.5 text-xs font-bold tracking-wider transition-colors duration-300 ${
                            language === "EN"
                                ? "text-[#C8A45C] dark:text-[#D4AF37]"
                                : "text-[#6B7280] dark:text-[#94A3B8] hover:text-[#374151] dark:hover:text-[#E2E8F0]"
                        }`}
                    >
                        EN
                    </button>
                </div>

                {/* Dark Mode Toggle - Premium Circular Style */}
                <motion.button
                    onClick={() => setDarkModeHandler(darkMode)}
                    className="relative flex items-center justify-center w-10 h-10 rounded-full bg-[#F3F4F6] dark:bg-[#1E293B] border border-[#E5E7EB] dark:border-[#334155] shadow-inner hover:bg-white dark:hover:bg-[#0A0F1E] hover:shadow-[0_2px_12px_rgba(200,164,92,0.15)] transition-all duration-300 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <AnimatePresence mode="wait">
                        {darkMode ? (
                            <motion.div
                                key="sun"
                                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Sun className="w-[18px] h-[18px] text-[#D4AF37] group-hover:drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] transition-all" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="moon"
                                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Moon className="w-[18px] h-[18px] text-[#C8A45C] group-hover:drop-shadow-[0_0_8px_rgba(200,164,92,0.4)] transition-all" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.button>
            </div>

        </>
    );
};

export default NavbarActions;
