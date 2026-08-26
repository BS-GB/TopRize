import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, MessageSquare, ChevronLeft } from 'lucide-react';
import { navigation } from '../data/navigation';
import { siteInfo } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="bg-[#0b1a2e] text-slate-300 pt-16 pb-8 border-t-4 border-[#facc15] relative overflow-hidden">
      {/* Ambient Background Blur */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#facc15]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Col 1: About & Logo with Pure White Container */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 shadow-[0_4px_20px_rgba(250,204,21,0.3)] border-2 border-[#facc15] flex items-center justify-center overflow-hidden">
                <img 
                  src="/logo.jpg" 
                  alt="توب رايز TOP RISE" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black font-cairo text-white">توب رايز</span>
                <span className="text-sm font-extrabold text-[#facc15]">TOP RISE</span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              مكتب متخصص في المجال الهندسي والاستشاري، سعى دائماً لأن نكون الأفضل بما يواكب الطموحات وتنوع الخدمات لضمان أعلى معايير الجودة والالتزام بالمواعيد.
            </p>

            <div className="pt-2">
              <span className="inline-block px-3 py-1 bg-[#facc15]/10 text-[#facc15] border border-[#facc15]/30 text-xs font-bold rounded-full">
                "{siteInfo.slogan}"
              </span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-lg border-r-4 border-[#facc15] pr-3">
              روابط الموقع
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="hover:text-[#facc15] transition-colors flex items-center gap-1.5 text-slate-300"
                  >
                    <ChevronLeft className="w-4 h-4 text-[#facc15]" />
                    <span>{item.labelAr || item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-lg border-r-4 border-[#facc15] pr-3">
              خدماتنا الرئيسية
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#facc15]"></span>
                مخططات معمارية وإنشائية
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#facc15]"></span>
                تصاميم واجهات وديكور 3D
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#facc15]"></span>
                دراسة جدوى وحساب كميات
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#facc15]"></span>
                إصدار شهادات إتمام بناء
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#facc15]"></span>
                إشراف وتنفيذ مقاولات عامة
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-white font-extrabold text-lg border-r-4 border-[#facc15] pr-3">
              تواصل معنا
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#facc15] mt-1 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${siteInfo.contact.phones[0].number}`} dir="ltr" className="hover:text-[#facc15]">
                    {siteInfo.contact.phones[0].display}
                  </a>
                  <a href={`tel:${siteInfo.contact.phones[1].number}`} dir="ltr" className="hover:text-[#facc15]">
                    {siteInfo.contact.phones[1].display}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={siteInfo.contact.whatsapp.link} target="_blank" rel="noreferrer" className="hover:text-emerald-400">
                  واتساب: <span dir="ltr">{siteInfo.contact.whatsapp.display}</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#facc15] flex-shrink-0" />
                <a href={`mailto:${siteInfo.contact.email}`} className="hover:text-[#facc15] text-xs">
                  {siteInfo.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#facc15] mt-1 flex-shrink-0" />
                <span className="text-xs text-slate-300 leading-tight">
                  {siteInfo.contact.location.fullAddress}
                </span>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href={siteInfo.contact.instagram.link} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#facc15] hover:border-[#facc15] transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href={siteInfo.contact.facebook.link} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#facc15] hover:border-[#facc15] transition-all"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={siteInfo.contact.whatsapp.link} 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:border-emerald-400 transition-all"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} توب رايز TOP RISE للاستشارات الهندسية. جميع الحقوق محفوظة.</p>
          <p className="flex items-center gap-1 font-semibold">
            <span>تصميم وتطوير احترافي بواسطة</span>
            <span className="font-bold text-[#facc15]">TOP RISE Engineering</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
