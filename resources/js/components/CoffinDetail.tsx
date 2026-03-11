import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface CoffinDetailProps {
    isOpen: boolean;
    onClose: () => void;
    coffinSlug: string;
    coffins: any[];
    onOrderClick: (slug: string) => void;
}

export function CoffinDetail({
    isOpen,
    onClose,
    coffinSlug,
    coffins,
    onOrderClick,
}: CoffinDetailProps) {
    const { language } = useLanguage();

    const coffin = coffins?.find((c) => c.slug === coffinSlug);
    const text =
        language === "ID"
            ? { features: "Benefit / Fitur", order: "Pesan Sekarang", close: "Tutup" }
            : { features: "Benefits / Features", order: "Order Now", close: "Close" };

    return (
        <AnimatePresence>
            {isOpen && coffin && (
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
                        className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-2xl max-w-4xl w-full my-8 relative overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 dark:bg-black/60 dark:hover:bg-black/80 backdrop-blur-md rounded-full transition-colors z-20 shadow-lg"
                        >
                            <X className="w-6 h-6 text-white" />
                        </button>

                        <div className="relative h-64 md:h-[400px] rounded-t-2xl overflow-hidden bg-[#F3F4F6] dark:bg-[#0F172A] flex items-center justify-center">
                            {coffin.photos && coffin.photos.length > 0 ? (
                                <Swiper
                                    modules={[Pagination, Autoplay]}
                                    pagination={{ clickable: true }}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    loop={coffin.photos.length > 1}
                                    className="w-full h-full"
                                >
                                    {coffin.photos.map((photoObj: any, idx: number) => (
                                        <SwiperSlide key={idx} className="w-full h-full flex items-center justify-center">
                                            <img
                                                src={photoObj.photo}
                                                alt={`${language === "ID" ? coffin.nameID : coffin.nameEN} - ${idx + 1}`}
                                                className="w-full h-full object-contain p-4 md:p-8"
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            ) : (
                                <span className="text-[#6B7280]">No Image Available</span>
                            )}
                            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10 pointer-events-none"></div>
                            <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none">
                                <h2
                                    className="text-3xl md:text-4xl text-white mb-2"
                                    style={{ fontFamily: "Playfair Display, serif" }}
                                >
                                    {language === "ID" ? coffin.nameID : coffin.nameEN}
                                </h2>
                            </div>
                        </div>

                        <div className="p-6 md:p-8 space-y-6">
                            <div
                                className="text-lg text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed prose prose-sm dark:prose-invert max-w-none"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        language === "ID"
                                            ? coffin.descriptionID
                                            : coffin.descriptionEN,
                                }}
                            />

                            {coffin.benefits && coffin.benefits.length > 0 && (
                                <div>
                                    <h3
                                        className="text-2xl text-[#1F2937] dark:text-[#F9FAFB] mb-4"
                                        style={{ fontFamily: "Playfair Display, serif" }}
                                    >
                                        {text.features}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {coffin.benefits.map((benefit: any, index: number) => (
                                            <motion.div
                                                key={benefit.id || index}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="flex-shrink-0 w-6 h-6 bg-[#C8A45C] dark:bg-[#D4AF37] rounded-full flex items-center justify-center mt-0.5">
                                                    <Check className="w-3.5 h-3.5 text-white" />
                                                </div>
                                                <div className="text-[#6B7280] dark:text-[#CBD5E1] w-full">
                                                    <strong className="block text-[#1F2937] dark:text-[#F9FAFB] text-base mb-1">
                                                        {language === "ID"
                                                            ? benefit.nameID || benefit.name
                                                            : benefit.nameEN || benefit.name}
                                                    </strong>
                                                    {(language === "ID"
                                                            ? benefit.descriptionID || benefit.description
                                                            : benefit.descriptionEN || benefit.description) && (
                                                        <div
                                                            className="text-sm prose prose-sm dark:prose-invert max-w-none mt-1 [&>p]:m-0"
                                                            dangerouslySetInnerHTML={{
                                                                __html: language === "ID"
                                                                    ? benefit.descriptionID || benefit.description
                                                                    : benefit.descriptionEN || benefit.description
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-gray-100 dark:border-[#334155]">
                                <motion.button
                                    onClick={() => {
                                        onClose();
                                        onOrderClick(coffin.slug);
                                    }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-[#C8A45C] dark:bg-[#D4AF37] text-white rounded-lg hover:bg-[#B69449] dark:hover:bg-[#C29F2E] transition-all font-medium shadow-lg"
                                >
                                    {text.order} <ArrowRight className="w-5 h-5" />
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
    );
}
