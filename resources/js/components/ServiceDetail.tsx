import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface ServiceDetailProps {
    isOpen: boolean;
    onClose: () => void;
    serviceId: string;
    onOrderClick: () => void;
}

export function ServiceDetail({ isOpen, onClose, serviceId, onOrderClick }: ServiceDetailProps) {
    const { language } = useLanguage();

    const servicesData: Record<string, any> = {
        casket: {
            titleID: "Paket Peti Jenazah", titleEN: "Casket Package",
            descID: "Kami menyediakan berbagai pilihan peti jenazah berkualitas tinggi dengan desain yang elegan dan bermartabat.",
            descEN: "We provide various high-quality casket options with elegant and dignified designs.",
            featuresID: ["Berbagai pilihan material (Kayu Jati, Mahoni, Pinus)", "Desain elegan dan berkelas", "Interior berkualitas dengan bantalan lembut", "Ukuran custom sesuai kebutuhan", "Finishing premium", "Aksesoris lengkap (pegangan, ornamen)"],
            featuresEN: ["Various material options (Teak, Mahogany, Pine)", "Elegant and classy design", "Quality interior with soft padding", "Custom sizes as needed", "Premium finishing", "Complete accessories (handles, ornaments)"],
            image: "https://images.unsplash.com/photo-1642084386112-cf73c9b7c27f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
        hearse: {
            titleID: "Mobil Jenazah", titleEN: "Hearse Service",
            descID: "Layanan transportasi jenazah yang aman, nyaman, dan terhormat.",
            descEN: "Safe, comfortable, and respectful hearse transportation service.",
            featuresID: ["Armada mobil modern dan terawat", "Pengemudi berpengalaman", "AC dan sound system", "Interior bersih", "Jarak dekat dan jauh", "Asuransi perjalanan lengkap"],
            featuresEN: ["Modern and well-maintained fleet", "Experienced drivers", "AC and sound system", "Clean interior", "Short and long distance", "Complete travel insurance"],
            image: "https://images.unsplash.com/photo-1636725833624-e3ced8395db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
        cargo: {
            titleID: "Cargo Jenazah", titleEN: "Cargo Service",
            descID: "Pengurusan lengkap pengiriman jenazah antar kota dan antar negara.",
            descEN: "Complete inter-city and international deceased cargo arrangements.",
            featuresID: ["Pengurusan dokumen lengkap", "Koordinasi dengan bandara/pelabuhan", "Izin dan surat-surat", "Packing standar internasional", "Tracking real-time", "Layanan door-to-door"],
            featuresEN: ["Complete document processing", "Airport/port coordination", "Permit arrangements", "International standard packing", "Real-time tracking", "Door-to-door service"],
            image: "https://images.unsplash.com/photo-1762967017690-96b4fae9be76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
        embalming: {
            titleID: "Formalin", titleEN: "Embalming",
            descID: "Layanan pengawetan jenazah profesional.", descEN: "Professional embalming service.",
            featuresID: ["Tenaga ahli bersertifikat", "Bahan formalin berkualitas medis", "Standar kesehatan", "Perawatan wajah dan make-up", "Dokumentasi proses", "Konsultasi keluarga"],
            featuresEN: ["Certified professionals", "Medical-grade materials", "Health standards", "Facial care and make-up", "Process documentation", "Family consultation"],
            image: "https://images.unsplash.com/photo-1711615745585-59213ecfec47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
        documentation: {
            titleID: "Foto & Video Dokumentasi", titleEN: "Photo & Video Documentation",
            descID: "Dokumentasi profesional acara pemakaman.", descEN: "Professional funeral ceremony documentation.",
            featuresID: ["Fotografer dan videografer berpengalaman", "Peralatan kamera profesional", "Editing profesional", "Album foto premium", "Video memorial HD/4K", "Penyerahan dalam flash drive"],
            featuresEN: ["Experienced photographers and videographers", "Professional camera equipment", "Professional editing", "Premium photo album", "HD/4K memorial video", "Results on flash drive"],
            image: "https://images.unsplash.com/photo-1767620275245-70721d786653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
        cremation: {
            titleID: "Layanan Kremasi", titleEN: "Cremation Service",
            descID: "Proses kremasi yang dilakukan dengan penuh hormat.", descEN: "Cremation process with full respect.",
            featuresID: ["Fasilitas krematorium modern", "Proses sesuai prosedur agama", "Guci/wadah abu berkualitas", "Sertifikat kremasi resmi", "Ruang tunggu nyaman", "Pendampingan rohaniwan"],
            featuresEN: ["Modern crematorium facilities", "Religious procedures", "Quality urns", "Official certificate", "Comfortable waiting room", "Spiritual counselor"],
            image: "https://images.unsplash.com/photo-1686807561227-18e9e7f2d472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
        plot: {
            titleID: "Tanah Makam Swasta", titleEN: "Private Burial Plot",
            descID: "Penyediaan dan pengurusan lahan pemakaman pribadi.", descEN: "Private burial plot provision and management.",
            featuresID: ["Pilihan lokasi strategis", "Sertifikat kepemilikan resmi", "Perawatan taman reguler", "Pembuatan nisan/monument", "Akses jalan baik", "Keamanan 24 jam"],
            featuresEN: ["Strategic location options", "Official ownership certificate", "Regular garden maintenance", "Headstone/monument creation", "Good road access", "24-hour security"],
            image: "https://images.unsplash.com/photo-1642084386112-cf73c9b7c27f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
        exhumation: {
            titleID: "Pengurusan Gali Kerangka", titleEN: "Exhumation Service",
            descID: "Layanan pemindahan jenazah secara profesional.", descEN: "Professional exhumation service.",
            featuresID: ["Pengurusan izin lengkap", "Tim profesional dan terlatih", "Peralatan khusus", "Prosedur kesehatan", "Peti jenazah baru", "Transportasi aman"],
            featuresEN: ["Complete permit arrangements", "Professional and trained team", "Special equipment", "Health regulations", "New casket (if needed)", "Safe transportation"],
            image: "https://images.unsplash.com/photo-1711615745585-59213ecfec47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
        escort: {
            titleID: "Voordrijver / Pengawalan", titleEN: "Escort Service",
            descID: "Pengawalan prosesi pemakaman dengan tertib dan hormat.", descEN: "Orderly and respectful funeral procession escort.",
            featuresID: ["Petugas terlatih", "Koordinasi lalu lintas", "Pengaturan prosesi", "Komunikasi pihak terkait", "Kelancaran acara", "Protokol keamanan"],
            featuresEN: ["Trained officers", "Traffic coordination", "Procession arrangement", "Communication", "Smooth ceremony", "Security protocol"],
            image: "https://images.unsplash.com/photo-1636725833624-e3ced8395db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        },
    };

    const service = servicesData[serviceId] || servicesData.casket;
    const text = language === "ID" ? { features: "Fitur Layanan", order: "Pesan Sekarang", close: "Tutup" } : { features: "Service Features", order: "Order Now", close: "Close" };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto" onClick={onClose}>
                    <motion.div initial={{ scale: 0.9, opacity: 0, y: 50 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.9, opacity: 0, y: 50 }} transition={{ type: "spring", duration: 0.5 }} className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-2xl max-w-4xl w-full my-8" onClick={(e) => e.stopPropagation()}>
                        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-[#F9FAFB] dark:hover:bg-[#334155] rounded-lg transition-colors z-10">
                            <X className="w-6 h-6 text-[#6B7280] dark:text-[#CBD5E1]" />
                        </button>

                        <div className="relative h-64 rounded-t-2xl overflow-hidden">
                            <img src={service.image} alt={language === "ID" ? service.titleID : service.titleEN} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <h2 className="text-3xl md:text-4xl text-white mb-2" style={{ fontFamily: "Playfair Display, serif" }}>{language === "ID" ? service.titleID : service.titleEN}</h2>
                            </div>
                        </div>

                        <div className="p-6 md:p-8 space-y-6">
                            <p className="text-lg text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed">{language === "ID" ? service.descID : service.descEN}</p>

                            <div>
                                <h3 className="text-2xl text-[#1F2937] dark:text-[#F9FAFB] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>{text.features}</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {(language === "ID" ? service.featuresID : service.featuresEN).map((feature: string, index: number) => (
                                        <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-5 h-5 bg-[#C8A45C] dark:bg-[#D4AF37] rounded-full flex items-center justify-center mt-0.5">
                                                <Check className="w-3 h-3 text-white" />
                                            </div>
                                            <span className="text-[#6B7280] dark:text-[#CBD5E1]">{feature}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <motion.button onClick={() => { onOrderClick(); onClose(); }} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#C8A45C] dark:bg-[#D4AF37] text-white rounded-lg hover:bg-[#B69449] dark:hover:bg-[#C29F2E] transition-all font-medium shadow-lg">
                                    {text.order} <ArrowRight className="w-5 h-5" />
                                </motion.button>
                                <button onClick={onClose} className="px-6 py-4 border-2 border-[#E5E7EB] dark:border-[#334155] text-[#6B7280] dark:text-[#CBD5E1] rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#334155] transition-colors">{text.close}</button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
