import React from 'react';
import { MapPin, ArrowUpRight, Share2, Globe, Clock } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export default function Footer({ lang = 'gu' }) {
  return (
    <footer id="contact" className="bg-[#07090E] text-slate-300 pt-16 pb-12 border-t border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Column 1: Large brand logo and social icons */}
          <div className="space-y-4">
            <div>
              <span className="font-clash text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white block">
                ધ કાર ક્લબ
              </span>
              <span className="text-xs font-satoshi font-semibold tracking-widest uppercase text-amber-400 mt-1 block">
                THE CAR CLUB | GUJARAT AUTO LOUNGE
              </span>
            </div>
            <p className="text-sm font-satoshi text-slate-400 leading-relaxed">
              {lang === 'gu'
                ? 'ગુજરાતનું અગ્રેસર કાર ક્લબ અને 3D લેઝર-સંચાલિત કાર સર્વિસ લાઉન્જ. ૧૦૦% અસલ સ્પેરપાર્ટ્સ અને ૬ મહિનાની ગેરંટી સાથે.'
                : 'Gujarat’s premier Car Club & 3D laser-assisted hi-tech automotive service lounge. Complete automotive care with 100% OEM parts warranty.'}
            </p>

            {/* Social / Connect icons */}
            <div className="flex items-center space-x-2.5 pt-2">
              <a
                href="https://wa.me/919913433555"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center hover:bg-emerald-600 hover:border-emerald-600 transition-all text-white"
                title="WhatsApp Support"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <a
                href="#website"
                className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all text-white"
                title="Website Network"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href="#share"
                className="w-10 h-10 rounded-xl border border-white/15 bg-white/5 flex items-center justify-center hover:bg-red-600 hover:border-red-600 transition-all text-white"
                title="Share"
              >
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Service links */}
          <div>
            <h4 className="font-satoshi font-bold text-xs uppercase tracking-widest text-red-400 mb-4">
              {lang === 'gu' ? 'મુખ્ય સેવાઓ | SERVICES' : 'CLUB SERVICES'}
            </h4>
            <ul className="space-y-2.5 font-satoshi text-sm text-slate-300">
              {[
                { labelGu: '3D લેઝર વ્હીલ એલાઈનમેન્ટ', labelEn: '3D Laser Wheel Alignment' },
                { labelGu: 'એન્જિન ડાયગ્નોસ્ટિક્સ & ટ્યુનિંગ', labelEn: 'ECU Computerized Diagnostics' },
                { labelGu: '૯H સિરામિક કોટિંગ & PPF', labelEn: '9H Ceramic Coating & PPF' },
                { labelGu: 'એસી ગેસ રિફિલ & કોઇલ સર્વિસ', labelEn: 'AC R134A Refrigerant Refill' },
                { labelGu: 'એક્સપ્રેસ ફોમ વોશ & સ્ટીમ ક્લીન', labelEn: 'Express Foam Wash & Steam Clean' },
                { labelGu: '૨૪/૭ ઈમરજન્સી રોડસાઇડ આસિસ્ટન્સ', labelEn: '24/7 Roadside SOS Assistance' },
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#services" className="hover:text-amber-400 transition-colors flex items-center justify-between group">
                    <span>{lang === 'gu' ? item.labelGu : item.labelEn}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-400" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation & Quick links */}
          <div>
            <h4 className="font-satoshi font-bold text-xs uppercase tracking-widest text-red-400 mb-4">
              {lang === 'gu' ? 'શાખાઓ & સમય | LOCATIONS' : 'BRANCHES & HOURS'}
            </h4>
            <ul className="space-y-3 font-satoshi text-sm text-slate-300">
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>
                  {lang === 'gu'
                    ? 'અમદાવાદ: એસ.જી. હાઇવે, વૈષ્ણોદેવી સર્કલ પાસે'
                    : 'Ahmedabad: S.G. Highway, near Vaishnodevi Circle'}
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>
                  {lang === 'gu'
                    ? 'સુરત: ડુમસ રોડ, પીપલોદ હબ'
                    : 'Surat: Dumas Road, Piplod Automotive Hub'}
                </span>
              </li>
              <li className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                <span>
                  {lang === 'gu'
                    ? 'રાજકોટ: કાલાવડ રોડ, ક્રિસ્ટલ મોલ સામે'
                    : 'Rajkot: Kalawad Road, opp. Crystal Mall'}
                </span>
              </li>
              <li className="flex items-start space-x-2.5 pt-1 text-white">
                <Clock className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span>
                  {lang === 'gu'
                    ? 'સોમ-રવિ: ૦૮:૩૦ AM થી ૦૯:૦૦ PM (૨૪/૭ ઈમરજન્સી)'
                    : 'Mon-Sun: 08:30 AM to 09:00 PM (24/7 SOS Available)'}
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Direct Help / Helpline Card */}
          <div className="bg-gradient-to-br from-[#121622] to-[#1B2030] border border-white/15 p-6 rounded-2xl flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-satoshi font-bold tracking-widest uppercase text-amber-400">
                ★ {lang === 'gu' ? '૨૪/૭ ઈમરજન્સી હેલ્પલાઇન' : '24/7 SOS HELPLINE'} ★
              </span>
              <h5 className="font-clash text-2xl font-extrabold uppercase mt-2 text-white">
                +91 99134 33555
              </h5>
              <p className="text-xs font-satoshi text-slate-400 mt-1.5">
                {lang === 'gu'
                  ? 'ગાડી બંધ પડી ગઈ? ૧૫ મિનિટમાં અમારી ઈમરજન્સી ટોઇંગ વાન પહોંચશે.'
                  : 'Breakdown assistance? Our emergency towing van arrives in 15 mins.'}
              </p>
            </div>
            <a
              href="tel:+919913433555"
              className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 text-white text-center text-xs font-bold font-satoshi uppercase tracking-widest shadow-lg shadow-red-500/25 hover:shadow-red-500/40 transition-all block"
            >
              {lang === 'gu' ? 'હમણાં જ કૉલ કરો (CALL SOS)' : 'CALL SOS HELPLINE NOW'}
            </a>
          </div>

        </div>

        {/* Professional Sleek Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-satoshi text-slate-500 select-none">
          <div className="flex items-center space-x-3">
            <span className="font-clash text-sm font-extrabold uppercase text-slate-300 tracking-wider">
              ધ કાર ક્લબ | THE CAR CLUB
            </span>
            <span>|</span>
            <span>2026 OFFICIAL AUTOMOTIVE LOUNGE</span>
          </div>

          <div className="mt-4 sm:mt-0 text-center sm:text-right">
            <span>
              {lang === 'gu'
                ? '© ૨૦૨૬ ધ કાર ક્લબ ગુજરાત. સર્વ હક આરક્ષિત.'
                : '© 2026 THE CAR CLUB GUJARAT. ALL RIGHTS RESERVED.'}
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
