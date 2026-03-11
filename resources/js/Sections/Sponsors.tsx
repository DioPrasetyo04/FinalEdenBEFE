import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { motion } from "motion/react";
import { Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface SponsorProps {
    mitras: any[];
}

export function Sponsors({ mitras: sponsors }: SponsorProps) {
    const { language } = useLanguage();

    if (!sponsors || sponsors.length === 0) return null;

    const content = {
        ID: {
            title: "Partner & Mitra Kami",
            subtitle: "Dipercaya oleh institusi terkemuka di Indonesia",
            badge: "Partner Terpercaya",
        },
        EN: {
            title: "Our Partners & Sponsors",
            subtitle: "Trusted by leading institutions in Indonesia",
            badge: "Trusted Partners",
        },
    };

    const text = language === "ID" ? content.ID : content.EN;

    return (
        <section
            id="sponsors"
            className="py-20 lg:py-28 bg-[#FAFBFC] dark:bg-[#0F172A] relative overflow-hidden"
        >
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10 w-full overflow-hidden">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16 px-4"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 text-[#C8A45C] dark:text-[#D4AF37] rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
                        <Award className="w-3.5 h-3.5" />
                        {text.badge}
                    </div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl text-[#111827] dark:text-[#F9FAFB] mb-6"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        {text.title}
                    </h2>
                    <p className="text-lg text-[#6B7280] dark:text-[#94A3B8] max-w-2xl mx-auto">
                        {text.subtitle}
                    </p>
                </motion.div>

                {/* Swiper Row */}
                <Swiper
                    modules={[Autoplay]}
                    spaceBetween={10}
                    slidesPerView="auto"
                    centeredSlides={true}
                    loop={true}
                    speed={4000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        reverseDirection: false,
                        pauseOnMouseEnter: true,
                    }}
                    allowTouchMove={false}
                    className="w-full !ease-linear"
                >
                    {[...sponsors].map((sponsor, index) => (
                        <SwiperSlide
                            key={`sponsor-${sponsor.id}-${index}`}
                            className="!w-auto"
                        >
                            <div className="w-[180px] h-[80px] relative flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 group">
                                <img
                                    src={sponsor.photo}
                                    alt={sponsor.name}
                                    className="max-w-[140px] max-h-[60px] object-contain transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
