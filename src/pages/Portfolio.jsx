import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ExternalLink, X, MessageSquare, Search } from 'lucide-react';
import { portfolioCategories, portfolioItems, siteInfo } from '../data/siteData';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalItem, setActiveModalItem] = useState(null);
  const [visibleCount, setVisibleCount] = useState(18);

  const filteredItems = portfolioItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.includes(searchQuery) || item.location.includes(searchQuery) || item.categoryName.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const displayedItems = filteredItems.slice(0, visibleCount);

  return (
    <div className="space-y-16 pb-16 overflow-hidden">
      
      {/* PAGE HEADER */}
      <section className="bg-[#0b1a2e] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#facc15]/10 rounded-full blur-3xl pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4"
        >
          <span className="text-[#facc15] font-bold text-sm tracking-widest uppercase">معرض المشاريع والحافظة الهندسية</span>
          <h1 className="text-4xl sm:text-5xl font-black font-cairo">أعمالنا ومشاريعنا — <span className="text-[#facc15]">Our Projects</span></h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-tajawal">
            استعرض كافة أعمال وتصاميم مكتب توب رايز (أكثر من 70 مشروعاً هندسياً ومعمارياً وديكورات 3D).
          </p>
        </motion.div>
      </section>

      {/* FILTER TABS & SEARCH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-md">
          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 w-full md:w-auto">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setVisibleCount(18);
                }}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                  activeCategory === cat.id
                    ? 'bg-[#facc15] text-[#0b1a2e] shadow-md'
                    : 'bg-slate-50 text-slate-700 hover:bg-[#facc15]/20 hover:text-[#0b1a2e] border border-slate-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute top-3.5 right-3.5" />
            <input 
              type="text"
              placeholder="البحث في المشاريع..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 outline-none focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15]"
            />
          </div>
        </div>

        {/* Counter Badge */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-bold px-2">
          <span>يتم عرض {displayedItems.length} من أصل {filteredItems.length} مشروع منجز</span>
          <span className="text-[#f59e0b]">انقر على الصورة للعرض الكامل</span>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {displayedItems.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-[#0b1a2e]">
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
                    <div className="absolute top-3 right-3 bg-[#0b1a2e]/90 text-[#facc15] text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md border border-slate-800">
                      {item.categoryName}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-[#f59e0b]" />
                        {item.location}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">#{item.id}</span>
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
                  <button 
                    className="w-full text-center text-xs font-bold text-[#f59e0b] group-hover:text-[#d97706] flex items-center justify-center gap-1 border-t border-slate-100 pt-3"
                  >
                    عرض الصورة والتفاصيل
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        {visibleCount < filteredItems.length && (
          <div className="text-center pt-8">
            <button
              onClick={() => setVisibleCount(prev => prev + 18)}
              className="bg-[#facc15] text-[#0b1a2e] font-extrabold px-8 py-3.5 rounded-full shadow-lg hover:scale-105 transition-all text-sm"
            >
              تحميل المزيد من صور وتصاميم المشاريع ({filteredItems.length - visibleCount} المتبقية)
            </button>
          </div>
        )}

      </section>

      {/* FULLSCREEN LIGHTBOX MODAL WITH TAP-OUTSIDE-TO-DISMISS */}
      <AnimatePresence>
        {activeModalItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setActiveModalItem(null)} // Dismiss on tapping anywhere on the backdrop!
            className="fixed inset-0 z-[9999] bg-[#0b1a2e]/95 backdrop-blur-xl flex flex-col items-center justify-center p-3 sm:p-6 overflow-y-auto cursor-pointer"
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

            {/* Tap Outside Hint Banner for Mobile */}
            <div className="mb-3 text-[11px] text-slate-300 font-bold bg-white/10 px-4 py-1 rounded-full backdrop-blur-md border border-white/10 pointer-events-none">
            
            </div>

            {/* Modal Card (Stop propagation when tapping inside card) */}
            <motion.div 
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()} 
              className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-auto cursor-default border-2 border-[#facc15]/30"
            >
              {/* Image Viewport Container */}
              <div className="relative bg-[#07111e] min-h-[250px] max-h-[70vh] sm:max-h-[75vh] flex items-center justify-center overflow-hidden p-2">
                <img 
                  src={activeModalItem.image} 
                  alt={activeModalItem.title} 
                  className="max-h-[65vh] sm:max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-lg"
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
                    إغلاق الصورة (أو انقر خارج الكارد)
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
