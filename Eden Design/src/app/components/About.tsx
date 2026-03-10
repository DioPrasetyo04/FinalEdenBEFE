import { motion } from 'motion/react';
import { Heart, Users, Shield, Target } from 'lucide-react';
import { useState } from 'react';

interface AboutProps {
  language: string;
}

export function About({ language }: AboutProps) {
  const [activeTab, setActiveTab] = useState<'visi' | 'misi'>('misi');

  const content = {
    ID: {
      title: 'Tentang NEW EDEN',
      subtitle: 'Melayani dengan Kasih dan Profesionalisme',
      description:
        'NEW EDEN adalah penyedia layanan kedukaan yang berdedikasi untuk membantu keluarga dalam masa-masa sulit. Dengan pengalaman bertahun-tahun, kami memahami betapa pentingnya dukungan yang tepat waktu dan profesional dalam menghadapi kehilangan orang terkasih.',
      visiLabel: 'Visi',
      misiLabel: 'Misi',
      visiTitle: 'Visi Kami',
      visiText:
        'Menjadi penyedia layanan kedukaan terpercaya dan terkemuka yang memberikan kenyamanan serta ketenangan bagi keluarga dalam menghadapi kehilangan, dengan pelayanan yang penuh kasih dan profesional.',
      missionTitle: 'Misi Kami',
      missionText:
        'Memberikan pelayanan kedukaan yang penuh empati, hormat, dan profesional untuk meringankan beban keluarga yang berduka.',
      values: [
        {
          icon: Heart,
          title: 'Empati',
          desc: 'Memahami dan merasakan kesedihan yang dialami keluarga',
        },
        {
          icon: Users,
          title: 'Kebersamaan',
          desc: 'Mendampingi keluarga di setiap langkah proses kedukaan',
        },
        {
          icon: Shield,
          title: 'Integritas',
          desc: 'Melayani dengan jujur, transparan, dan dapat dipercaya',
        },
        {
          icon: Target,
          title: 'Profesionalisme',
          desc: 'Memberikan layanan berkualitas tinggi dengan standar terbaik',
        },
      ],
    },
    EN: {
      title: 'About NEW EDEN',
      subtitle: 'Serving with Love and Professionalism',
      description:
        'NEW EDEN is a dedicated funeral service provider to help families during difficult times. With years of experience, we understand the importance of timely and professional support in dealing with the loss of loved ones.',
      visiLabel: 'Vision',
      misiLabel: 'Mission',
      visiTitle: 'Our Vision',
      visiText:
        'To be the most trusted and leading funeral service provider that brings comfort and peace to families facing loss, with compassionate and professional service.',
      missionTitle: 'Our Mission',
      missionText:
        'To provide funeral services with empathy, respect, and professionalism to ease the burden of grieving families.',
      values: [
        {
          icon: Heart,
          title: 'Empathy',
          desc: 'Understanding and feeling the grief experienced by families',
        },
        {
          icon: Users,
          title: 'Together',
          desc: 'Accompanying families at every step of the grieving process',
        },
        {
          icon: Shield,
          title: 'Integrity',
          desc: 'Serving honestly, transparently, and reliably',
        },
        {
          icon: Target,
          title: 'Professionalism',
          desc: 'Providing high-quality service with the best standards',
        },
      ],
    },
  };

  const text = language === 'ID' ? content.ID : content.EN;

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#DCEAF5] via-white to-[#F9FAFB] dark:from-[#1E293B] dark:via-[#0F172A] dark:to-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl text-[#1F2937] dark:text-[#F9FAFB] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {text.title}
          </h2>
          <p
            className="text-2xl text-[#C8A45C] dark:text-[#D4AF37] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {text.subtitle}
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1767620275245-70721d786653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwc2VydmljZXxlbnwxfHx8fDE3NzI3MjkzNDZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="About NEW EDEN"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#C8A45C] dark:bg-[#D4AF37] rounded-2xl opacity-20 blur-2xl"></div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed">
              {text.description}
            </p>

            {/* Toggle Button */}
            <div className="flex justify-center gap-2 p-1 bg-[#F9FAFB] dark:bg-[#0F172A] rounded-lg border border-[#E5E7EB] dark:border-[#334155]">
              <motion.button
                onClick={() => setActiveTab('visi')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'visi'
                    ? 'bg-[#C8A45C] dark:bg-[#D4AF37] text-white shadow-lg'
                    : 'text-[#6B7280] dark:text-[#CBD5E1] hover:text-[#C8A45C] dark:hover:text-[#D4AF37]'
                }`}
              >
                {text.visiLabel}
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('misi')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex-1 px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === 'misi'
                    ? 'bg-[#C8A45C] dark:bg-[#D4AF37] text-white shadow-lg'
                    : 'text-[#6B7280] dark:text-[#CBD5E1] hover:text-[#C8A45C] dark:hover:text-[#D4AF37]'
                }`}
              >
                {text.misiLabel}
              </motion.button>
            </div>

            {/* Content Box with Animation */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/80 dark:bg-[#1E293B]/80 backdrop-blur-sm rounded-xl p-6 border border-[#E5E7EB] dark:border-[#334155] shadow-lg"
            >
              <h3
                className="text-2xl text-[#1F2937] dark:text-[#F9FAFB] mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {activeTab === 'visi' ? text.visiTitle : text.missionTitle}
              </h3>
              <p className="text-[#6B7280] dark:text-[#CBD5E1] leading-relaxed">
                {activeTab === 'visi' ? text.visiText : text.missionText}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {text.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-[#0F172A] rounded-xl p-6 text-center shadow-lg border border-[#E5E7EB] dark:border-[#334155]"
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] rounded-full mb-4"
              >
                <value.icon className="w-7 h-7 text-white" />
              </motion.div>

              <h4
                className="text-xl text-[#1F2937] dark:text-[#F9FAFB] mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {value.title}
              </h4>

              <p className="text-sm text-[#6B7280] dark:text-[#CBD5E1]">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
