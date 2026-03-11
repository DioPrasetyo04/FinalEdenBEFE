import { motion, AnimatePresence } from "framer-motion";
import { X, Check, ArrowRight } from "lucide-react";
import AppLayout from "@/Layouts/AppLayout";
import { useLanguage } from "@/hooks/useLanguage";

interface ServiceDetailProps {
    isOpen: boolean;
    onClose: () => void;
    serviceId: string;
    onOrderClick: () => void;
}

export function Show({
    isOpen,
    onClose,
    serviceId,
    onOrderClick,
}: ServiceDetailProps) {
    const servicesData: Record<string, any> = {
        casket: {
            titleID: "Paket Peti Jenazah",
            titleEN: "Casket Package",
            descID: "Kami menyediakan berbagai pilihan peti jenazah berkualitas tinggi dengan desain yang elegan dan bermartabat.",
            descEN: "We provide various high-quality casket options with elegant and dignified designs.",
            featuresID: [
                "Berbagai pilihan material (Kayu Jati, Mahoni, Pinus)",
                "Desain elegan dan berkelas",
                "Interior berkualitas dengan bantalan lembut",
                "Ukuran custom sesuai kebutuhan",
                "Finishing premium dengan cat dan pernis terbaik",
                "Aksesoris lengkap (pegangan, ornamen)",
            ],
            featuresEN: [
                "Various material options (Teak, Mahogany, Pine)",
                "Elegant and classy design",
                "Quality interior with soft padding",
                "Custom sizes as needed",
                "Premium finishing with best paint and varnish",
                "Complete accessories (handles, ornaments)",
            ],
            image: "https://images.unsplash.com/photo-1642084386112-cf73c9b7c27f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmxvd2VycyUyMHdyZWF0aHxlbnwxfHx8fDE3NzI3MjkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        hearse: {
            titleID: "Mobil Jenazah",
            titleEN: "Hearse Service",
            descID: "Layanan transportasi jenazah yang aman, nyaman, dan terhormat dengan armada yang terawat baik.",
            descEN: "Safe, comfortable, and respectful hearse transportation service with well-maintained fleet.",
            featuresID: [
                "Armada mobil modern dan terawat",
                "Pengemudi berpengalaman dan profesional",
                "AC dan sound system untuk kenyamanan",
                "Interior bersih dan wangi",
                "Tersedia untuk jarak dekat dan jauh",
                "Asuransi perjalanan lengkap",
            ],
            featuresEN: [
                "Modern and well-maintained fleet",
                "Experienced and professional drivers",
                "AC and sound system for comfort",
                "Clean and fresh interior",
                "Available for short and long distance",
                "Complete travel insurance",
            ],
            image: "https://images.unsplash.com/photo-1636725833624-e3ced8395db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGRvdmUlMjBwZWFjZXxlbnwxfHx8fDE3NzI3MjkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        cargo: {
            titleID: "Cargo Jenazah",
            titleEN: "Cargo Service",
            descID: "Pengurusan lengkap pengiriman jenazah antar kota dan antar negara dengan prosedur yang profesional.",
            descEN: "Complete inter-city and international deceased cargo arrangements with professional procedures.",
            featuresID: [
                "Pengurusan dokumen lengkap",
                "Koordinasi dengan bandara/pelabuhan",
                "Pengurusan izin dan surat-surat",
                "Packing khusus sesuai standar internasional",
                "Tracking pengiriman real-time",
                "Layanan door-to-door",
            ],
            featuresEN: [
                "Complete document processing",
                "Airport/port coordination",
                "Permit and document arrangements",
                "Special packing according to international standards",
                "Real-time shipment tracking",
                "Door-to-door service",
            ],
            image: "https://images.unsplash.com/photo-1762967017690-96b4fae9be76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MjcyOTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        embalming: {
            titleID: "Formalin",
            titleEN: "Embalming",
            descID: "Layanan pengawetan jenazah profesional dengan prosedur medis yang tepat dan bahan berkualitas.",
            descEN: "Professional embalming service with proper medical procedures and quality materials.",
            featuresID: [
                "Dilakukan oleh tenaga ahli bersertifikat",
                "Bahan formalin berkualitas medis",
                "Prosedur sesuai standar kesehatan",
                "Perawatan wajah dan make-up",
                "Dokumentasi proses",
                "Konsultasi dengan keluarga",
            ],
            featuresEN: [
                "Performed by certified professionals",
                "Medical-grade formalin materials",
                "Procedures according to health standards",
                "Facial care and make-up",
                "Process documentation",
                "Family consultation",
            ],
            image: "https://images.unsplash.com/photo-1711615745585-59213ecfec47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcmlhbCUyMGNhbmRsZSUyMGxpZ2h0fGVufDF8fHx8MTc3MjcyOTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        documentation: {
            titleID: "Foto & Video Dokumentasi",
            titleEN: "Photo & Video Documentation",
            descID: "Dokumentasi profesional acara pemakaman dengan penuh kehormatan dan sensitivitas.",
            descEN: "Professional funeral ceremony documentation with full respect and sensitivity.",
            featuresID: [
                "Fotografer dan videografer berpengalaman",
                "Peralatan kamera profesional",
                "Editing profesional",
                "Album foto premium",
                "Video memorial berkualitas HD/4K",
                "Penyerahan hasil dalam flash drive",
            ],
            featuresEN: [
                "Experienced photographers and videographers",
                "Professional camera equipment",
                "Professional editing",
                "Premium photo album",
                "HD/4K quality memorial video",
                "Results delivered on flash drive",
            ],
            image: "https://images.unsplash.com/photo-1767620275245-70721d786653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwc2VydmljZXxlbnwxfHx8fDE3NzI3MjkzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        cremation: {
            titleID: "Layanan Kremasi",
            titleEN: "Cremation Service",
            descID: "Proses kremasi yang dilakukan dengan penuh hormat sesuai dengan kepercayaan dan tradisi keluarga.",
            descEN: "Cremation process conducted with full respect according to family beliefs and traditions.",
            featuresID: [
                "Fasilitas krematorium modern",
                "Proses sesuai prosedur agama",
                "Guci/wadah abu berkualitas",
                "Sertifikat kremasi resmi",
                "Ruang tunggu keluarga yang nyaman",
                "Pendampingan rohaniwan (jika diperlukan)",
            ],
            featuresEN: [
                "Modern crematorium facilities",
                "Process according to religious procedures",
                "Quality urns/ash containers",
                "Official cremation certificate",
                "Comfortable family waiting room",
                "Spiritual counselor assistance (if needed)",
            ],
            image: "https://images.unsplash.com/photo-1686807561227-18e9e7f2d472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMHNreSUyMGNsb3VkcyUyMGhlYXZlbnxlbnwxfHx8fDE3NzI3MjgxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        plot: {
            titleID: "Tanah Makam Swasta",
            titleEN: "Private Burial Plot",
            descID: "Penyediaan dan pengurusan lahan pemakaman pribadi dengan lokasi yang tenang dan terawat.",
            descEN: "Private burial plot provision and management with quiet and well-maintained locations.",
            featuresID: [
                "Pilihan lokasi strategis",
                "Sertifikat kepemilikan resmi",
                "Perawatan taman reguler",
                "Pembuatan nisan/monument",
                "Akses jalan yang baik",
                "Keamanan 24 jam",
            ],
            featuresEN: [
                "Strategic location options",
                "Official ownership certificate",
                "Regular garden maintenance",
                "Headstone/monument creation",
                "Good road access",
                "24-hour security",
            ],
            image: "https://images.unsplash.com/photo-1642084386112-cf73c9b7c27f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmxvd2VycyUyMHdyZWF0aHxlbnwxfHx8fDE3NzI3MjkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        exhumation: {
            titleID: "Pengurusan Gali Kerangka",
            titleEN: "Exhumation Service",
            descID: "Layanan pemindahan jenazah yang dilakukan secara profesional dengan prosedur yang benar.",
            descEN: "Professional exhumation service conducted with proper procedures.",
            featuresID: [
                "Pengurusan izin lengkap",
                "Tim profesional dan terlatih",
                "Peralatan khusus",
                "Prosedur sesuai aturan kesehatan",
                "Peti jenazah baru (jika diperlukan)",
                "Transportasi aman",
            ],
            featuresEN: [
                "Complete permit arrangements",
                "Professional and trained team",
                "Special equipment",
                "Procedures according to health regulations",
                "New casket (if needed)",
                "Safe transportation",
            ],
            image: "https://images.unsplash.com/photo-1711615745585-59213ecfec47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcmlhbCUyMGNhbmRsZSUyMGxpZ2h0fGVufDF8fHx8MTc3MjcyOTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        },
        escort: {
            titleID: "Voordrijver / Pengawalan",
            titleEN: "Escort Service",
            descID: "Pengawalan prosesi pemakaman dengan tertib dan hormat untuk kelancaran acara.",
            descEN: "Orderly and respectful funeral procession escort for smooth ceremony.",
            featuresID: [
                "Petugas terlatih dan berpengalaman",
                "Koordinasi lalu lintas",
                "Pengaturan prosesi",
                "Komunikasi dengan pihak terkait",
                "Memastikan kelancaran acara",
                "Protokol keamanan lengkap",
            ],
            featuresEN: [
                "Trained and experienced officers",
                "Traffic coordination",
                "Procession arrangement",
                "Communication with related parties",
                "Ensuring smooth ceremony",
                "Complete security protocol",
            ],
            image: "https://images.unsplash.com/photo-1636725833624-e3ced8395db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGRvdmUlMjBwZWFjZXxlbnwxfHx8fDE3NzI3MjkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
    };

    const service = servicesData[serviceId] || servicesData.casket;

    const content = {
        ID: {
            features: "Fitur Layanan",
            order: "Pesan Sekarang",
            close: "Tutup",
        },
        EN: {
            features: "Service Features",
            order: "Order Now",
            close: "Close",
        },
    };

    const { language } = useLanguage();

    const text = language === "ID" ? content.ID : content.EN;

    return (
        <AppLayout>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm overflow-y-auto"
                        onClick={onClose}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 50 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-2xl max-w-4xl w-full my-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 hover:bg-[#F9FAFB] dark:hover:bg-[#334155] rounded-lg transition-colors z-10"
                            >
                                <X className="w-6 h-6 text-[#6B7280] dark:text-[#CBD5E1]" />
                            </button>

                            {/* Hero Image */}
                            <div className="relative h-64 rounded-t-2xl overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={
                                        language === "ID"
                                            ? service.titleID
                                            : service.titleEN
                                    }
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                <div className="absolute bottom-6 left-6 right-6">
                                    <h2
                                        className="text-3xl md:text-4xl text-white mb-2"
                                        style={{
                                            fontFamily:
                                                "Playfair Display, serif",
                                        }}
                                    >
                                        {language === "ID"
                                            ? service.titleID
                                            : service.titleEN}
                                    </h2>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6 md:p-8 space-y-6">
                                {/* Description */}
                                <p className="text-lg text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed">
                                    {language === "ID"
                                        ? service.descID
                                        : service.descEN}
                                </p>

                                {/* Features */}
                                <div>
                                    <h3
                                        className="text-2xl text-[#1F2937] dark:text-[#F9FAFB] mb-4"
                                        style={{
                                            fontFamily:
                                                "Playfair Display, serif",
                                        }}
                                    >
                                        {text.features}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                        {(language === "ID"
                                            ? service.featuresID
                                            : service.featuresEN
                                        ).map(
                                            (
                                                feature: string,
                                                index: number,
                                            ) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{
                                                        opacity: 0,
                                                        x: -20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        delay: index * 0.1,
                                                    }}
                                                    className="flex items-start gap-3"
                                                >
                                                    <div className="flex-shrink-0 w-5 h-5 bg-[#C8A45C] dark:bg-[#D4AF37] rounded-full flex items-center justify-center mt-0.5">
                                                        <Check className="w-3 h-3 text-white" />
                                                    </div>
                                                    <span className="text-[#6B7280] dark:text-[#CBD5E1]">
                                                        {feature}
                                                    </span>
                                                </motion.div>
                                            ),
                                        )}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                    <motion.button
                                        onClick={() => {
                                            onOrderClick();
                                            onClose();
                                        }}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#C8A45C] dark:bg-[#D4AF37] text-white rounded-lg hover:bg-[#B69449] dark:hover:bg-[#C29F2E] transition-all font-medium shadow-lg"
                                    >
                                        {text.order}
                                        <ArrowRight className="w-5 h-5" />
                                    </motion.button>
                                    <button
                                        onClick={onClose}
                                        className="px-6 py-4 border-2 border-[#E5E7EB] dark:border-[#334155] text-[#6B7280] dark:text-[#CBD5E1] rounded-lg hover:bg-[#F9FAFB] dark:hover:bg-[#334155] transition-colors"
                                    >
                                        {text.close}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </AppLayout>
    );
}
