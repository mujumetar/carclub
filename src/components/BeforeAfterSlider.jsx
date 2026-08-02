import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, MoveHorizontal, Shield, Eye, CheckCircle2, XCircle } from 'lucide-react';

export default function BeforeAfterSlider({ lang = 'gu' }) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback(
    (clientX) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percentage = (x / rect.width) * 100;
      setSliderPosition(percentage);
    },
    []
  );

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <section id="comparison" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 select-none">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
        <div>
          <span className="inline-block px-3.5 py-1 bg-red-500/15 border border-red-500/30 text-red-400 rounded-full text-xs font-satoshi font-bold tracking-widest uppercase mb-3">
            {lang === 'gu' ? 'લાઇવ પરિણામ સરખામણી' : 'LIVE DETAILING COMPARISON'}
          </span>
          <h2 className="font-clash text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight text-white">
            {lang === 'gu' ? 'ધ કાર ક્લબ ૯H સિરામિક કોટિંગ' : 'THE CAR CLUB 9H CERAMIC COATING'}
          </h2>
        </div>

        <p className="text-sm sm:text-base font-satoshi text-slate-300 max-w-md">
          {lang === 'gu'
            ? 'સ્લાઇડરને ડાબે-જમણે ફેરવો અને જુઓ કેવી રીતે ધ કાર ક્લબ સિરામિક કોટિંગ કારની ચમક અને યુવી પ્રોટેક્શન વધારે છે.'
            : 'Drag the slider left & right to inspect the dramatic hydrophobic gloss transformation after our Car Club 9H Ceramic PPF treatment.'}
        </p>
      </div>

      {/* Interactive Slider Container */}
      <div
        ref={containerRef}
        onMouseDown={() => setIsDragging(true)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] rounded-3xl overflow-hidden bg-[#111520] border border-white/10 shadow-2xl cursor-ew-resize group"
      >
        {/* RIGHT LAYER (AFTER // 9H CERAMIC MIRROR GLOSS) */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-tr from-[#0B0E14] via-[#131B2A] to-[#0A0D16] flex items-center justify-end p-6 sm:p-12 overflow-hidden">
          
          {/* Subtle Reflective Pattern */}
          <div className="absolute inset-0 bg-[radial-gradient(#E1251B_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />

          {/* Right-Aligned Card (Never overlaps with left side) */}
          <div className="relative z-10 w-full max-w-md text-right bg-white/5 border border-white/15 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-2xl">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-600 to-red-500 text-white px-3.5 py-1 rounded-full text-xs font-bold font-satoshi uppercase mb-4 shadow-lg ml-auto">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'gu' ? 'ધ કાર ક્લબ સિરામિક ગ્લોસ' : 'CAR CLUB 9H CERAMIC GLOSS'}</span>
            </div>

            <h3 className="font-clash text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
              {lang === 'gu' ? '૯H હાઇડ્રોફોબિક મિરર શાઈન' : '9H HYDROPHOBIC MIRROR SHINE'}
            </h3>
            <p className="mt-2.5 text-xs sm:text-sm font-satoshi text-slate-300 leading-relaxed">
              {lang === 'gu'
                ? 'પાણીના ટીંપા લપસી જાય તેવી સપાટી, ૫ વર્ષ સુધી સ્ક્રેચ અને તડકાના રંગ-ફીકાપણા સામે ૧૦૦% રક્ષણ.'
                : 'Ultra-slick hydrophobic surface protecting paint from UV oxidation, bird droppings, and micro-abrasions.'}
            </p>

            <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-end space-x-4 text-xs font-satoshi font-bold uppercase text-amber-400">
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>100% UV SHIELD</span>
              </span>
              <span className="flex items-center space-x-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>5 YEARS WARRANTY</span>
              </span>
            </div>
          </div>

          {/* Tag Bottom Right */}
          <div className="absolute bottom-6 right-6 z-20 bg-[#0B0E14]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/15 text-white font-satoshi font-bold text-xs uppercase">
            ★ {lang === 'gu' ? 'પછી (૯H કોટિંગ)' : 'AFTER | 9H CERAMIC'}
          </div>
        </div>

        {/* LEFT LAYER (BEFORE // UNPROTECTED PAINT) - Clipped by sliderPosition */}
        <div
          className="absolute inset-y-0 left-0 overflow-hidden bg-gradient-to-br from-[#1B1E28] via-[#242936] to-[#161922]"
          style={{ width: `${sliderPosition}%` }}
        >
          {/* Inner box holds full viewport width so text doesn't squish */}
          <div className="relative w-[100vw] max-w-7xl h-full flex items-center justify-start p-6 sm:p-12">
            
            {/* Left-Aligned Card (Never overlaps with right side) */}
            <div className="relative z-10 w-full max-w-md text-left bg-[#0B0E14]/80 border border-white/10 backdrop-blur-xl p-6 sm:p-8 rounded-2xl shadow-xl">
              <div className="inline-flex items-center space-x-2 bg-white/10 text-slate-300 px-3.5 py-1 rounded-full text-xs font-bold font-satoshi uppercase mb-4">
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                <span>{lang === 'gu' ? 'સામાન્ય / જૂનો પેઇન્ટ' : 'UNPROTECTED ORIGINAL PAINT'}</span>
              </div>

              <h3 className="font-clash text-2xl sm:text-3xl font-extrabold uppercase text-slate-200 tracking-wide">
                {lang === 'gu' ? 'ધૂળ, સ્ક્રેચ અને ફીકો પેઇન્ટ' : 'DULL, OXIDIZED & MICRO-SCRATCHED'}
              </h3>
              <p className="mt-2.5 text-xs sm:text-sm font-satoshi text-slate-400 leading-relaxed">
                {lang === 'gu'
                  ? 'સામાન્ય વોશિંગ અને તડકાથી કારનો રંગ ઝાંખો થાય છે અને પેઇન્ટ પર ઝીણા સ્ક્રેચ પડે છે.'
                  : 'Daily UV exposure, hard water deposits, and automatic wash brushes degrade the original clear coat luster.'}
              </p>

              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-start space-x-4 text-xs font-satoshi font-bold uppercase text-slate-400">
                <span className="flex items-center space-x-1">
                  <XCircle className="w-4 h-4 text-rose-500/70" />
                  <span>0% UV SHIELD</span>
                </span>
                <span className="flex items-center space-x-1">
                  <XCircle className="w-4 h-4 text-rose-500/70" />
                  <span>25% GLOSS</span>
                </span>
              </div>
            </div>

          </div>

          {/* Tag Bottom Left */}
          <div className="absolute bottom-6 left-6 z-20 bg-[#0B0E14]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 text-slate-400 font-satoshi font-bold text-xs uppercase">
            ★ {lang === 'gu' ? 'પહેલા (સામાન્ય)' : 'BEFORE | UNPROTECTED'}
          </div>
        </div>

        {/* Center Vertical Divider Line and Interactive Drag Handle */}
        <div
          className="absolute inset-y-0 z-30 w-0.5 bg-red-500 shadow-[0_0_20px_rgba(225,37,27,0.8)]"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Drag Pill Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-700 border-2 border-white text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 active:scale-95 cursor-grab active:cursor-grabbing">
            <MoveHorizontal className="w-6 h-6" />
          </div>
        </div>

      </div>

      {/* Footer Instruction Pill */}
      <div className="mt-6 flex items-center justify-center text-xs font-satoshi font-bold uppercase text-slate-400">
        <Eye className="w-4 h-4 mr-1.5 text-red-500" />
        <span>
          {lang === 'gu'
            ? 'બંને બાજુ પરિણામ સરખાવવા સ્લાઇડર લાઇનને ખેંચો'
            : 'DRAG THE CENTER HANDLE TO COMPARE BEFORE VS. AFTER DETAILS'}
        </span>
      </div>
    </section>
  );
}
