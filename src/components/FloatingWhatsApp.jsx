import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { siteInfo } from '../data/siteData';

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 group">
      {/* Phone Floating Button */}
      <a
        href={`tel:${siteInfo.contact.phones[0].number}`}
        className="w-12 h-12 bg-slate-900 text-gold-400 border border-gold-500/40 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-slate-800 transition-all duration-300"
        title="اتصال مباشر"
      >
        <Phone className="w-5 h-5" />
      </a>

      {/* WhatsApp Floating Button */}
      <a
        href={siteInfo.contact.whatsapp.link}
        target="_blank"
        rel="noreferrer"
        className="relative w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-emerald-500 transition-all duration-300 animate-bounce hover:animate-none"
        title="تواصل معنا على الواتساب"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full animate-ping"></span>
        <MessageSquare className="w-7 h-7 fill-white text-emerald-600" />
      </a>
    </div>
  );
}
