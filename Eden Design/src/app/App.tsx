import { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollToTop } from "./components/ScrollToTop";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { Products } from "./components/Products";
import { Sponsors } from "./components/Sponsors";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { OurTeam } from "./components/OurTeam";
import { About } from "./components/About";
import { CTA } from "./components/CTA";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { OrderForm } from "./components/OrderForm";
import { ServiceDetail } from "./components/ServiceDetail";
import { FloatingButtons } from "./components/FloatingButtons";
import CasketDetail from "./components/CasketDetail";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [language, setLanguage] = useState("ID");
  const [orderFormOpen, setOrderFormOpen] = useState(false);
  const [serviceDetailOpen, setServiceDetailOpen] =
    useState(false);
  const [casketDetailOpen, setCasketDetailOpen] =
    useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [selectedCasket, setSelectedCasket] = useState("");

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Apply dark mode class to html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Smooth scroll to services section
  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to contact section
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Open order form with selected service/product
  const handleOrderClick = (item: string) => {
    setSelectedItem(item);
    setOrderFormOpen(true);
  };

  // Handle service detail click
  const handleServiceDetailClick = (serviceId: string) => {
    setSelectedService(serviceId);
    setServiceDetailOpen(true);
  };

  // Handle order from service detail
  const handleOrderFromServiceDetail = () => {
    setSelectedItem(selectedService);
    setOrderFormOpen(true);
  };

  // Handle casket detail click
  const handleCasketDetailClick = (casketId: string) => {
    setSelectedCasket(casketId);
    setCasketDetailOpen(true);
  };

  // Handle back from casket detail
  const handleBackFromCasketDetail = () => {
    setCasketDetailOpen(false);
    setSelectedCasket("");
  };

  // Handle order from casket detail
  const handleOrderFromCasketDetail = (casketId: string) => {
    setSelectedItem(casketId);
    setOrderFormOpen(true);
  };

  // Open WhatsApp chat
  const handleWhatsAppClick = () => {
    const message =
      language === "ID"
        ? "Halo NEW EDEN, saya ingin menanyakan tentang layanan Anda."
        : "Hello NEW EDEN, I would like to inquire about your services.";
    const whatsappUrl = `https://wa.me/6281234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  // Handle AI Chat click
  const handleAIChatClick = () => {
    const message =
      language === "ID"
        ? "Fitur AI Personal sedang dalam pengembangan."
        : "AI Personal feature is under development.";
    alert(message);
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {loading && <LoadingScreen />}
      </AnimatePresence>

      <div className="min-h-screen bg-white dark:bg-[#0A0F1E] transition-colors duration-500">
        {/* Conditional Rendering - Show Casket Detail or Home */}
        {casketDetailOpen ? (
          <CasketDetail
            productId={selectedCasket}
            language={language}
            darkMode={darkMode}
            onBack={handleBackFromCasketDetail}
            onOrderClick={handleOrderFromCasketDetail}
          />
        ) : (
          <>
            {/* Navbar */}
            <Navbar
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              language={language}
              setLanguage={setLanguage}
              onContactClick={scrollToContact}
              onAIChatClick={handleAIChatClick}
            />

            {/* Hero Section */}
            <Hero
              language={language}
              onServiceClick={scrollToServices}
              onContactClick={scrollToContact}
            />

            {/* Why Choose Us Section */}
            <WhyChooseUs language={language} />

            {/* Stats Section */}
            <Stats language={language} />

            {/* Services Section */}
            <Services
              language={language}
              onServiceDetailClick={handleServiceDetailClick}
            />

            {/* Products Section */}
            <Products
              language={language}
              onOrderClick={handleCasketDetailClick}
            />

            {/* Sponsors Section */}
            <Sponsors language={language} />

            {/* Gallery Section */}
            <Gallery language={language} />

            {/* Testimonials Section */}
            <Testimonials language={language} />

            {/* FAQ Section */}
            <FAQ language={language} />

            {/* Our Team Section */}
            <OurTeam language={language} />

            {/* About Section */}
            <About language={language} />

            {/* CTA Section */}
            <CTA
              language={language}
              onContactClick={scrollToContact}
              onWhatsAppClick={handleWhatsAppClick}
            />

            {/* Contact Section */}
            <Contact
              language={language}
              onWhatsAppClick={handleWhatsAppClick}
            />

            {/* Footer */}
            <Footer language={language} />

            {/* Scroll to Top Button */}
            <ScrollToTop />

            {/* Floating Buttons - WhatsApp & AI Chat */}
            <FloatingButtons
              language={language}
              onWhatsAppClick={handleWhatsAppClick}
            />
          </>
        )}

        {/* Service Detail Modal */}
        <ServiceDetail
          isOpen={serviceDetailOpen}
          onClose={() => setServiceDetailOpen(false)}
          language={language}
          serviceId={selectedService}
          onOrderClick={handleOrderFromServiceDetail}
        />

        {/* Order Form Popup */}
        <OrderForm
          isOpen={orderFormOpen}
          onClose={() => setOrderFormOpen(false)}
          language={language}
          selectedItem={selectedItem}
        />
      </div>
    </>
  );
}