import { motion } from "motion/react";
import { Clock, Zap, Award, LucideIcon } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface FeatureCard {
    icon: LucideIcon;
    titleID: string;
    titleEN: string;
    descID: string;
    descEN: string;
}

export function WhyChooseUs() {
    const { language } = useLanguage();

    const features: FeatureCard[] = [
        {
            icon: Clock,
            titleID: "Pelayanan 24 Jam",
            titleEN: "24 Hour Service",
            descID: "Kami siap melayani Anda kapan saja, siang atau malam hari dengan respons cepat",
            descEN: "We are ready to serve you anytime, day or night with quick response",
        },
        {
            icon: Zap,
            titleID: "Respon Cepat & Tepat",
            titleEN: "Quick & Accurate Response",
            descID: "Tim kami bergerak cepat dengan solusi yang tepat untuk setiap kebutuhan",
            descEN: "Our team moves quickly with the right solutions for every need",
        },
        {
            icon: Award,
            titleID: "Berpengalaman dan Profesional",
            titleEN: "Experienced & Professional",
            descID: "Dipercaya oleh banyak keluarga dengan pengalaman bertahun-tahun",
            descEN: "Trusted by many families with years of experience",
        },
    ];

    const content = {
        ID: { title: "Mengapa Memilih Kami", subtitle: "Komitmen kami adalah memberikan pelayanan terbaik dengan penuh empati" },
        EN: { title: "Why Choose Us", subtitle: "Our commitment is to provide the best service with empathy" },
    };

    const text = language === "ID" ? content.ID : content.EN;

    return (
        <section className="py-20 bg-white dark:bg-[#0F172A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-[#1F2937] dark:text-[#F9FAFB] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>{text.title}</h2>
                    <p className="text-lg text-[#6B7280] dark:text-[#CBD5E1] max-w-2xl mx-auto">{text.subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2, duration: 0.6 }} whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(200, 164, 92, 0.2)" }} className="bg-[#F9FAFB] dark:bg-[#1E293B] rounded-2xl p-8 text-center border-2 border-transparent hover:border-[#C8A45C] dark:hover:border-[#D4AF37] transition-all duration-300">
                            <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] rounded-full mb-6">
                                <feature.icon className="w-8 h-8 text-white" />
                            </motion.div>
                            <h3 className="text-xl md:text-2xl text-[#1F2937] dark:text-[#F9FAFB] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>{language === "ID" ? feature.titleID : feature.titleEN}</h3>
                            <p className="text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed">{language === "ID" ? feature.descID : feature.descEN}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
