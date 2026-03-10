import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface FAQItem {
    questionID: string;
    questionEN: string;
    answerID: string;
    answerEN: string;
}

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            questionID: "Apa saja layanan yang ditawarkan NEW EDEN?",
            questionEN: "What services does NEW EDEN offer?",
            answerID:
                "NEW EDEN menyediakan layanan lengkap kedukaan termasuk paket peti jenazah, mobil jenazah, cargo jenazah, formalin/pengawetan, dokumentasi foto & video, layanan kremasi, tanah makam swasta, pengurusan gali kerangka, dan pengawalan/voordrijver. Kami juga menyediakan berbagai pilihan peti jenazah dari economy hingga premium.",
            answerEN:
                "NEW EDEN provides comprehensive funeral services including casket packages, hearse service, cargo service, embalming/preservation, photo & video documentation, cremation service, private burial plots, exhumation arrangements, and escort/voordrijver services. We also offer various casket options from economy to premium.",
        },
        {
            questionID:
                "Berapa lama waktu yang dibutuhkan untuk persiapan pemakaman?",
            questionEN: "How long does it take to prepare for a funeral?",
            answerID:
                "Waktu persiapan bervariasi tergantung jenis layanan yang dipilih. Untuk layanan standar, kami dapat mempersiapkan dalam waktu 24 jam. Namun, untuk kebutuhan mendesak, kami juga menyediakan layanan express yang dapat diatur dalam waktu lebih singkat. Tim kami siap membantu 24/7 untuk kebutuhan darurat.",
            answerEN:
                "Preparation time varies depending on the selected service. For standard services, we can prepare within 24 hours. However, for urgent needs, we also provide express services that can be arranged in a shorter time. Our team is ready to assist 24/7 for emergency needs.",
        },
        {
            questionID: "Apakah NEW EDEN melayani pemakaman untuk semua agama?",
            questionEN: "Does NEW EDEN serve funerals for all religions?",
            answerID:
                "Ya, NEW EDEN melayani pemakaman sesuai dengan kepercayaan dan tradisi keluarga dari berbagai agama. Kami menghormati setiap prosesi keagamaan dan bekerja sama dengan pemuka agama untuk memastikan upacara berlangsung sesuai dengan tata cara agama yang dianut.",
            answerEN:
                "Yes, NEW EDEN serves funerals according to family beliefs and traditions from various religions. We respect every religious procession and work with religious leaders to ensure the ceremony proceeds according to the practiced religious procedures.",
        },
        {
            questionID: "Bagaimana cara memesan layanan NEW EDEN?",
            questionEN: "How do I order NEW EDEN services?",
            answerID:
                "Anda dapat menghubungi kami melalui WhatsApp di +62 812-3456-7890, menelepon langsung, atau mengisi formulir pemesanan di website ini. Tim kami akan segera merespons dan membantu mengatur semua kebutuhan dengan cepat dan profesional.",
            answerEN:
                "You can contact us via WhatsApp at +62 812-3456-7890, call directly, or fill out the order form on this website. Our team will respond immediately and help arrange all needs quickly and professionally.",
        },
        {
            questionID:
                "Apakah tersedia paket pemakaman dengan harga terjangkau?",
            questionEN: "Are there affordable funeral packages available?",
            answerID:
                "Ya, kami menyediakan berbagai paket pemakaman mulai dari economy hingga premium untuk memenuhi kebutuhan dan budget yang berbeda. Kami berkomitmen memberikan layanan berkualitas dengan harga yang transparan dan kompetitif. Silakan hubungi kami untuk konsultasi dan penawaran terbaik.",
            answerEN:
                "Yes, we provide various funeral packages from economy to premium to meet different needs and budgets. We are committed to providing quality services with transparent and competitive pricing. Please contact us for consultation and the best offers.",
        },
        {
            questionID:
                "Apakah NEW EDEN melayani pengiriman jenazah ke luar kota atau luar negeri?",
            questionEN:
                "Does NEW EDEN serve deceased transportation out of town or abroad?",
            answerID:
                "Ya, kami melayani cargo jenazah untuk pengiriman antar kota maupun antar negara. Kami akan mengurus semua dokumen, izin, dan koordinasi dengan pihak bandara/pelabuhan. Jenazah akan dipacking sesuai standar internasional dan kami menyediakan layanan tracking real-time.",
            answerEN:
                "Yes, we serve deceased cargo for inter-city and international shipments. We will handle all documents, permits, and coordination with airport/port authorities. The deceased will be packed according to international standards and we provide real-time tracking services.",
        },
        {
            questionID:
                "Apa yang membedakan NEW EDEN dengan layanan kedukaan lainnya?",
            questionEN:
                "What differentiates NEW EDEN from other funeral services?",
            answerID:
                "NEW EDEN dikenal dengan layanan 24/7, respons cepat dan akurat, serta tim yang berpengalaman dan profesional. Kami mengutamakan empati, kebersamaan, integritas, dan profesionalisme dalam setiap layanan. Dengan pengalaman lebih dari 10 tahun dan telah melayani 500+ keluarga dengan tingkat kepuasan 98%, kami berkomitmen memberikan yang terbaik.",
            answerEN:
                "NEW EDEN is known for 24/7 service, fast and accurate response, and an experienced and professional team. We prioritize empathy, togetherness, integrity, and professionalism in every service. With over 10 years of experience and having served 500+ families with 98% satisfaction rate, we are committed to providing the best.",
        },
        {
            questionID:
                "Apakah bisa konsultasi terlebih dahulu sebelum memutuskan?",
            questionEN: "Can I have a consultation before deciding?",
            answerID:
                "Tentu saja! Kami sangat menganjurkan untuk melakukan konsultasi terlebih dahulu. Tim kami siap mendengarkan kebutuhan Anda dan memberikan saran terbaik tanpa ada kewajiban untuk langsung memesan. Konsultasi dapat dilakukan melalui WhatsApp, telepon, atau kunjungan langsung.",
            answerEN:
                "Absolutely! We highly recommend having a consultation first. Our team is ready to listen to your needs and provide the best advice without any obligation to order immediately. Consultations can be done via WhatsApp, phone, or direct visit.",
        },
    ];

    const content = {
        ID: {
            title: "Pertanyaan yang Sering Diajukan",
            subtitle:
                "Temukan jawaban untuk pertanyaan umum tentang layanan kami",
        },
        EN: {
            title: "Frequently Asked Questions",
            subtitle: "Find answers to common questions about our services",
        },
    };

    const { language } = useLanguage();

    const text = language === "ID" ? content.ID : content.EN;

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-white dark:bg-[#0F172A]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-[#F9FAFB] dark:bg-[#1E293B] rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-[#334155] shadow-sm hover:shadow-md transition-shadow"
                        >
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#E5E7EB]/50 dark:hover:bg-[#334155]/50 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-[#1F2937] dark:text-[#F9FAFB] pr-4">
                                    {language === "ID"
                                        ? faq.questionID
                                        : faq.questionEN}
                                </h3>
                                <motion.div
                                    animate={{
                                        rotate: openIndex === index ? 180 : 0,
                                    }}
                                    transition={{ duration: 0.3 }}
                                    className="flex-shrink-0"
                                >
                                    {openIndex === index ? (
                                        <Minus className="w-6 h-6 text-[#C8A45C] dark:text-[#D4AF37]" />
                                    ) : (
                                        <Plus className="w-6 h-6 text-[#C8A45C] dark:text-[#D4AF37]" />
                                    )}
                                </motion.div>
                            </button>

                            {/* Answer */}
                            <motion.div
                                initial={false}
                                animate={{
                                    height: openIndex === index ? "auto" : 0,
                                    opacity: openIndex === index ? 1 : 0,
                                }}
                                transition={{
                                    duration: 0.3,
                                    ease: "easeInOut",
                                }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed">
                                    {language === "ID"
                                        ? faq.answerID
                                        : faq.answerEN}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-12 text-center"
                >
                    <p className="text-[#6B7280] dark:text-[#CBD5E1] mb-6">
                        {language === "ID"
                            ? "Tidak menemukan jawaban yang Anda cari?"
                            : "Can't find the answer you're looking for?"}
                    </p>
                    <a
                        href="https://wa.me/6281234567890"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A45C] dark:bg-[#D4AF37] text-white rounded-lg hover:bg-[#B69449] dark:hover:bg-[#C29F2E] transition-all shadow-lg font-medium"
                    >
                        {language === "ID" ? "Hubungi Kami" : "Contact Us"}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
