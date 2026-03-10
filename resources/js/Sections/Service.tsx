import { motion } from "motion/react";
import {
    Package,
    Car,
    Plane,
    Droplet,
    Camera,
    Flame,
    MapPin,
    Layers,
    Shield,
    ArrowRight,
    LucideIcon,
} from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { contentService, services } from "@/data/Datas";

interface ServicesProps {
    onServiceDetailClick: (service: string) => void;
}

interface ServiceCard {
    icon: LucideIcon;
    titleID: string;
    titleEN: string;
    descID: string;
    descEN: string;
    id: string;
}

export function Services({ onServiceDetailClick }: ServicesProps) {
    const { language } = useLanguage();

    const text = language === "ID" ? contentService.ID : contentService.EN;

    return (
        <section
            id="services"
            className="py-24 lg:py-32 bg-gradient-to-b from-white via-[#FAFBFC] to-white dark:from-[#0A0F1E] dark:via-[#0F172A] dark:to-[#0A0F1E]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-block mb-6"
                    >
                        <span className="px-4 py-2 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 text-[#C8A45C] dark:text-[#D4AF37] rounded-full text-xs font-semibold tracking-wider uppercase">
                            {language === "ID"
                                ? "Layanan Profesional"
                                : "Professional Services"}
                        </span>
                    </motion.div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl text-[#111827] dark:text-[#F9FAFB] mb-6 tracking-tight"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        {text.title}
                    </h2>
                    <p className="text-lg md:text-xl text-[#6B7280] dark:text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">
                        {text.subtitle}
                    </p>
                </motion.div>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{
                                delay: index * 0.08,
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="group"
                        >
                            <motion.div
                                whileHover={{ y: -8 }}
                                transition={{
                                    duration: 0.3,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="relative h-full bg-white dark:bg-[#1E293B] rounded-2xl p-8 cursor-pointer overflow-hidden"
                                style={{
                                    boxShadow:
                                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                                }}
                                onClick={() => onServiceDetailClick(service.id)}
                            >
                                {/* Gradient Border Effect */}
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C8A45C]/0 via-[#C8A45C]/0 to-[#C8A45C]/0 group-hover:from-[#C8A45C]/20 group-hover:via-[#C8A45C]/5 group-hover:to-transparent dark:group-hover:from-[#D4AF37]/20 dark:group-hover:via-[#D4AF37]/5 transition-all duration-500"></div>

                                {/* Hover Shadow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                                    style={{
                                        boxShadow:
                                            "0 20px 60px -15px rgba(200, 164, 92, 0.4)",
                                    }}
                                ></div>

                                {/* Content */}
                                <div className="relative z-10">
                                    {/* Icon Container */}
                                    <motion.div
                                        className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                        whileHover={{
                                            rotate: [0, -10, 10, 0],
                                            scale: 1.1,
                                        }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <service.icon
                                            className="w-7 h-7 text-white"
                                            strokeWidth={2}
                                        />
                                    </motion.div>

                                    {/* Title */}
                                    <h3
                                        className="text-xl md:text-2xl text-[#111827] dark:text-[#F9FAFB] mb-3 group-hover:text-[#C8A45C] dark:group-hover:text-[#D4AF37] transition-colors duration-300"
                                        style={{
                                            fontFamily:
                                                "Playfair Display, serif",
                                        }}
                                    >
                                        {language === "ID"
                                            ? service.titleID
                                            : service.titleEN}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-[#6B7280] dark:text-[#CBD5E1] mb-6 leading-relaxed text-sm md:text-base">
                                        {language === "ID"
                                            ? service.descID
                                            : service.descEN}
                                    </p>

                                    {/* CTA Link */}
                                    <motion.div
                                        className="flex items-center gap-2 text-[#C8A45C] dark:text-[#D4AF37] font-medium text-sm group-hover:gap-3 transition-all duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span>{text.btnText}</span>
                                        <motion.div
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                            }}
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Decorative Corner Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C8A45C]/5 to-transparent dark:from-[#D4AF37]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
