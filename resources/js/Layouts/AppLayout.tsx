import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer";

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
        <div className="min-h-screen">
            <AnimatePresence mode="wait">
                {loading && <LoadingScreen key="loading" />}
            </AnimatePresence>
            <Navbar></Navbar>
            {!loading && children}
            <Footer></Footer>
        </div>
    );
}
