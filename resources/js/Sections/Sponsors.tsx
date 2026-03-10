import { useState } from "react";
import { motion } from "motion/react";
import { Award } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface Partner {
    id: string; name: string; initials: string; color: string; bgColor: string; categoryID: string; categoryEN: string;
}

export function Sponsors() {
    const { language } = useLanguage();
    const [hoveredCard, setHoveredCard] = useState<string | null>(null);

    const partners: Partner[] = [
        { id: "1", name: "Rumah Sakit Harapan", initials: "RS", color: "#FFFFFF", bgColor: "#DC2626", categoryID: "Layanan Kesehatan", categoryEN: "Healthcare" },
        { id: "2", name: "Gereja Katedral", initials: "GK", color: "#FFFFFF", bgColor: "#7C3AED", categoryID: "Institusi Keagamaan", categoryEN: "Religious Institution" },
        { id: "3", name: "Hotel Mulia Jakarta", initials: "HM", color: "#FFFFFF", bgColor: "#D97706", categoryID: "Layanan Perhotelan", categoryEN: "Hospitality" },
        { id: "4", name: "Asuransi Mandiri Life", initials: "AM", color: "#FFFFFF", bgColor: "#2563EB", categoryID: "Asuransi Jiwa", categoryEN: "Life Insurance" },
        { id: "5", name: "Bank Central Asia", initials: "BCA", color: "#FFFFFF", bgColor: "#1D4ED8", categoryID: "Layanan Perbankan", categoryEN: "Banking Services" },
        { id: "6", name: "Masjid Istiqlal", initials: "MI", color: "#FFFFFF", bgColor: "#059669", categoryID: "Institusi Keagamaan", categoryEN: "Religious Institution" },
        { id: "7", name: "Vihara Dharma Bhakti", initials: "VD", color: "#FFFFFF", bgColor: "#EA580C", categoryID: "Institusi Keagamaan", categoryEN: "Religious Institution" },
        { id: "8", name: "Yayasan Kasih Peduli", initials: "YK", color: "#FFFFFF", bgColor: "#DB2777", categoryID: "Yayasan Sosial", categoryEN: "Social Foundation" },
        { id: "9", name: "Perhimpunan Medis", initials: "PM", color: "#FFFFFF", bgColor: "#0D9488", categoryID: "Asosiasi Medis", categoryEN: "Medical Association" },
        { id: "10", name: "Taman Makam Pahlawan", initials: "TM", color: "#FFFFFF", bgColor: "#374151", categoryID: "Pemakaman Nasional", categoryEN: "National Cemetery" },
        { id: "11", name: "Perhimpunan Keluarga", initials: "PK", color: "#FFFFFF", bgColor: "#4F46E5", categoryID: "Organisasi Keluarga", categoryEN: "Family Organization" },
        { id: "12", name: "Komunitas Peduli", initials: "KP", color: "#FFFFFF", bgColor: "#E11D48", categoryID: "Komunitas Sosial", categoryEN: "Social Community" },
    ];

    const content = {
        ID: { title: "Partner & Mitra Kami", subtitle: "Dipercaya oleh institusi terkemuka di Indonesia" },
        EN: { title: "Our Partners & Sponsors", subtitle: "Trusted by leading institutions in Indonesia" },
    };

    const text = language === "ID" ? content.ID : content.EN;

    return (
        <section id="sponsors" className="py-20 lg:py-28 bg-[#F9FAFB] dark:bg-[#1E293B] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="text-center mb-16 px-4 sm:px-6 lg:px-8">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 text-[#C8A45C] dark:text-[#D4AF37] rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
                        <Award className="w-3.5 h-3.5" />
                        {language === "ID" ? "Partner Terpercaya" : "Trusted Partners"}
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#111827] dark:text-[#F9FAFB] mb-6" style={{ fontFamily: "Playfair Display, serif" }}>{text.title}</h2>
                    <p className="text-lg md:text-xl text-[#6B7280] dark:text-[#94A3B8] max-w-2xl mx-auto">{text.subtitle}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        {partners.map((partner, index) => (
                            <motion.div key={partner.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05, duration: 0.5 }} whileHover={{ y: -4, scale: 1.02 }} onMouseEnter={() => setHoveredCard(partner.id)} onMouseLeave={() => setHoveredCard(null)} className={`relative bg-white dark:bg-[#0F172A] rounded-2xl p-4 cursor-pointer transition-all duration-300 ${hoveredCard === partner.id ? "border-2 border-[#C8A45C] dark:border-[#D4AF37] shadow-xl shadow-[#C8A45C]/10 dark:shadow-[#D4AF37]/10" : "border-2 border-[#F3F4F6] dark:border-[#1E293B] shadow-md"}`}>
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 shadow-sm" style={{ backgroundColor: partner.bgColor }}>
                                    <span className="text-xs font-bold tracking-tight" style={{ color: partner.color, fontSize: partner.initials.length > 2 ? "9px" : "11px" }}>{partner.initials}</span>
                                </div>
                                <h3 className="text-sm font-semibold text-[#111827] dark:text-[#F9FAFB] leading-snug mb-1 line-clamp-2">{partner.name}</h3>
                                <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] leading-tight">{language === "ID" ? partner.categoryID : partner.categoryEN}</p>
                                {hoveredCard === partner.id && (
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-3 right-3 w-2 h-2 bg-[#C8A45C] dark:bg-[#D4AF37] rounded-full" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
