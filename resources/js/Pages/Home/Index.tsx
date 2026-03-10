import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import Hero from "@/Sections/Hero";
import { WhyChooseUs } from "@/Sections/WhyChooseUs";
import { Stats } from "@/Sections/Stats";
import { Services } from "@/Sections/Service";
import { CoffinProducts } from "@/Sections/CoffinProducts";
import { useModal } from "@/hooks/useModal";
import { ModalProvider } from "@/context/ModalContext";

interface props {
    language: string;
}

export default function Index({ language }: props) {
    const { setSelectedCoffin, setCoffinDetailOpen } = useModal();

    const handleServiceClick = () => {
        const service = document.getElementById("services");
        if (service) service.scrollIntoView({ behavior: "smooth" });
    };

    const handleContactClik = () => {
        const contc = document.getElementById("contact");
        if (contc) contc.scrollIntoView({ behavior: "smooth" });
    };

    const handleCasketDetailClick = (casketId: string) => {
        setSelectedCoffin(casketId);
        setCoffinDetailOpen(true);
    };
    return (
        <AppLayout>
            <Head title="Home Page"></Head>
            <Hero
                language={language}
                onServiceClick={handleServiceClick}
                onContactClick={handleContactClik}
            ></Hero>
            <WhyChooseUs></WhyChooseUs>
            <Stats></Stats>
            <Services onServiceDetailClick={handleServiceClick}></Services>

            {/* Products Section */}
            <CoffinProducts onOrderClick={handleCasketDetailClick} />
        </AppLayout>
    );
}
