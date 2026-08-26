import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Phone, Mail, MapPin, Instagram, Facebook, MessageSquare, 
  Send, CheckCircle2, Clock, Copy, ExternalLink, ShieldCheck, Sparkles, Building2
} from 'lucide-react';
import { siteInfo, servicesList } from '../data/siteData';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: servicesList[0].title,
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState('');

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `السلام عليكم، أنا ${formData.name}%0Aرقم التواصل: ${formData.phone}%0Aالخدمة المطلوبة: ${formData.service}%0Aالتفاصيل: ${formData.message}`;
    window.open(`https://wa.me/967772732166?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="space-y-20 pb-20 overflow-hidden bg-[#f8fafc]">
      
      {/* HERO HEADER */}
      <section className="bg-gradient-to-b from-[#0b1a2e] via-[#1a3a5c] to-[#0b1a2e] text-white py-20 relative overflow-hidden">
        {/* Background Ambient Lights */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#facc15]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#f59e0b]/10 rounded-full blur-3xl pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#facc15]/15 border border-[#facc15]/30 text-[#facc15] text-xs sm:text-sm font-semibold">
            <Building2 className="w-4 h-4 text-[#facc15]" />
            <span>تواصل مباشر وتواجد ميداني</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-cairo">
            تواصل معنا وموقعنا — <span className="text-[#facc15]">Contact Us</span>
          </h1>
          
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-tajawal">
            فريق مكتب توب رايز للاستشارات الهندسية متواجد لخدمتك والإجابة على كل استفساراتك الهندسية وتطوير مشاريعك.
          </p>
        </motion.div>
      </section>

      {/* INTERACTIVE CONTACT CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-12">
          <span className="text-[#f59e0b] font-bold text-sm tracking-wider uppercase">قنوات الاتصال المباشر</span>
          <h2 className="text-3xl font-black text-[#0b1a2e] font-cairo">
            اختر الوسيلة الأنسب للتواصل معنا
          </h2>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Card 1: Direct Phones */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-white p-7 rounded-[24px] border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group border-t-4 border-t-[#0b1a2e]"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0b1a2e] text-[#facc15] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Phone className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0b1a2e]">الهاتف والاتصال المباشر</h3>
                <p className="text-xs text-slate-500 mt-1">اتصال هاتفي مباشر مع الاستقبال الهندسي</p>
              </div>

              <div className="space-y-2 pt-2 text-sm font-bold text-slate-800">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-[#facc15]/10 transition-colors">
                  <a href={`tel:${siteInfo.contact.phones[0].number}`} dir="ltr" className="hover:text-[#f59e0b]">
                    {siteInfo.contact.phones[0].display}
                  </a>
                  <button 
                    onClick={() => handleCopy(siteInfo.contact.phones[0].number, 'phone1')}
                    className="text-xs text-slate-400 hover:text-[#0b1a2e]"
                    title="نسخ الرقم"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100 hover:bg-[#facc15]/10 transition-colors">
                  <a href={`tel:${siteInfo.contact.phones[1].number}`} dir="ltr" className="hover:text-[#f59e0b]">
                    {siteInfo.contact.phones[1].display}
                  </a>
                  <button 
                    onClick={() => handleCopy(siteInfo.contact.phones[1].number, 'phone2')}
                    className="text-xs text-slate-400 hover:text-[#0b1a2e]"
                    title="نسخ الرقم"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <span className="text-xs text-slate-600">هاتف ثابت:</span>
                  <a href={`tel:${siteInfo.contact.phones[2].number}`} dir="ltr" className="hover:text-[#f59e0b]">
                    {siteInfo.contact.phones[2].display}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={`tel:${siteInfo.contact.phones[0].number}`}
              className="w-full text-center bg-[#0b1a2e] hover:bg-[#1a3a5c] text-white font-bold py-3 rounded-full text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#facc15]" />
              <span>اتصل بنا الآن</span>
            </a>
          </motion.div>

          {/* Card 2: WhatsApp Instant Chat */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-white p-7 rounded-[24px] border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group border-t-4 border-t-emerald-500"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <MessageSquare className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0b1a2e]">محادثة واتساب فورية</h3>
                <p className="text-xs text-slate-500 mt-1">خدمة العملاء والاستفسارات السريعة</p>
              </div>

              <div className="p-4 bg-emerald-50/60 rounded-2xl border border-emerald-100 space-y-2">
                <span className="text-xs text-emerald-800 font-bold block">رقم الواتساب الرسمي:</span>
                <a 
                  href={siteInfo.contact.whatsapp.link}
                  target="_blank"
                  rel="noreferrer"
                  dir="ltr"
                  className="text-lg font-black text-emerald-700 block hover:underline"
                >
                  {siteInfo.contact.whatsapp.display}
                </a>
                <p className="text-[11px] text-emerald-700">متاح 24/7 لاستقبال الاستفسارات والطلبات</p>
              </div>
            </div>

            <a
              href={siteInfo.contact.whatsapp.link}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-full text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>افتح محادثة الواتساب</span>
            </a>
          </motion.div>

          {/* Card 3: Email & Documentation */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-white p-7 rounded-[24px] border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group border-t-4 border-t-[#f59e0b]"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#facc15]/20 text-[#0b1a2e] flex items-center justify-center shadow-md group-hover:scale-110 transition-transform font-bold">
                <Mail className="w-7 h-7 text-[#f59e0b]" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0b1a2e]">البريد الإلكتروني الرسمى</h3>
                <p className="text-xs text-slate-500 mt-1">لإرسال المخططات والعروض والمستندات</p>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-2">
                <span className="text-xs text-slate-600 font-bold block">إيميل المكتب المعماري:</span>
                <a 
                  href={`mailto:${siteInfo.contact.email}`}
                  className="text-xs font-bold text-[#0b1a2e] hover:text-[#f59e0b] block break-all font-sans"
                >
                  {siteInfo.contact.email}
                </a>
              </div>
            </div>

            <a
              href={`mailto:${siteInfo.contact.email}`}
              className="w-full text-center bg-[#0b1a2e] hover:bg-[#1a3a5c] text-white font-bold py-3 rounded-full text-xs transition-colors flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-[#facc15]" />
              <span>إرسال بريد إلكتروني</span>
            </a>
          </motion.div>

          {/* Card 4: Social Media */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -8 }}
            className="bg-white p-7 rounded-[24px] border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group border-t-4 border-t-purple-500"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Instagram className="w-7 h-7" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#0b1a2e]">شبكات التواصل الاجتماعي</h3>
                <p className="text-xs text-slate-500 mt-1">تابع أحدث مشاريعنا ولقطات 3D يومياً</p>
              </div>

              <div className="space-y-2 pt-2 text-xs font-bold">
                <a 
                  href={siteInfo.contact.instagram.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-pink-50 text-pink-700 hover:bg-pink-100 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </span>
                  <span className="font-mono">@{siteInfo.contact.instagram.handle}</span>
                </a>

                <a 
                  href={siteInfo.contact.facebook.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </span>
                  <span>توب رايز TOP RISE</span>
                </a>
              </div>
            </div>

            <a
              href={siteInfo.contact.instagram.link}
              target="_blank"
              rel="noreferrer"
              className="w-full text-center bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 rounded-full text-xs transition-colors flex items-center justify-center gap-2 shadow-md"
            >
              <Instagram className="w-4 h-4 text-white" />
              <span>متابعة انستغرام</span>
            </a>
          </motion.div>

        </motion.div>

        {/* Copy Notification Toast */}
        <AnimatePresence>
          {copiedText && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed bottom-6 right-6 z-50 bg-[#0b1a2e] text-white px-5 py-3 rounded-2xl shadow-2xl border border-[#facc15]/40 flex items-center gap-2 text-xs font-bold"
            >
              <CheckCircle2 className="w-4 h-4 text-[#facc15]" />
              <span>تم نسخ الرقم بنجاح إلى الحافظة!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* LOCATION & CONSULTATION FORM SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Detailed Location Card with Official Logo Accent */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-gradient-to-br from-[#0b1a2e] via-[#132a44] to-[#0b1a2e] text-white p-8 rounded-[24px] shadow-2xl border border-slate-800 space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-4 border-b border-slate-800 pb-4">
                {/* Official Logo Accent */}
                <div className="w-14 h-14 rounded-full bg-white p-1 border-2 border-[#facc15] shadow-md flex-shrink-0 flex items-center justify-center overflow-hidden">
                  <img 
                    src="/logo.jpg" 
                    alt="شعار توب رايز" 
                    className="w-full h-full object-contain rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-black font-cairo text-white">موقعنا في صنعاء — Location</h3>
                  <span className="text-xs text-[#facc15] font-semibold block">مكتب توب رايز الهندسي الرئيسي</span>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#07111e] border border-slate-800">
                  <MapPin className="w-5 h-5 text-[#facc15] mt-1 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="font-bold text-white">📍 {siteInfo.contact.location.country} — {siteInfo.contact.location.city} — {siteInfo.contact.location.district}</p>
                    <p className="text-xs text-slate-400">🏘️ {siteInfo.contact.location.street}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-2xl bg-[#07111e] border border-slate-800 text-xs">
                  <Clock className="w-5 h-5 text-[#facc15] flex-shrink-0" />
                  <div>
                    <p className="font-bold text-white">أوقات العمل واستقبال الزوار:</p>
                    <p className="text-slate-400">السبت إلى الخميس: 8:00 صباحاً — 8:00 مساءً</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder Graphic */}
              <div className="relative w-full h-44 rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 flex flex-col items-center justify-center p-4 text-center space-y-2">
                <MapPin className="w-8 h-8 text-[#facc15] animate-bounce" />
                <p className="text-xs font-bold text-white">بيت بوس — ش/ 30 خلف الجامعة اللبنانية — تقاطع شارع الكور</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('اليمن صنعاء بيت بوس شارع 30 خلف الجامعة اللبنانية')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 bg-[#facc15] text-[#0b1a2e] font-extrabold px-4 py-1.5 rounded-full text-xs hover:scale-105 transition-transform"
                >
                  <span>عرض الموقع في خرائط Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Consultation Request Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 sm:p-10 rounded-[24px] border border-slate-200 shadow-xl space-y-6">
              <div>
                <span className="text-[#f59e0b] font-bold text-xs uppercase tracking-wider">استمارة التواصل المباشر</span>
                <h2 className="text-3xl font-black text-[#0b1a2e] font-cairo mt-1">
                  أرسل تفاصيل مشروعك أو طلب استشارة
                </h2>
                <p className="text-slate-600 text-sm mt-1">
                  قم بتعبئة البيانات أدناه وسنقوم بإعداد الرد والاستشارة الهندسية فوراً.
                </p>
              </div>

              {submitted && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl flex items-center gap-3 text-sm font-bold animate-fadeIn">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span>تم تحويل الطلب بنجاح إلى فريقنا الهندسي عبر الواتساب! شكراً لتواصلك مع توب رايز.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-bold text-[#0b1a2e] mb-1.5">
                    الاسم الكامل:
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="أدخل اسمك الكريم"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#facc15] focus:border-[#facc15] outline-none text-slate-900 text-sm bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0b1a2e] mb-1.5">
                    رقم الهاتف / الواتساب:
                  </label>
                  <input 
                    type="tel"
                    required
                    dir="ltr"
                    placeholder="+967 77XXXXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#facc15] focus:border-[#facc15] outline-none text-slate-900 text-sm text-right bg-slate-50/50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0b1a2e] mb-1.5">
                    الخدمة المطلوب استشارتها:
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#facc15] focus:border-[#facc15] outline-none text-slate-900 text-sm bg-slate-50/50"
                  >
                    {servicesList.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#0b1a2e] mb-1.5">
                    تفاصيل المشروع أو الاستفسار:
                  </label>
                  <textarea 
                    rows="4"
                    required
                    placeholder="اكتب نبذة عن المساحة، الموقع، أو تفاصيل المخطط المطلوب..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-[#facc15] focus:border-[#facc15] outline-none text-slate-900 text-sm bg-slate-50/50"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#facc15] hover:bg-[#f59e0b] text-[#0b1a2e] font-extrabold py-4 rounded-full shadow-[0_8px_30px_rgba(250,204,21,0.3)] hover:scale-102 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Send className="w-5 h-5 text-[#0b1a2e]" />
                  <span>إرسال الطلب فوراً عبر الواتساب</span>
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
