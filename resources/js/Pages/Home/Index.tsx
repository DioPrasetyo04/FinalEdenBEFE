import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import Hero from "@/Sections/Hero";
import { WhyChooseUs } from "@/Sections/WhyChooseUs";
import { Stats } from "@/Sections/Stats";
import { Services } from "@/Sections/Services";
import { CoffinProducts } from "@/Sections/CoffinProducts";
import { About } from "@/Sections/About";
import { Sponsors } from "@/Sections/Sponsors";
import { Gallery } from "@/Sections/Gallery";
import { Testimonials } from "@/Sections/Testimonials";
import { FAQ } from "@/Sections/FAQ";
import { OurTeam } from "@/Sections/OurTeam";
import { CTA } from "@/Sections/CTA";
import { Contact } from "@/Sections/Contact";
import { useModal } from "@/hooks/useModal";

export default function Index() {
    const { setSelectedCoffin, setCoffinDetailOpen } = useModal();

    const handleServiceClick = () => {
        const service = document.getElementById("services");
        if (service) service.scrollIntoView({ behavior: "smooth" });
    };

    const handleContactClick = () => {
        const contc = document.getElementById("contact");
        if (contc) contc.scrollIntoView({ behavior: "smooth" });
    };

    const handleCasketDetailClick = (casketId: string) => {
        setSelectedCoffin(casketId);
        setCoffinDetailOpen(true);
    };

    const handleWhatsAppClick = () => {
        window.open("https://wa.me/6281234567890", "_blank");
    };

    return (
        <AppLayout>
            <Head title="NEW EDEN - Layanan Kedukaan Profesional">
                <meta name="description" content="NEW EDEN menyediakan layanan kedukaan profesional dengan penuh kasih dan dedikasi. Melayani 24 jam." />
            </Head>

            {/* Hero Section */}
            <Hero
                onServiceClick={handleServiceClick}
                onContactClick={handleContactClick}
            />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Stats Counter */}
            <Stats />

            {/* Services */}
            <Services />

            {/* Products */}
            <CoffinProducts onOrderClick={handleCasketDetailClick} />

            {/* About Us */}
            <About />

            {/* Partners & Sponsors */}
            <Sponsors />

            {/* Gallery */}
            <Gallery />

            {/* Testimonials */}
            <Testimonials />

            {/* FAQ */}
            <FAQ />

            {/* Our Team */}
            <OurTeam />

            {/* Call To Action */}
            <CTA onContactClick={handleContactClick} onWhatsAppClick={handleWhatsAppClick} />

            {/* Contact */}
            <Contact />
        </AppLayout>
    );
}
