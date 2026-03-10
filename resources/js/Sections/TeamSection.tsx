import { motion } from "framer-motion";
import { Users, Briefcase, GraduationCap } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

interface TeamMember {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    photo: string | null;
    role: string;
    job_title: string;
}

interface TeamStats {
    struktur_pengelola: number;
    tenaga_pendidik: number;
    total_staff: number;
}

interface TeamSectionProps {
    team: TeamMember[];
    team_stats: TeamStats;
}

const statCards = (stats: TeamStats, language: string) => [
    {
        icon: Users,
        label: language === "ID" ? "Struktur Pengelola" : "Management Structure",
        value: stats.struktur_pengelola,
    },
    {
        icon: GraduationCap,
        label: language === "ID" ? "Tenaga Pendidik" : "Educators",
        value: stats.tenaga_pendidik,
    },
    {
        icon: Briefcase,
        label: language === "ID" ? "Total Staff" : "Total Staff",
        value: stats.total_staff,
    },
];

export function TeamSection({ team, team_stats }: TeamSectionProps) {
    const { language } = useLanguage();

    const stats = statCards(team_stats, language);

    return (
        <section
            id="team"
            className="py-24 lg:py-32 bg-white dark:bg-[#0A0F1E] relative overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-80 h-80 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 text-[#C8A45C] dark:text-[#D4AF37] rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
                    >
                        <Users className="w-3.5 h-3.5" />
                        {language === "ID" ? "Tim Kami" : "Our Team"}
                    </motion.div>

                    <h2
                        className="text-4xl md:text-5xl lg:text-6xl text-[#111827] dark:text-[#F9FAFB] mb-4 tracking-tight"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        {language === "ID"
                            ? "Manajemen dan Staf Profesional"
                            : "Professional Management & Staff"}
                    </h2>
                    <p className="text-lg text-[#6B7280] dark:text-[#CBD5E1] max-w-2xl mx-auto">
                        {language === "ID"
                            ? "Kenali tim profesional kami yang berdedikasi"
                            : "Meet our dedicated professional team"}
                    </p>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
                    {team.length > 0 ? (
                        team.map((member, index) => (
                            <motion.div
                                key={member.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-40px" }}
                                transition={{
                                    delay: index * 0.08,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="group text-center"
                            >
                                <div className="relative mx-auto mb-4 overflow-hidden rounded-2xl bg-[#F3F4F6] dark:bg-[#1E293B] aspect-[3/4] shadow-sm group-hover:shadow-xl transition-shadow duration-500">
                                    {member.photo ? (
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center">
                                            <span className="text-4xl font-bold text-[#C8A45C]/40 dark:text-[#D4AF37]/40">
                                                {member.name
                                                    .split(" ")
                                                    .slice(0, 2)
                                                    .map((w) => w[0])
                                                    .join("")
                                                    .toUpperCase()}
                                            </span>
                                        </div>
                                    )}
                                    {/* Subtle gradient */}
                                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <h3
                                    className="text-base font-semibold text-[#111827] dark:text-[#F9FAFB] mb-1 line-clamp-2"
                                    style={{ fontFamily: "Playfair Display, serif" }}
                                >
                                    {member.name}
                                </h3>
                                <p className="text-sm text-[#C8A45C] dark:text-[#D4AF37]">
                                    {member.job_title}
                                </p>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-4 text-center py-16 text-[#9CA3AF] dark:text-[#6B7280]">
                            {language === "ID"
                                ? "Belum ada data tim."
                                : "No team members yet."}
                        </div>
                    )}
                </div>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="flex flex-wrap gap-4 justify-center"
                >
                    {stats.map((stat, i) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={i}
                                className="flex items-center gap-4 px-6 py-4 bg-[#FAFAFA] dark:bg-[#1E293B] rounded-2xl border border-[#F3F4F6] dark:border-[#2D3748] min-w-[160px]"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 flex items-center justify-center flex-shrink-0">
                                    <Icon className="w-5 h-5 text-[#C8A45C] dark:text-[#D4AF37]" />
                                </div>
                                <div>
                                    <p className="text-xs text-[#6B7280] dark:text-[#CBD5E1] mb-0.5">
                                        {stat.label}
                                    </p>
                                    <p className="text-2xl font-bold text-[#C8A45C] dark:text-[#D4AF37]">
                                        {stat.value}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
