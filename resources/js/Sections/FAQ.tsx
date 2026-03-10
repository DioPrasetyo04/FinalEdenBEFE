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
    const { language } = useLanguage();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        { questionID: "Apa saja layanan yang ditawarkan NEW EDEN?", questionEN: "What services does NEW EDEN offer?", answerID: "NEW EDEN menyediakan layanan lengkap kedukaan termasuk paket peti jenazah, mobil jenazah, cargo jenazah, formalin/pengawetan, dokumentasi foto & video, layanan kremasi, tanah makam swasta, pengurusan gali kerangka, dan pengawalan/voordrijver.", answerEN: "NEW EDEN provides comprehensive funeral services including casket packages, hearse service, cargo service, embalming/preservation, photo & video documentation, cremation service, private burial plots, exhumation arrangements, and escort/voordrijver services." },
        { questionID: "Berapa lama waktu yang dibutuhkan untuk persiapan pemakaman?", questionEN: "How long does it take to prepare for a funeral?", answerID: "Waktu persiapan bervariasi tergantung jenis layanan yang dipilih. Untuk layanan standar, kami dapat mempersiapkan dalam waktu 24 jam. Tim kami siap membantu 24/7 untuk kebutuhan darurat.", answerEN: "Preparation time varies depending on the selected service. For standard services, we can prepare within 24 hours. Our team is ready to assist 24/7 for emergency needs." },
        { questionID: "Apakah NEW EDEN melayani pemakaman untuk semua agama?", questionEN: "Does NEW EDEN serve funerals for all religions?", answerID: "Ya, NEW EDEN melayani pemakaman sesuai dengan kepercayaan dan tradisi keluarga dari berbagai agama. Kami menghormati setiap prosesi keagamaan.", answerEN: "Yes, NEW EDEN serves funerals according to family beliefs and traditions from various religions. We respect every religious procession." },
        { questionID: "Bagaimana cara memesan layanan NEW EDEN?", questionEN: "How do I order NEW EDEN services?", answerID: "Anda dapat menghubungi kami melalui WhatsApp, menelepon langsung, atau mengisi formulir pemesanan di website ini. Tim kami akan segera merespons.", answerEN: "You can contact us via WhatsApp, call directly, or fill out the order form on this website. Our team will respond immediately." },
        { questionID: "Apakah tersedia paket pemakaman dengan harga terjangkau?", questionEN: "Are there affordable funeral packages available?", answerID: "Ya, kami menyediakan berbagai paket pemakaman mulai dari economy hingga premium untuk memenuhi kebutuhan dan budget yang berbeda.", answerEN: "Yes, we provide various funeral packages from economy to premium to meet different needs and budgets." },
        { questionID: "Apakah NEW EDEN melayani pengiriman jenazah ke luar kota atau luar negeri?", questionEN: "Does NEW EDEN serve deceased transportation out of town or abroad?", answerID: "Ya, kami melayani cargo jenazah untuk pengiriman antar kota maupun antar negara. Kami akan mengurus semua dokumen dan koordinasi.", answerEN: "Yes, we serve deceased cargo for inter-city and international shipments. We will handle all documents and coordination." },
    ];

    const content = {
        ID: { title: "Pertanyaan yang Sering Diajukan", subtitle: "Temukan jawaban untuk pertanyaan umum tentang layanan kami" },
        EN: { title: "Frequently Asked Questions", subtitle: "Find answers to common questions about our services" },
    };

    const text = language === "ID" ? content.ID : content.EN;

    return (
        <section className="py-20 bg-white dark:bg-[#0F172A]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-[#1F2937] dark:text-[#F9FAFB] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>{text.title}</h2>
                    <p className="text-lg text-[#6B7280] dark:text-[#CBD5E1] max-w-2xl mx-auto">{text.subtitle}</p>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="bg-[#F9FAFB] dark:bg-[#1E293B] rounded-xl overflow-hidden border border-[#E5E7EB] dark:border-[#334155] shadow-sm hover:shadow-md transition-shadow">
                            <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left hover:bg-[#E5E7EB]/50 dark:hover:bg-[#334155]/50 transition-colors">
                                <h3 className="text-lg font-semibold text-[#1F2937] dark:text-[#F9FAFB] pr-4">
                                    {language === "ID" ? faq.questionID : faq.questionEN}
                                </h3>
                                <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                                    {openIndex === index ? <Minus className="w-6 h-6 text-[#C8A45C] dark:text-[#D4AF37]" /> : <Plus className="w-6 h-6 text-[#C8A45C] dark:text-[#D4AF37]" />}
                                </motion.div>
                            </button>
                            <motion.div initial={false} animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden">
                                <div className="px-6 pb-6 text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed">
                                    {language === "ID" ? faq.answerID : faq.answerEN}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }} className="mt-12 text-center">
                    <p className="text-[#6B7280] dark:text-[#CBD5E1] mb-6">
                        {language === "ID" ? "Tidak menemukan jawaban yang Anda cari?" : "Can't find the answer you're looking for?"}
                    </p>
                    <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-[#C8A45C] dark:bg-[#D4AF37] text-white rounded-lg hover:bg-[#B69449] dark:hover:bg-[#C29F2E] transition-all shadow-lg font-medium">
                        {language === "ID" ? "Hubungi Kami" : "Contact Us"}
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
