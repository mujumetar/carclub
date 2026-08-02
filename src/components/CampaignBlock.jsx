import React from 'react';
import { ShieldCheck, Award, Video, CheckCircle2, Eye, ArrowUpRight } from 'lucide-react';

export default function CampaignBlock({ lang = 'gu' }) {
  const features = [
    {
      id: 1,
      titleGu: '૧૦૦% અસલ OEM સ્પેરપાર્ટ્સ ગેરંટી',
      titleEn: '100% GENUINE OEM AUTOMOTIVE PARTS',
      descGu: 'દરેક સ્પેરપાર્ટ ઓરિજિનલ મેન્યુફેક્ચરર બ્રાન્ડનો, બારકોડ વોરંટી અને અસલ બિલ સાથે.',
      descEn: 'Every replacement part is OEM certified with barcode traceability and genuine warranty.',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=800&q=80',
      tagGu: 'અસલ પાર્ટ્સ',
      tagEn: 'OEM CERTIFIED',
      icon: ShieldCheck,
    },
    {
      id: 2,
      titleGu: 'જર્મન 3D લેઝર અલાઇનમેન્ટ ટેકનોલોજી',
      titleEn: 'GERMAN 3D LASER ALIGNMENT TECH',
      descGu: 'માઈક્રોન સ્તરની સચોટતા સાથે ટાયર અલાઇનમેન્ટ જેથી ગાડી હાઇવે પર બિલકુલ સ્થિર ચાલે.',
      descEn: 'Micron-level alignment precision ensuring absolute stability and zero tire wear on highways.',
      image: 'https://images.unsplash.com/photo-1578844251758-2f71da64c96f?auto=format&fit=crop&w=800&q=80',
      tagGu: 'જર્મન ટેક',
      tagEn: 'GERMAN LASER',
      icon: Award,
    },
    {
      id: 3,
      titleGu: 'પારદર્શક લાઈવ વિડિઓ ડાયગ્નોસ્ટિક્સ',
      titleEn: 'TRANSPARENT LIVE VIDEO REPORTS',
      descGu: 'કોઈપણ પાર્ટ બદલતા પહેલા ગ્રાહકને WhatsApp પર લાઈવ વિડિઓ અને અપ્રૂવલ પૂછવામાં આવે છે.',
      descEn: 'We share live video inspection evidence on WhatsApp before executing any part replacement.',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
      tagGu: 'લાઈવ વિડિઓ',
      tagEn: 'LIVE EVIDENCE',
      icon: Video,
    },
    {
      id: 4,
      titleGu: '૬ મહિનાની ક્લબ સર્વિસ વોરંટી',
      titleEn: '6 MONTHS CLUB SERVICE GUARANTEE',
      descGu: 'સર્વિસ બાદ ૬ મહિના અથવા ૫,૦૦૦ કિમી સુધી કોઈપણ સમસ્યા માટે મફત સપોર્ટ અને ચેકઅપ.',
      descEn: 'Free re-inspection and support for 6 months or 5,000 KM across all serviced components.',
      image: 'https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=800&q=80',
      tagGu: '૬ માસ વોરંટી',
      tagEn: '6M WARRANTY',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="why-us" className="bg-[#0B0E14] py-20 sm:py-28 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Intro Section */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block px-3.5 py-1 mb-4 bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-satoshi font-bold tracking-widest uppercase rounded-full">
            {lang === 'gu' ? 'અમારી વિશેષતા' : 'CLUB EXCELLENCE'}
          </span>
          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight text-white">
            {lang === 'gu'
              ? 'શા માટે ધ કાર ક્લબ પસંદ કરવું?'
              : 'WHY CHOOSE THE CAR CLUB?'}
          </h2>
          <p className="mt-4 text-base sm:text-lg font-satoshi text-slate-300 max-w-2xl leading-relaxed">
            {lang === 'gu'
              ? 'અમે માત્ર કાર રિપેર નથી કરતા, અમે જર્મન ટેકનોલોજી અને ગુજરાતી ભરોસા સાથે ગાડીને નવું જીવન આપીએ છીએ.'
              : 'We don’t just service cars; we deliver precision automotive engineering backed by unwavering transparency and club trust.'}
          </p>
        </div>

        {/* 4 Feature Visual Cards Grid: PC Hover Description + Mobile Permanent View */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat) => {
            const IconComponent = feat.icon;

            return (
              <div
                key={feat.id}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-[#121622] transition-all duration-500 hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 flex flex-col"
              >
                {/* =======================
                    PC VIEW (>= md): Hover reveals description over photo
                   ======================= */}
                <div className="hidden md:block relative w-full h-80 overflow-hidden">
                  <img
                    src={feat.image}
                    alt={feat.titleEn}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-between p-6 transition-opacity duration-500 group-hover:opacity-0">
                    <span className="self-start px-3 py-1 rounded-full text-xs font-satoshi font-bold uppercase bg-red-500/20 border border-red-500/40 text-red-400 backdrop-blur-md">
                      {lang === 'gu' ? feat.tagGu : feat.tagEn}
                    </span>

                    <div>
                      <h3 className="font-clash font-extrabold text-base uppercase text-white tracking-wide leading-snug drop-shadow">
                        {lang === 'gu' ? feat.titleGu : feat.titleEn}
                      </h3>
                      <span className="mt-2 inline-flex items-center space-x-1 text-[11px] font-satoshi font-bold uppercase text-slate-300 bg-white/10 px-2.5 py-1 rounded-full">
                        <Eye className="w-3 h-3 text-red-500" />
                        <span>{lang === 'gu' ? 'વિગતો જુઓ' : 'HOVER DETAILS'}</span>
                      </span>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-[#0A0D14]/95 backdrop-blur-md p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full text-xs font-satoshi font-bold uppercase bg-red-500/20 border border-red-500/40 text-red-400">
                        {lang === 'gu' ? feat.tagGu : feat.tagEn}
                      </span>
                      <IconComponent className="w-5 h-5 text-amber-400" />
                    </div>

                    <div className="my-auto space-y-2.5 py-2">
                      <h4 className="font-clash font-bold text-base uppercase text-white tracking-wide">
                        {lang === 'gu' ? feat.titleGu : feat.titleEn}
                      </h4>
                      <p className="text-slate-300 text-xs font-satoshi leading-relaxed">
                        {lang === 'gu' ? feat.descGu : feat.descEn}
                      </p>
                    </div>

                    <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs font-satoshi font-bold text-emerald-400">
                      <span>✓ {lang === 'gu' ? 'ગેરંટી પ્રમાણપત્ર' : 'CERTIFIED TRUST'}</span>
                      <ArrowUpRight className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* =======================
                    MOBILE VIEW (< md): Both Photo and Description clearly visible
                   ======================= */}
                <div className="block md:hidden flex-col w-full">
                  <div className="relative w-full h-44 overflow-hidden">
                    <img
                      src={feat.image}
                      alt={feat.titleEn}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121622] via-transparent to-black/30" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full text-xs font-satoshi font-bold uppercase bg-red-500/20 border border-red-500/40 text-red-400 backdrop-blur-md">
                        {lang === 'gu' ? feat.tagGu : feat.tagEn}
                      </span>
                    </div>
                  </div>

                  <div className="p-5 space-y-2.5 bg-[#121622]">
                    <div className="flex items-center space-x-2.5">
                      <IconComponent className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <h3 className="font-clash font-bold text-base uppercase text-white tracking-wide">
                        {lang === 'gu' ? feat.titleGu : feat.titleEn}
                      </h3>
                    </div>
                    <p className="text-slate-300 text-xs font-satoshi leading-relaxed bg-white/5 p-3 rounded-xl">
                      {lang === 'gu' ? feat.descGu : feat.descEn}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Club Excellence Numbers */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/10 pt-10 text-center sm:text-left">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <span className="font-clash text-3xl sm:text-4xl font-extrabold text-amber-400">૧૦,૦૦૦+</span>
            <p className="text-xs font-satoshi font-bold uppercase mt-1 text-slate-300">
              {lang === 'gu' ? 'ક્લબ સભ્યો' : 'ACTIVE CLUB MEMBERS'}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <span className="font-clash text-3xl sm:text-4xl font-extrabold text-amber-400">૯૯.૮%</span>
            <p className="text-xs font-satoshi font-bold uppercase mt-1 text-slate-300">
              {lang === 'gu' ? 'ચોક્કસાઈ અને સંતોષ' : 'DIAGNOSTIC ACCURACY'}
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
            <span className="font-clash text-3xl sm:text-4xl font-extrabold text-amber-400">૨૪/૭</span>
            <p className="text-xs font-satoshi font-bold uppercase mt-1 text-slate-300">
              {lang === 'gu' ? 'ઈમરજન્સી હેલ્પલાઇન' : 'ROADSIDE HELP'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
