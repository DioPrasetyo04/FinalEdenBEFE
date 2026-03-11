import AppLayout from "@/Layouts/AppLayout";
import { Head } from "@inertiajs/react";
import Hero from "@/Sections/Hero";
import { WhyChooseUs } from "@/Sections/WhyChooseUs";
import { Stats } from "@/Sections/Stats";
import { Services } from "@/Sections/Services";
import { CoffinProducts } from "@/Sections/CoffinProducts";
import { About } from "@/Sections/About";
import { Gallery } from "@/Sections/Gallery";
import { Testimonials } from "@/Sections/Testimonials";
import { FAQ } from "@/Sections/FAQ";
import { OurTeam } from "@/Sections/OurTeam";
import { CTA } from "@/Sections/CTA";
import { Contact } from "@/Sections/Contact";
import { useModal } from "@/hooks/useModal";
import { useAppActions } from "@/hooks/useAppActions";
import { GallerySection } from "@/Sections/GalerySection";
import { Sponsors } from "@/Sections/Sponsors";
import { OrderForm } from "@/components/OrderForm";
import { ServiceDetail } from "@/components/ServiceDetail";
import { CoffinDetail } from "@/components/CoffinDetail";

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

interface Mitra {
    id: number;
    name: string;
    description: string;
    photo: string;
}

interface Team {
    id: number;
    name: string;
    email: string;
    phone: string | null;
    photo: string | null;
    job_title: string;
}

interface Stat {
    struktur_pengelola: number;
    editor: number;
    total_staff: number;
}

interface Props {
    coffins: CoffinItem[];
    categories: Category[];
    galeries: GaleryItem[];
    mitras: Mitra[];
    teams: Team[];
    team_stats: Stat;
}

export default function Index({
    coffins,
    categories,
    galeries,
    mitras,
    teams,
    team_stats,
}: Props) {
    const { 
        orderFormOpen, 
        setOrderFormOpen, 
        serviceDetailOpen, 
        setServiceDetailOpen, 
        selectedService, 
        selectedItem,
        coffinDetailOpen,
        setCoffinDetailOpen,
        selectedCoffin,
    } = useModal();

    const { 
        scrollToServices, 
        scrollToContact, 
        handleCasketDetailClick, 
        handleWhatsAppClick,
        handleOrderFromCasketDetail
    } = useAppActions();

    return (
        <AppLayout>
            <Head title="NEW EDEN - Layanan Kedukaan Profesional">
                <meta
                    name="description"
                    content="NEW EDEN menyediakan layanan kedukaan profesional dengan penuh kasih dan dedikasi. Melayani 24 jam."
                />
            </Head>
            <Hero
                onServiceClick={scrollToServices}
                onContactClick={scrollToContact}
            ></Hero>
            <WhyChooseUs></WhyChooseUs>
            <Stats></Stats>
            <Services></Services>

            {/* Products Section */}
            <CoffinProducts
                onCasketDetailClick={handleCasketDetailClick}
                coffins={coffins}
            />

            <Sponsors mitras={mitras} />

            {/* Gallery Section */}
            <GallerySection galeries={galeries} categories={categories} />

            <Testimonials />

            <FAQ />

            {/* Our Team Section */}
            <OurTeam teams={teams} stats={team_stats} />

            {/* About Section */}
            <About />

            {/* CTA Section */}
            <CTA
                onContactClick={scrollToContact}
                onWhatsAppClick={handleWhatsAppClick}
            />

            {/* Contact Section */}
            <Contact />

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
            <CoffinDetail
                isOpen={coffinDetailOpen}
                onClose={() => setCoffinDetailOpen(false)}
                coffinSlug={selectedCoffin}
                coffins={coffins}
                onOrderClick={handleOrderFromCasketDetail}
            />
        </AppLayout>
    );
}
