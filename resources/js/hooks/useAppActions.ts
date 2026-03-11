import { useModal } from "@/hooks/useModal";
import { useLanguage } from "@/hooks/useLanguage";

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

export function useAppActions() {
    const {
        setOrderFormOpen,
        setSelectedItem,
        setServiceDetailOpen,
        setSelectedService,
        selectedService,
        setCoffinDetailOpen,
        setSelectedCoffin,
    } = useModal();

    const { language } = useLanguage();

    const scrollToServices = () => {
        const element = document.getElementById("services");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleOrderClick = (item: string) => {
        setSelectedItem(item);
        setOrderFormOpen(true);
    };

    const handleServiceDetailClick = (serviceId: string) => {
        setSelectedService(serviceId);
        setServiceDetailOpen(true);
    };

    const handleOrderFromServiceDetail = () => {
        setSelectedItem(selectedService);
        setOrderFormOpen(true);
    };

    const handleCasketDetailClick = (casketId: string) => {
        setSelectedCoffin(casketId);
        setCoffinDetailOpen(true);
    };

    const handleBackFromCasketDetail = () => {
        setCoffinDetailOpen(false);
        setSelectedCoffin("");
    };

    const handleOrderFromCasketDetail = (casketId: string) => {
        setSelectedItem(casketId);
        setOrderFormOpen(true);
    };

    const handleWhatsAppClick = () => {
        const message =
            language === "ID"
                ? "Halo NEW EDEN, saya ingin menanyakan tentang layanan Anda."
                : "Hello NEW EDEN, I would like to inquire about your services.";
        const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleAIChatClick = () => {
        const message =
            language === "ID"
                ? "Fitur AI Personal sedang dalam pengembangan."
                : "AI Personal feature is under development.";
        alert(message);
    };

    const handleContactSubmit = (data: ContactFormData) => {
        const text =
            language === "ID"
                ? `Halo NEW EDEN,\n\nNama: ${data.name}\nEmail: ${data.email}\nTelepon: ${data.phone}\nSubjek: ${data.subject}\n\nPesan:\n${data.message}`
                : `Hello NEW EDEN,\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nSubject: ${data.subject}\n\nMessage:\n${data.message}`;
        const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, "_blank");
    };

    return {
        scrollToServices,
        scrollToContact,
        handleOrderClick,
        handleServiceDetailClick,
        handleOrderFromServiceDetail,
        handleCasketDetailClick,
        handleBackFromCasketDetail,
        handleOrderFromCasketDetail,
        handleWhatsAppClick,
        handleAIChatClick,
        handleContactSubmit,
    };
}
