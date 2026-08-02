import React from 'react';
import HeroServiceShowcase from './HeroServiceShowcase';
import { ArrowRight, ShieldCheck, Award, Disc, Sparkles, Wrench } from 'lucide-react';

export default function HeroSection({ lang = 'gu', onOpenBooking }) {
  return (
    <section className="relative min-h-screen pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden flex flex-col justify-between">
      
      {/* Subtle Ambient Glowing Studio Spotlights */}
      <div
        className="gradient-blob bg-red-600 top-[-10%] left-[-10%] animate-pulse-glow opacity-25"
        style={{ width: '45vw', height: '45vw', filter: 'blur(160px)' }}
      />
      <div
        className="gradient-blob bg-amber-500 top-[30%] right-[-10%] animate-pulse-glow opacity-20"
        style={{ width: '40vw', height: '40vw', filter: 'blur(160px)', animationDelay: '2s' }}
      />

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto w-full z-10">
        
        {/* Top Professional Executive Status Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="inline-flex items-center space-x-2.5 px-4 py-2 bg-white/10 border border-white/15 backdrop-blur-md text-white rounded-full text-xs font-satoshi font-bold tracking-widest uppercase shadow-lg">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>
              {lang === 'gu'
                ? 'ગુજરાતનું #૧ પ્રીમિયમ કાર ક્લબ & ડિટેઇલિંગ લાઉન્જ'
                : 'GUJARAT’S #1 PREMIER AUTOMOTIVE CLUB & DETAILING LOUNGE'}
            </span>
          </div>

          <div className="flex items-center space-x-6 text-xs font-satoshi font-bold uppercase tracking-wider text-slate-300">
            <span className="flex items-center space-x-1.5">
              <Award className="w-4 h-4 text-red-500" />
              <span>{lang === 'gu' ? '૧૫+ વર્ષનો વિશ્વાસ' : '15+ YEARS CLUB TRUST'}</span>
            </span>
            <span className="hidden sm:flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>{lang === 'gu' ? '૧૦૦% અસલ OEM સ્પેરપાર્ટ્સ' : '100% GENUINE OEM PARTS'}</span>
            </span>
          </div>
        </div>

        {/* Professional Elegant Luxury Headline */}
        <div className="my-6 sm:my-8 select-none">
          <h1 className="font-clash text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-[1.05] tracking-tight text-white">
            {lang === 'gu' ? 'ધ કાર ક્લબ' : 'THE CAR CLUB'}
          </h1>
          <h2 className="font-clash text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[1.1] tracking-tight bg-gradient-to-r from-red-500 via-rose-500 to-amber-500 bg-clip-text text-transparent mt-1">
            {lang === 'gu' ? 'ઓટોમોટિવ લાઉન્જ & સર્વિસ સ્ટુડિયો' : 'AUTOMOTIVE LOUNGE & SERVICE STUDIO'}
          </h2>
        </div>

        {/* Interactive Telemetry & Diagnostic Showcase */}
        <div className="my-8">
          <HeroServiceShowcase
            lang={lang}
            onSelectService={(service) => onOpenBooking(service)}
          />
        </div>

        {/* Subtext and Executive CTAs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-10">
          
          {/* Subtext */}
          <div className="md:col-span-6 lg:col-span-7">
            <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-xl text-slate-300 font-gujarati-heading">
              {lang === 'gu'
                ? 'ગુજરાતનું સૌથી અત્યાધુનિક ધ કાર ક્લબ લાઉન્જ. 3D લેઝર વ્હીલ એલાઈનમેન્ટથી લઈ ૯H સિરામિક કોટિંગ સુધી કાર ક્લબ સભ્યો માટે વિશેષ કાળજી અને ગેરંટી.'
                : 'Gujarat’s premier Car Club automotive lounge. Precision engineering from computerized ECU diagnostics to 9H hydrophobic ceramic detailing.'}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-2.5 text-xs uppercase font-satoshi font-bold text-slate-300">
              <span className="px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl shadow-sm flex items-center space-x-1.5 hover:bg-white/10 transition-colors">
                <Disc className="w-4 h-4 text-red-500" />
                <span>3D LASER WHEEL ALIGNMENT</span>
              </span>
              <span className="px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl shadow-sm flex items-center space-x-1.5 hover:bg-white/10 transition-colors">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>9H CERAMIC PPF</span>
              </span>
              <span className="px-3.5 py-2 bg-white/5 border border-white/10 rounded-xl shadow-sm flex items-center space-x-1.5 hover:bg-white/10 transition-colors">
                <Wrench className="w-4 h-4 text-cyan-400" />
                <span>GERMAN OBD-2 DIAGNOSTICS</span>
              </span>
            </div>
          </div>

          {/* Professional Action CTA Buttons */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-wrap items-center justify-start md:justify-end gap-5">
            <a
              href="#packages"
              className="text-slate-300 font-satoshi font-bold text-sm tracking-wider uppercase inline-flex items-center space-x-2 hover:text-red-500 transition-colors py-2 group"
            >
              <span>{lang === 'gu' ? 'ક્લબ સર્વિસ પેકેજ જુઓ' : 'VIEW CLUB PACKAGES'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-red-500" />
            </a>

            <button
              onClick={() => onOpenBooking(null)}
              className="brutal-cta-btn text-xs sm:text-sm px-8 py-4 shadow-xl"
            >
              <span>{lang === 'gu' ? 'ક્લબ એપોઇન્ટમેન્ટ બુક કરો' : 'BOOK CLUB APPOINTMENT'}</span>
            </button>
          </div>
        </div>

      </div>

      {/* Sleek Automotive Marquee Ticker Band */}
      <div className="mt-16 -mx-4 sm:-mx-8 border-y border-white/10 bg-[#111520]/90 backdrop-blur-md text-slate-300 py-3.5 overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee space-x-12 font-clash font-bold uppercase text-xs sm:text-sm tracking-widest items-center">
          <span>★ ધ કાર ક્લબ ગુજરાત | THE CAR CLUB GUJARAT</span>
          <span className="text-red-500">◆ 3D લેઝર વ્હીલ એલાઈનમેન્ટ | 3D LASER WHEEL ALIGNMENT</span>
          <span>★ ૯H સિરામિક કોટિંગ & પેઇન્ટ પ્રોટેક્શન | CERAMIC COATING & PPF</span>
          <span className="text-amber-500">◆ એક્સપ્રેસ કાર વોશ & ડિટેઇલિંગ | EXPRESS CAR WASH</span>
          <span>★ ૨૪/૭ ઈમરજન્સી બ્રેકડાઉન હેલ્પલાઇન | 24/7 ROADSIDE ASSISTANCE</span>
          <span>★ ધ કાર ક્લબ ગુજરાત | THE CAR CLUB GUJARAT</span>
          <span className="text-red-500">◆ 3D લેઝર વ્હીલ એલાઈનમેન્ટ | 3D LASER WHEEL ALIGNMENT</span>
        </div>
      </div>
    </section>
  );
}
