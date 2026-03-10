import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import Hero from "@/Sections/Hero";
import { WhyChooseUs } from "@/Sections/WhyChooseUs";
import { Stats } from "@/Sections/Stats";
import { Services } from "@/Sections/Service";
import { CoffinProducts } from "@/Sections/CoffinProducts";
import { useModal } from "@/hooks/useModal";
import { GallerySection } from "@/Sections/GalerySection";
import { Testimonials } from "@/Sections/Testimonials";
import { FAQ } from "@/Sections/FAQ";
import { OurTeam } from "@/Sections/OurTeam";
import { About } from "@/Sections/About";
import { CTA } from "@/Sections/CTA";
import { Contact } from "@/Sections/Contact";

interface Category {
    id: number;
    name: string;
    slug: string;
}

interface GaleryItem {
    id: number;
    name: string;
    photo: string;
    description: string | null;
    category: Category | null;
}

interface CoffinPhoto {
    id: number;
    photo: string;
}

interface CoffinItem {
    id: number;
    slug: string;
    nameID: string | null;
    nameEN: string | null;
    descriptionID: string | null;
    descriptionEN: string | null;
    photos: CoffinPhoto[];
    benefits: {
        id: number;
        slug: string;
        name: string | null;
        description: string | null;
    }[];
}

interface Props {
    language?: string;
    coffins: CoffinItem[];
    categories: Category[];
    galeries: GaleryItem[];
}

export default function Index({
    language,
    coffins,
    categories,
    galeries,
}: Props) {
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

    const scrollToContact = () => {
        const contact = document.getElementById("contact");
        if (contact) contact.scrollIntoView({ behavior: "smooth" });
    };

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/6281290000000", "_blank");
    };
    return (
        <AppLayout>
            <Head title="Home Page"></Head>
            <Hero
                language={language ?? "ID"}
                onServiceClick={handleServiceClick}
                onContactClick={handleContactClik}
            ></Hero>
            <WhyChooseUs></WhyChooseUs>
            <Stats></Stats>
            <Services onServiceDetailClick={handleServiceClick}></Services>

            {/* Products Section */}
            <CoffinProducts onOrderClick={handleCasketDetailClick} />

            {/* Gallery Section */}
            <GallerySection />

            <Testimonials />

            <FAQ />

            {/* Our Team Section */}
            <OurTeam />

            {/* About Section */}
            <About />

            {/* CTA Section */}
            <CTA
                onContactClick={scrollToContact}
                onWhatsAppClick={handleWhatsAppClick}
            />

            {/* Contact Section */}
            <Contact onWhatsAppClick={handleWhatsAppClick} />
        </AppLayout>
    );
}
