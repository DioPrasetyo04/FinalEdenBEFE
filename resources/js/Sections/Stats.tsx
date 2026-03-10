import { motion } from "motion/react";
import StatsComponents from "../components/ui/StatsComponents";
import { contentStats, stats } from "@/data/Datas";
import { useLanguage } from "@/hooks/useLanguage";

export function Stats() {
    const { language } = useLanguage();

    const text = language === "ID" ? contentStats.ID : contentStats.EN;

    return (
        <section className="py-20 bg-gradient-to-br from-[#C8A45C] via-[#B69449] to-[#C8A45C] dark:from-[#D4AF37] dark:via-[#C29F2E] dark:to-[#D4AF37] relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl md:text-5xl text-white mb-4"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        {text.title}
                    </h2>
                    <p className="text-xl text-white/90">{text.subtitle}</p>
                </motion.div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <StatsComponents
                            index={index}
                            stats={stat}
                            key={index}
                        ></StatsComponents>
                    ))}
                </div>
            </div>
        </section>
    );
}
