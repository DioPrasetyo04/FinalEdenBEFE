import { motion } from 'motion/react';
import { MessageCircle, Bot } from 'lucide-react';

interface FloatingButtonsProps {
  language: string;
  onWhatsAppClick: () => void;
}

export function FloatingButtons({ language, onWhatsAppClick }: FloatingButtonsProps) {
  const handleAIClick = () => {
    // Placeholder for AI chat functionality
    const message = language === 'ID' 
      ? 'Fitur AI Personal sedang dalam pengembangan.'
      : 'AI Personal feature is under development.';
    alert(message);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      {/* WhatsApp Chat Button */}
      <motion.button
        onClick={onWhatsAppClick}
        className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={language === 'ID' ? 'Chat WhatsApp' : 'Chat WhatsApp'}
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Tooltip on hover */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 dark:bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {language === 'ID' ? 'Chat WhatsApp' : 'Chat WhatsApp'}
        </div>
      </motion.button>

      {/* AI Personal Chat Button */}
      <motion.button
        onClick={handleAIClick}
        className="group relative w-14 h-14 bg-gradient-to-r from-[#C8A45C] to-[#B8944C] hover:from-[#B8944C] hover:to-[#A8844C] text-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        title={language === 'ID' ? 'Chat AI Personal' : 'AI Personal Chat'}
      >
        <Bot className="w-6 h-6" />
        
        {/* Tooltip on hover */}
        <div className="absolute right-full mr-3 px-3 py-2 bg-gray-900 dark:bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
          {language === 'ID' ? 'Chat AI Personal' : 'AI Personal Chat'}
        </div>
      </motion.button>
    </div>
  );
}
