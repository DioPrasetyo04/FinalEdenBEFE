import React from "react";
import { motion } from "framer-motion";
import { StatsComponentProps } from "@/types/stats";
import { Counter } from "@/helpers/helpers";
import { useLanguage } from "@/hooks/useLanguage";

const StatsComponents = ({ index, stats }: StatsComponentProps) => {
    const { language } = useLanguage();
    let Icon = stats.icon;
    return (
        <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="text-center"
        >
            <div key={index}>
                {/* Icon */}
                <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full mb-4"
                >
                    <Icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Number */}
                <div className="flex items-center justify-center mb-2">
                    <div
                        className="text-5xl md:text-6xl text-white"
                        style={{
                            fontFamily: "Playfair Display, serif",
                        }}
                    >
                        <Counter end={stats.value} />
                    </div>
                    <span
                        className="text-4xl md:text-5xl text-white ml-1"
                        style={{
                            fontFamily: "Playfair Display, serif",
                        }}
                    >
                        {stats.suffix}
                    </span>
                </div>

                {/* Label */}
                <p className="text-white/90 text-lg font-medium">
                    {language === "ID" ? stats.labelID : stats.labelEN}
                </p>
            </div>
        </motion.div>
    );
};

export default StatsComponents;
