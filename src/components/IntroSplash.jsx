import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function IntroSplash({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300);
          return 100;
        }
        return prev + 3;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
      className="fixed inset-0 z-[99999] bg-[#0b1a2e] flex flex-col items-center justify-center text-white gap-6 px-4"
    >
      {/* Ambient Radial Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#facc15]/10 rounded-full blur-[140px] pointer-events-none animate-pulse"></div>

      {/* Official Logo Frame with Glow Pulse */}
      <motion.div 
        animate={{ scale: [0.95, 1.05, 0.95] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="w-32 h-32 sm:w-40 sm:h-40 bg-white rounded-3xl p-3 shadow-[0_0_50px_rgba(250,204,21,0.4)] border-2 border-[#facc15] flex items-center justify-center overflow-hidden"
      >
        <img 
          src="/logo.jpg" 
          alt="توب رايز TOP RISE" 
          className="w-full h-full object-contain"
        />
      </motion.div>

      {/* Loader Logo Text */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-black text-[#facc15] font-cairo tracking-wide">
          توب رايز <span className="text-white">TOP RISE</span>
        </h1>
        <p className="text-sm font-semibold text-slate-300">
          للاستشارات الهندسية والتصاميم والمقاولات العامة
        </p>
        <div className="inline-block mt-2 px-4 py-1 rounded-full bg-[#facc15]/10 border border-[#facc15]/30 text-[#facc15] text-xs font-bold font-tajawal">
          "نبني لك أحلامك باحترافية"
        </div>
      </div>

      {/* Loader Bar & Progress */}
      <div className="w-56 space-y-2">
        <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden border border-slate-700">
          <div 
            className="h-full bg-gradient-to-r from-[#facc15] to-[#f59e0b] rounded-full transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
          <span>جاري التحميل...</span>
          <span className="text-[#facc15] font-bold">{progress}%</span>
        </div>
      </div>
    </motion.div>
  );
}
