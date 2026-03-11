import { motion } from "motion/react";
import { Users, Award, Briefcase } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

// interface TeamMember moved to backend logic

interface OurTeamProps {
    teams: any[];
    stats?: any;
}

export function OurTeam({ teams, stats }: OurTeamProps) {
    const { language } = useLanguage();

    const defaultStats = [
        {
            icon: Users,
            labelID: "Struktur Pengelola",
            labelEN: "Management Structure",
            count: stats.struktur_pengelola ?? 0,
        },
        {
            icon: Award,
            labelID: "Manajemen Operasional",
            labelEN: "Operational Management",
            count: stats.editor ?? 0,
        },
        {
            icon: Briefcase,
            labelID: "Total Staff",
            labelEN: "Total Staff",
            count: stats.total_staff ?? 0,
        },
    ];

    const statsData = defaultStats;

    const content = {
        ID: {
            badge: "TIM KAMI",
            title: "Manajemen dan Staf Profesional",
            subtitle: "Kenali tim profesional kami yang berdedikasi",
        },
        EN: {
            badge: "OUR TEAM",
            title: "Management Structure and Teaching Staff",
            subtitle: "Get to know our team of professionals who are dedicated",
        },
    };

    const text = language === "ID" ? content.ID : content.EN;

    return (
        <section className="py-20 bg-gradient-to-br from-white via-[#F9FAFB] to-white dark:from-[#0F172A] dark:via-[#1E293B] dark:to-[#0F172A]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="inline-block px-6 py-2 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 text-[#C8A45C] dark:text-[#D4AF37] rounded-full text-sm font-medium mb-4"
                    >
                        {text.badge}
                    </motion.span>
                    <h2
                        className="text-4xl md:text-5xl text-[#1F2937] dark:text-[#F9FAFB] mb-4"
                        style={{ fontFamily: "Playfair Display, serif" }}
                    >
                        {text.title}
                    </h2>
                    <p className="text-lg text-[#6B7280] dark:text-[#CBD5E1] max-w-2xl mx-auto">
                        {text.subtitle}
                    </p>
                </motion.div>

                {/* Team Members Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {teams.map((team: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -10 }}
                            className="bg-white dark:bg-[#1E293B] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                                {team.photo ? (
                                    <motion.img
                                        src={team.photo}
                                        alt={team.name}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                ) : (
                                    <Users className="w-20 h-20 text-gray-300 dark:text-gray-600" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                            </div>

                            {/* Info */}
                            <div className="p-6 text-center">
                                <h3
                                    className="text-xl font-bold text-[#1F2937] dark:text-[#F9FAFB] mb-2"
                                    style={{
                                        fontFamily: "Playfair Display, serif",
                                    }}
                                >
                                    {team.name}
                                </h3>
                                <p className="text-[#6B7280] dark:text-[#CBD5E1]">
                                    {team.job_title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
                >
                    {statsData.map((stat: any, index: number) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.05 }}
                            className="bg-white dark:bg-[#1E293B] rounded-xl p-6 shadow-lg border border-[#E5E7EB] dark:border-[#334155] flex items-center gap-4"
                        >
                            <div className="flex-shrink-0 w-14 h-14 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 rounded-full flex items-center justify-center">
                                <stat.icon className="w-7 h-7 text-[#C8A45C] dark:text-[#D4AF37]" />
                            </div>
                            <div>
                                <p className="text-[#6B7280] dark:text-[#CBD5E1] text-sm mb-1">
                                    {language === "ID"
                                        ? stat.labelID
                                        : stat.labelEN}
                                </p>
                                <p
                                    className="text-3xl font-bold text-[#C8A45C] dark:text-[#D4AF37]"
                                    style={{
                                        fontFamily: "Playfair Display, serif",
                                    }}
                                >
                                    {stat.count}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
