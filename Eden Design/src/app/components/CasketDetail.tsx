import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Phone, Check, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface CasketDetailProps {
  productId: string;
  language: 'ID' | 'EN';
  darkMode: boolean;
  onBack: () => void;
  onOrderClick: (productId: string) => void;
}

interface CasketData {
  id: string;
  nameID: string;
  nameEN: string;
  descriptionID: string;
  descriptionEN: string;
  price: string;
  images: string[];
  specifications: {
    labelID: string;
    labelEN: string;
    valueID: string;
    valueEN: string;
  }[];
  features: {
    labelID: string;
    labelEN: string;
  }[];
}

const casketDatabase: Record<string, CasketData> = {
  'economy-1': {
    id: 'economy-1',
    nameID: 'Peti Kayu Standar',
    nameEN: 'Standard Wooden Casket',
    descriptionID: 'Peti mati kayu standar adalah pilihan terjangkau namun tetap berkualitas untuk menghormati orang tersayang. Dibuat dari kayu pinus berkualitas dengan finishing natural yang hangat. Interior dilapisi dengan kain satin lembut yang memberikan kenyamanan. Pilihan sempurna untuk keluarga yang menginginkan penghormatan yang bermartabat dengan harga terjangkau.',
    descriptionEN: 'The Standard Wooden Casket is an affordable yet quality choice to honor your loved ones. Made from quality pine wood with warm natural finishing. Interior lined with soft satin fabric providing comfort. Perfect choice for families seeking dignified honor at an affordable price.',
    price: 'Rp 3.000.000 - Rp 5.000.000',
    images: [
      'https://images.unsplash.com/photo-1642084386112-cf73c9b7c27f?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=800&h=600&fit=crop'
    ],
    specifications: [
      {
        labelID: 'Material',
        labelEN: 'Material',
        valueID: 'Kayu Pinus Berkualitas',
        valueEN: 'Quality Pine Wood'
      },
      {
        labelID: 'Dimensi',
        labelEN: 'Dimensions',
        valueID: '190cm x 65cm x 55cm',
        valueEN: '190cm x 65cm x 55cm'
      },
      {
        labelID: 'Interior',
        labelEN: 'Interior',
        valueID: 'Kain Satin Putih',
        valueEN: 'White Satin Fabric'
      },
      {
        labelID: 'Finishing',
        labelEN: 'Finishing',
        valueID: 'Natural Varnish',
        valueEN: 'Natural Varnish'
      },
      {
        labelID: 'Kapasitas Berat',
        labelEN: 'Weight Capacity',
        valueID: 'Hingga 120 kg',
        valueEN: 'Up to 120 kg'
      },
      {
        labelID: 'Garansi',
        labelEN: 'Warranty',
        valueID: '1 Tahun',
        valueEN: '1 Year'
      }
    ],
    features: [
      {
        labelID: 'Kayu pinus berkualitas dengan warna hangat',
        labelEN: 'Quality pine wood with warm color'
      },
      {
        labelID: 'Interior satin lembut dan nyaman',
        labelEN: 'Soft and comfortable satin interior'
      },
      {
        labelID: 'Handle nikel berkualitas',
        labelEN: 'Quality nickel handles'
      },
      {
        labelID: 'Desain sederhana dan elegan',
        labelEN: 'Simple and elegant design'
      },
      {
        labelID: 'Harga terjangkau tanpa mengurangi kualitas',
        labelEN: 'Affordable price without reducing quality'
      },
      {
        labelID: 'Mudah dipersonalisasi sesuai kebutuhan',
        labelEN: 'Easy to personalize as needed'
      }
    ]
  },
  'mid-1': {
    id: 'mid-1',
    nameID: 'Peti Kayu Premium',
    nameEN: 'Premium Wooden Casket',
    descriptionID: 'Peti mati Kayu Premium menampilkan kualitas menengah yang sempurna dengan kayu oak pilihan berkualitas tinggi. Desain yang elegan dengan finishing yang halus dan mewah. Interior dilapisi satin premium dengan padding tebal memberikan kenyamanan maksimal. Pilihan ideal untuk keluarga yang menginginkan kualitas premium dengan harga yang wajar.',
    descriptionEN: 'The Premium Wooden Casket displays perfect mid-range quality with selected high-quality oak wood. Elegant design with smooth and luxurious finishing. Interior lined with premium satin with thick padding provides maximum comfort. Ideal choice for families seeking premium quality at a reasonable price.',
    price: 'Rp 5.000.000 - Rp 8.000.000',
    images: [
      'https://images.unsplash.com/photo-1711615745585-59213ecfec47?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
    ],
    specifications: [
      {
        labelID: 'Material',
        labelEN: 'Material',
        valueID: 'Kayu Oak Solid Premium',
        valueEN: 'Premium Solid Oak Wood'
      },
      {
        labelID: 'Dimensi',
        labelEN: 'Dimensions',
        valueID: '195cm x 68cm x 58cm',
        valueEN: '195cm x 68cm x 58cm'
      },
      {
        labelID: 'Interior',
        labelEN: 'Interior',
        valueID: 'Satin Premium Krem dengan Padding',
        valueEN: 'Premium Cream Satin with Padding'
      },
      {
        labelID: 'Finishing',
        labelEN: 'Finishing',
        valueID: 'Semi-Gloss Varnish dengan Detail Halus',
        valueEN: 'Semi-Gloss Varnish with Fine Details'
      },
      {
        labelID: 'Kapasitas Berat',
        labelEN: 'Weight Capacity',
        valueID: 'Hingga 140 kg',
        valueEN: 'Up to 140 kg'
      },
      {
        labelID: 'Garansi',
        labelEN: 'Warranty',
        valueID: '3 Tahun',
        valueEN: '3 Years'
      }
    ],
    features: [
      {
        labelID: 'Kayu oak solid berkualitas tinggi',
        labelEN: 'High-quality solid oak wood'
      },
      {
        labelID: 'Interior satin premium dengan padding empuk',
        labelEN: 'Premium satin interior with soft padding'
      },
      {
        labelID: 'Handle kuningan berkualitas tinggi',
        labelEN: 'High-quality brass handles'
      },
      {
        labelID: 'Seal karet premium untuk perlindungan',
        labelEN: 'Premium rubber seal for protection'
      },
      {
        labelID: 'Desain elegan dengan detail halus',
        labelEN: 'Elegant design with fine details'
      },
      {
        labelID: 'Sistem penyangga yang kuat dan aman',
        labelEN: 'Strong and safe support system'
      }
    ]
  },
  'premium-1': {
    id: 'premium-1',
    nameID: 'Peti Mahoni Mewah',
    nameEN: 'Luxury Mahogany Casket',
    descriptionID: 'Peti mati Mahoni Mewah adalah representasi kemewahan dan keanggunan tertinggi. Dibuat dari kayu mahoni pilihan berkualitas premium dengan warna merah khas yang mempesona dan serat kayu yang indah. Setiap detail dirancang dengan sempurna oleh pengrajin ahli untuk memberikan penghormatan tertinggi. Interior velvet premium dengan aksen gold menciptakan suasana yang sangat mewah dan khidmat.',
    descriptionEN: 'The Luxury Mahogany Casket is the representation of the highest luxury and elegance. Crafted from premium quality selected mahogany wood with its distinctive captivating red hue and beautiful wood grain. Every detail is perfectly designed by expert craftsmen to provide the highest honor. Premium velvet interior with gold accents creates an extremely luxurious and solemn atmosphere.',
    price: 'Rp 8.000.000 - Rp 15.000.000',
    images: [
      'https://images.unsplash.com/photo-1636725833624-e3ced8395db5?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
    ],
    specifications: [
      {
        labelID: 'Material',
        labelEN: 'Material',
        valueID: 'Kayu Mahoni Solid Premium',
        valueEN: 'Premium Solid Mahogany Wood'
      },
      {
        labelID: 'Dimensi',
        labelEN: 'Dimensions',
        valueID: '200cm x 70cm x 60cm',
        valueEN: '200cm x 70cm x 60cm'
      },
      {
        labelID: 'Interior',
        labelEN: 'Interior',
        valueID: 'Velvet Premium Burgundy dengan Aksen Gold',
        valueEN: 'Premium Burgundy Velvet with Gold Accents'
      },
      {
        labelID: 'Finishing',
        labelEN: 'Finishing',
        valueID: 'High-Gloss Varnish dengan Ukiran Detail',
        valueEN: 'High-Gloss Varnish with Detailed Carvings'
      },
      {
        labelID: 'Kapasitas Berat',
        labelEN: 'Weight Capacity',
        valueID: 'Hingga 150 kg',
        valueEN: 'Up to 150 kg'
      },
      {
        labelID: 'Garansi',
        labelEN: 'Warranty',
        valueID: '5 Tahun',
        valueEN: '5 Years'
      }
    ],
    features: [
      {
        labelID: 'Kayu mahoni solid premium dengan serat indah',
        labelEN: 'Premium solid mahogany wood with beautiful grain'
      },
      {
        labelID: 'Ukiran tangan detail oleh master craftsman',
        labelEN: 'Detailed hand carvings by master craftsman'
      },
      {
        labelID: 'Interior velvet premium dengan padding ekstra',
        labelEN: 'Premium velvet interior with extra padding'
      },
      {
        labelID: 'Handle kuningan berlapis emas',
        labelEN: 'Gold-plated brass handles'
      },
      {
        labelID: 'Seal kedap udara premium',
        labelEN: 'Premium airtight seal'
      },
      {
        labelID: 'Sistem penyangga reinforced untuk kekuatan maksimal',
        labelEN: 'Reinforced support system for maximum strength'
      }
    ]
  },
  'premium-2': {
    id: 'premium-2',
    nameID: 'Peti Jati Elegan',
    nameEN: 'Elegant Teak Casket',
    descriptionID: 'Peti mati Jati Elegan adalah masterpiece dari craftsmanship terbaik. Dibuat dari kayu jati pilihan kualitas super yang terkenal akan kekuatan dan ketahanan luar biasa serta warna golden brown yang mewah. Setiap detail dikerjakan dengan presisi tinggi untuk menciptakan karya seni yang abadi. Interior sutra premium dengan bordir emas dan aksen mewah mencerminkan status dan kehormatan tertinggi.',
    descriptionEN: 'The Elegant Teak Casket is a masterpiece of the finest craftsmanship. Made from super quality selected teak wood renowned for its extraordinary strength and durability and luxurious golden brown color. Every detail is crafted with high precision to create a timeless work of art. Premium silk interior with gold embroidery and luxurious accents reflects the highest status and honor.',
    price: 'Rp 10.000.000 - Rp 20.000.000',
    images: [
      'https://images.unsplash.com/photo-1762967017690-96b4fae9be76?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1566041510394-cf7c8fe21800?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop'
    ],
    specifications: [
      {
        labelID: 'Material',
        labelEN: 'Material',
        valueID: 'Kayu Jati Solid Super Premium',
        valueEN: 'Super Premium Solid Teak Wood'
      },
      {
        labelID: 'Dimensi',
        labelEN: 'Dimensions',
        valueID: '205cm x 72cm x 62cm',
        valueEN: '205cm x 72cm x 62cm'
      },
      {
        labelID: 'Interior',
        labelEN: 'Interior',
        valueID: 'Sutra Premium dengan Bordir Emas',
        valueEN: 'Premium Silk with Gold Embroidery'
      },
      {
        labelID: 'Finishing',
        labelEN: 'Finishing',
        valueID: 'Ultra High-Gloss dengan Detail Ukiran Mewah',
        valueEN: 'Ultra High-Gloss with Luxury Carving Details'
      },
      {
        labelID: 'Kapasitas Berat',
        labelEN: 'Weight Capacity',
        valueID: 'Hingga 180 kg',
        valueEN: 'Up to 180 kg'
      },
      {
        labelID: 'Garansi',
        labelEN: 'Warranty',
        valueID: '10 Tahun',
        valueEN: '10 Years'
      }
    ],
    features: [
      {
        labelID: 'Kayu jati super premium dengan sertifikat keaslian',
        labelEN: 'Super premium teak wood with certificate of authenticity'
      },
      {
        labelID: 'Interior sutra premium dengan bordir emas 24K',
        labelEN: 'Premium silk interior with 24K gold embroidery'
      },
      {
        labelID: 'Handle emas murni dengan ukiran detail',
        labelEN: 'Pure gold handles with detailed carvings'
      },
      {
        labelID: 'Ukiran tangan eksklusif oleh master craftsman',
        labelEN: 'Exclusive hand carvings by master craftsman'
      },
      {
        labelID: 'Sistem seal hermetik dengan teknologi terkini',
        labelEN: 'Hermetic seal system with latest technology'
      },
      {
        labelID: 'Lifetime warranty untuk kualitas kayu',
        labelEN: 'Lifetime warranty for wood quality'
      }
    ]
  }
};

const CasketDetail: React.FC<CasketDetailProps> = ({
  productId,
  language,
  darkMode,
  onBack,
  onOrderClick
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const casket = casketDatabase[productId];

  if (!casket) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FFFFFF] dark:bg-[#0F172A]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#111827] dark:text-[#F9FAFB] mb-4">
            {language === 'ID' ? 'Produk tidak ditemukan' : 'Product not found'}
          </h2>
          <button
            onClick={onBack}
            className="px-6 py-3 bg-[#C8A45C] dark:bg-[#D4AF37] text-white rounded-lg"
          >
            {language === 'ID' ? 'Kembali ke Beranda' : 'Back to Home'}
          </button>
        </div>
      </div>
    );
  }

  const text = {
    backBtn: language === 'ID' ? 'Kembali ke Beranda' : 'Back to Home',
    orderBtn: language === 'ID' ? 'Pesan Sekarang' : 'Order Now',
    specifications: language === 'ID' ? 'Spesifikasi' : 'Specifications',
    features: language === 'ID' ? 'Fitur Unggulan' : 'Key Features',
    price: language === 'ID' ? 'Harga' : 'Price'
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % casket.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + casket.images.length) % casket.images.length);
  };

  return (
    <div className="min-h-screen bg-[#FFFFFF] dark:bg-[#0F172A] pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-[#6B7280] dark:text-[#94A3B8] hover:text-[#C8A45C] dark:hover:text-[#D4AF37] transition-colors duration-300"
          whileHover={{ x: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">{text.backBtn}</span>
        </motion.button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Images */}
          <div className="space-y-6">
            {/* Main Image */}
            <motion.div
              className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#F9FAFB] dark:bg-[#1E293B] shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentImageIndex}
                  src={casket.images[currentImageIndex]}
                  alt={language === 'ID' ? casket.nameID : casket.nameEN}
                  className="w-full h-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              {/* Navigation Arrows */}
              {casket.images.length > 1 && (
                <>
                  <motion.button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-[#1E293B]/90 text-[#111827] dark:text-[#F9FAFB] shadow-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </motion.button>
                  <motion.button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 dark:bg-[#1E293B]/90 text-[#111827] dark:text-[#F9FAFB] shadow-lg backdrop-blur-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ChevronRight className="w-6 h-6" />
                  </motion.button>
                </>
              )}

              {/* Image Counter */}
              {casket.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-[#111827]/70 dark:bg-white/70 text-white dark:text-[#111827] text-sm font-medium backdrop-blur-sm">
                  {currentImageIndex + 1} / {casket.images.length}
                </div>
              )}
            </motion.div>

            {/* Thumbnail Gallery */}
            {casket.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2">
                {casket.images.map((image, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden ${
                      currentImageIndex === index
                        ? 'ring-4 ring-[#C8A45C] dark:ring-[#D4AF37]'
                        : 'opacity-60 hover:opacity-100'
                    } transition-all duration-300`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                  </motion.button>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Details */}
          <div className="space-y-8">
            {/* Title & Price */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="text-4xl font-bold text-[#111827] dark:text-[#F9FAFB] mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                {language === 'ID' ? casket.nameID : casket.nameEN}
              </h1>
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-[#6B7280] dark:text-[#94A3B8]">{text.price}:</span>
                <span className="text-3xl font-bold text-[#C8A45C] dark:text-[#D4AF37]">{casket.price}</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="prose dark:prose-invert max-w-none"
            >
              <p className="text-[#6B7280] dark:text-[#94A3B8] leading-relaxed">
                {language === 'ID' ? casket.descriptionID : casket.descriptionEN}
              </p>
            </motion.div>

            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#111827] dark:text-[#F9FAFB]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {text.specifications}
              </h2>
              <div className="space-y-3">
                {casket.specifications.map((spec, index) => (
                  <div
                    key={index}
                    className="flex items-start justify-between py-3 border-b border-[#E5E7EB] dark:border-[#334155] last:border-0"
                  >
                    <span className="text-sm font-medium text-[#6B7280] dark:text-[#94A3B8]">
                      {language === 'ID' ? spec.labelID : spec.labelEN}
                    </span>
                    <span className="text-sm text-[#111827] dark:text-[#F9FAFB] text-right max-w-[60%]">
                      {language === 'ID' ? spec.valueID : spec.valueEN}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-[#111827] dark:text-[#F9FAFB]" style={{ fontFamily: 'Playfair Display, serif' }}>
                {text.features}
              </h2>
              <div className="grid gap-3">
                {casket.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-5 h-5 rounded-full bg-[#C8A45C]/10 dark:bg-[#D4AF37]/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-[#C8A45C] dark:text-[#D4AF37]" />
                      </div>
                    </div>
                    <span className="text-sm text-[#6B7280] dark:text-[#94A3B8]">
                      {language === 'ID' ? feature.labelID : feature.labelEN}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Order Button */}
            <motion.button
              onClick={() => onOrderClick(casket.id)}
              className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#C8A45C] to-[#B69449] dark:from-[#D4AF37] dark:to-[#C29F2E] text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Phone className="w-5 h-5" />
              <span>{text.orderBtn}</span>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasketDetail;
