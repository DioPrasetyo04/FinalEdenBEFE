import { motion } from 'motion/react';
import { Phone, MessageCircle } from 'lucide-react';

interface CTAProps {
  language: string;
  onContactClick: () => void;
  onWhatsAppClick: () => void;
}

export function CTA({ language, onContactClick, onWhatsAppClick }: CTAProps) {
  const content = {
    ID: {
      title: 'Butuh Bantuan Segera?',
      subtitle: 'Tim kami siap membantu Anda 24/7 dengan layanan yang cepat dan profesional',
      btnCall: 'Hubungi Kami',
      btnWA: 'Chat WhatsApp',
    },
    EN: {
      title: 'Need Immediate Assistance?',
      subtitle: 'Our team is ready to help you 24/7 with fast and professional service',
      btnCall: 'Call Us',
      btnWA: 'WhatsApp Chat',
    },
  };

  const text = language === 'ID' ? content.ID : content.EN;

  return (
    <section className="py-20 bg-gradient-to-br from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-8"
        >
          {/* Title */}
          <h2
            className="text-4xl md:text-5xl text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {text.title}
          </h2>

          {/* Subtitle */}
          <p className="text-xl text-white/90 max-w-2xl mx-auto">{text.subtitle}</p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <motion.button
              onClick={onContactClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-white text-[#C8A45C] dark:text-[#D4AF37] rounded-lg hover:bg-white/90 transition-all shadow-xl font-medium text-lg"
            >
              <Phone className="w-6 h-6" />
              {text.btnCall}
            </motion.button>

            <motion.button
              onClick={onWhatsAppClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white rounded-lg hover:bg-[#1EBE57] transition-all shadow-xl font-medium text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              {text.btnWA}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
