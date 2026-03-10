import { motion } from 'motion/react';
import { ArrowRight, Package } from 'lucide-react';

interface ProductsProps {
  language: string;
  onOrderClick: (product: string) => void;
}

interface Product {
  id: string;
  nameID: string;
  nameEN: string;
  category: string;
  categoryEN: string;
  priceRange: string;
  image: string;
}

export function Products({ language, onOrderClick }: ProductsProps) {
  const products: Product[] = [
    {
      id: 'economy-1',
      nameID: 'Peti Kayu Standar',
      nameEN: 'Standard Wooden Casket',
      category: 'Ekonomis',
      categoryEN: 'Economy',
      priceRange: 'Rp 3.000.000 - Rp 5.000.000',
      image: 'https://images.unsplash.com/photo-1642084386112-cf73c9b7c27f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZmxvd2VycyUyMHdyZWF0aHxlbnwxfHx8fDE3NzI3MjkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'mid-1',
      nameID: 'Peti Kayu Premium',
      nameEN: 'Premium Wooden Casket',
      category: 'Menengah',
      categoryEN: 'Mid-Range',
      priceRange: 'Rp 5.000.000 - Rp 8.000.000',
      image: 'https://images.unsplash.com/photo-1711615745585-59213ecfec47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZW1vcmlhbCUyMGNhbmRsZSUyMGxpZ2h0fGVufDF8fHx8MTc3MjcyOTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'premium-1',
      nameID: 'Peti Mahoni Mewah',
      nameEN: 'Luxury Mahogany Casket',
      category: 'Premium',
      categoryEN: 'Premium',
      priceRange: 'Rp 8.000.000 - Rp 15.000.000',
      image: 'https://images.unsplash.com/photo-1636725833624-e3ced8395db5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGRvdmUlMjBwZWFjZXxlbnwxfHx8fDE3NzI3MjkzNDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 'premium-2',
      nameID: 'Peti Jati Elegan',
      nameEN: 'Elegant Teak Casket',
      category: 'Premium',
      categoryEN: 'Premium',
      priceRange: 'Rp 10.000.000 - Rp 20.000.000',
      image: 'https://images.unsplash.com/photo-1762967017690-96b4fae9be76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBpbnRlcmlvciUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MjcyOTM0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const content = {
    ID: {
      title: 'Produk Peti Jenazah',
      subtitle: 'Pilihan peti jenazah berkualitas dengan berbagai model dan harga',
      btnText: 'Pesan Sekarang',
    },
    EN: {
      title: 'Casket Products',
      subtitle: 'Quality casket options with various models and prices',
      btnText: 'Order Now',
    },
  };

  const text = language === 'ID' ? content.ID : content.EN;

  return (
    <section id="products" className="py-24 lg:py-32 bg-white dark:bg-[#0A0F1E] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C8A45C]/5 dark:bg-[#D4AF37]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 text-[#C8A45C] dark:text-[#D4AF37] rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Package className="w-3.5 h-3.5" />
            {language === 'ID' ? 'Katalog Produk' : 'Product Catalog'}
          </motion.div>
          
          <h2
            className="text-4xl md:text-5xl lg:text-6xl text-[#111827] dark:text-[#F9FAFB] mb-6 tracking-tight"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            {text.title}
          </h2>
          <p className="text-lg md:text-xl text-[#6B7280] dark:text-[#CBD5E1] max-w-3xl mx-auto leading-relaxed">
            {text.subtitle}
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                delay: index * 0.1, 
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -12 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full bg-[#FAFBFC] dark:bg-[#1E293B] rounded-2xl overflow-hidden cursor-pointer"
                style={{
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
                }}
              >
                {/* Hover Shadow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl z-0" style={{ boxShadow: '0 25px 50px -12px rgba(200, 164, 92, 0.4)' }}></div>

                {/* Image Container */}
                <div className="relative aspect-[3/4] overflow-hidden">
                  <motion.img
                    src={product.image}
                    alt={language === 'ID' ? product.nameID : product.nameEN}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-white/95 dark:bg-[#1E293B]/95 backdrop-blur-sm text-[#C8A45C] dark:text-[#D4AF37] rounded-full text-xs font-semibold shadow-lg">
                      {language === 'ID' ? product.category : product.categoryEN}
                    </span>
                  </div>

                  {/* Quick View Overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm"
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="px-6 py-3 bg-white dark:bg-[#1E293B] rounded-xl text-[#C8A45C] dark:text-[#D4AF37] font-semibold text-sm shadow-2xl"
                      onClick={() => onOrderClick(product.id)}
                    >
                      {language === 'ID' ? 'Lihat Detail' : 'View Details'}
                    </motion.div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  {/* Product Name */}
                  <h3
                    className="text-xl md:text-2xl text-[#111827] dark:text-[#F9FAFB] mb-3 group-hover:text-[#C8A45C] dark:group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-2"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {language === 'ID' ? product.nameID : product.nameEN}
                  </h3>

                  {/* Price Range */}
                  <p className="text-[#6B7280] dark:text-[#CBD5E1] mb-6 text-sm font-medium">
                    {product.priceRange}
                  </p>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => onOrderClick(product.id)}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] text-white rounded-xl font-medium text-sm shadow-lg group-hover:shadow-xl transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{language === 'ID' ? 'Lihat Detail' : 'View Details'}</span>
                    <motion.div
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </div>

                {/* Decorative Accent */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-[#C8A45C]/10 to-transparent dark:from-[#D4AF37]/10 rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-[#6B7280] dark:text-[#CBD5E1] text-sm">
            {language === 'ID' 
              ? 'Memerlukan konsultasi untuk produk lain?' 
              : 'Need consultation for other products?'}
            {' '}
            <a 
              href="#contact" 
              className="text-[#C8A45C] dark:text-[#D4AF37] font-semibold hover:underline"
            >
              {language === 'ID' ? 'Hubungi Kami' : 'Contact Us'}
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
