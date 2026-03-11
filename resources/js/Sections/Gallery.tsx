import { useState } from "react";
import { motion } from "motion/react";
import { X, ZoomIn } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface GalleryImage {
    id: number;
    url: string;
    titleID: string;
    titleEN: string;
    category: string;
}

export function Gallery() {
    const { language } = useLanguage();
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [filter, setFilter] = useState<string>("all");

    const images: GalleryImage[] = [
        { id: 1, url: "https://images.unsplash.com/photo-1642084386112-cf73c9b7c27f?w=800", titleID: "Dekorasi Upacara Pemakaman", titleEN: "Funeral Ceremony Decoration", category: "ceremony" },
        { id: 2, url: "https://images.unsplash.com/photo-1636725833624-e3ced8395db5?w=800", titleID: "Peti Jenazah Premium", titleEN: "Premium Casket", category: "casket" },
        { id: 3, url: "https://images.unsplash.com/photo-1711615745585-59213ecfec47?w=800", titleID: "Prosesi dengan Lilin", titleEN: "Candle Procession", category: "ceremony" },
        { id: 4, url: "https://images.unsplash.com/photo-1686807561227-18e9e7f2d472?w=800", titleID: "Area Pemakaman Tenang", titleEN: "Peaceful Cemetery Area", category: "cemetery" },
        { id: 5, url: "https://images.unsplash.com/photo-1762967017690-96b4fae9be76?w=800", titleID: "Ruang Upacara Megah", titleEN: "Grand Ceremony Hall", category: "venue" },
        { id: 6, url: "https://images.unsplash.com/photo-1608181693153-4163b95fde52?w=800", titleID: "Rangkaian Bunga Duka", titleEN: "Funeral Flower Arrangement", category: "flowers" },
    ];

    const categories = [
        { id: "all", labelID: "Semua", labelEN: "All" },
        { id: "ceremony", labelID: "Upacara", labelEN: "Ceremony" },
        { id: "casket", labelID: "Peti Jenazah", labelEN: "Casket" },
        { id: "cemetery", labelID: "Pemakaman", labelEN: "Cemetery" },
        { id: "venue", labelID: "Tempat", labelEN: "Venue" },
        { id: "flowers", labelID: "Bunga", labelEN: "Flowers" },
    ];

    const content = {
        ID: { title: "Galeri Layanan Kami", subtitle: "Dokumentasi layanan dan fasilitas yang telah kami sediakan" },
        EN: { title: "Our Service Gallery", subtitle: "Documentation of services and facilities we have provided" },
    };

    const text = language === "ID" ? content.ID : content.EN;
    const filteredImages = filter === "all" ? images : images.filter((img) => img.category === filter);

    return (
        <section className="py-20 bg-gradient-to-br from-white via-[#DCEAF5]/20 to-white dark:from-[#0F172A] dark:via-[#1E293B]/50 dark:to-[#0F172A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl text-[#1F2937] dark:text-[#F9FAFB] mb-4" style={{ fontFamily: "Playfair Display, serif" }}>{text.title}</h2>
                    <p className="text-lg text-[#6B7280] dark:text-[#CBD5E1] max-w-2xl mx-auto">{text.subtitle}</p>
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }} className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button key={category.id} onClick={() => setFilter(category.id)} className={`px-6 py-2 rounded-full font-medium transition-all ${filter === category.id ? "bg-[#C8A45C] dark:bg-[#D4AF37] text-white shadow-lg" : "bg-[#F9FAFB] dark:bg-[#1E293B] text-[#6B7280] dark:text-[#CBD5E1] hover:bg-[#E5E7EB] dark:hover:bg-[#334155]"}`}>
                            {language === "ID" ? category.labelID : category.labelEN}
                        </button>
                    ))}
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredImages.map((image, index) => (
                        <motion.div key={image.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} whileHover={{ y: -10 }} className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg" onClick={() => setSelectedImage(image)}>
                            <div className="relative aspect-[4/3] overflow-hidden bg-[#F9FAFB] dark:bg-[#1E293B]">
                                <img src={image.url} alt={language === "ID" ? image.titleID : image.titleEN} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                                        <ZoomIn className="w-8 h-8 text-white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-white text-lg font-semibold">{language === "ID" ? image.titleID : image.titleEN}</h3>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredImages.length === 0 && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
                        <p className="text-[#6B7280] dark:text-[#CBD5E1]">{language === "ID" ? "Tidak ada gambar dalam kategori ini." : "No images in this category."}</p>
                    </motion.div>
                )}
            </div>

            {selectedImage && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedImage(null)}>
                    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }} className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setSelectedImage(null)} className="absolute -top-12 right-0 p-2 text-white hover:text-[#C8A45C] transition-colors">
                            <X className="w-8 h-8" />
                        </button>
                        <img src={selectedImage.url} alt={language === "ID" ? selectedImage.titleID : selectedImage.titleEN} className="w-full h-auto rounded-lg shadow-2xl" />
                        <div className="mt-4 text-center">
                            <h3 className="text-white text-2xl" style={{ fontFamily: "Playfair Display, serif" }}>{language === "ID" ? selectedImage.titleID : selectedImage.titleEN}</h3>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
}
