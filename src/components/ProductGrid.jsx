import React, { useState } from 'react';
import { ArrowUpRight, Clock, Wrench, Shield, Sparkles, Disc, Zap, HeartHandshake, Eye } from 'lucide-react';

export default function ProductGrid({ lang = 'gu', onSelectService }) {
  const [filter, setFilter] = useState('ALL');

  const services = [
    {
      id: 1,
      category: 'DIAGNOSTICS',
      tagGu: 'કોમ્પ્યુટરાઈઝ્ડ',
      tagEn: 'ECU TECH',
      titleGu: 'એન્જિન ડાયગ્નોસ્ટિક્સ & ટ્યુનિંગ',
      titleEn: 'COMPUTERIZED ENGINE DIAGNOSTICS & ECU TUNING',
      priceGu: '₹૧,૪૯૯ થી શરૂ',
      priceEn: 'STARTING AT ₹1,499',
      durationGu: '૪૫ મિનિટ',
      durationEn: '45 MINS',
      descGu: 'જર્મન OBD-2 સ્કેનર દ્વારા એન્જિન, સેન્સર અને ઈલેક્ટ્રિકલ સિસ્ટમનું ૧૦૦% સચોટ પરીક્ષણ.',
      descEn: '100% accurate engine, sensor & electrical diagnostic testing via German OBD-2 scanners.',
      icon: Zap,
      accentColor: '#E1251B',
      image: 'https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 2,
      category: 'DETAILING',
      tagGu: '૯H સિરામિક',
      tagEn: '9H CERAMIC',
      titleGu: 'પ્રીમિયમ સિરામિક કોટિંગ & પેઇન્ટ પ્રોટેક્શન',
      titleEn: 'PREMIUM 9H CERAMIC COATING & PPF DETAILING',
      priceGu: '₹૧૨,૯૯૯ થી શરૂ',
      priceEn: 'STARTING AT ₹12,999',
      durationGu: '૨ દિવસ',
      durationEn: '2 DAYS',
      descGu: 'કારના પેઇન્ટ પર મિરર શાઇન, વોટર-રિપેલન્ટ કોટિંગ અને ૫ વર્ષની ગ્લોસ ગેરંટી.',
      descEn: 'Mirror shine, hydro-repellent coating with 5-year gloss guarantee on car paintwork.',
      icon: Sparkles,
      accentColor: '#F59E0B',
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 3,
      category: 'MECHANICAL',
      tagGu: '3D લેઝર',
      tagEn: '3D LASER',
      titleGu: '3D લેઝર વ્હીલ એલાઈનમેન્ટ & બેલેન્સિંગ',
      titleEn: '3D LASER WHEEL ALIGNMENT & DYNAMIC BALANCING',
      priceGu: '₹૭૯૯ થી શરૂ',
      priceEn: 'STARTING AT ₹799',
      durationGu: '૩૦ મિનિટ',
      durationEn: '30 MINS',
      descGu: 'હાઇ-સ્પીડ કેમેરા અને 3D લેઝર સેન્સર વડે ટાયરનું પરફેક્ટ સંતુલન અને આયુષ્ય વધારો.',
      descEn: 'Perfect tire balance and extended lifespan with high-speed camera 3D laser sensors.',
      icon: Disc,
      accentColor: '#E1251B',
      image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 4,
      category: 'MECHANICAL',
      tagGu: 'એસી કુલિંગ',
      tagEn: 'AC CHILL',
      titleGu: 'સંપૂર્ણ એસી સર્વિસ & ગેસ રિફિલિંગ',
      titleEn: 'COMPLETE AC SERVICING & R134A GAS REFILLING',
      priceGu: '₹૧,૯૯૯ થી શરૂ',
      priceEn: 'STARTING AT ₹1,999',
      durationGu: '૧ કલાક',
      durationEn: '1 HOUR',
      descGu: 'કુલિંગ કોઇલ સફાઈ, એન્ટિ-બેક્ટેરિયલ સ્પ્રે અને ઓટોમેટિક ગેસ રિચાર્જ મશીન.',
      descEn: 'Cooling coil cleaning, anti-bacterial spray & automatic refrigerant refilling.',
      icon: Wrench,
      accentColor: '#00F2FE',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 5,
      category: 'DETAILING',
      tagGu: 'સ્ટીમ વોશ',
      tagEn: 'STEAM WASH',
      titleGu: 'એક્સપ્રેસ કાર વોશ & ઇન્ટિરિયર સ્ટીમ ક્લિનિંગ',
      titleEn: 'EXPRESS CAR WASH & INTERIOR STEAM CLEANING',
      priceGu: '₹૪૯૯ થી શરૂ',
      priceEn: 'STARTING AT ₹499',
      durationGu: '૩૫ મિનિટ',
      durationEn: '35 MINS',
      descGu: 'હાઇ-પ્રેશર ફોમ વોશ, અંડરબોડી એન્ટિ-રસ્ટ વોશ અને કેબિન સેનિટાઇઝેશન.',
      descEn: 'High-pressure foam wash, underbody anti-rust rinse & cabin sanitization.',
      icon: Shield,
      accentColor: '#E1251B',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 6,
      category: 'EMERGENCY',
      tagGu: '૨૪/૭ સેવા',
      tagEn: '24/7 SOS',
      titleGu: '૨૪/૭ ઈમરજન્સી બ્રેકડાઉન રોડસાઇડ આસિસ્ટન્સ',
      titleEn: '24/7 EMERGENCY ROADSIDE BREAKDOWN ASSISTANCE',
      priceGu: '₹૯૯૯ થી શરૂ',
      priceEn: 'STARTING AT ₹999',
      durationGu: '૨૫ મિનિટમાં પહોંચ',
      durationEn: '25 MIN ARRIVAL',
      descGu: 'બેટરી જમ્પસ્ટાર્ટ, ફ્લેટ ટાયર બદલાવ, ઓન-સ્પોટ રિપેર અને ટોઇંગ સુવિધા.',
      descEn: 'Battery jumpstart, flat tire swap, on-spot repair & rapid towing assistance.',
      icon: HeartHandshake,
      accentColor: '#F59E0B',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80',
    },
  ];

  const filteredServices =
    filter === 'ALL'
      ? services
      : services.filter((s) => s.category === filter);

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-white/10 pb-5">
        <div className="flex flex-wrap gap-2.5">
          {[
            { id: 'ALL', labelGu: 'બધી સેવાઓ (ALL)', labelEn: 'ALL SERVICES' },
            { id: 'DIAGNOSTICS', labelGu: 'ડાયગ્નોસ્ટિક્સ (DIAGNOSTICS)', labelEn: 'DIAGNOSTICS' },
            { id: 'MECHANICAL', labelGu: 'મિકેનિકલ (MECHANICAL)', labelEn: 'MECHANICAL' },
            { id: 'DETAILING', labelGu: 'સિરામિક & વોશ (DETAILING)', labelEn: 'DETAILING' },
            { id: 'EMERGENCY', labelGu: 'ઈમરજન્સી (24/7 SOS)', labelEn: 'EMERGENCY SOS' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-4 py-2 font-satoshi font-bold text-xs uppercase tracking-wider transition-all rounded-xl border ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-red-600 to-red-500 text-white border-red-500 shadow-lg shadow-red-500/25'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:border-red-500/50 hover:text-white'
              }`}
            >
              {lang === 'gu' ? tab.labelGu : tab.labelEn}
            </button>
          ))}
        </div>

        <span className="text-xs font-satoshi font-bold text-slate-400">
          {lang === 'gu'
            ? `કુલ ${filteredServices.length} સેવાઓ ઉપલબ્ધ છે`
            : `${filteredServices.length} SERVICES AVAILABLE`}
        </span>
      </div>

      {/* Responsive Grid: PC (hover reveal description) + Mobile (photo & description permanently visible) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.map((service) => {
          const IconComponent = service.icon;

          return (
            <div
              key={service.id}
              onClick={() => onSelectService(service)}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-white/10 bg-[#121622] transition-all duration-500 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 flex flex-col"
            >
              {/* =======================
                  DESKTOP / PC VIEW (>= md)
                  Photo with hover reveal description
                 ======================= */}
              <div className="hidden md:block relative w-full h-[430px] overflow-hidden">
                {/* Background high-res automotive image */}
                <img
                  src={service.image}
                  alt={service.titleEn}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Default Bottom Overlay (visible when not hovered on PC) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent flex flex-col justify-between p-6 transition-opacity duration-500 group-hover:opacity-0">
                  {/* Top badges */}
                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        backgroundColor: `${service.accentColor}30`,
                        borderColor: service.accentColor,
                        color: service.accentColor,
                      }}
                      className="px-3 py-1 rounded-full text-xs font-satoshi font-bold uppercase border backdrop-blur-md shadow-sm"
                    >
                      {lang === 'gu' ? service.tagGu : service.tagEn}
                    </span>
                    <span className="flex items-center space-x-1.5 text-xs font-satoshi font-bold text-white bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                      <Clock className="w-3.5 h-3.5 text-red-500" />
                      <span>{lang === 'gu' ? service.durationGu : service.durationEn}</span>
                    </span>
                  </div>

                  {/* Bottom title & price preview */}
                  <div>
                    <h3 className="font-clash font-extrabold text-xl uppercase tracking-wide text-white leading-snug drop-shadow-md">
                      {lang === 'gu' ? service.titleGu : service.titleEn}
                    </h3>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-satoshi font-bold text-amber-400">
                        {lang === 'gu' ? service.priceGu : service.priceEn}
                      </span>
                      <span className="inline-flex items-center space-x-1 text-[11px] font-satoshi font-bold uppercase text-slate-300 bg-white/10 px-2.5 py-1 rounded-full">
                        <Eye className="w-3 h-3 text-red-500" />
                        <span>{lang === 'gu' ? 'વિગતો જુઓ (HOVER)' : 'HOVER DETAILS'}</span>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay (reveals full description on PC hover) */}
                <div className="absolute inset-0 bg-[#080B12]/95 backdrop-blur-lg p-7 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <span
                      style={{
                        backgroundColor: `${service.accentColor}25`,
                        borderColor: service.accentColor,
                        color: service.accentColor,
                      }}
                      className="px-3.5 py-1 rounded-full text-xs font-satoshi font-bold uppercase border shadow-sm"
                    >
                      {lang === 'gu' ? service.tagGu : service.tagEn}
                    </span>

                    <span className="flex items-center space-x-1.5 text-xs font-satoshi text-slate-300">
                      <Clock className="w-3.5 h-3.5 text-red-500" />
                      <span>{lang === 'gu' ? service.durationGu : service.durationEn}</span>
                    </span>
                  </div>

                  {/* Center Description Area */}
                  <div className="my-auto py-4 space-y-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600/30 to-amber-500/20 border border-white/20 flex items-center justify-center text-white shadow-lg">
                      <IconComponent className="w-6 h-6 text-red-400" />
                    </div>

                    <h4 className="font-clash font-extrabold text-lg uppercase text-white tracking-wide leading-tight">
                      {lang === 'gu' ? service.titleGu : service.titleEn}
                    </h4>

                    <p className="text-slate-300 text-sm font-satoshi leading-relaxed">
                      {lang === 'gu' ? service.descGu : service.descEn}
                    </p>
                  </div>

                  {/* Bottom Price & Book Online Button */}
                  <div className="border-t border-white/15 pt-4 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] font-satoshi text-slate-400 uppercase">
                        {lang === 'gu' ? 'કિંમત:' : 'PRICE:'}
                      </span>
                      <span className="text-base font-extrabold font-clash text-amber-400">
                        {lang === 'gu' ? service.priceGu : service.priceEn}
                      </span>
                    </div>

                    <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-satoshi font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-lg shadow-red-600/40 hover:scale-105 transition-transform">
                      <span>{lang === 'gu' ? 'બુક કરો' : 'BOOK NOW'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* =======================
                  MOBILE / PHONE VIEW (< md)
                  Permanent photo + description clearly visible
                 ======================= */}
              <div className="block md:hidden flex-col w-full">
                {/* Photo Header */}
                <div className="relative w-full h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.titleEn}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121622] via-transparent to-black/40" />

                  {/* Top badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <span
                      style={{
                        backgroundColor: `${service.accentColor}30`,
                        borderColor: service.accentColor,
                        color: service.accentColor,
                      }}
                      className="px-3 py-1 rounded-full text-xs font-satoshi font-bold uppercase border backdrop-blur-md shadow-sm"
                    >
                      {lang === 'gu' ? service.tagGu : service.tagEn}
                    </span>

                    <span className="flex items-center space-x-1 text-xs font-satoshi font-bold text-white bg-black/70 px-2.5 py-1 rounded-full border border-white/10 backdrop-blur-md">
                      <Clock className="w-3.5 h-3.5 text-red-500" />
                      <span>{lang === 'gu' ? service.durationGu : service.durationEn}</span>
                    </span>
                  </div>
                </div>

                {/* Permanent Description Body (Always visible on mobile phones!) */}
                <div className="p-5 space-y-3 bg-[#121622]">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 text-red-400">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-clash font-extrabold text-base uppercase text-white tracking-wide leading-snug">
                      {lang === 'gu' ? service.titleGu : service.titleEn}
                    </h3>
                  </div>

                  {/* Description text with photo on phone */}
                  <p className="text-slate-300 text-xs sm:text-sm font-satoshi leading-relaxed bg-white/5 p-3 rounded-xl border border-white/5">
                    {lang === 'gu' ? service.descGu : service.descEn}
                  </p>

                  {/* Price and Book Action */}
                  <div className="pt-2 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <span className="block text-[10px] font-satoshi text-slate-400 uppercase">
                        {lang === 'gu' ? 'શરૂઆતની કિંમત:' : 'STARTING PRICE:'}
                      </span>
                      <span className="text-base font-extrabold font-clash text-amber-400">
                        {lang === 'gu' ? service.priceGu : service.priceEn}
                      </span>
                    </div>

                    <button className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white font-satoshi font-bold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-lg shadow-red-600/40">
                      <span>{lang === 'gu' ? 'બુક કરો' : 'BOOK ONLINE'}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Professional Service Assurance Banner */}
      <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#111520] to-[#161B2E] text-white border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
        <div>
          <span className="inline-block px-3 py-1 rounded-full text-xs font-satoshi font-bold uppercase tracking-widest bg-amber-500/15 border border-amber-500/30 text-amber-400 mb-2">
            ★ ૧૦૦% પારદર્શિતા અને ગેરંટી ★
          </span>
          <h4 className="text-xl sm:text-2xl font-clash font-extrabold uppercase mt-1">
            {lang === 'gu'
              ? 'દરેક સર્વિસ પર ૬ મહિનાની વોરંટી અને લાઈવ વિડિઓ રિપોર્ટ'
              : '6 MONTHS COMPREHENSIVE WARRANTY & LIVE VIDEO DASHBOARD REPORT'}
          </h4>
        </div>
        <button
          onClick={() => onSelectService({ titleGu: 'કસ્ટમ કાર સર્વિસ ઇન્સ્પેક્શન', titleEn: 'CUSTOM CAR INSPECTION', priceGu: 'મફત સલાહ (FREE)', priceEn: 'FREE CONSULTATION' })}
          className="brutal-cta-btn whitespace-nowrap text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg"
        >
          {lang === 'gu' ? 'મફત ઇન્સ્પેક્શન બુક કરો' : 'BOOK FREE INSPECTION'}
        </button>
      </div>
    </section>
  );
}
