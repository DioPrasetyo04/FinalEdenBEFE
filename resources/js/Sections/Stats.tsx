import { motion } from "motion/react";
import { useEffect, useState, useRef } from "react";
import { Users, Heart, Award, Clock } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface StatItem {
    icon: typeof Users;
    value: number;
    labelID: string;
    labelEN: string;
    suffix: string;
}

function Counter({ end, duration = 2 }: { end: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.3 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => { if (ref.current) observer.unobserve(ref.current); };
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let startTime: number;
        let animationFrame: number;
        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / (duration * 1000);
            if (progress < 1) { setCount(Math.floor(end * progress)); animationFrame = requestAnimationFrame(animate); }
            else { setCount(end); }
        };
        animationFrame = requestAnimationFrame(animate);
        return () => { if (animationFrame) cancelAnimationFrame(animationFrame); };
    }, [end, duration, isVisible]);

    return <div ref={ref}>{count}</div>;
}

export function Stats() {
    const { language } = useLanguage();

    const stats: StatItem[] = [
        { icon: Users, value: 500, labelID: "Keluarga Dilayani", labelEN: "Families Served", suffix: "+" },
        { icon: Clock, value: 10, labelID: "Tahun Pengalaman", labelEN: "Years Experience", suffix: "+" },
        { icon: Heart, value: 98, labelID: "Tingkat Kepuasan", labelEN: "Satisfaction Rate", suffix: "%" },
        { icon: Award, value: 24, labelID: "Layanan Jam", labelEN: "Hour Service", suffix: "/7" },
    ];

    const content = {
        ID: { title: "Dipercaya Oleh Keluarga Indonesia", subtitle: "Lebih dari satu dekade melayani dengan sepenuh hati" },
        EN: { title: "Trusted by Indonesian Families", subtitle: "Over a decade of serving wholeheartedly" },
    };

    const text = language === "ID" ? content.ID : content.EN;

    return (
        <section className="py-20 bg-gradient-to-br from-[#C8A45C] via-[#B69449] to-[#C8A45C] dark:from-[#D4AF37] dark:via-[#C29F2E] dark:to-[#D4AF37] relative overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-white mb-4" style={{ fontFamily: "Playfair Display, serif" }}>{text.title}</h2>
                    <p className="text-xl text-white/90">{text.subtitle}</p>
                </motion.div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="text-center">
                            <motion.div whileHover={{ rotate: 360, scale: 1.1 }} transition={{ duration: 0.6 }} className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4">
                                <stat.icon className="w-8 h-8 text-white" />
                            </motion.div>
                            <div className="flex items-center justify-center mb-2">
                                <div className="text-5xl md:text-6xl text-white" style={{ fontFamily: "Playfair Display, serif" }}><Counter end={stat.value} /></div>
                                <span className="text-4xl md:text-5xl text-white ml-1" style={{ fontFamily: "Playfair Display, serif" }}>{stat.suffix}</span>
                            </div>
                            <p className="text-white/90 text-lg font-medium">{language === "ID" ? stat.labelID : stat.labelEN}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
