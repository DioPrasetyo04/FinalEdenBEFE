import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

export function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white dark:bg-[#0F172A] flex items-center justify-center"
        >
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    <div className="relative inline-block">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-4 border-4 border-[#C8A45C]/30 dark:border-[#D4AF37]/30 rounded-full"
                        ></motion.div>
                        <h1
                            className="text-5xl text-[#C8A45C] dark:text-[#D4AF37] relative"
                            style={{ fontFamily: "Playfair Display, serif" }}
                        >
                            NEW EDEN
                        </h1>
                    </div>
                </motion.div>

                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="inline-block"
                >
                    <Sparkles className="w-12 h-12 text-[#C8A45C] dark:text-[#D4AF37]" />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-[#6B7280] dark:text-[#CBD5E1] mt-8"
                >
                    Loading...
                </motion.p>
            </div>
        </motion.div>
    );
}

export default LoadingScreen;
