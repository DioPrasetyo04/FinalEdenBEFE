import { router } from "@inertiajs/react";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";

interface NotFoundProps {
    type?: "coffin" | "category" | "general";
    message?: string;
}

const typeContent = {
    coffin: {
        code: "404",
        title: "Peti Tidak Ditemukan",
        titleEN: "Coffin Not Found",
        subtitle:
            "Maaf, produk peti jenazah yang Anda cari tidak tersedia atau sudah tidak ada.",
        icon: "⚰️",
    },
    category: {
        code: "404",
        title: "Kategori Tidak Ditemukan",
        titleEN: "Category Not Found",
        subtitle:
            "Kategori yang Anda cari tidak tersedia. Mungkin telah dipindahkan atau dihapus.",
        icon: "🏷️",
    },
    general: {
        code: "404",
        title: "Halaman Tidak Ditemukan",
        titleEN: "Page Not Found",
        subtitle: "Halaman yang Anda cari tidak tersedia atau telah dipindahkan.",
        icon: "🔍",
    },
};

export default function NotFound({ type = "general", message }: NotFoundProps) {
    const content = typeContent[type] ?? typeContent.general;

    const handleGoHome = () => {
        router.visit("/");
    };

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <AppLayout>
            <Head title="404 - Tidak Ditemukan" />

            <div className="min-h-screen bg-white dark:bg-[#0A0F1E] flex items-center justify-center relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl" />
                    {/* Subtle grid */}
                    <div
                        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#C8A45C 1px, transparent 1px), linear-gradient(to right, #C8A45C 1px, transparent 1px)",
                            backgroundSize: "60px 60px",
                        }}
                    />
                </div>

                <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
                    {/* Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 200,
                            damping: 15,
                            delay: 0.1,
                        }}
                        className="text-7xl mb-6 select-none"
                    >
                        {content.icon}
                    </motion.div>

                    {/* 404 Number */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span
                            className="block text-[8rem] sm:text-[10rem] leading-none font-black text-[#C8A45C]/20 dark:text-[#D4AF37]/15 select-none"
                            style={{ fontFamily: "Playfair Display, serif" }}
                        >
                            {content.code}
                        </span>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="-mt-6 mb-4"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 text-[#C8A45C] dark:text-[#D4AF37] rounded-full text-xs font-semibold tracking-wider uppercase mb-5">
                            <Search className="w-3.5 h-3.5" />
                            Tidak Ditemukan
                        </div>

                        <h1
                            className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111827] dark:text-[#F9FAFB] mb-3 tracking-tight"
                            style={{ fontFamily: "Playfair Display, serif" }}
                        >
                            {content.title}
                        </h1>
                        <p className="text-[#6B7280] dark:text-[#CBD5E1] text-base sm:text-lg leading-relaxed">
                            {message ?? content.subtitle}
                        </p>
                    </motion.div>

                    {/* Divider */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="w-24 h-0.5 bg-gradient-to-r from-transparent via-[#C8A45C] dark:via-[#D4AF37] to-transparent mx-auto my-8"
                    />

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        {/* Back Button */}
                        <button
                            onClick={handleGoBack}
                            className="group inline-flex items-center gap-2 px-6 py-3 border border-[#C8A45C]/30 dark:border-[#D4AF37]/30 text-[#C8A45C] dark:text-[#D4AF37] rounded-lg text-sm font-medium hover:bg-[#C8A45C]/10 dark:hover:bg-[#D4AF37]/10 transition-all duration-300"
                        >
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
                            Kembali
                        </button>

                        {/* Home Button */}
                        <button
                            onClick={handleGoHome}
                            className="group inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#C8A45C] to-[#B8943C] hover:from-[#D4AF37] hover:to-[#C8A45C] text-white rounded-lg text-sm font-semibold shadow-lg shadow-[#C8A45C]/20 hover:shadow-[#C8A45C]/40 transition-all duration-300 hover:scale-[1.02]"
                        >
                            <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                            Kembali ke Home
                        </button>
                    </motion.div>

                    {/* Footer hint */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                        className="mt-12 text-xs text-[#9CA3AF] dark:text-[#6B7280]"
                    >
                        Butuh bantuan?{" "}
                        <button
                            onClick={() => {
                                router.visit("/");
                                setTimeout(() => {
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" });
                                }, 500);
                            }}
                            className="text-[#C8A45C] dark:text-[#D4AF37] hover:underline"
                        >
                            Hubungi kami
                        </button>
                    </motion.p>
                </div>
            </div>
        </AppLayout>
    );
}
