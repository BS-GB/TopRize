import React, { useState } from 'react';
import { 
  Compass, Building2, Droplets, Zap, Layers, Layout, 
  TrendingUp, Calculator, FileCheck, HardHat, CheckCircle2, MessageSquare, ArrowLeft, Ruler, Briefcase, Award, MapPin 
} from 'lucide-react';
import { servicesList, productsList, siteInfo } from '../data/siteData';

const iconMap = {
  Compass, Building2, Droplets, Zap, Layers, Layout, TrendingUp, Calculator, FileCheck, HardHat
};

const productIconMap = {
  Ruler, Briefcase, Award, MapPin
};

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="space-y-20 pb-16">
      
      {/* PAGE HEADER */}
      <section className="bg-slate-950 text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <span className="text-gold-400 font-bold text-sm tracking-widest uppercase">خدماتنا ومنتجاتنا</span>
          <h1 className="text-4xl sm:text-5xl font-black font-cairo">خدماتنا الهندسية — Our Services</h1>
          <p className="text-slate-300 text-base max-w-2xl mx-auto">
            نقدم حزمة هندسية شاملة تغطي كل التفاصيل من المخططات الأولية حتى إتمام البناء والإشراف.
          </p>
        </div>
      </section>

      {/* SERVICES LIST (10 SERVICES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-gold-600 font-bold text-sm">الـ 10 خدمات الأساسية</span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-cairo">
            حلول هندسية ودراسات تنفيذية معتمدة
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Building2;
            return (
              <div 
                key={service.id}
                className="bg-white rounded-2xl p-7 border border-slate-200 hover:border-gold-500 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-gold-50 text-gold-600 flex items-center justify-center group-hover:bg-gold-600 group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-full">
                      خدمة #{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-gold-600 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium leading-relaxed">
                    {service.details}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100">
                  <a
                    href={`${siteInfo.contact.whatsapp.link}?text=${encodeURIComponent(`السلام عليكم، أود الاستفسار عن خدمة: ${service.title}`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-gold-600 text-white font-bold py-2.5 rounded-xl text-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-gold-400 group-hover:text-white" />
                    <span>طلب هذه الخدمة</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRODUCTS SECTION (4 PRODUCTS) */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-gold-400 font-bold text-sm">منتجاتنا</span>
            <h2 className="text-3xl font-extrabold text-white font-cairo">منتجاتنا الهندسية والاستشارية</h2>
            <p className="text-slate-400 text-sm">
              أنظمة ومنتجات متكاملة تلبي احتياجات المستثمرين والمواطنين والقطاع العام.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsList.map((product) => {
              const IconComponent = productIconMap[product.icon] || Ruler;
              return (
                <div 
                  key={product.id}
                  className="bg-slate-950 border border-slate-800 rounded-2xl p-6 hover:border-gold-500 transition-all duration-300 space-y-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-gold-600/20 text-gold-400 flex items-center justify-center">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{product.title}</h3>
                  <span className="text-xs text-gold-400 font-semibold block">{product.subtitle}</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{product.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SERVICE PROCESS STEPS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-gold-600 font-bold text-sm">خطوات العمل</span>
          <h2 className="text-3xl font-extrabold text-slate-900 font-cairo">كيف نعمل معكم في توب رايز؟</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-gold-600 text-white font-bold flex items-center justify-center mx-auto">1</div>
            <h3 className="font-bold text-slate-900">الاستشارة الأولى</h3>
            <p className="text-xs text-slate-600">مناقشة متطلباتك ورؤيتك واحتياجات قطعة الأرض أو المبنى.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-gold-600 text-white font-bold flex items-center justify-center mx-auto">2</div>
            <h3 className="font-bold text-slate-900">التصميم والمخططات</h3>
            <p className="text-xs text-slate-600">إعداد المخططات المعمارية والإنشائية والديكورات 3D لطلب ملاحظاتك.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-gold-600 text-white font-bold flex items-center justify-center mx-auto">3</div>
            <h3 className="font-bold text-slate-900">الاعتماد والتراخيص</h3>
            <p className="text-xs text-slate-600">حساب الكميات واستخراج شهادات وتراخيص البناء الرسمية.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-gold-600 text-white font-bold flex items-center justify-center mx-auto">4</div>
            <h3 className="font-bold text-slate-900">الإشراف والتنفيذ</h3>
            <p className="text-xs text-slate-600">التواجد الميداني لضمان مطابقة المنشأة لأعلى درجات الجودة والسلامة.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
