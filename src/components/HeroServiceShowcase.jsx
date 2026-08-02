import React, { useState } from 'react';
import { Disc, Zap, Sparkles, ShieldCheck, ArrowRight, Award, Eye } from 'lucide-react';

export default function HeroServiceShowcase({ lang = 'gu', onSelectService }) {
  const [activeTab, setActiveTab] = useState('ALIGNMENT');

  const tabs = {
    ALIGNMENT: {
      id: 'ALIGNMENT',
      nameGu: '3D લેઝર વ્હીલ એલાઈનમેન્ટ',
      nameEn: '3D LASER WHEEL ALIGNMENT',
      subtitleGu: 'જર્મન લેઝર કેમેરા ટેકનોલોજી',
      subtitleEn: 'GERMAN LASER SENSOR PRECISION',
      descGu: 'હાઇ-સ્પીડ 3D કેમેરા અને સેન્સર વડે ટાયરનું માઈક્રોન સ્તરે પરફેક્ટ સંતુલન. હાઇવે પર ઝીરો ટાયર ઘસારો અને 100% સ્થિર ડ્રાઇવિંગ.',
      descEn: 'Micron-level wheel balancing via high-speed 3D cameras. Ensures zero tire wear and 100% highway stability.',
      metrics: [
        { labelGu: 'સચોટતા (PRECISION)', labelEn: 'PRECISION', value: '૯૯.૯%', valueEn: '99.9%', progress: 99 },
        { labelGu: 'સમય (TIME REQUIRED)', labelEn: 'TIME REQUIRED', value: '૩૦ મિનિટ', valueEn: '30 MINS', progress: 30 },
        { labelGu: 'ગેરંટી (WARRANTY)', labelEn: 'WARRANTY', value: '૬ મહિના', valueEn: '6 MONTHS', progress: 100 },
      ],
      icon: Disc,
      badgeColor: 'bg-red-500/15 border border-red-500/30 text-red-400',
      accentColor: '#E1251B',
      price: '₹૭૯૯ થી શરૂ',
      priceEn: 'FROM ₹799',
      image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=900&q=80',
    },
    DIAGNOSTICS: {
      id: 'DIAGNOSTICS',
      nameGu: 'કોમ્પ્યુટરાઈઝ્ડ એન્જિન ડાયગ્નોસ્ટિક્સ',
      nameEn: 'COMPUTERIZED ECU DIAGNOSTICS',
      subtitleGu: 'OBD-II સ્કેનિંગ અને ટ્યુનિંગ',
      subtitleEn: 'OBD-II SCAN & ECU CALIBRATION',
      descGu: 'કારના તમામ સેન્સર, એન્જિન કંટ્રોલ યુનિટ (ECU) અને ઈલેક્ટ્રિકલ સિસ્ટમનું જર્મન સ્કેનર દ્વારા 100% સચોટ પરીક્ષણ અને એરર રિઝોલ્યુશન.',
      descEn: 'Complete ECU diagnostic scan, error code clearing, and sensor calibration via German OBD-2 scanners.',
      metrics: [
        { labelGu: 'સ્કેન ચોક્કસતા', labelEn: 'SCAN ACCURACY', value: '૧૦૦%', valueEn: '100%', progress: 100 },
        { labelGu: 'સેન્સર ટેસ્ટિંગ', labelEn: 'SENSORS TESTED', value: '૪૮+ સેન્સર', valueEn: '48+ SENSORS', progress: 95 },
        { labelGu: 'સમય (TIME REQUIRED)', labelEn: 'TIME REQUIRED', value: '૪૫ મિનિટ', valueEn: '45 MINS', progress: 45 },
      ],
      icon: Zap,
      badgeColor: 'bg-amber-500/15 border border-amber-500/30 text-amber-400',
      accentColor: '#F59E0B',
      price: '₹૧,૪૯૯ થી શરૂ',
      priceEn: 'FROM ₹1,499',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=900&q=80',
    },
    CERAMIC: {
      id: 'CERAMIC',
      nameGu: '૯H સિરામિક કોટિંગ & PPF',
      nameEn: '9H CERAMIC COATING & PPF',
      subtitleGu: '૫ વર્ષ મિરર શાઇન ગેરંટી',
      subtitleEn: '5-YEAR MIRROR SHINE WARRANTY',
      descGu: 'કારના પેઇન્ટ પર 100% વોટર-રિપેલન્ટ, યુવી પ્રોટેક્શન અને હાઇ-ગ્લોસ મિરર શાઇન કોટિંગ. ધૂળ અને સ્ક્રેચ સામે કાયમી રક્ષણ.',
      descEn: '100% hydrophobic UV-resistant ceramic glaze protecting your paint from UV oxidation and micro-scratches.',
      metrics: [
        { labelGu: 'ગ્લોસ લેવલ (GLOSS)', labelEn: 'GLOSS LEVEL', value: '૧૦/૧૦ શાઈન', valueEn: '10/10 SHINE', progress: 100 },
        { labelGu: 'વોટર રિપેલન્ટ', labelEn: 'HYDROPHOBIC', value: '૧૦૦% પ્રોટેક્શન', valueEn: '100% SHIELD', progress: 100 },
        { labelGu: 'આયુષ્ય (LIFE)', labelEn: 'COATING LIFE', value: '૫ વર્ષ+', valueEn: '5+ YEARS', progress: 90 },
      ],
      icon: Sparkles,
      badgeColor: 'bg-cyan-500/15 border border-cyan-500/30 text-cyan-400',
      accentColor: '#00F2FE',
      price: '₹૧૨,૯૯૯ થી શરૂ',
      priceEn: 'FROM ₹12,999',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=900&q=80',
    },
    WASH: {
      id: 'WASH',
      nameGu: 'એક્સપ્રેસ ફોમ વોશ & ડિટેઇલિંગ',
      nameEn: 'EXPRESS FOAM WASH & DETAILING',
      subtitleGu: 'હાઇ-પ્રેશર સ્ટીમ ક્લિનિંગ',
      subtitleEn: 'HIGH-PRESSURE STEAM CLEAN',
      descGu: 'પીએચ-બેલેન્સડ સ્નો ફોમ વોશ, અંડરબોડી એન્ટિ-રસ્ટ રિંસ, ટાયર પોલિશ અને કેબિન ઇન્ટિરિયર સ્ટીમ સેનિટાઇઝેશન.',
      descEn: 'PH-neutral snow foam wash, underbody anti-rust rinse, tire dressing, and interior steam disinfection.',
      metrics: [
        { labelGu: 'સફાઈ સ્તર (CLEAN)', labelEn: 'CLEANING GRADE', value: '૧૦૦% હાઇજીન', valueEn: '100% STERILE', progress: 100 },
        { labelGu: 'સમય (TIME REQUIRED)', labelEn: 'TIME REQUIRED', value: '૩૫ મિનિટ', valueEn: '35 MINS', progress: 35 },
        { labelGu: 'પોલિશ શાઈન', labelEn: 'TIRE DRESSING', value: 'પ્રીમિયમ ગ્લોસ', valueEn: 'HIGH GLOSS', progress: 95 },
      ],
      icon: ShieldCheck,
      badgeColor: 'bg-red-500/15 border border-red-500/30 text-red-400',
      accentColor: '#E1251B',
      price: '₹૪૯૯ થી શરૂ',
      priceEn: 'FROM ₹499',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=900&q=80',
    },
  };

  const current = tabs[activeTab];
  const IconComp = current.icon;

  return (
    <div className="w-full rounded-3xl bg-[#111520]/90 backdrop-blur-2xl border border-white/10 shadow-2xl overflow-hidden">
      
      {/* Top Navigation Tabs Header */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-white/10 bg-[#080A10]/70">
        {Object.keys(tabs).map((key) => {
          const tab = tabs[key];
          const isActive = activeTab === key;
          const TabIcon = tab.icon;

          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center space-x-3.5 p-4 sm:p-5 text-left transition-all border-r border-white/10 last:border-r-0 ${
                isActive
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg'
                  : 'bg-transparent text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-all ${
                  isActive ? 'bg-white/20 text-white scale-105 shadow-inner' : 'bg-white/5 text-slate-400'
                }`}
              >
                <TabIcon className="w-5 h-5" />
              </div>

              <div className="overflow-hidden">
                <span className="block text-[10px] font-satoshi font-bold tracking-widest uppercase opacity-75">
                  SYS // {key}
                </span>
                <span className="block text-xs sm:text-sm font-satoshi font-bold uppercase truncate mt-0.5">
                  {lang === 'gu' ? tab.nameGu : tab.nameEn}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Showcase Body */}
      <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gradient-to-b from-transparent to-white/[0.02]">
        
        {/* Left 7 Columns: Service Details & Interactive Telemetry Bars */}
        <div className="lg:col-span-7 space-y-6">
          
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-3.5 py-1 rounded-full text-xs font-satoshi font-bold uppercase ${current.badgeColor}`}>
              {lang === 'gu' ? current.subtitleGu : current.subtitleEn}
            </span>
            <span className="text-xs font-satoshi font-bold text-slate-400 flex items-center space-x-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>{lang === 'gu' ? 'લાઇવ સર્વિસ સ્પેસિફિકેશન' : 'LIVE TELEMETRY SPEC'}</span>
            </span>
          </div>

          <div>
            <h3 className="font-clash text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-white tracking-tight">
              {lang === 'gu' ? current.nameGu : current.nameEn}
            </h3>
            <p className="mt-3 text-sm sm:text-base font-satoshi text-slate-300 leading-relaxed max-w-xl">
              {lang === 'gu' ? current.descGu : current.descEn}
            </p>
          </div>

          {/* Animated Telemetry Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {current.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 shadow-sm space-y-2.5 hover:border-red-500/30 transition-all"
              >
                <div className="flex justify-between items-baseline">
                  <span className="text-[11px] font-satoshi font-bold uppercase text-slate-400">
                    {lang === 'gu' ? m.labelGu : m.labelEn}
                  </span>
                  <span className="text-sm font-clash font-extrabold text-red-400">
                    {lang === 'gu' ? m.value : m.valueEn}
                  </span>
                </div>

                {/* Smooth Gradient Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-700 ease-out shadow-sm"
                    style={{ width: `${m.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Booking & Consult Action Bar */}
          <div className="pt-2 flex flex-wrap items-center gap-5">
            <button
              onClick={() =>
                onSelectService({
                  titleGu: current.nameGu,
                  titleEn: current.nameEn,
                  priceGu: current.price,
                  priceEn: current.priceEn,
                })
              }
              className="brutal-cta-btn text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg flex items-center space-x-2"
            >
              <span>{lang === 'gu' ? 'આ સર્વિસ બુક કરો' : 'BOOK THIS SERVICE'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <div className="text-xs font-satoshi font-bold text-slate-300">
              <span className="block opacity-75">{lang === 'gu' ? 'શરૂઆતની કિંમત:' : 'STARTING AT:'}</span>
              <span className="text-lg font-extrabold text-amber-400">
                {lang === 'gu' ? current.price : current.priceEn}
              </span>
            </div>
          </div>

        </div>

        {/* Right 5 Columns: Interactive Photographic Showcase Card */}
        <div className="lg:col-span-5 rounded-3xl overflow-hidden border border-white/15 relative shadow-2xl group min-h-[340px] flex flex-col justify-between">
          
          {/* Background Photo with zoom on PC hover */}
          <img
            src={current.image}
            alt={current.nameEn}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark luxury gradient over the photo */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#080A10] via-[#080A10]/60 to-transparent" />

          {/* Top Status Badge */}
          <div className="relative z-10 p-6 flex items-center justify-between">
            <div className="inline-flex items-center space-x-2 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-satoshi font-bold uppercase text-white">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{lang === 'gu' ? '3D લેઝર ડાયગ્નોસ્ટિક' : '3D LASER DIAGNOSTICS'}</span>
            </div>
            <div className="w-9 h-9 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-amber-400 backdrop-blur-md">
              <Award className="w-5 h-5" />
            </div>
          </div>

          {/* Central Hover Description Reveal on PC, permanent on mobile */}
          <div className="relative z-10 p-6 flex flex-col justify-end">
            <div className="bg-[#0A0D14]/90 backdrop-blur-md border border-white/15 p-5 rounded-2xl shadow-xl space-y-2">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-400 flex-shrink-0">
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-clash text-base font-bold uppercase text-white">
                    {lang === 'gu' ? current.nameGu : current.nameEn}
                  </h4>
                  <span className="text-[11px] text-amber-400 font-bold uppercase">
                    ★ {lang === 'gu' ? '૧૦૦% અસલ OEM ગેરંટી' : '100% OEM WARRANTY'} ★
                  </span>
                </div>
              </div>

              <p className="text-xs font-satoshi text-slate-200 leading-relaxed pt-1">
                {lang === 'gu' ? current.descGu : current.descEn}
              </p>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-satoshi text-slate-400">
                <span>{lang === 'gu' ? 'લાઇવ વિડિઓ રિપોર્ટ:' : 'LIVE VIDEO REPORT:'}</span>
                <span className="text-emerald-400 font-bold uppercase">
                  ✓ {lang === 'gu' ? 'મફત ઉપલબ્ધ' : 'INCLUDED FREE'}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
