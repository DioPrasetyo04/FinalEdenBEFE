import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface Testimonial {
    nameID: string;
    nameEN: string;
    roleID: string;
    roleEN: string;
    textID: string;
    textEN: string;
    rating: number;
}

export function Testimonials() {
    const { language } = useLanguage();

    const testimonials: Testimonial[] = [
        { nameID: "Bapak Susanto", nameEN: "Mr. Susanto", roleID: "Keluarga Almarhum", roleEN: "Family of the Deceased", textID: "NEW EDEN sangat membantu kami di masa sulit. Pelayanannya profesional dan penuh empati. Tim mereka sangat responsif dan membantu mengurus semua dengan baik.", textEN: "NEW EDEN was very helpful during our difficult time. Their service was professional and empathetic. Their team was very responsive and helped arrange everything well.", rating: 5 },
        { nameID: "Ibu Maria", nameEN: "Mrs. Maria", roleID: "Gereja Santo Yohanes", roleEN: "St. John Church", textID: "Kami telah bekerja sama dengan NEW EDEN untuk beberapa keluarga di gereja kami. Mereka selalu memberikan layanan terbaik dengan sikap yang sangat hormat.", textEN: "We have worked with NEW EDEN for several families in our church. They always provide the best service with a very respectful attitude.", rating: 5 },
        { nameID: "Bapak Richard", nameEN: "Mr. Richard", roleID: "Keluarga Almarhum", roleEN: "Family of the Deceased", textID: "Terima kasih kepada tim NEW EDEN yang telah membantu kami dengan sangat baik. Prosesnya lancar dan kami merasa sangat terbantu di masa duka.", textEN: "Thank you to the NEW EDEN team who helped us very well. The process was smooth and we felt very supported during our time of grief.", rating: 5 },
    ];

    const content = {
        ID: { title: "Testimoni Keluarga", subtitle: "Kepercayaan dari keluarga-keluarga yang telah kami layani" },
        EN: { title: "Family Testimonials", subtitle: "Trust from families we have served" },
    };

    const text = language === "ID" ? content.ID : content.EN;

    return (
        <section className="py-20 bg-gradient-to-br from-white via-[#DCEAF5]/30 to-white dark:from-[#0F172A] dark:via-[#1E293B]/50 dark:to-[#0F172A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-[#1F2937] dark:text-[#F9FAFB] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>{text.title}</h2>
                    <p className="text-lg text-[#6B7280] dark:text-[#CBD5E1] max-w-2xl mx-auto">{text.subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div key={index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2, duration: 0.6 }} whileHover={{ y: -10 }} className="bg-white dark:bg-[#1E293B] rounded-2xl p-8 shadow-lg border border-[#E5E7EB] dark:border-[#334155] relative">
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote className="w-16 h-16 text-[#C8A45C] dark:text-[#D4AF37]" />
                            </div>
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-[#C8A45C] text-[#C8A45C] dark:fill-[#D4AF37] dark:text-[#D4AF37]" />
                                ))}
                            </div>
                            <p className="text-[#6B7280] dark:text-[#CBD5E1] mb-6 leading-relaxed relative z-10">
                                "{language === "ID" ? testimonial.textID : testimonial.textEN}"
                            </p>
                            <div className="pt-4 border-t border-[#E5E7EB] dark:border-[#334155]">
                                <p className="font-semibold text-[#1F2937] dark:text-[#F9FAFB]">{language === "ID" ? testimonial.nameID : testimonial.nameEN}</p>
                                <p className="text-sm text-[#6B7280] dark:text-[#CBD5E1]">{language === "ID" ? testimonial.roleID : testimonial.roleEN}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
