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
import { useModal } from "@/hooks/useModal";

interface ServiceCard {
    icon: LucideIcon;
    titleID: string;
    titleEN: string;
    descID: string;
    descEN: string;
    id: string;
}

export function Services() {
    const { language } = useLanguage();
    const { setServiceDetailOpen, setSelectedService } = useModal();

    const services: ServiceCard[] = [
        {
            icon: Package,
            titleID: "Paket Peti Jenazah",
            titleEN: "Casket Package",
            descID: "Berbagai pilihan peti jenazah berkualitas dengan desain yang elegan",
            descEN: "Various quality casket options with elegant designs",
            id: "casket",
        },
        {
            icon: Car,
            titleID: "Mobil Jenazah",
            titleEN: "Hearse Service",
            descID: "Layanan transportasi jenazah yang aman dan nyaman",
            descEN: "Safe and comfortable hearse transportation service",
            id: "hearse",
        },
        {
            icon: Plane,
            titleID: "Cargo Jenazah",
            titleEN: "Cargo Service",
            descID: "Pengurusan pengiriman jenazah antar kota dan negara",
            descEN: "Inter-city and international deceased cargo arrangements",
            id: "cargo",
        },
        {
            icon: Droplet,
            titleID: "Formalin",
            titleEN: "Embalming",
            descID: "Layanan pengawetan jenazah dengan prosedur yang profesional",
            descEN: "Professional embalming service",
            id: "embalming",
        },
        {
            icon: Camera,
            titleID: "Foto & Video Dokumentasi",
            titleEN: "Photo & Video Documentation",
            descID: "Dokumentasi acara pemakaman dengan penuh kehormatan",
            descEN: "Respectful funeral ceremony documentation",
            id: "documentation",
        },
        {
            icon: Flame,
            titleID: "Layanan Kremasi",
            titleEN: "Cremation Service",
            descID: "Proses kremasi yang dilakukan dengan penuh hormat",
            descEN: "Respectful cremation process",
            id: "cremation",
        },
        {
            icon: MapPin,
            titleID: "Tanah Makam Swasta",
            titleEN: "Private Burial Plot",
            descID: "Penyediaan dan pengurusan lahan pemakaman pribadi",
            descEN: "Private burial plot provision and management",
            id: "plot",
        },
        {
            icon: Layers,
            titleID: "Pengurusan Gali Kerangka",
            titleEN: "Exhumation Service",
            descID: "Layanan pemindahan jenazah secara profesional",
            descEN: "Professional exhumation service",
            id: "exhumation",
        },
        {
            icon: Shield,
            titleID: "Voordrijver / Pengawalan",
            titleEN: "Escort Service",
            descID: "Pengawalan prosesi pemakaman dengan tertib dan hormat",
            descEN: "Orderly and respectful funeral procession escort",
            id: "escort",
        },
    ];

    const content = {
        ID: {
            title: "Layanan Kami",
            subtitle: "Solusi lengkap untuk semua kebutuhan pelayanan kedukaan Anda",
            btnText: "Lihat Detail",
        },
        EN: {
            title: "Our Services",
            subtitle: "Complete solutions for all your funeral service needs",
            btnText: "View Details",
        },
    };

    const text = language === "ID" ? content.ID : content.EN;

    const handleServiceClick = (serviceId: string) => {
        setSelectedService(serviceId);
        setServiceDetailOpen(true);
    };

    return (
        <section
            id="services"
            className="py-24 lg:py-32 bg-gradient-to-b from-white via-[#FAFBFC] to-white dark:from-[#0A0F1E] dark:via-[#0F172A] dark:to-[#0A0F1E]"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                            {language === "ID" ? "Layanan Profesional" : "Professional Services"}
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
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="relative h-full bg-white dark:bg-[#1E293B] rounded-2xl p-8 cursor-pointer overflow-hidden"
                                style={{
                                    boxShadow:
                                        "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                                }}
                                onClick={() => handleServiceClick(service.id)}
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#C8A45C]/0 via-[#C8A45C]/0 to-[#C8A45C]/0 group-hover:from-[#C8A45C]/20 group-hover:via-[#C8A45C]/5 group-hover:to-transparent dark:group-hover:from-[#D4AF37]/20 dark:group-hover:via-[#D4AF37]/5 transition-all duration-500"></div>
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                                    style={{ boxShadow: "0 20px 60px -15px rgba(200, 164, 92, 0.4)" }}
                                ></div>

                                <div className="relative z-10">
                                    <motion.div
                                        className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                                        whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    >
                                        <service.icon className="w-7 h-7 text-white" strokeWidth={2} />
                                    </motion.div>

                                    <h3
                                        className="text-xl md:text-2xl text-[#111827] dark:text-[#F9FAFB] mb-3 group-hover:text-[#C8A45C] dark:group-hover:text-[#D4AF37] transition-colors duration-300"
                                        style={{ fontFamily: "Playfair Display, serif" }}
                                    >
                                        {language === "ID" ? service.titleID : service.titleEN}
                                    </h3>

                                    <p className="text-[#6B7280] dark:text-[#CBD5E1] mb-6 leading-relaxed text-sm md:text-base">
                                        {language === "ID" ? service.descID : service.descEN}
                                    </p>

                                    <motion.div
                                        className="flex items-center gap-2 text-[#C8A45C] dark:text-[#D4AF37] font-medium text-sm group-hover:gap-3 transition-all duration-300"
                                        whileHover={{ x: 5 }}
                                    >
                                        <span>{text.btnText}</span>
                                        <motion.div
                                            animate={{ x: [0, 4, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                        >
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.div>
                                    </motion.div>
                                </div>

                                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C8A45C]/5 to-transparent dark:from-[#D4AF37]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
