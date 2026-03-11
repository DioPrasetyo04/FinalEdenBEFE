import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Check, Map } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export function Contact() {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
    const [focusedField, setFocusedField] = useState<string | null>(null);
    const [submitted, setSubmitted] = useState(false);

    const content = {
        ID: {
            badge: "HUBUNGI KAMI", title: "Kami Siap Membantu",
            subtitle: "Ada pertanyaan? Kami siap membantu Anda. Kirim pesan dan kami akan merespons secepatnya.",
            phone: "Telepon", phoneValue: "+62 21 3234 5678", email: "Email", emailValue: "info@neweden.sch.id",
            address: "Alamat", addressValue: "Jl. Tugu Cibogo No. 123, Jakarta Pusat, DKI Jakarta 10350",
            hours: "Jam Operasional", hoursValue: "Senin - Jumat, 7:00 AM - 3:00 PM",
            formTitle: "Kirim Pesan", formName: "Nama Lengkap", formNamePlaceholder: "Masukkan nama lengkap Anda",
            formEmail: "Email", formEmailPlaceholder: "nama@email.com",
            formPhone: "Nomor Telepon", formPhonePlaceholder: "+62 813 3456 7890",
            formSubject: "Subjek", formSubjectPlaceholder: "Pilih subjek pertanyaan",
            formMessage: "Pesan", formMessagePlaceholder: "Tuliskan pesan Anda di sini...",
            btnSend: "Kirim Pesan", mapBtn: "Lihat Lokasi di Maps",
            successTitle: "Pesan Terkirim!", successMessage: "Terima kasih telah menghubungi kami. Kami akan segera merespons.",
        },
        EN: {
            badge: "GET IN TOUCH", title: "We're Here to Help",
            subtitle: "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.",
            phone: "Phone", phoneValue: "+62 21 3234 5678", email: "Email", emailValue: "info@neweden.sch.id",
            address: "Address", addressValue: "Jl. Tugu Cibogo No. 123, Jakarta Pusat, DKI Jakarta 10350",
            hours: "Office Hours", hoursValue: "Monday - Friday, 7:00 AM - 3:00 PM",
            formTitle: "Send Us a Message", formName: "Full Name", formNamePlaceholder: "Enter your full name",
            formEmail: "Email", formEmailPlaceholder: "you@example.com",
            formPhone: "Phone", formPhonePlaceholder: "+62 813 3456 7890",
            formSubject: "Subject", formSubjectPlaceholder: "Select subject",
            formMessage: "Message", formMessagePlaceholder: "Tell us how we can help...",
            btnSend: "Send Message", mapBtn: "View Location on Maps",
            successTitle: "Message Sent!", successMessage: "Thank you for contacting us. We'll get back to you soon.",
        },
    };

    const text = language === "ID" ? content.ID : content.EN;

    const contactCards = [
        { icon: MapPin, label: text.address, value: text.addressValue, link: "https://maps.google.com" },
        { icon: Phone, label: text.phone, value: text.phoneValue, link: "tel:+622132345678" },
        { icon: Mail, label: text.email, value: text.emailValue, link: "mailto:info@neweden.sch.id" },
        { icon: Clock, label: text.hours, value: text.hoursValue, link: null as string | null },
    ];

    const WHATSAPP_NUMBER = "6281212770778";

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const waMessage = `Halo NEW EDEN,\n\nNama: ${formData.name}\nEmail: ${formData.email}\nNo. Telepon: ${formData.phone}\nSubjek: ${formData.subject}\n\nPesan:\n${formData.message}`.trim();
        const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`;
        window.open(whatsappUrl, "_blank");
        setSubmitted(true);
        setTimeout(() => { setSubmitted(false); setFormData({ name: "", email: "", phone: "", subject: "", message: "" }); }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const inputClass = "w-full px-4 py-3.5 bg-[#F9FAFB] dark:bg-[#0F172A] border-2 border-[#E5E7EB] dark:border-[#334155] rounded-xl focus:outline-none focus:border-[#C8A45C] dark:focus:border-[#D4AF37] transition-all duration-300 text-[#111827] dark:text-[#F9FAFB] placeholder:text-[#9CA3AF] dark:placeholder:text-[#64748B]";

    return (
        <section id="contact" className="py-24 lg:py-32 bg-gradient-to-b from-[#FAFBFC] to-white dark:from-[#0F172A] dark:to-[#0A0F1E] relative overflow-hidden">
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="text-center mb-20">
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 text-[#C8A45C] dark:text-[#D4AF37] rounded-full text-xs font-semibold tracking-wider uppercase mb-6">
                        <MessageCircle className="w-3.5 h-3.5" />
                        {text.badge}
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#111827] dark:text-[#F9FAFB] mb-6 tracking-tight" style={{ fontFamily: "Playfair Display, serif" }}>{text.title}</h2>
                    <p className="text-lg md:text-xl text-[#6B7280] dark:text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">{text.subtitle}</p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="space-y-6">
                        {contactCards.map((card, index) => (
                            <motion.div key={index} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }} whileHover={{ x: 8, scale: 1.02 }} className="group">
                                <div className="flex items-start gap-5 p-6 bg-white dark:bg-[#1E293B] rounded-2xl transition-all duration-300 hover:shadow-lg dark:hover:shadow-[#D4AF37]/10" style={{ boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)" }}>
                                    <motion.div whileHover={{ rotate: 10, scale: 1.1 }} className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] rounded-xl flex items-center justify-center shadow-lg">
                                        <card.icon className="w-6 h-6 text-white" strokeWidth={2} />
                                    </motion.div>
                                    <div className="flex-1">
                                        <h3 className="text-sm font-semibold text-[#6B7280] dark:text-[#94A3B8] uppercase tracking-wider mb-2">{card.label}</h3>
                                        {card.link ? (
                                            <a href={card.link} target="_blank" rel="noopener noreferrer" className="text-[#111827] dark:text-[#F9FAFB] text-base md:text-lg hover:text-[#C8A45C] dark:hover:text-[#D4AF37] transition-colors duration-300">{card.value}</a>
                                        ) : (
                                            <p className="text-[#111827] dark:text-[#F9FAFB] text-base md:text-lg">{card.value}</p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}>
                            <motion.a href="https://maps.google.com/maps?q=Jl.+Tugu+Cibogo+No.+123,+Jakarta+Pusat,+DKI+Jakarta+10350" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-gradient-to-r from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{ scale: 1.02, y: -4 }} whileTap={{ scale: 0.98 }}>
                                <Map className="w-6 h-6" />
                                <span className="text-lg">{text.mapBtn}</span>
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
                        <div className="bg-white dark:bg-[#1E293B] rounded-3xl p-8 lg:p-10 shadow-xl">
                            <h3 className="text-2xl md:text-3xl text-[#111827] dark:text-[#F9FAFB] mb-8" style={{ fontFamily: "Playfair Display, serif" }}>{text.formTitle}</h3>

                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="block text-sm font-semibold text-[#111827] dark:text-[#F9FAFB]">{text.formName}</label>
                                        <motion.div animate={{ scale: focusedField === "name" ? 1.01 : 1 }} transition={{ duration: 0.2 }}>
                                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField(null)} placeholder={text.formNamePlaceholder} required className={inputClass} />
                                        </motion.div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="block text-sm font-semibold text-[#111827] dark:text-[#F9FAFB]">{text.formEmail}</label>
                                            <motion.div animate={{ scale: focusedField === "email" ? 1.01 : 1 }} transition={{ duration: 0.2 }}>
                                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onFocus={() => setFocusedField("email")} onBlur={() => setFocusedField(null)} placeholder={text.formEmailPlaceholder} required className={inputClass} />
                                            </motion.div>
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="block text-sm font-semibold text-[#111827] dark:text-[#F9FAFB]">{text.formPhone}</label>
                                            <motion.div animate={{ scale: focusedField === "phone" ? 1.01 : 1 }} transition={{ duration: 0.2 }}>
                                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField(null)} placeholder={text.formPhonePlaceholder} required className={inputClass} />
                                            </motion.div>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="block text-sm font-semibold text-[#111827] dark:text-[#F9FAFB]">{text.formSubject}</label>
                                        <motion.div animate={{ scale: focusedField === "subject" ? 1.01 : 1 }} transition={{ duration: 0.2 }}>
                                            <select id="subject" name="subject" value={formData.subject} onChange={handleChange} onFocus={() => setFocusedField("subject")} onBlur={() => setFocusedField(null)} required className={inputClass}>
                                                <option value="">{text.formSubjectPlaceholder}</option>
                                                <option value="general">{language === "ID" ? "Pertanyaan Umum" : "General Inquiry"}</option>
                                                <option value="service">{language === "ID" ? "Layanan" : "Services"}</option>
                                                <option value="product">{language === "ID" ? "Produk" : "Products"}</option>
                                                <option value="other">{language === "ID" ? "Lainnya" : "Other"}</option>
                                            </select>
                                        </motion.div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="block text-sm font-semibold text-[#111827] dark:text-[#F9FAFB]">{text.formMessage}</label>
                                        <motion.div animate={{ scale: focusedField === "message" ? 1.01 : 1 }} transition={{ duration: 0.2 }}>
                                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} onFocus={() => setFocusedField("message")} onBlur={() => setFocusedField(null)} placeholder={text.formMessagePlaceholder} rows={5} required className={`${inputClass} resize-none`} />
                                        </motion.div>
                                    </div>

                                    <motion.button type="submit" className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300" whileHover={{ scale: 1.02, y: -2 }} whileTap={{ scale: 0.98 }}>
                                        <Send className="w-5 h-5" />
                                        <span>{text.btnSend}</span>
                                    </motion.button>
                                </form>
                            ) : (
                                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", duration: 0.6 }} className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] rounded-full mb-6">
                                        <Check className="w-10 h-10 text-white" strokeWidth={3} />
                                    </motion.div>
                                    <h3 className="text-2xl font-bold text-[#111827] dark:text-[#F9FAFB] mb-3">{text.successTitle}</h3>
                                    <p className="text-[#6B7280] dark:text-[#CBD5E1]">{text.successMessage}</p>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
