import React, { useState } from 'react';
import { PhoneCall, X, Sparkles, Headset } from 'lucide-react';

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export default function FloatingContactFAB({ lang = 'gu' }) {
  const [expanded, setExpanded] = useState(false);

  const phoneNumber = '9913433555';
  const whatsappNumber = '919913433555';

  // Formatted initial greeting message for WhatsApp FAB click
  const whatsappMessage = encodeURIComponent(
    `*નમસ્તે ધ કાર ક્લબ (THE CAR CLUB)!* 🚗✨\n` +
    `મારે મારી કારની સર્વિસ, લેઝર અલાઇનમેન્ટ અને પેકેજ વિશે માહિતી જોઈએ છે.\n` +
    `_Hello, I would like to inquire about car servicing and pricing._`
  );

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  const callUrl = `tel:+91${phoneNumber}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 select-none">
      
      {/* Expanded Quick Contact Card (Appears when user clicks/hovers the FAB) */}
      {expanded && (
        <div className="w-72 p-5 rounded-2xl bg-[#0B0E14]/95 backdrop-blur-2xl border border-white/15 shadow-2xl text-white space-y-4 animate-in fade-in slide-in-from-bottom-3 duration-300">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center space-x-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-satoshi font-bold uppercase tracking-wider text-slate-200">
                {lang === 'gu' ? '૨૪/૭ ઈમરજન્સી હેલ્પલાઇન' : '24/7 HELPLINE'}
              </span>
            </div>
            <button
              onClick={() => setExpanded(false)}
              className="text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div>
            <h4 className="font-clash text-lg font-extrabold text-white">
              ધ કાર ક્લબ (THE CAR CLUB)
            </h4>
            <p className="text-xs font-satoshi text-amber-400 font-bold tracking-wide mt-0.5">
              +91 99134 33555
            </p>
            <p className="text-[11px] font-satoshi text-slate-300 mt-1 leading-relaxed">
              {lang === 'gu'
                ? 'કોઈપણ પૂછપરછ, લાઈવ જોબ કાર્ડ અથવા ઈમરજન્સી બ્રેકડાઉન સહાય માટે કૉલ અથવા WhatsApp કરો.'
                : 'Directly chat with our service manager or call for 24/7 breakdown support.'}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-satoshi font-bold uppercase flex items-center justify-center space-x-1.5 shadow-lg shadow-emerald-600/30 transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={callUrl}
              className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white text-xs font-satoshi font-bold uppercase flex items-center justify-center space-x-1.5 shadow-lg shadow-red-500/30 transition-all"
            >
              <PhoneCall className="w-4 h-4" />
              <span>{lang === 'gu' ? 'કૉલ કરો' : 'CALL NOW'}</span>
            </a>
          </div>
        </div>
      )}

      {/* Persistent Floating Action Buttons (FABs) */}
      <div className="flex items-center space-x-3">
        


        {/* Quick Menu Toggle FAB */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-12 h-12 rounded-full bg-[#111520] hover:bg-white/10 text-amber-400 border border-white/20 shadow-xl flex items-center justify-center transition-all hover:scale-105"
          title={lang === 'gu' ? 'હેલ્પલાઇન મેનુ' : 'Helpline Menu'}
        >
          {expanded ? <X className="w-5 h-5 text-white" /> : <Headset className="w-5 h-5" />}
        </button>

      </div>

    </div>
  );
}
