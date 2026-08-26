import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo({ size = 'medium', lightMode = false, showSubtitle = true }) {
  const containerSizes = {
    small: 'w-10 h-10',
    medium: 'w-12 h-12 sm:w-14 sm:h-14',
    large: 'w-16 h-16 sm:w-20 sm:h-20'
  };

  const titleSizes = {
    small: 'text-base sm:text-lg',
    medium: 'text-xl sm:text-2xl',
    large: 'text-2xl sm:text-3xl'
  };

  return (
    <Link to="/" className="inline-flex items-center gap-3 group focus:outline-none">
      {/* Official Logo Image Frame with Gold Glow */}
      <div 
        className={`relative flex-shrink-0 rounded-full bg-white p-0.5 shadow-[0_0_20px_rgba(250,204,21,0.25)] border-2 border-[#facc15] group-hover:border-[#f59e0b] group-hover:scale-105 transition-all duration-300 overflow-hidden flex items-center justify-center ${containerSizes[size]}`}
      >
        <img 
          src="/logo.jpg" 
          alt="توب رايز TOP RISE" 
          className="w-full h-full object-contain rounded-full"
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span className={`font-black tracking-tight font-cairo ${lightMode ? 'text-white' : 'text-[#0b1a2e]'} ${titleSizes[size]}`}>
            توب رايز
          </span>
          <span className={`font-extrabold tracking-wider font-sans text-[#facc15] ${size === 'large' ? 'text-xl' : 'text-base'}`}>
            TOP RISE
          </span>
        </div>

        {/* Subtitle */}
        {showSubtitle && (
          <div className="flex flex-col">
            <div className="w-full h-[2px] bg-gradient-to-r from-[#facc15] via-[#f59e0b] to-transparent my-0.5"></div>
            <span className={`text-[10px] md:text-[11px] font-semibold leading-tight ${lightMode ? 'text-slate-300' : 'text-[#64748b]'}`}>
              للاستشارات الهندسية والتصاميم والمقاولات العامة
            </span>
          </div>
        )}
      </div>
    </Link>
  );
}
