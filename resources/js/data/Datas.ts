import { FeatureCard } from "@/types/FeatureCard";
import { Coffin } from "@/types/ProductCoffinType";
import { ServiceCard } from "@/types/service";
import { StatItem } from "@/types/stats";
import {
    Award,
    Camera,
    Car,
    Clock,
    Droplet,
    Flame,
    Heart,
    Layers,
    MapPin,
    Package,
    Plane,
    Shield,
    Users,
    Zap,
} from "lucide-react";

export const contentHero = {
    ID: {
        badge: "MELAYANI DENGAN HATI",
        title: "NEW EDEN",
        subtitle: "Hadir Untuk Menguatkan",
        description:
            "Dalam masa duka, keluarga dan gereja membutuhkan dukungan serta bantuan yang dapat diandalkan. Kami hadir membantu pelayanan kedukaan dengan sikap hormat, empati, dan tanggung jawab.",
        btnPrimary: "Lihat Layanan",
        btnSecondary: "Hubungi Kami",
    },
    EN: {
        badge: "SERVING WITH HEART",
        title: "NEW EDEN",
        subtitle: "Here To Support You",
        description:
            "In times of grief, families and churches need reliable support and assistance. We are here to help with funeral services with respect, empathy, and responsibility.",
        btnPrimary: "View Services",
        btnSecondary: "Contact Us",
    },
};

export const heroImages = [
    "https://images.unsplash.com/photo-1715760620307-1d6bfdcb48ab?w=1080",
    "https://images.unsplash.com/photo-1644697700305-6f8fa8cb3335?w=1080",
    "https://images.unsplash.com/photo-1648547254224-ea84e019798f?w=1080",
];

export const featuresWhyChooseUs: FeatureCard[] = [
    {
        icon: Clock,
        titleID: "Pelayanan 24 Jam",
        titleEN: "24 Hour Service",
        descID: "Kami siap melayani Anda kapan saja, siang atau malam hari dengan respons cepat",
        descEN: "We are ready to serve you anytime, day or night with quick response",
    },
    {
        icon: Zap,
        titleID: "Respon Cepat & Tepat",
        titleEN: "Quick & Accurate Response",
        descID: "Tim kami bergerak cepat dengan solusi yang tepat untuk setiap kebutuhan",
        descEN: "Our team moves quickly with the right solutions for every need",
    },
    {
        icon: Award,
        titleID: "Berpengalaman dan Profesional",
        titleEN: "Experienced & Professional",
        descID: "Dipercaya oleh banyak keluarga dengan pengalaman bertahun-tahun",
        descEN: "Trusted by many families with years of experience",
    },
];

export const contentWhyChooseUs = {
    ID: {
        title: "Mengapa Memilih Kami",
        subtitle:
            "Komitmen kami adalah memberikan pelayanan terbaik dengan penuh empati",
    },
    EN: {
        title: "Why Choose Us",
        subtitle: "Our commitment is to provide the best service with empathy",
    },
};

export const stats: StatItem[] = [
    {
        icon: Users,
        value: 500,
        labelID: "Keluarga Dilayani",
        labelEN: "Families Served",
        suffix: "+",
    },
    {
        icon: Clock,
        value: 10,
        labelID: "Tahun Pengalaman",
        labelEN: "Years Experience",
        suffix: "+",
    },
    {
        icon: Heart,
        value: 98,
        labelID: "Tingkat Kepuasan",
        labelEN: "Satisfaction Rate",
        suffix: "%",
    },
    {
        icon: Award,
        value: 24,
        labelID: "Layanan Jam",
        labelEN: "Hour Service",
        suffix: "/7",
    },
];

export const contentStats = {
    ID: {
        title: "Dipercaya Oleh Keluarga Indonesia",
        subtitle: "Lebih dari satu dekade melayani dengan sepenuh hati",
    },
    EN: {
        title: "Trusted by Indonesian Families",
        subtitle: "Over a decade of serving wholeheartedly",
    },
};

export const navItems = [
    { id: "home", labelID: "Home", labelEN: "Home" },
    { id: "services", labelID: "Layanan", labelEN: "Services" },
    { id: "products", labelID: "Produk Peti", labelEN: "Coffin Products" },
    { id: "about", labelID: "Tentang Kami", labelEN: "About Us" },
    { id: "contact", labelID: "Kontak", labelEN: "Contact" },
];

export const productCoffins: Coffin[] = [
    {
        id: "economy-1",
        nameID: "Peti Kayu Standar",
        nameEN: "Standard Wooden Casket",
        category: "Ekonomis",
        categoryEN: "Economy",
        description: "Peti murah dengan kayu standard harga terkangkau",
        image: "https://images.unsplash.com/photo-1642084386112-cf73c9b7c27f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmxvd2VycyUyMHdyZWF0aHxlbnwxfHx8fDE3NzI3MjkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "mid-1",
        nameID: "Peti Kayu Premium",
        nameEN: "Premium Wooden Casket",
        category: "Menengah",
        categoryEN: "Mid-Range",
        description: "Peti murah dengan kayu standard harga terkangkau",
        image: "https://images.unsplash.com/photo-1711615745585-59213ecfec47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcmlhbCUyMGNhbmRsZSUyMGxpZ2h0fGVufDF8fHx8MTc3MjcyOTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "premium-1",
        nameID: "Peti Mahoni Mewah",
        nameEN: "Luxury Mahogany Casket",
        category: "Premium",
        categoryEN: "Premium",
        description: "Peti murah dengan kayu standard harga terkangkau",
        image: "https://images.unsplash.com/photo-1636725833624-e3ced8395db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGRvdmUlMjBwZWFjZXxlbnwxfHx8fDE3NzI3MjkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
        id: "premium-2",
        nameID: "Peti Jati Elegan",
        nameEN: "Elegant Teak Casket",
        category: "Premium",
        categoryEN: "Premium",
        description: "Peti murah dengan kayu standard harga terkangkau",
        image: "https://images.unsplash.com/photo-1762967017690-96b4fae9be76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MjcyOTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    },
];

export const contentProductCoffin = {
    ID: {
        title: "Produk Peti Jenazah",
        subtitle:
            "Pilihan peti jenazah berkualitas dengan berbagai model dan harga",
        btnText: "Pesan Sekarang",
    },
    EN: {
        title: "Casket Products",
        subtitle: "Quality casket options with various models and prices",
        btnText: "Order Now",
    },
};

export const services: ServiceCard[] = [
    {
        icon: Package,
        titleID: "Paket Peti Jenazah",
        titleEN: "Casket Package",
        descID: "Berbagai pilihan peti jenazah berkualitas dengan desain yang elegan",
        descEN: "Various quality casket options with elegant designs",
        id: "casket",
    },
    {
        icon: Car,
        titleID: "Mobil Jenazah",
        titleEN: "Hearse Service",
        descID: "Layanan transportasi jenazah yang aman dan nyaman",
        descEN: "Safe and comfortable hearse transportation service",
        id: "hearse",
    },
    {
        icon: Plane,
        titleID: "Cargo Jenazah",
        titleEN: "Cargo Service",
        descID: "Pengurusan pengiriman jenazah antar kota dan negara",
        descEN: "Inter-city and international deceased cargo arrangements",
        id: "cargo",
    },
    {
        icon: Droplet,
        titleID: "Formalin",
        titleEN: "Embalming",
        descID: "Layanan pengawetan jenazah dengan prosedur yang profesional",
        descEN: "Professional embalming service",
        id: "embalming",
    },
    {
        icon: Camera,
        titleID: "Foto & Video Dokumentasi",
        titleEN: "Photo & Video Documentation",
        descID: "Dokumentasi acara pemakaman dengan penuh kehormatan",
        descEN: "Respectful funeral ceremony documentation",
        id: "documentation",
    },
    {
        icon: Flame,
        titleID: "Layanan Kremasi",
        titleEN: "Cremation Service",
        descID: "Proses kremasi yang dilakukan dengan penuh hormat",
        descEN: "Respectful cremation process",
        id: "cremation",
    },
    {
        icon: MapPin,
        titleID: "Tanah Makam Swasta",
        titleEN: "Private Burial Plot",
        descID: "Penyediaan dan pengurusan lahan pemakaman pribadi",
        descEN: "Private burial plot provision and management",
        id: "plot",
    },
    {
        icon: Layers,
        titleID: "Pengurusan Gali Kerangka",
        titleEN: "Exhumation Service",
        descID: "Layanan pemindahan jenazah secara profesional",
        descEN: "Professional exhumation service",
        id: "exhumation",
    },
    {
        icon: Shield,
        titleID: "Voordrijver / Pengawalan",
        titleEN: "Escort Service",
        descID: "Pengawalan prosesi pemakaman dengan tertib dan hormat",
        descEN: "Orderly and respectful funeral procession escort",
        id: "escort",
    },
];

export const contentService = {
    ID: {
        title: "Layanan Kami",
        subtitle:
            "Solusi lengkap untuk semua kebutuhan pelayanan kedukaan Anda",
        btnText: "Lihat Detail",
    },
    EN: {
        title: "Our Services",
        subtitle: "Complete solutions for all your funeral service needs",
        btnText: "View Details",
    },
};
