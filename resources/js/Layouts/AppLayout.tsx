import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar/Navbar";

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const [loading, setLoading] = useState(true);

    // loading simluation
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen  bg-[#B69449]/80 dark:bg-[#B69449]/80">
            <AnimatePresence mode="wait">
                {loading && <LoadingScreen key="loading" />}
            </AnimatePresence>
            <Navbar></Navbar>
            {!loading && children}
            <Footer></Footer>
        </div>
    );
}
