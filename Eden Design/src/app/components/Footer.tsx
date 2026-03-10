import { motion } from 'motion/react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

interface FooterProps {
  language: string;
}

export function Footer({ language }: FooterProps) {
  const content = {
    ID: {
      tagline: 'Hadir Untuk Menguatkan',
      description: 'Melayani dengan penuh kasih dan profesionalisme dalam setiap langkah perjalanan terakhir.',
      quickLinks: 'Tautan Cepat',
      services: 'Layanan',
      contact: 'Kontak',
      social: 'Ikuti Kami',
      copyright: '© 2026 NEW EDEN. Semua hak dilindungi.',
      madeWith: 'Dibuat dengan',
      links: [
        { name: 'Beranda', href: '#home' },
        { name: 'Tentang Kami', href: '#about' },
        { name: 'Layanan', href: '#services' },
        { name: 'Produk', href: '#products' },
        { name: 'Kontak', href: '#contact' },
      ],
      servicesList: [
        'Paket Peti Jenazah',
        'Mobil Jenazah',
        'Cargo Jenazah',
        'Layanan Kremasi',
        'Dokumentasi',
      ],
    },
    EN: {
      tagline: 'Here To Support You',
      description: 'Serving with love and professionalism in every step of the final journey.',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact',
      social: 'Follow Us',
      copyright: '© 2026 NEW EDEN. All rights reserved.',
      madeWith: 'Made with',
      links: [
        { name: 'Home', href: '#home' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Products', href: '#products' },
        { name: 'Contact', href: '#contact' },
      ],
      servicesList: [
        'Casket Package',
        'Hearse Service',
        'Cargo Service',
        'Cremation Service',
        'Documentation',
      ],
    },
  };

  const text = language === 'ID' ? content.ID : content.EN;

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook', color: '#1877F2' },
    { icon: Instagram, href: '#', label: 'Instagram', color: '#E4405F' },
    { icon: Twitter, href: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: Youtube, href: '#', label: 'Youtube', color: '#FF0000' },
  ];

  const contactInfo = [
    { icon: Phone, text: '+62 21 3234 5678' },
    { icon: Mail, text: 'info@neweden.sch.id' },
    { icon: MapPin, text: 'Jakarta Pusat, DKI Jakarta' },
  ];

  return (
    <footer className="bg-gradient-to-b from-[#111827] to-[#0A0F1E] dark:from-[#0F172A] dark:to-[#0A0F1E] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#C8A45C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#C8A45C]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Logo & Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 lg:col-span-1"
            >
              <div>
                <h3
                  className="text-3xl lg:text-4xl text-[#C8A45C] dark:text-[#D4AF37] mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  NEW EDEN
                </h3>
                <p className="text-[#CBD5E1] dark:text-[#94A3B8] text-sm italic mb-4">
                  {text.tagline}
                </p>
                <p className="text-[#9CA3AF] dark:text-[#64748B] text-sm leading-relaxed">
                  {text.description}
                </p>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">
                  {text.social}
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center transition-all duration-300 group"
                      whileHover={{ scale: 1.1, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 text-[#9CA3AF] group-hover:text-[#C8A45C] dark:group-hover:text-[#D4AF37] transition-colors" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white uppercase tracking-wider">
                {text.quickLinks}
              </h4>
              <ul className="space-y-3">
                {text.links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      className="text-[#9CA3AF] dark:text-[#64748B] hover:text-[#C8A45C] dark:hover:text-[#D4AF37] transition-colors duration-300 text-sm flex items-center group"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#C8A45C] dark:bg-[#D4AF37] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white uppercase tracking-wider">
                {text.services}
              </h4>
              <ul className="space-y-3">
                {text.servicesList.map((service, index) => (
                  <li key={index}>
                    <motion.a
                      href="#services"
                      className="text-[#9CA3AF] dark:text-[#64748B] hover:text-[#C8A45C] dark:hover:text-[#D4AF37] transition-colors duration-300 text-sm flex items-center group"
                      whileHover={{ x: 4 }}
                    >
                      <span className="w-1.5 h-1.5 bg-[#C8A45C] dark:bg-[#D4AF37] rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {service}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="space-y-6"
            >
              <h4 className="text-lg font-semibold text-white uppercase tracking-wider">
                {text.contact}
              </h4>
              <ul className="space-y-4">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-[#C8A45C]/20 dark:group-hover:bg-[#D4AF37]/20 transition-colors">
                      <item.icon className="w-4 h-4 text-[#C8A45C] dark:text-[#D4AF37]" />
                    </div>
                    <span className="text-[#9CA3AF] dark:text-[#64748B] text-sm pt-1.5 leading-relaxed">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#9CA3AF] dark:text-[#64748B] text-sm text-center md:text-left">
              {text.copyright}
            </p>
            <div className="flex items-center gap-2 text-[#9CA3AF] dark:text-[#64748B] text-sm">
              <span>{text.madeWith}</span>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Heart className="w-4 h-4 text-[#C8A45C] dark:text-[#D4AF37] fill-current" />
              </motion.div>
              <span>by Figma Make</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
