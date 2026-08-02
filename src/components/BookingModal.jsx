import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Calendar, Car, Phone, User, Award } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({
  isOpen,
  onClose,
  initialService = null,
  lang = 'gu',
}) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    carModel: 'Maruti Suzuki / Hyundai',
    serviceType: '3D Laser Wheel Alignment',
    date: '',
    timeSlot: '10:00 AM - 12:00 PM',
  });

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({
        ...prev,
        serviceType: lang === 'gu' ? initialService.titleGu : initialService.titleEn,
      }));
    }
  }, [initialService, lang]);

  if (!isOpen) return null;

  const sendToWhatsApp = () => {
    const whatsappNumber = '919913433555';
    const formattedMessage =
      `*🚗 NEW SERVICE BOOKING INQUIRY — THE CAR CLUB*\n` +
      `*નવું એપોઇન્ટમેન્ટ બુકિંગ જોબ કાર્ડ:*\n\n` +
      `👤 *ગ્રાહકનું નામ (Customer):* ${formData.name || 'N/A'}\n` +
      `📱 *મોબાઇલ નંબર (Phone):* ${formData.phone || 'N/A'}\n` +
      `🚘 *કાર મોડેલ (Vehicle):* ${formData.carModel}\n` +
      `🔧 *પસંદ કરેલ સેવા (Service):* ${formData.serviceType}\n` +
      `📅 *તારીખ (Date):* ${formData.date || 'આજે (Today)'}\n` +
      `⏰ *સમય સ્લોટ (Time):* ${formData.timeSlot}\n\n` +
      `✨ _100% Genuine OEM Warranty & Laser Diagnostics_\n` +
      `👉 મહેરબાની કરીને મારી આ એપોઇન્ટમેન્ટ કન્ફર્મ કરો. (Please confirm my booking.)`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleNextStep = (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
      // Automatically open WhatsApp with well-formatted inquiry!
      sendToWhatsApp();
      // Trigger canvas-confetti celebration on confirmed booking
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#E1251B', '#F59E0B', '#00F2FE', '#FFFFFF'],
      });
    }
  };

  const handleResetAndClose = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-xl bg-[#111520] border border-white/15 shadow-2xl p-6 sm:p-8 rounded-3xl overflow-hidden text-white">
        
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 w-10 h-10 rounded-full border border-white/15 bg-white/5 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all text-slate-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6 border-b border-white/10 pb-4">
          <div className="inline-flex items-center space-x-2 bg-amber-500/15 border border-amber-500/30 text-amber-400 px-3 py-1 rounded-full text-xs font-bold font-satoshi uppercase mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'gu' ? 'ધ કાર ક્લબ એપોઇન્ટમેન્ટ' : 'THE CAR CLUB APPOINTMENT'}</span>
          </div>
          <h3 className="font-clash text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-white">
            {lang === 'gu' ? 'ઓનલાઇન સર્વિસ બુકિંગ' : 'BOOK SERVICE APPOINTMENT'}
          </h3>
          <p className="text-xs font-satoshi text-slate-400 mt-1">
            {lang === 'gu'
              ? '૧૦૦% અસલ OEM પાર્ટ્સ અને ૬ મહિનાની ક્લબ વોરંટી સાથે.'
              : 'Complete automotive care with 100% genuine OEM warranty.'}
          </p>
        </div>

        {/* STEP 1: Personal & Vehicle Details */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <label className="block text-xs font-satoshi font-bold uppercase tracking-wider text-slate-300 mb-1">
                {lang === 'gu' ? 'તમારું પૂરું નામ' : 'YOUR FULL NAME'} *
              </label>
              <div className="relative">
                <input
                  type="text"
                  required
                  placeholder={lang === 'gu' ? 'દા.ત. રોહિત પટેલ' : 'e.g. Rohit Patel'}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm font-satoshi text-white placeholder-slate-500 focus:border-red-500 focus:outline-none transition-colors"
                />
                <User className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-satoshi font-bold uppercase tracking-wider text-slate-300 mb-1">
                {lang === 'gu' ? 'મોબાઇલ નંબર (WhatsApp)' : 'MOBILE NUMBER (WHATSAPP)'} *
              </label>
              <div className="relative">
                <input
                  type="tel"
                  required
                  placeholder="+91 99134 33555"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm font-satoshi text-white placeholder-slate-500 focus:border-red-500 focus:outline-none transition-colors"
                />
                <Phone className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-satoshi font-bold uppercase tracking-wider text-slate-300 mb-1">
                {lang === 'gu' ? 'કાર બ્રાન્ડ અને મોડેલ' : 'CAR BRAND & MODEL'}
              </label>
              <div className="relative">
                <select
                  value={formData.carModel}
                  onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                  className="w-full px-4 py-3 bg-[#1B2030] border border-white/15 rounded-xl text-sm font-satoshi text-white focus:border-red-500 focus:outline-none transition-colors"
                >
                  <option value="Maruti Suzuki / Hyundai">Maruti Suzuki / Hyundai (હેચબેક / સેડાન)</option>
                  <option value="Tata Motors / Mahindra">Tata Motors / Mahindra (SUV / EV)</option>
                  <option value="Honda / Toyota / Kia">Honda / Toyota / Kia</option>
                  <option value="BMW / Audi / Mercedes">BMW / Audi / Mercedes (Luxury Club)</option>
                  <option value="Other Brand">અન્ય કાર મોડેલ (Other)</option>
                </select>
                <Car className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-satoshi font-bold uppercase tracking-wider text-slate-300 mb-1">
                {lang === 'gu' ? 'પસંદ કરેલ સેવા' : 'SELECTED SERVICE'}
              </label>
              <input
                type="text"
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm font-satoshi font-semibold text-red-400 focus:outline-none"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="brutal-cta-btn w-full py-3.5 text-center text-sm shadow-xl"
              >
                <span>{lang === 'gu' ? 'આગળ વધો (સમય પસંદ કરો) →' : 'NEXT STEP (SELECT TIME) →'}</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: Date & Time Selection */}
        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <label className="block text-xs font-satoshi font-bold uppercase tracking-wider text-slate-300 mb-1">
                {lang === 'gu' ? 'તારીખ પસંદ કરો' : 'SELECT DATE'} *
              </label>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-sm font-satoshi text-white focus:border-red-500 focus:outline-none"
                />
                <Calendar className="absolute right-3.5 top-3.5 w-4 h-4 text-slate-400 pointer-events-none" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-satoshi font-bold uppercase tracking-wider text-slate-300 mb-1">
                {lang === 'gu' ? 'સમય સ્લોટ' : 'PREFERRED TIME SLOT'}
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  '08:30 AM - 10:00 AM',
                  '10:00 AM - 12:00 PM',
                  '02:00 PM - 04:00 PM',
                  '04:00 PM - 07:00 PM',
                ].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, timeSlot: slot })}
                    className={`p-3 text-xs font-satoshi font-bold uppercase rounded-xl border text-center transition-all ${
                      formData.timeSlot === slot
                        ? 'bg-gradient-to-r from-red-600 to-red-500 text-white border-red-500 shadow-md'
                        : 'bg-white/5 text-slate-300 border-white/15 hover:border-red-500'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white/5 border border-white/10 rounded-2xl space-y-2.5 text-xs font-satoshi">
              <div className="flex justify-between">
                <span className="text-slate-400">{lang === 'gu' ? 'ગ્રાહકનું નામ:' : 'Name:'}</span>
                <span className="font-bold text-white">{formData.name || '-'}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{lang === 'gu' ? 'કાર મોડેલ:' : 'Vehicle:'}</span>
                <span className="font-bold text-white">{formData.carModel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{lang === 'gu' ? 'સેવા:' : 'Service:'}</span>
                <span className="font-bold text-red-400">{formData.serviceType}</span>
              </div>
            </div>

            <div className="pt-4 flex space-x-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 border border-white/15 bg-white/5 rounded-xl text-xs font-satoshi font-bold uppercase hover:bg-white/10 text-slate-300 transition-colors"
              >
                {lang === 'gu' ? 'પાછળ' : 'BACK'}
              </button>
              <button
                type="submit"
                className="brutal-cta-btn w-2/3 py-3.5 text-center text-sm shadow-xl"
              >
                <span>{lang === 'gu' ? 'બુકિંગ કન્ફર્મ કરો (CONFIRM)' : 'CONFIRM APPOINTMENT'}</span>
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: Booking Success Confirmation */}
        {step === 3 && (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2 border border-emerald-500/30 shadow-inner">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h4 className="font-clash text-2xl sm:text-3xl font-extrabold uppercase text-white">
              {lang === 'gu' ? 'એપોઇન્ટમેન્ટ કન્ફર્મ થઈ ગઈ છે!' : 'CLUB APPOINTMENT CONFIRMED!'}
            </h4>

            <p className="text-xs sm:text-sm font-satoshi text-slate-300 max-w-sm mx-auto leading-relaxed">
              {lang === 'gu'
                ? `આભાર ${formData.name}! તમારી એપોઇન્ટમેન્ટ ધ કાર ક્લબ ખાતે નોંધાઈ ગઈ છે. અમે તમને WhatsApp પર જોબ કાર્ડ મોકલી રહ્યા છીએ.`
                : `Thank you ${formData.name}! Your appointment at THE CAR CLUB is confirmed. We have dispatched a digital job card to your WhatsApp.`}
            </p>

            {/* Receipt Summary Card */}
            <div className="p-5 bg-white/5 border border-white/10 rounded-2xl text-left text-xs font-satoshi space-y-2.5 max-w-md mx-auto">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="font-bold text-slate-300">★ {lang === 'gu' ? 'બુકિંગ આઈડી' : 'BOOKING ID'}</span>
                <span className="font-clash font-extrabold text-red-400">#CC-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{lang === 'gu' ? 'તારીખ અને સમય:' : 'Date & Time:'}</span>
                <span className="font-bold text-white">{formData.date || 'આજે'} ({formData.timeSlot})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{lang === 'gu' ? 'કાર બ્રાન્ડ:' : 'Vehicle:'}</span>
                <span className="font-bold text-white">{formData.carModel}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">{lang === 'gu' ? 'સેવા:' : 'Service:'}</span>
                <span className="font-bold text-red-400">{formData.serviceType}</span>
              </div>
            </div>

            <div className="pt-4 space-y-3">
              <button
                onClick={sendToWhatsApp}
                className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-satoshi font-bold text-xs uppercase tracking-widest shadow-xl flex items-center justify-center space-x-2 transition-all"
              >
                <span>📲 {lang === 'gu' ? 'WhatsApp પર જોબ કાર્ડ મોકલો' : 'SEND RECEIPT ON WHATSAPP'}</span>
              </button>

              <button
                onClick={handleResetAndClose}
                className="brutal-cta-btn w-full py-3.5 text-center text-sm shadow-xl"
              >
                <span>{lang === 'gu' ? 'પૂર્ણ કરો (DONE)' : 'CLOSE WINDOW'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
