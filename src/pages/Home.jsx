import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, CheckCircle2, Building, ShieldCheck, Award, 
  Compass, Building2, Droplets, Zap, Layers, Layout, 
  TrendingUp, Calculator, FileCheck, HardHat, Phone, MessageSquare, MapPin, ExternalLink, X
} from 'lucide-react';
import { siteInfo, servicesList, productsList, portfolioItems } from '../data/siteData';

const iconMap = {
  Compass, Building2, Droplets, Zap, Layers, Layout, TrendingUp, Calculator, FileCheck, HardHat
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const itemVariants = {
  hidden: { y: 25, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Home() {
  const [activeModalItem, setActiveModalItem] = useState(null);

  return (
    <div className="space-y-20 pb-16 overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-b from-[#0b1a2e] via-[#1a3a5c] to-[#0b1a2e] text-white pt-16 pb-24 overflow-hidden">
        
        {/* Floating Shapes Animation */}
        <div className="absolute top-[-100px] right-[-100px] w-[450px] h-[450px] bg-[#facc15]/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-[-50px] left-[-50px] w-[350px] h-[350px] bg-[#facc15]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Right Column (Hero Text & Tagline) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-6 text-right"
            >
              <div className="inline-block bg-[#facc15]/15 border border-[#facc15]/30 px-5 py-2 rounded-full text-[#facc15] text-xs sm:text-sm font-semibold tracking-wider backdrop-blur-md">
                مكتب توب رايز للاستشارات الهندسية والمقاولات العامة
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-cairo leading-tight">
                توب رايز <span className="text-[#facc15] drop-shadow-[0_0_50px_rgba(250,204,21,0.3)]">TOP RISE</span>
              </h1>
              
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-200">
                للاستشارات الهندسية والتصاميم والمقاولات العامة
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-400 font-sans tracking-widest uppercase">
                Engineering Consulting, Designs & General Contracting
              </p>

              {/* Slogan Banner */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-block mt-4 text-xl sm:text-3xl font-extrabold text-[#0b1a2e] bg-gradient-to-r from-[#facc15] to-[#f59e0b] px-8 py-3.5 rounded-full shadow-[0_20px_60px_rgba(250,204,21,0.25)] border-2 border-white/20"
              >
                "{siteInfo.slogan}"
              </motion.div>

              {/* Hero CTA Action Buttons */}
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <a
                  href={siteInfo.contact.whatsapp.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#facc15] hover:bg-[#f59e0b] text-[#0b1a2e] font-extrabold px-8 py-4 rounded-full shadow-[0_8px_30px_rgba(250,204,21,0.3)] hover:scale-105 transition-all duration-300 flex items-center gap-3 text-base sm:text-lg"
                >
                  <MessageSquare className="w-5 h-5 text-[#0b1a2e]" />
                  <span>طلب استشارة هندسية</span>
                </a>

                <Link
                  to="/portfolio"
                  className="bg-transparent border-2 border-white/30 hover:border-[#facc15] hover:bg-white/10 text-white font-bold px-7 py-4 rounded-full transition-all duration-300 flex items-center gap-2"
                >
                  <span>استكشف أعمالنا</span>
                  <ArrowLeft className="w-4 h-4 text-[#facc15]" />
                </Link>
              </div>
            </motion.div>

            {/* Left Column (Logo Showcase & Quality Card) */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              <div className="relative z-10 bg-gradient-to-br from-[#0b1a2e] to-[#132a44] border border-slate-700/60 p-8 rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.4)] backdrop-blur-md space-y-6">
                
                {/* Logo Frame */}
                <div className="relative w-full h-52 rounded-2xl bg-white p-4 shadow-inner flex items-center justify-center border-2 border-[#facc15]/40 group overflow-hidden">
                  <img 
                    src="/logo.jpg" 
                    alt="توب رايز TOP RISE"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                  <h3 className="text-lg font-bold text-[#facc15] flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#facc15]" />
                    <span>معايير الجودة والالتزام</span>
                  </h3>
                  <span className="text-xs text-[#0b1a2e] bg-[#facc15] px-3 py-1 rounded-full font-bold">
                    معايير عالمية
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#facc15] mt-0.5 flex-shrink-0" />
                    <span>دقة متناهية في المواعيد والمواصفات المعتمدة.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#facc15] mt-0.5 flex-shrink-0" />
                    <span>تغطية جميع مراحل المشروع من التصميم للتنفيذ.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#facc15] mt-0.5 flex-shrink-0" />
                    <span>تجربة استثنائية لعملائنا في القطاعين العام والخاص.</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-700 grid grid-cols-2 gap-3 text-center">
                  <div className="p-3 bg-[#07111e] rounded-2xl border border-slate-800">
                    <span className="block text-2xl font-black text-[#facc15] font-sans">100%</span>
                    <span className="text-[11px] text-slate-400">التزام بالجودة</span>
                  </div>
                  <div className="p-3 bg-[#07111e] rounded-2xl border border-slate-800">
                    <span className="block text-2xl font-black text-[#facc15] font-sans">10+</span>
                    <span className="text-[11px] text-slate-400">خدمات متكاملة</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ABOUT SUMMARY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-slate-200 rounded-[24px] p-8 sm:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-4">
            <span className="text-[#f59e0b] font-bold text-sm tracking-wider uppercase">من نحن</span>
            <h2 className="text-3xl font-black text-[#0b1a2e] font-cairo">
              مكتب توب رايز للاستشارات الهندسية
            </h2>
            <p className="text-[#334155] leading-relaxed text-base">
              {siteInfo.aboutText}
            </p>
            <div className="pt-2">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-bold text-[#f59e0b] hover:text-[#d97706] transition-colors"
              >
                <span>اقرأ المزيد عن رؤيتنا ورسالتنا وأهدافنا</span>
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0b1a2e] text-white p-6 rounded-[20px] space-y-2 shadow-md border-b-4 border-[#facc15]">
              <ShieldCheck className="w-8 h-8 text-[#facc15]" />
              <h3 className="font-bold text-lg text-[#facc15]">رؤيتنا</h3>
              <p className="text-xs text-slate-300 leading-normal">
                أن نصبح المكتب الرائد في المجال الهندسي والاستشاري على مستوى الوطن العربي والدول الأجنبية.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#fef9e7] to-[#fdf2d0] text-slate-900 p-6 rounded-[20px] space-y-2 border border-[#facc15]/30 shadow-md">
              <Award className="w-8 h-8 text-[#f59e0b]" />
              <h3 className="font-bold text-lg text-[#0b1a2e]">رسالتنا</h3>
              <p className="text-xs text-slate-700 leading-normal">
                التزام بتقديم مستوى عالٍ طبقاً للمواصفات المعمول بها وتحقيق معايير الجودة لتلبية احتياجات العملاء.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1a2e] font-cairo">
            خدماتنا <span className="text-[#f59e0b] underline decoration-[#facc15]/40">الهندسية</span>
          </h2>
          <p className="text-slate-600 text-sm">
            حلول متكاملة تغطي كافة مراحل المشروع من المخطط الأولي إلى التسليم والإشراف.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {servicesList.slice(0, 6).map((service) => {
            const IconComponent = iconMap[service.icon] || Building;
            return (
              <motion.div 
                key={service.id} 
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[20px] p-7 border border-slate-200 hover:border-[#facc15] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#f1f5f9] text-[#0b1a2e] flex items-center justify-center group-hover:bg-[#facc15] group-hover:text-[#0b1a2e] transition-colors duration-300 font-bold">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0b1a2e] group-hover:text-[#f59e0b] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6 flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>{service.details}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="text-center pt-2">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 bg-[#facc15] text-[#0b1a2e] font-extrabold px-8 py-3.5 rounded-full shadow-[0_8px_30px_rgba(250,204,21,0.3)] hover:scale-105 transition-all text-sm"
          >
            <span>عرض جميع الخدمات الـ 10 والمنتجات الهندسية</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="bg-[#0b1a2e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[#facc15] font-bold text-sm">منتجاتنا</span>
              <h2 className="text-3xl font-black font-cairo text-white mt-1">
                حلول هندسية متخصصة ومستدامة
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              نستعرض أبرز المنتجات والاستشارات التي نتميز في تقديمها لعملائنا في القطاعين العام والخاص.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsList.map((product) => (
              <div 
                key={product.id}
                className="bg-slate-900 border border-slate-800 p-6 rounded-[20px] hover:border-[#facc15] transition-all duration-300 space-y-3"
              >
                <span className="w-10 h-10 rounded-full bg-[#facc15]/20 text-[#facc15] flex items-center justify-center font-bold text-lg">
                  ✦
                </span>
                <h3 className="text-lg font-bold text-white">{product.title}</h3>
                <span className="text-xs text-[#facc15] font-semibold block">{product.subtitle}</span>
                <p className="text-xs text-slate-400 leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PORTFOLIO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0b1a2e] font-cairo">
            نماذج من <span className="text-[#f59e0b]">أعمالنا وتصاميمنا</span>
          </h2>
          <p className="text-slate-600 text-sm">
            معرض حقيقي يضم أكثر من 70 مشروعاً هندسياً وديكورات 3D وواجهات معمارية ومخططات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.slice(0, 6).map((item) => (
            <div 
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className="bg-white rounded-[20px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="relative h-60 overflow-hidden bg-slate-900">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a2e]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-[#0b1a2e]/90 px-3 py-1.5 rounded-full backdrop-blur-md border border-slate-700">
                      <ExternalLink className="w-3.5 h-3.5 text-[#facc15]" />
                      عرض الصورة بالحجم الكامل
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 bg-[#0b1a2e]/90 text-[#facc15] text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.categoryName}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
                      {item.location}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-[#0b1a2e] group-hover:text-[#f59e0b] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button className="w-full text-center text-xs font-bold text-[#f59e0b] group-hover:text-[#d97706] flex items-center justify-center gap-1 border-t border-slate-100 pt-3">
                  عرض الصورة والتفاصيل
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-2">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 border-2 border-[#0b1a2e] hover:border-[#facc15] hover:bg-[#0b1a2e] text-[#0b1a2e] hover:text-[#facc15] font-bold px-8 py-3.5 rounded-full transition-all text-sm"
          >
            <span>استعراض معرض الأعمال الكامل (72 صورة)</span>
            <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* LOCATION & CONTACT CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0b1a2e] text-white rounded-[24px] p-8 sm:p-12 border border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-right">
            <span className="text-[#facc15] font-bold text-xs uppercase tracking-wider">زر موقعنا أو تواصل معنا</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-cairo">
              جاهزون لتحويل فكرة مشروعك إلى تصميم هندسي احترافي؟
            </h3>
            <p className="text-slate-300 text-sm max-w-xl">
              {siteInfo.contact.location.fullAddress}
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={siteInfo.contact.whatsapp.link}
              target="_blank"
              rel="noreferrer"
              className="bg-[#facc15] text-[#0b1a2e] font-extrabold px-7 py-3.5 rounded-full shadow-[0_8px_30px_rgba(250,204,21,0.3)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <MessageSquare className="w-5 h-5 text-[#0b1a2e]" />
              <span>محادثة واتساب فورية</span>
            </a>
            <Link
              to="/contact"
              className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-6 py-3.5 rounded-full transition-colors flex items-center gap-2 text-sm"
            >
              <Phone className="w-4 h-4 text-[#facc15]" />
              <span>تفاصيل الاتصال بالمكتب</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FULLSCREEN LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={() => setActiveModalItem(null)}
            className="fixed inset-0 z-[9999] bg-[#0b1a2e]/95 backdrop-blur-md flex flex-col items-center justify-center p-3 sm:p-6 overflow-y-auto cursor-pointer"
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setActiveModalItem(null);
              }}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 z-30 bg-[#0b1a2e] text-white p-3 rounded-full hover:bg-slate-800 transition-all shadow-2xl border-2 border-[#facc15]/50 flex items-center justify-center cursor-pointer"
              title="إغلاق الصورة"
            >
              <X className="w-6 h-6 text-[#facc15]" />
            </button>

            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()} 
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto cursor-default border-2 border-[#facc15]/30"
            >
              {/* Image Viewport Container */}
              <div className="relative bg-[#07111e] min-h-[250px] max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center overflow-hidden p-2">
                <img 
                  src={activeModalItem.image} 
                  alt={activeModalItem.title} 
                  className="max-h-[65vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
                  loading="eager"
                />
              </div>

              {/* Details & Actions */}
              <div className="p-5 sm:p-8 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="bg-[#facc15]/20 text-[#0b1a2e] text-xs font-extrabold px-3 py-1 rounded-full border border-[#facc15]/40">
                    {activeModalItem.categoryName}
                  </span>
                  <span className="text-xs text-slate-500 flex items-center gap-1 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
                    موقع المشروع: {activeModalItem.location}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-[#0b1a2e] font-cairo">
                  {activeModalItem.title}
                </h2>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-tajawal">
                  {activeModalItem.description}
                </p>

                <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={`${siteInfo.contact.whatsapp.link}?text=${encodeURIComponent(`السلام عليكم، أود طلب استشارة أو تصميم مشابه لمشروع توب رايز: ${activeModalItem.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full sm:w-auto bg-[#facc15] text-[#0b1a2e] font-extrabold px-6 py-3 rounded-full text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:scale-105 transition-all"
                  >
                    <MessageSquare className="w-4 h-4 text-[#0b1a2e]" />
                    <span>طلب تصميم مشابه عبر الواتساب</span>
                  </a>

                  <button
                    onClick={() => setActiveModalItem(null)}
                    className="w-full sm:w-auto text-center text-xs font-bold text-slate-500 hover:text-slate-900 py-2"
                  >
                    إغلاق الصورة
                  </button>
                </div>
              </div>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}