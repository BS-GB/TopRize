import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ExternalLink, X, MessageSquare, Search, Filter, Image as ImageIcon } from 'lucide-react';
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
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4"
        >
          <span className="text-gold-400 font-bold text-sm tracking-widest uppercase">معرض المشاريع والحافظة الهندسية</span>
          <h1 className="text-4xl sm:text-5xl font-black font-cairo">أعمالنا ومشاريعنا — Our Projects</h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
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
                    ? 'gold-gradient-bg text-white shadow-md shadow-gold-500/20'
                    : 'bg-slate-50 text-slate-700 hover:bg-gold-50 hover:text-gold-600 border border-slate-100'
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
              className="w-full pr-10 pl-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500"
            />
          </div>
        </div>

        {/* Counter Badge */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-bold px-2">
          <span>يتم عرض {displayedItems.length} من أصل {filteredItems.length} مشروع من جز</span>
          <span className="text-gold-600">توب رايز | TOP RISE Portfolio</span>
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
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                onClick={() => setActiveModalItem(item)}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <span className="text-white text-xs font-bold flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-full backdrop-blur-md border border-slate-700">
                        <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                        تكبير ومعاينة الصورة الحقيقية
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 bg-slate-900/90 text-gold-400 text-[11px] font-bold px-3 py-1 rounded-full backdrop-blur-md border border-slate-800">
                      {item.categoryName}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1 font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-gold-600" />
                        {item.location}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">#{item.id}</span>
                    </div>
                    <h3 className="font-bold text-base text-slate-900 group-hover:text-gold-600 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button 
                    className="w-full text-center text-xs font-bold text-gold-600 group-hover:text-gold-700 flex items-center justify-center gap-1 border-t border-slate-100 pt-3"
                  >
                    عرض التفاصيل والتصميم كامل
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
              className="gold-gradient-bg text-white font-bold px-8 py-3.5 rounded-xl shadow-lg hover:shadow-gold-500/20 transition-all text-sm"
            >
              تحميل المزيد من صور وتصاميم المشاريع ({filteredItems.length - visibleCount} المتبقية)
            </button>
          </div>
        )}

      </section>

      {/* PROJECT DETAILS & FULL IMAGE MODAL */}
      {activeModalItem && (
        <div className="fixed inset-0 z-[999] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-white rounded-3xl max-w-4xl w-full overflow-hidden shadow-2xl relative my-8"
          >
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 left-4 z-20 bg-slate-900/90 text-white p-2.5 rounded-full hover:bg-slate-900 transition-colors shadow-lg border border-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            {/* High-Res Full Image Container */}
            <div className="relative bg-slate-950 max-h-[500px] flex items-center justify-center overflow-hidden">
              <img 
                src={activeModalItem.image} 
                alt={activeModalItem.title} 
                className="max-h-[500px] w-full object-contain"
              />
            </div>

            <div className="p-8 space-y-4">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="bg-gold-100 text-gold-800 text-xs font-bold px-3 py-1 rounded-full border border-gold-300">
                  {activeModalItem.categoryName}
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-gold-600" />
                  موقع المشروع: {activeModalItem.location}
                </span>
              </div>

              <h2 className="text-2xl font-black text-slate-900 font-cairo">
                {activeModalItem.title}
              </h2>

              <p className="text-slate-600 text-sm leading-relaxed font-tajawal">
                {activeModalItem.description}
              </p>

              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <a
                  href={`${siteInfo.contact.whatsapp.link}?text=${encodeURIComponent(`السلام عليكم، أودطلب استشارة أو تصميم مشابه لمشروع توب رايز: ${activeModalItem.title}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="gold-gradient-bg text-white font-bold px-7 py-3 rounded-xl text-sm flex items-center gap-2 shadow-md hover:shadow-gold-500/20"
                >
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>طلب تصميم مشابه لهذا المشروع على الواتساب</span>
                </a>

                <button
                  onClick={() => setActiveModalItem(null)}
                  className="text-xs font-bold text-slate-500 hover:text-slate-800"
                >
                  إغلاق النافذة
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

    </div>
  );
}
