import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LoadingScreen } from "@/components/LoadingScreen";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { FloatingButtons } from "@/components/FloatingButtons";
import { OrderForm } from "@/components/OrderForm";
import { ServiceDetail } from "@/components/ServiceDetail";
import { useModal } from "@/hooks/useModal";

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    const [loading, setLoading] = useState(true);
    const {
        orderFormOpen,
        setOrderFormOpen,
        serviceDetailOpen,
        setServiceDetailOpen,
        selectedService,
        selectedItem,
    } = useModal();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="min-h-screen bg-white dark:bg-[#0A0F1E] overflow-x-hidden">
            <AnimatePresence mode="wait">
                {loading && <LoadingScreen key="loading" />}
            </AnimatePresence>
            <Navbar></Navbar>
            {!loading && children}
            <Footer></Footer>
            <ScrollToTop />
            <FloatingButtons />
            <OrderForm
                isOpen={orderFormOpen}
                onClose={() => setOrderFormOpen(false)}
                selectedItem={selectedItem}
            />
            <ServiceDetail
                isOpen={serviceDetailOpen}
                onClose={() => setServiceDetailOpen(false)}
                serviceId={selectedService}
                onOrderClick={() => setOrderFormOpen(true)}
            />
        </div>
    );
}
