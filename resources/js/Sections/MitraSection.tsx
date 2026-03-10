import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface MitraItem {
    id: number;
    name: string;
    description: string | null;
    photo: string | null;
    initials: string;
}

interface MitraSectionProps {
    mitras: MitraItem[];
}

// Vibrant palette for initials avatars (cycles through)
const avatarColors = [
    "from-[#EF4444] to-[#B91C1C]",
    "from-[#8B5CF6] to-[#6D28D9]",
    "from-[#F59E0B] to-[#D97706]",
    "from-[#3B82F6] to-[#1D4ED8]",
    "from-[#1D4ED8] to-[#1E40AF]",
    "from-[#10B981] to-[#059669]",
    "from-[#F97316] to-[#EA580C]",
    "from-[#EC4899] to-[#DB2777]",
    "from-[#0EA5E9] to-[#0284C7]",
    "from-[#6366F1] to-[#4F46E5]",
];

export function MitraSection({ mitras }: MitraSectionProps) {
    const { language } = useLanguage();

    return (
        <section
            id="mitra"
            className="py-24 lg:py-32 bg-[#FAFAFA] dark:bg-[#0D1117] relative overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2" />
                <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-1/2" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 text-[#C8A45C] dark:text-[#D4AF37] rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
                    >
                        <Handshake className="w-3.5 h-3.5" />
                        {language === "ID" ? "Partner Terpercaya" : "Trusted Partners"}
                    </motion.div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl text-[#111827] dark:text-[#F9FAFB] mb-4 tracking-tight"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        {language === "ID"
                            ? "Partner & Mitra Kami"
                            : "Our Partners & Colleagues"}
                    </h2>
                    <p className="text-lg text-[#6B7280] dark:text-[#CBD5E1] max-w-2xl mx-auto">
                        {language === "ID"
                            ? "Dipercaya oleh institusi terkemuka di Indonesia"
                            : "Trusted by leading institutions in Indonesia"}
                    </p>
                </motion.div>

                {/* Swiper Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.7 }}
                >
                    {mitras.length > 0 ? (
                        <Swiper
                            modules={[Autoplay, Pagination, Navigation]}
                            slidesPerView={2}
                            spaceBetween={16}
                            autoplay={{
                                delay: 0,
                                disableOnInteraction: false,
                                pauseOnMouseEnter: true,
                            }}
                            speed={3000}
                            loop={mitras.length >= 6}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                480: { slidesPerView: 3, spaceBetween: 16 },
                                768: { slidesPerView: 4, spaceBetween: 20 },
                                1024: { slidesPerView: 5, spaceBetween: 20 },
                                1280: { slidesPerView: 6, spaceBetween: 24 },
                            }}
                            className="mitra-swiper !pb-12"
                        >
                            {mitras.map((mitra, index) => {
                                const colorClass =
                                    avatarColors[index % avatarColors.length];
                                return (
                                    <SwiperSlide key={mitra.id}>
                                        <div className="group bg-white dark:bg-[#1E293B] rounded-2xl p-5 border border-[#F3F4F6] dark:border-[#2D3748] hover:border-[#C8A45C]/30 dark:hover:border-[#D4AF37]/30 hover:shadow-lg transition-all duration-300 text-center cursor-default">
                                            {/* Avatar */}
                                            <div className="mx-auto mb-3 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 overflow-hidden">
                                                {mitra.photo ? (
                                                    <img
                                                        src={mitra.photo}
                                                        alt={mitra.name}
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div
                                                        className={`w-full h-full bg-gradient-to-br ${colorClass} flex items-center justify-center`}
                                                    >
                                                        <span className="text-white font-bold text-base">
                                                            {mitra.initials}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Name */}
                                            <h4 className="text-sm font-semibold text-[#111827] dark:text-[#F9FAFB] mb-1 line-clamp-2 leading-tight">
                                                {mitra.name}
                                            </h4>

                                            {/* Description */}
                                            {mitra.description && (
                                                <p className="text-xs text-[#6B7280] dark:text-[#CBD5E1] line-clamp-1">
                                                    {mitra.description}
                                                </p>
                                            )}
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    ) : (
                        <div className="text-center py-16 text-[#9CA3AF] dark:text-[#6B7280]">
                            {language === "ID"
                                ? "Belum ada mitra yang terdaftar."
                                : "No partners registered yet."}
                        </div>
                    )}
                </motion.div>
            </div>

            <style>{`
                .mitra-swiper .swiper-pagination-bullet {
                    background: #C8A45C;
                    opacity: 0.4;
                }
                .mitra-swiper .swiper-pagination-bullet-active {
                    background: #C8A45C;
                    opacity: 1;
                }
            `}</style>
        </section>
    );
}
