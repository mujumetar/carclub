import React, { useState } from 'react';
import { Wrench, PhoneCall, Globe, Menu, X, ShoppingBag, ShieldCheck, Sparkles } from 'lucide-react';

export default function Navbar({
  lang = 'gu',
  onToggleLang,
  onOpenBooking,
  cartCount = 0,
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { labelGu: 'સેવાઓ', labelEn: 'SERVICES', href: '#services' },
    { labelGu: 'પેકેજ કેલ્ક્યુલેટર', labelEn: 'PACKAGES', href: '#packages' },
    { labelGu: 'સિરામિક પરિણામ', labelEn: 'BEFORE/AFTER', href: '#comparison' },
    { labelGu: 'લાઇવ ટ્રેકર', labelEn: 'TRACKER', href: '#status' },
    { labelGu: 'અમારો પરિચય', labelEn: 'ABOUT CLUB', href: '#why-us' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#080A10]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo: THE CAR CLUB */}
        <a href="#" className="flex items-center space-x-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center font-clash font-bold text-xl shadow-lg shadow-red-500/25 group-hover:scale-105 transition-all">
            CC
          </div>
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-clash text-2xl font-extrabold tracking-tight uppercase leading-none text-white group-hover:text-red-500 transition-colors">
                ધ કાર ક્લબ
              </span>
              <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/10 border border-red-500/30 text-red-400">
                GUJARAT
              </span>
            </div>
            <span className="text-[10px] font-satoshi font-semibold tracking-widest uppercase text-slate-400 mt-1">
              THE CAR CLUB // AUTOMOTIVE LOUNGE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs font-satoshi font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 hover:after:w-full after:transition-all"
            >
              {lang === 'gu' ? link.labelGu : link.labelEn}
            </a>
          ))}
        </nav>

        {/* Right action area: Language Switcher, Helpline Badge, Book CTA */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          
          {/* Language Switcher Toggle */}
          <button
            onClick={onToggleLang}
            className="px-3.5 py-1.5 border border-white/15 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-satoshi font-bold tracking-wider uppercase text-slate-200 hover:text-white transition-all flex items-center space-x-1.5"
            title="Toggle Gujarati / English"
          >
            <Globe className="w-3.5 h-3.5 text-red-500" />
            <span>{lang === 'gu' ? 'ગુજ / EN' : 'EN / ગુજ'}</span>
          </button>

          {/* Booking Bag indicator */}
          <button
            onClick={onOpenBooking}
            className="relative p-2.5 border border-white/15 bg-white/5 rounded-xl hover:bg-white/10 hover:text-white text-slate-200 transition-all hidden sm:flex items-center justify-center"
            title="Your Booked Services"
          >
            <ShoppingBag className="w-4 h-4" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-lg shadow-red-500/50 animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary CTA Button */}
          <button
            onClick={onOpenBooking}
            className="brutal-cta-btn text-xs px-5 py-2.5 hidden md:inline-flex shadow-lg shadow-red-500/25"
          >
            <span>{lang === 'gu' ? 'એપોઇન્ટમેન્ટ બુક કરો' : 'BOOK APPOINTMENT'}</span>
          </button>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 border border-white/15 bg-white/5 rounded-xl text-slate-200 lg:hidden hover:bg-white/10 hover:text-white transition-all"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0E1118] border-b border-white/10 px-4 py-6 space-y-4 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-satoshi font-bold uppercase tracking-wider py-2.5 px-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                {lang === 'gu' ? link.labelGu : link.labelEn}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col space-y-3 border-t border-white/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="brutal-cta-btn w-full text-center py-3.5 text-sm shadow-xl"
            >
              <span>{lang === 'gu' ? 'એપોઇન્ટમેન્ટ બુક કરો' : 'BOOK APPOINTMENT'}</span>
            </button>

            <a
              href="tel:+919913433555"
              className="w-full py-3 text-center text-xs font-satoshi font-bold uppercase bg-white/5 border border-white/10 hover:bg-white/10 rounded-xl text-slate-200 flex items-center justify-center space-x-2 transition-all"
            >
              <PhoneCall className="w-4 h-4 text-red-500" />
              <span>{lang === 'gu' ? '૨૪/૭ હેલ્પલાઇન: +91 99134 33555' : '24/7 SOS: +91 99134 33555'}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
