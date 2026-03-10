import { contentHero, heroImages } from "@/data/Datas";
import { useLanguage } from "@/hooks/useLanguage";
import { HeroProps } from "@/types/HeroProps";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = ({ onServiceClick, onContactClick }: HeroProps) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const { language } = useLanguage();

    const text = language === "ID" ? contentHero.ID : contentHero.EN;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
            {/* Premium Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-[1]"></div>

            {/* Elegant Dark Vignette */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30 z-[1]"></div>

            {/* Animated Background Images - Full Cover */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full"
                >
                    <img
                        src={heroImages[currentSlide]}
                        alt={`Hero ${currentSlide + 1}`}
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 right-8 z-10 flex gap-2">
                {heroImages.map((_, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-1.5 rounded-full transition-all duration-500 ${
                            currentSlide === index
                                ? "w-12 bg-[#C8A45C] dark:bg-[#D4AF37]"
                                : "w-8 bg-white/40 hover:bg-white/60"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    />
                ))}
            </div>

            {/* contentHero - Centered */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-24">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-10"
                >
                    {/* Premium Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="inline-block"
                    >
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#C8A45C] to-[#D4AF37] rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
                            <span className="relative flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] text-white rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg">
                                {text.badge}
                            </span>
                        </div>
                    </motion.div>

                    {/* Main Title with Premium Typography */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.4,
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="space-y-6"
                    >
                        <h1
                            className="text-6xl sm:text-7xl lg:text-8xl text-white mb-6 tracking-tight"
                            style={{ fontFamily: "Playfair Display, serif" }}
                        >
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="block mb-2 text-[#C8A45C] dark:text-[#D4AF37]"
                            >
                                {text.title}
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="block"
                            >
                                {text.subtitle}
                            </motion.span>
                        </h1>

                        {/* Description with Better Typography */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="text-lg md:text-xl lg:text-2xl text-white/95 max-w-4xl mx-auto leading-relaxed font-light"
                        >
                            {text.description}
                        </motion.p>
                    </motion.div>

                    {/* Premium CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.9,
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                    >
                        {/* Primary Button */}
                        <motion.button
                            onClick={onServiceClick}
                            className="group relative px-8 py-4 bg-gradient-to-r from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] text-white rounded-xl overflow-hidden shadow-2xl"
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    "0 20px 60px -15px rgba(200, 164, 92, 0.6)",
                                y: -2,
                            }}
                            whileTap={{ scale: 0.98, y: 0 }}
                            transition={{
                                duration: 0.3,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >
                            {/* Shimmer Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                initial={{ x: "-100%" }}
                                whileHover={{ x: "100%" }}
                                transition={{ duration: 0.6 }}
                            />

                            <span className="relative flex items-center gap-2 text-base font-semibold">
                                {text.btnPrimary}
                                <motion.div
                                    animate={{ x: [0, 5, 0] }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                    }}
                                >
                                    <ArrowRight className="w-5 h-5" />
                                </motion.div>
                            </span>
                        </motion.button>

                        {/* Secondary Button */}
                        <motion.button
                            onClick={onContactClick}
                            className="group relative px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl overflow-hidden shadow-xl"
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                                y: -2,
                            }}
                            whileTap={{ scale: 0.98, y: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <span className="relative text-base font-semibold group-hover:text-[#111827] transition-colors duration-300">
                                {text.btnSecondary}
                            </span>
                        </motion.button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Premium Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
            >
                <motion.div
                    animate={{ y: [0, 12, 0] }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="flex flex-col items-center gap-2"
                >
                    <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
                        <motion.div
                            animate={{
                                y: [0, 16, 0],
                                opacity: [1, 0, 1],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="w-1.5 h-1.5 bg-white rounded-full"
                        />
                    </div>
                    <span className="text-white/60 text-xs font-medium tracking-wider uppercase">
                        {language === "ID" ? "Gulir" : "Scroll"}
                    </span>
                </motion.div>
            </motion.div>

            {/* Decorative Elements - Wrapped to prevent overflow */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-10 w-32 h-32 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-1/4 right-10 w-40 h-40 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                ></div>
            </div>
        </section>
    );
};

export default Hero;
