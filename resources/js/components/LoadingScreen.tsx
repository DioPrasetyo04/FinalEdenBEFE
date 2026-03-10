import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useState } from "react";

export function LoadingScreen() {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayCount, setDisplayCount] = useState(0);

    useEffect(() => {
        const controls = animate(count, 100, {
            duration: 2,
            ease: "easeInOut",
        });

        const unsubscribe = rounded.on("change", (latest) => {
            setDisplayCount(latest);
        });

        return () => {
            controls.stop();
            unsubscribe();
        };
    }, []);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="fixed inset-0 z-[100] bg-white dark:bg-[#0A0F1E] flex flex-col items-center justify-center"
        >
            <div className="w-full max-w-sm px-8 flex flex-col items-center">
                {/* Logo Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-10 text-center"
                >
                    <h1
                        className="text-4xl md:text-5xl font-bold tracking-tight text-[#C8A45C] dark:text-[#D4AF37]"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        NEW EDEN
                    </h1>
                    <p className="mt-2 text-sm text-[#6B7280] dark:text-[#94A3B8] tracking-widest uppercase font-medium">
                        Melayani Dengan Hati
                    </p>
                </motion.div>

                {/* Progress Bar Container */}
                <div className="w-full h-1 bg-[#F3F4F6] dark:bg-[#1E293B] rounded-full overflow-hidden relative mb-4">
                    {/* Animated Fill */}
                    <motion.div
                        className="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-[#B69449] to-[#C8A45C] dark:from-[#D4AF37] dark:to-[#E8C862] rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                </div>

                {/* Percentage Text with Motion */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex justify-between w-full text-xs font-medium text-[#6B7280] dark:text-[#94A3B8]"
                >
                    <span className="uppercase tracking-wider">Memuat</span>
                    <span className="tabular-nums font-mono">
                        {displayCount}%
                    </span>
                </motion.div>
            </div>
        </motion.div>
    );
}

export default LoadingScreen;
