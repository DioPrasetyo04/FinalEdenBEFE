import React from "react";
import { motion } from "motion/react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingScreen = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[999] bg-white dark:bg-[var(--color-navbar-dark)] flex flex-col items-center justify-center"
        >
            <div className="relative flex items-center justify-center">
                {/* ICON ROTATE */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute flex items-center justify-center"
                >
                    <AiOutlineLoading3Quarters className="text-[220px] text-[#D4AF37]/20" />
                </motion.div>

                {/* TEXT (TIDAK DI DALAM ROTATE) */}
                <div className="relative flex items-center justify-center gap-x-3 px-3 py-2">
                    <motion.img
                        src="/assets/image/new_eden2.webp"
                        alt="logo new eden"
                        className="w-[180px] h-[180px]"
                        initial={{ filter: "grayscale(1)" }}
                        animate={{
                            filter: [
                                "grayscale(1)",
                                "grayscale(0.5)",
                                "grayscale(0)",
                            ],
                        }}
                        transition={{
                            duration: 2,
                            times: [0, 0.5, 1],
                            ease: "easeInOut",
                        }}
                    ></motion.img>
                    <h1
                        className="relative z-10 text-5xl font-bold text-[#D4AF37]"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        NEW EDEN
                    </h1>
                </div>
            </div>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-[#D4AF37] text-[30px] dark:text-[#D4AF37] mt-8 uppercase flex items-center gap-1"
            >
                Loading
                {[0, 1, 2].map((i) => (
                    <motion.span
                        key={i}
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2,
                            ease: "easeInOut",
                        }}
                        className="inline-block"
                    >
                        .
                    </motion.span>
                ))}
            </motion.p>
        </motion.div>
    );
};

export default LoadingScreen;
