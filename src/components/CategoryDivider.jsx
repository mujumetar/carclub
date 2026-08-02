import React from 'react';

export default function CategoryDivider({
  titleGu,
  titleEn,
  subtitle,
  align = 'left',
  lang = 'gu',
}) {
  return (
    <section className="relative w-full py-12 sm:py-16 overflow-hidden border-y border-white/10 bg-[#0A0D14]/70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`flex flex-col ${
            align === 'right' ? 'items-end text-right' : 'items-start text-left'
          }`}
        >
          {/* Subtitle badge */}
          {subtitle && (
            <span className="inline-block px-3.5 py-1 mb-2.5 bg-red-500/15 border border-red-500/30 text-red-400 text-[11px] font-satoshi font-bold tracking-[0.2em] uppercase rounded-full shadow-sm">
              {subtitle}
            </span>
          )}

          {/* Professional Elegant Luxury Headline */}
          <h2
            className="font-clash text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase leading-tight tracking-tight text-white transition-transform hover:scale-[1.01] duration-300"
          >
            {lang === 'gu' ? titleGu : titleEn}
          </h2>

          <div
            className={`mt-3.5 h-1 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 w-24 sm:w-36 rounded-full ${
              align === 'right' ? 'mr-1' : 'ml-1'
            }`}
          />
        </div>
      </div>
    </section>
  );
}
