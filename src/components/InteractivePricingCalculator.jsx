import React, { useState } from 'react';
import { Calculator, Check, Tag, Car } from 'lucide-react';

export default function InteractivePricingCalculator({ lang = 'gu', onBookPackage }) {
  const [carType, setCarType] = useState('SEDAN');
  const [selectedAddons, setSelectedAddons] = useState(['alignment', 'wash']);

  const carTypes = [
    {
      id: 'HATCHBACK',
      labelGu: 'હેચબેક (Hatchback)',
      labelEn: 'HATCHBACK',
      multiplier: 1.0,
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c359?auto=format&fit=crop&w=600&q=80',
      descGu: 'મારુતિ સ્વિફ્ટ, i20, ટાટા ટિયાગો',
      descEn: 'Compact city cars & hatchbacks',
    },
    {
      id: 'SEDAN',
      labelGu: 'સેડાન (Sedan)',
      labelEn: 'SEDAN',
      multiplier: 1.2,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=600&q=80',
      descGu: 'હોન્ડા સિટી, વર્ના, સ્કોડા સ્લાવિયા',
      descEn: 'Executive sedans & mid-size sedans',
    },
    {
      id: 'SUV',
      labelGu: 'SUV / 7-સીટર (SUV)',
      labelEn: 'SUV / 7-SEATER',
      multiplier: 1.45,
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80',
      descGu: 'ક્રેટા, ફોર્ચ્યુનર, સફારી, એક્સયુવી 700',
      descEn: 'Full-size SUVs & 7-seater vehicles',
    },
    {
      id: 'LUXURY',
      labelGu: 'લક્ઝરી / EV (Luxury)',
      labelEn: 'LUXURY / EV',
      multiplier: 1.8,
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=600&q=80',
      descGu: 'BMW, મર્સિડીઝ, ઓડી, પોર્શે, EV',
      descEn: 'Premium German & luxury EV cars',
    },
  ];

  const addons = [
    { id: 'alignment', titleGu: '3D લેઝર વ્હીલ એલાઈનમેન્ટ & બેલેન્સિંગ', titleEn: '3D Laser Wheel Alignment & Balancing', basePrice: 799 },
    { id: 'wash', titleGu: 'એક્સપ્રેસ ફોમ વોશ & વેક્યુમ ક્લિનિંગ', titleEn: 'Express Foam Wash & Vacuum Cleaning', basePrice: 499 },
    { id: 'engine', titleGu: 'કોમ્પ્યુટરાઈઝ્ડ એન્જિન ડાયગ્નોસ્ટિક્સ & સ્કેનિંગ', titleEn: 'Computerized OBD-2 Engine Diagnostics', basePrice: 1499 },
    { id: 'ac', titleGu: 'એસી ગેસ રિફિલ & કુલિંગ કોઇલ ક્લિનિંગ', titleEn: 'Complete AC Service & R134A Refill', basePrice: 1999 },
    { id: 'ceramic', titleGu: '9H સિરામિક કોટિંગ & પેઇન્ટ પ્રોટેક્શન (૧ વર્ષ)', titleEn: '9H Ceramic Coating & PPF (1 Year)', basePrice: 12999 },
  ];

  const currentMultiplier = carTypes.find((c) => c.id === carType)?.multiplier || 1.0;

  const calculateTotal = () => {
    return selectedAddons.reduce((sum, id) => {
      const item = addons.find((a) => a.id === id);
      return sum + (item ? Math.round(item.basePrice * currentMultiplier) : 0);
    }, 0);
  };

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const totalPrice = calculateTotal();
  const savings = Math.round(totalPrice * 0.15); // 15% package bundle discount

  return (
    <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-[#111520]/90 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl relative">
        
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
          <div>
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-amber-500/15 border border-amber-500/30 text-amber-400 rounded-full text-xs font-satoshi font-bold tracking-widest uppercase">
              <Calculator className="w-4 h-4 mr-1" />
              <span>{lang === 'gu' ? 'લાઇવ એસ્ટીમેટર | CALCULATOR' : 'LIVE ESTIMATOR'}</span>
            </span>
            <h3 className="font-clash text-3xl sm:text-4xl font-bold uppercase mt-2 text-white">
              {lang === 'gu'
                ? 'તમારી ગાડી માટે કસ્ટમ સર્વિસ પેકેજ બનાવો'
                : 'BUILD YOUR CUSTOM CAR SERVICE PACKAGE'}
            </h3>
          </div>
          <p className="text-sm font-satoshi text-slate-300 max-w-sm">
            {lang === 'gu'
              ? 'ગાડીનો પ્રકાર પસંદ કરો અને જોઈતી સેવાઓ ઉમેરો. લાઇવ પારદર્શક કિંમત અને ૧૫% સુધી બંડલ ડિસ્કાઉન્ટ મેળવો.'
              : 'Select your car type and add modular services. Get instant transparent Gujarati pricing with up to 15% bundle savings.'}
          </p>
        </div>

        {/* Step 1: Select Car Type (with Photos & Responsive Details) */}
        <div className="mb-8">
          <label className="block text-xs font-satoshi font-bold uppercase tracking-widest text-red-400 mb-3">
            {lang === 'gu' ? '૧. ગાડીનો પ્રકાર પસંદ કરો | SELECT VEHICLE CATEGORY' : '1. SELECT VEHICLE CATEGORY'}
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {carTypes.map((type) => {
              const isSelected = carType === type.id;
              return (
                <div
                  key={type.id}
                  onClick={() => setCarType(type.id)}
                  className={`group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 ${
                    isSelected
                      ? 'border-red-500 bg-gradient-to-b from-red-600/20 to-[#161B2E] shadow-xl shadow-red-500/20 scale-[1.02]'
                      : 'border-white/10 bg-white/5 hover:border-red-500/50'
                  }`}
                >
                  {/* Photo Thumbnail */}
                  <div className="relative h-32 w-full overflow-hidden">
                    <img
                      src={type.image}
                      alt={type.labelEn}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161B2E] via-transparent to-black/30" />
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg">
                        <Check className="w-4 h-4" />
                      </div>
                    )}
                  </div>

                  {/* Vehicle Label & Description */}
                  <div className="p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-clash font-extrabold text-sm uppercase text-white">
                        {lang === 'gu' ? type.labelGu : type.labelEn}
                      </span>
                      <span className="text-[11px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                        {type.multiplier}x
                      </span>
                    </div>
                    <p className="text-xs font-satoshi text-slate-300 leading-relaxed">
                      {lang === 'gu' ? type.descGu : type.descEn}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step 2: Select Services Checkboxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 space-y-3">
            <label className="block text-xs font-satoshi font-bold uppercase tracking-widest text-red-400 mb-2">
              {lang === 'gu' ? '૨. સેવાઓ પસંદ કરો (ચેક કરો) | SELECT SERVICES' : '2. SELECT MODULAR SERVICES'}
            </label>
            {addons.map((addon) => {
              const isSelected = selectedAddons.includes(addon.id);
              const price = Math.round(addon.basePrice * currentMultiplier);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-white/10 border-red-500/50 shadow-lg text-white'
                      : 'bg-white/5 border-white/10 hover:border-white/20 text-slate-300 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <div
                      className={`w-6 h-6 rounded-lg border flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-red-600 border-red-600 text-white shadow-sm'
                          : 'border-white/20 bg-white/5'
                      }`}
                    >
                      {isSelected && <Check className="w-4 h-4" />}
                    </div>
                    <span className="font-satoshi font-bold text-sm">
                      {lang === 'gu' ? addon.titleGu : addon.titleEn}
                    </span>
                  </div>
                  <span className="font-satoshi font-bold text-sm text-amber-400">
                    ₹{price.toLocaleString('en-IN')}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Step 3: Live Price Summary Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B0E14] via-[#111622] to-[#0A0D14] text-white p-6 sm:p-8 border border-white/15 rounded-3xl relative shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <span className="inline-flex items-center space-x-1 px-3 py-1 bg-amber-500/15 border border-amber-500/30 text-amber-400 rounded-full text-xs font-satoshi font-bold tracking-widest uppercase">
                <span>ESTIMATE SUMMARY</span>
              </span>
              <span className="text-xs font-satoshi uppercase text-slate-400">
                {selectedAddons.length} {lang === 'gu' ? 'સેવા પસંદ' : 'SERVICES SELECTED'}
              </span>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between text-sm font-satoshi text-slate-300">
                <span>{lang === 'gu' ? 'સર્વિસ કિંમત:' : 'SUBTOTAL:'}</span>
                <span>₹{(totalPrice + savings).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm font-satoshi text-amber-400 font-bold">
                <span className="flex items-center space-x-1.5">
                  <Tag className="w-4 h-4" />
                  <span>{lang === 'gu' ? 'બંડલ ડિસ્કાઉન્ટ (૧૫% ઓફ):' : 'BUNDLE SAVINGS (15% OFF):'}</span>
                </span>
                <span>- ₹{savings.toLocaleString('en-IN')}</span>
              </div>
              <div className="border-t border-white/10 pt-4 flex justify-between items-baseline">
                <span className="font-clash text-xl font-bold uppercase">
                  {lang === 'gu' ? 'કુલ રકમ:' : 'TOTAL ESTIMATE:'}
                </span>
                <span className="font-clash text-4xl font-bold text-amber-400">
                  ₹{totalPrice.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <button
              onClick={() =>
                onBookPackage({
                  carType,
                  services: selectedAddons,
                  total: totalPrice,
                })
              }
              className="brutal-cta-btn w-full py-4 text-center text-sm shadow-xl"
            >
              <span>
                {lang === 'gu'
                  ? 'આ પેકેજ બુક કરો (BOOK THIS PACKAGE)'
                  : 'BOOK THIS CUSTOM PACKAGE'}
              </span>
            </button>

            <p className="mt-4 text-[11px] text-center font-satoshi text-slate-400 uppercase">
              {lang === 'gu'
                ? '* કોઈ છૂપા ખર્ચ નથી. ૧૦૦% અસલ પાર્ટ્સ અને લેઝર અલાઇનમેન્ટ ગેરંટી.'
                : '* NO HIDDEN CHARGES. 100% GENUINE PARTS & LASER WARRANTY.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
