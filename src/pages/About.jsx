import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Eye, Target, Award, Building2 } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function About() {
  return (
    <div className="space-y-16 pb-16 overflow-hidden bg-[#f8fafc]">
      
      {/* PAGE HEADER */}
      <section className="bg-[#0b1a2e] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#facc15]/10 rounded-full blur-3xl pointer-events-none"></div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4"
        >
          <span className="text-[#facc15] font-bold text-sm tracking-widest uppercase">نبذة عن المكتب</span>
          <h1 className="text-4xl sm:text-5xl font-black font-cairo">من نحن — <span className="text-[#facc15]">About Us</span></h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-tajawal">
            توب رايز | TOP RISE للاستشارات الهندسية والتصاميم والمقاولات العامة
          </p>
        </motion.div>
      </section>

      {/* ABOUT US MAIN CONTENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white border border-slate-200 rounded-[24px] p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-8 space-y-6">
            <div className="border-r-4 border-[#facc15] pr-4">
              <span className="text-[#f59e0b] font-bold text-xs">من نحن</span>
              <h2 className="text-3xl font-extrabold text-[#0b1a2e] font-cairo">
                التميز الهندسي والموثوقية الاستشارية
              </h2>
            </div>

            <p className="text-[#334155] text-lg leading-relaxed font-tajawal">
              {siteInfo.aboutText}
            </p>

            <div className="p-6 bg-[#0b1a2e] text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-slate-800">
              <div className="space-y-1">
                <span className="text-xs text-[#facc15] font-semibold block">شعارنا التسويقي</span>
                <p className="text-2xl font-black text-[#facc15] font-tajawal">"{siteInfo.slogan}"</p>
              </div>
              <a
                href={siteInfo.contact.whatsapp.link}
                target="_blank"
                rel="noreferrer"
                className="bg-[#facc15] text-[#0b1a2e] font-extrabold px-6 py-3 rounded-full text-sm whitespace-nowrap shadow-md hover:scale-105 transition-all"
              >
                تواصل مع فريقنا الهندسي
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <div className="w-56 h-56 rounded-3xl bg-white p-4 border-2 border-[#facc15] shadow-2xl flex items-center justify-center">
              <img 
                src="/logo.jpg" 
                alt="شعار توب رايز TOP RISE" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* VISION & MISSION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Card */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6 }}
            className="bg-[#0b1a2e] text-white border border-slate-800 p-8 sm:p-10 rounded-[24px] space-y-4 shadow-lg hover:border-[#facc15] transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#facc15]/20 text-[#facc15] flex items-center justify-center">
              <Eye className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold font-cairo text-white">رؤيتنا — Our Vision</h2>
            <p className="text-slate-300 text-base leading-relaxed font-tajawal">
              {siteInfo.vision}
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.6 }}
            className="bg-white text-slate-900 border border-slate-200 p-8 sm:p-10 rounded-[24px] space-y-4 shadow-lg hover:border-[#facc15] transition-all"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#fef9e7] text-[#f59e0b] flex items-center justify-center">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-2xl font-extrabold font-cairo text-[#0b1a2e]">رسالتنا — Our Mission</h2>
            <p className="text-slate-600 text-base leading-relaxed font-tajawal">
              {siteInfo.mission}
            </p>
          </motion.div>

        </div>
      </section>

      {/* GOALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[#f59e0b] font-bold text-sm">استراتيجية العمل</span>
          <h2 className="text-3xl font-extrabold text-[#0b1a2e] font-cairo">أهدافنا — Our Goals</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteInfo.goals.map((goal, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white p-8 rounded-[20px] border border-slate-200 shadow-md space-y-4 hover:border-[#facc15] transition-all relative overflow-hidden"
            >
              <span className="absolute top-4 left-4 text-4xl font-black text-slate-100 select-none">
                0{idx + 1}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#facc15] text-[#0b1a2e] font-black flex items-center justify-center">
                {idx + 1}
              </div>
              <p className="text-[#0b1a2e] font-bold text-base leading-relaxed font-tajawal">
                {goal}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
