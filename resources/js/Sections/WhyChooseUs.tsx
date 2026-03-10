import { motion } from "motion/react";
import CardChooseUs from "../components/ui/CardChooseUs";
import { contentWhyChooseUs, featuresWhyChooseUs } from "@/data/Datas";
import { useLanguage } from "@/hooks/useLanguage";

export function WhyChooseUs() {
    const { language } = useLanguage();

    const text =
        language === "ID" ? contentWhyChooseUs.ID : contentWhyChooseUs.EN;

    return (
        <section className="py-20 bg-white dark:bg-[#0F172A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2
                        className="text-4xl md:text-5xl text-[#1F2937] dark:text-[#F9FAFB] mb-4"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        {text.title}
                    </h2>
                    <p className="text-lg text-[#6B7280] dark:text-[#CBD5E1] max-w-2xl mx-auto">
                        {text.subtitle}
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {featuresWhyChooseUs.map((feature, index) => (
                        <CardChooseUs
                            key={index}
                            feature={feature}
                            index={index}
                            language={language}
                        ></CardChooseUs>
                    ))}
                </div>
            </div>
        </section>
    );
}
