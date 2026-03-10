import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

interface WhatsAppButtonProps {
  language: string;
}

export function WhatsAppButton({ language }: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const translations = {
    id: {
      label: 'Chat WhatsApp',
      greeting: 'Butuh bantuan?',
      description: 'Hubungi kami via WhatsApp'
    },
    en: {
      label: 'WhatsApp Chat',
      greeting: 'Need help?',
      description: 'Contact us via WhatsApp'
    }
  };

  const t = translations[language.toLowerCase() as keyof typeof translations] || translations.en;

  const handleClick = () => {
    const message = language === 'ID' 
      ? 'Halo, saya ingin menanyakan tentang layanan NEW EDEN...'
      : 'Hello, I would like to inquire about NEW EDEN services...';
    window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* Main WhatsApp Button */}
      <motion.button
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: 'spring',
          stiffness: 260,
          damping: 20,
          delay: 0.5
        }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white rounded-2xl shadow-2xl flex items-center justify-center group overflow-hidden"
        style={{
          boxShadow: '0 10px 40px -10px rgba(37, 211, 102, 0.6)'
        }}
        aria-label={t.label}
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#128C7E] to-[#25D366]"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* Icon */}
        <motion.div
          className="relative z-10"
          animate={{ 
            rotate: isHovered ? [0, -10, 10, -10, 0] : 0 
          }}
          transition={{ duration: 0.5 }}
        >
          <MessageCircle className="w-8 h-8" strokeWidth={2.5} />
        </motion.div>
        
        {/* Pulse Rings */}
        <motion.div
          animate={{
            scale: [1, 1.4, 1.4],
            opacity: [0.8, 0, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut'
          }}
          className="absolute inset-0 bg-[#25D366] rounded-2xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.4, 1.4],
            opacity: [0.6, 0, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 0.5
          }}
          className="absolute inset-0 bg-[#25D366] rounded-2xl"
        />

        {/* Notification Badge */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, type: 'spring' }}
          className="absolute -top-1 -right-1 w-5 h-5 bg-[#EF4444] border-2 border-white dark:border-[#0A0F1E] rounded-full flex items-center justify-center"
        >
          <motion.span 
            className="text-white text-xs font-bold"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            1
          </motion.span>
        </motion.div>
      </motion.button>

      {/* Tooltip Card */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.8 }}
            transition={{ 
              type: 'spring',
              stiffness: 300,
              damping: 25
            }}
            className="fixed bottom-6 right-24 z-50 pointer-events-none"
          >
            <div className="bg-white dark:bg-[#1E293B] rounded-2xl shadow-2xl p-4 min-w-[200px] border border-[#E5E7EB] dark:border-[#334155]">
              {/* Arrow */}
              <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-white dark:bg-[#1E293B] border-r border-t border-[#E5E7EB] dark:border-[#334155] rotate-45"></div>
              
              {/* Content */}
              <div className="relative space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
                  <h4 className="text-sm font-semibold text-[#111827] dark:text-[#F9FAFB]">
                    {t.greeting}
                  </h4>
                </div>
                <p className="text-xs text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">
                  {t.description}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
