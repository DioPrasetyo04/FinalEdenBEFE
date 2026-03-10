import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface OrderFormProps {
    isOpen: boolean;
    onClose: () => void;
    selectedItem?: string;
}

export function OrderForm({ isOpen, onClose, selectedItem }: OrderFormProps) {
    const { language } = useLanguage();
    const [formData, setFormData] = useState({ name: "", phone: "", service: selectedItem || "", message: "" });

    const content = {
        ID: {
            title: "Formulir Pemesanan", subtitle: "Isi formulir di bawah ini untuk melanjutkan ke WhatsApp",
            name: "Nama Lengkap", phone: "Nomor WhatsApp", service: "Jenis Layanan", message: "Pesan Tambahan",
            submit: "Kirim ke WhatsApp", close: "Tutup",
            services: ["Paket Peti Jenazah", "Mobil Jenazah", "Cargo Jenazah", "Formalin", "Foto & Video Dokumentasi", "Layanan Kremasi", "Tanah Makam Swasta", "Pengurusan Gali Kerangka", "Voordrijver / Pengawalan"],
        },
        EN: {
            title: "Order Form", subtitle: "Fill in the form below to continue to WhatsApp",
            name: "Full Name", phone: "WhatsApp Number", service: "Service Type", message: "Additional Message",
            submit: "Send to WhatsApp", close: "Close",
            services: ["Casket Package", "Hearse Service", "Cargo Service", "Embalming", "Photo & Video Documentation", "Cremation Service", "Private Burial Plot", "Exhumation Service", "Escort Service"],
        },
    };

    const text = language === "ID" ? content.ID : content.EN;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const message = `Halo NEW EDEN,\n\nNama: ${formData.name}\nNo. WhatsApp: ${formData.phone}\nLayanan: ${formData.service}\n\nPesan:\n${formData.message}`.trim();
        const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
        onClose();
    };

    const inputClass = "w-full px-4 py-3 bg-[#F9FAFB] dark:bg-[#0F172A] border border-[#E5E7EB] dark:border-[#334155] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C8A45C] dark:focus:ring-[#D4AF37] text-[#1F2937] dark:text-[#F9FAFB]";

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm" onClick={onClose}>
                    <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} transition={{ type: "spring", duration: 0.5 }} className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                        <div className="sticky top-0 bg-white dark:bg-[#1E293B] border-b border-[#E5E7EB] dark:border-[#334155] px-6 py-4 flex items-center justify-between">
                            <div>
                                <h3 className="text-2xl text-[#1F2937] dark:text-[#F9FAFB]" style={{ fontFamily: "Playfair Display, serif" }}>{text.title}</h3>
                                <p className="text-sm text-[#6B7280] dark:text-[#CBD5E1] mt-1">{text.subtitle}</p>
                            </div>
                            <button onClick={onClose} className="p-2 hover:bg-[#F9FAFB] dark:hover:bg-[#334155] rounded-lg transition-colors">
                                <X className="w-5 h-5 text-[#6B7280] dark:text-[#CBD5E1]" />
                            </button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            <div>
                                <label className="block text-[#1F2937] dark:text-[#F9FAFB] mb-2 font-medium">{text.name} *</label>
                                <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-[#1F2937] dark:text-[#F9FAFB] mb-2 font-medium">{text.phone} *</label>
                                <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className={inputClass} placeholder="+62 812-3456-7890" />
                            </div>
                            <div>
                                <label className="block text-[#1F2937] dark:text-[#F9FAFB] mb-2 font-medium">{text.service} *</label>
                                <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className={inputClass}>
                                    <option value="">-- Pilih Layanan --</option>
                                    {text.services.map((service, index) => (<option key={index} value={service}>{service}</option>))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-[#1F2937] dark:text-[#F9FAFB] mb-2 font-medium">{text.message}</label>
                                <textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className={`${inputClass} resize-none`} placeholder="Tuliskan pesan tambahan di sini..."></textarea>
                            </div>
                            <div className="flex gap-3">
                                <button type="button" onClick={onClose} className="flex-1 px-6 py-3 border-2 border-[#E5E7EB] dark:border-[#334155] text-[#6B7280] dark:text-[#CBD5E1] rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#334155] transition-colors">{text.close}</button>
                                <motion.button type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 px-6 py-3 bg-[#25D366] text-white rounded-lg hover:bg-[#1EBE57] transition-colors font-medium">{text.submit}</motion.button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
