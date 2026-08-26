import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Menu, X, ArrowLeft } from 'lucide-react';
import { navigation } from '../data/navigation';
import { siteInfo } from '../data/siteData';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on path change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="sticky top-0 z-[1000] w-full transition-all duration-400">
      {/* Top Info Strip */}
      <div className="bg-[#07111e] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/60 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${siteInfo.contact.phones[0].number}`} 
              className="flex items-center gap-1.5 hover:text-[#facc15] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#facc15]" />
              <span dir="ltr">{siteInfo.contact.phones[0].display}</span>
            </a>
            <a 
              href={siteInfo.contact.whatsapp.link} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>واتساب: <span dir="ltr">{siteInfo.contact.whatsapp.display}</span></span>
            </a>
            <span className="flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#facc15]" />
              <span>صنعاء - بيت بوس - ش/ 30 خلف الجامعة اللبنانية</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[#facc15] font-bold">
            <span>"{siteInfo.slogan}"</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-400 ${
          isScrolled 
            ? 'bg-[#0b1a2e]/95 backdrop-blur-md text-white shadow-xl py-3 border-b border-slate-800/80' 
            : 'bg-[#0b1a2e] text-white py-4 shadow-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Icon */}
          <NavLink to="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#facc15] to-[#f59e0b] p-0.5 shadow-[0_0_20px_rgba(250,204,21,0.3)] flex items-center justify-center overflow-hidden transition-all group-hover:scale-105">
              <img 
                src="/logo.jpg" 
                alt="توب رايز TOP RISE" 
                className="w-full h-full object-contain rounded-full"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-black font-cairo text-white">
                  توب رايز
                </span>
                <span className="text-lg sm:text-xl font-extrabold font-sans text-[#facc15]">
                  TOP RISE
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-semibold leading-tight">
                للاستشارات الهندسية والتصاميم والمقاولات العامة
              </span>
            </div>
          </NavLink>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-2">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-1.5 rounded-full text-sm font-bold transition-all relative ${
                    isActive
                      ? 'text-[#facc15] bg-[#facc15]/10 after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-0.5 after:bg-[#facc15] after:rounded-full'
                      : 'text-slate-200 hover:text-[#facc15] hover:bg-[#facc15]/5'
                  }`
                }
              >
                {item.labelAr || item.name}
              </NavLink>
            ))}
          </div>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={siteInfo.contact.whatsapp.link}
              target="_blank"
              rel="noreferrer"
              className="bg-[#facc15] hover:bg-[#f59e0b] text-[#0b1a2e] font-extrabold px-5 py-2.5 rounded-full text-sm shadow-[0_8px_30px_rgba(250,204,21,0.3)] hover:scale-105 transition-all flex items-center gap-2"
            >
              <span>طلب استشارة</span>
              <ArrowLeft className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full text-white hover:text-[#facc15] hover:bg-slate-800 transition-colors"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Hamburger Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0b1a2e]/98 text-white px-4 pt-4 pb-6 border-t border-slate-800/80 shadow-2xl animate-fadeIn">
            <div className="flex flex-col space-y-2 mb-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-4 py-3 rounded-2xl font-bold text-base transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-[#facc15]/15 text-[#facc15] border-r-4 border-[#facc15]'
                        : 'text-slate-200 hover:bg-slate-800/60'
                    }`
                  }
                >
                  <span>{item.labelAr || item.name}</span>
                  <ArrowLeft className="w-4 h-4 opacity-70" />
                </NavLink>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={siteInfo.contact.whatsapp.link}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center bg-[#facc15] text-[#0b1a2e] font-extrabold py-3 rounded-full flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <span>تواصل معنا عبر الواتساب</span>
              </a>
              <a
                href={`tel:${siteInfo.contact.phones[0].number}`}
                className="w-full text-center bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold py-2.5 rounded-full flex items-center justify-center gap-2 text-sm"
              >
                <Phone className="w-4 h-4 text-[#facc15]" />
                <span>اتصال مباشر: <span dir="ltr">{siteInfo.contact.phones[0].display}</span></span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
