import React from 'react';
import { 
  Compass, Building2, Droplets, Zap, Layers, Layout, 
  TrendingUp, Calculator, FileCheck, HardHat, MessageSquare, Ruler, Briefcase, Award, MapPin 
} from 'lucide-react';
import { servicesList, productsList, siteInfo } from '../data/siteData';

const iconMap = {
  Compass, Building2, Droplets, Zap, Layers, Layout, TrendingUp, Calculator, FileCheck, HardHat
};

const productIconMap = {
  Ruler, Briefcase, Award, MapPin
};

export default function Services() {
  return (
    <div className="space-y-20 pb-16 overflow-hidden bg-[#f8fafc]">
      
      {/* PAGE HEADER */}
      <section className="bg-[#0b1a2e] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#facc15]/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-[#facc15] font-bold text-sm tracking-widest uppercase">خدماتنا ومنتجاتنا</span>
          <h1 className="text-4xl sm:text-5xl font-black font-cairo">خدماتنا الهندسية — <span className="text-[#facc15]">Our Services</span></h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto font-tajawal">
            نقدم حزمة هندسية شاملة تغطي كل التفاصيل من المخططات الأولية حتى إتمام البناء والإشراف الميداني.
          </p>
        </div>
      </section>

      {/* SERVICES LIST (10 SERVICES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-[#f59e0b] font-bold text-sm">الـ 10 خدمات الأساسية</span>
          <h2 className="text-3xl font-black text-[#0b1a2e] font-cairo">
            حلول هندسية ودراسات تنفيذية معتمدة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Building2;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-[20px] p-7 border border-slate-200 hover:border-[#facc15] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-[#0b1a2e] flex items-center justify-center group-hover:bg-[#facc15] transition-colors duration-300 font-bold">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      خدمة #{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#0b1a2e] group-hover:text-[#f59e0b] transition-colors font-cairo">
                    {service.title}
                  </h3>

                  <p className="text-[#334155] text-sm leading-relaxed font-tajawal">
                    {service.description}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 font-semibold leading-relaxed">
                    {service.details}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={`${siteInfo.contact.whatsapp.link}?text=${encodeURIComponent(`السلام عليكم، أود الاستفسار عن خدمة: ${service.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-[#0b1a2e] hover:bg-[#facc15] hover:text-[#0b1a2e] text-white font-bold py-3 rounded-full text-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-[#facc15] group-hover:text-[#0b1a2e]" />
                    <span>طلب هذه الخدمة</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUCTS SECTION (4 PRODUCTS) */}
      <section className="bg-[#0b1a2e] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-[#facc15] font-bold text-sm">منتجاتنا</span>
            <h2 className="text-3xl font-black text-white font-cairo">منتجاتنا الهندسية والاستشارية</h2>
            <p className="text-slate-400 text-sm">
              أنظمة ومنتجات متكاملة تلبي احتياجات المستثمرين والمواطنين والقطاعين العام والخاص.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsList.map((product) => {
              const IconComponent = productIconMap[product.icon] || Ruler;
              return (
                <div 
                  key={product.id}
                  className="bg-slate-900 border border-slate-800 rounded-[20px] p-6 hover:border-[#facc15] transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-full bg-[#facc15]/20 text-[#facc15] flex items-center justify-center font-bold">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-cairo">{product.title}</h3>
                  <span className="text-xs text-[#facc15] font-semibold block">{product.subtitle}</span>
                  <p className="text-xs text-slate-400 leading-relaxed font-tajawal">{product.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICE PROCESS STEPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-[#f59e0b] font-bold text-sm">خطوات العمل</span>
          <h2 className="text-3xl font-black text-[#0b1a2e] font-cairo">كيف نعمل معكم في توب رايز؟</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-[20px] border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#facc15] text-[#0b1a2e] font-black flex items-center justify-center mx-auto">1</div>
            <h3 className="font-bold text-[#0b1a2e]">الاستشارة الأولى</h3>
            <p className="text-xs text-slate-600 font-tajawal">مناقشة متطلباتك ورؤيتك واحتياجات قطعة الأرض أو المبنى.</p>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#facc15] text-[#0b1a2e] font-black flex items-center justify-center mx-auto">2</div>
            <h3 className="font-bold text-[#0b1a2e]">التصميم والمخططات</h3>
            <p className="text-xs text-slate-600 font-tajawal">إعداد المخططات المعمارية والإنشائية والديكورات 3D لطلب ملاحظاتك.</p>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#facc15] text-[#0b1a2e] font-black flex items-center justify-center mx-auto">3</div>
            <h3 className="font-bold text-[#0b1a2e]">الاعتماد والتراخيص</h3>
            <p className="text-xs text-slate-600 font-tajawal">حساب الكميات واستخراج شهادات وتراخيص البناء الرسمية.</p>
          </div>

          <div className="bg-white p-6 rounded-[20px] border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#facc15] text-[#0b1a2e] font-black flex items-center justify-center mx-auto">4</div>
            <h3 className="font-bold text-[#0b1a2e]">الإشراف والتنفيذ</h3>
            <p className="text-xs text-slate-600 font-tajawal">التواجد الميداني لضمان مطابقة المنشأة لأعلى درجات الجودة والسلامة.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
