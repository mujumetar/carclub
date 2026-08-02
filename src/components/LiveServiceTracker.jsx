import React, { useState } from 'react';
import { CheckCircle2, Smartphone, ShieldAlert, Car, Wrench, Sparkles } from 'lucide-react';

export default function LiveServiceTracker({ lang = 'gu' }) {
  const [activeStep, setActiveStep] = useState(2); // Step 3 active by default (index 2)

  const steps = [
    {
      id: 0,
      titleGu: 'ગાડી દાખલ થઈ | CHECK-IN',
      titleEn: 'VEHICLE CHECK-IN',
      time: '10:15 AM',
      statusGu: 'પૂર્ણ (COMPLETED)',
      statusEn: 'COMPLETED',
      descGu: 'ડિજિટલ જોબ કાર્ડ બન્યું અને કારની પ્રાથમિક વિડિઓ રેકોર્ડિંગ લેવાઈ.',
      descEn: 'Digital job card created & initial vehicle exterior inspection video recorded.',
      icon: Car,
    },
    {
      id: 1,
      titleGu: '3D ઇન્સ્પેક્શન | 3D LASER SCAN',
      titleEn: '3D LASER DIAGNOSTICS',
      time: '11:00 AM',
      statusGu: 'પૂર્ણ (COMPLETED)',
      statusEn: 'COMPLETED',
      descGu: 'OBD-2 એન્જિન સ્કેન અને 3D લેઝર વ્હીલ એલાઈનમેન્ટ રિપોર્ટ જનરેટ થયો.',
      descEn: 'ECU OBD-2 diagnostic scan and 3D laser wheel alignment report generated.',
      icon: ShieldAlert,
    },
    {
      id: 2,
      titleGu: 'મિકેનિકલ રિપેરિંગ | IN PROGRESS',
      titleEn: 'MECHANICAL REPAIR IN PROGRESS',
      time: '01:30 PM (હાલ ચાલુ)',
      statusGu: 'કામ ચાલુ છે (LIVE)',
      statusEn: 'IN PROGRESS',
      descGu: 'OEM સ્પેરપાર્ટ્સ ફિટિંગ, એન્જિન ટ્યુનિંગ અને સિરામિક કોટિંગ પ્રક્રિયા ચાલુ.',
      descEn: 'Fitting genuine OEM parts, ECU calibration & ceramic paint detailing in progress.',
      icon: Wrench,
    },
    {
      id: 3,
      titleGu: 'સ્ટીમ વોશ & પોલિશ | WASHING',
      titleEn: 'EXPRESS WASH & POLISHING',
      time: '04:00 PM (અંદાજિત)',
      statusGu: 'આગામી (UPCOMING)',
      statusEn: 'UPCOMING',
      descGu: 'હાઇ-પ્રેશર ફોમ વોશ, અંડરબોડી એન્ટિ-રસ્ટ અને ઇન્ટિરિયર સ્ટીમ સેનિટાઇઝેશન.',
      descEn: 'High-pressure foam wash, underbody anti-rust rinse & cabin sanitization.',
      icon: Sparkles,
    },
    {
      id: 4,
      titleGu: 'ડિલિવરી તૈયાર | READY',
      titleEn: 'READY FOR DELIVERY',
      time: '05:30 PM (અંદાજિત)',
      statusGu: 'આગામી (UPCOMING)',
      statusEn: 'UPCOMING',
      descGu: 'અંતિમ ક્વોલિટી ચેક, બિલ જનરેશન અને ગ્રાહકને SMS/WhatsApp ડિલિવરી એલર્ટ.',
      descEn: 'Final quality audit, digital invoice & automated SMS/WhatsApp delivery alert.',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="tracker" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="bg-[#111520]/90 backdrop-blur-2xl border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-10">
          <div>
            <span className="inline-flex items-center space-x-1.5 px-3.5 py-1 bg-red-500/15 border border-red-500/30 text-red-400 rounded-full text-xs font-satoshi font-bold tracking-widest uppercase">
              <Smartphone className="w-4 h-4 mr-1 text-red-400" />
              <span>{lang === 'gu' ? 'પારદર્શક સેવા | TRANSPARENCY' : 'LIVE STATUS TRACKER'}</span>
            </span>
            <h3 className="font-clash text-3xl sm:text-4xl font-bold uppercase mt-2 text-white">
              {lang === 'gu'
                ? 'તમારી ગાડીનું લાઇવ સર્વિસ સ્ટેટસ ટ્રેક કરો'
                : 'TRACK YOUR CAR SERVICE STATUS IN REAL-TIME'}
            </h3>
          </div>
          <div className="flex items-center space-x-2 text-xs font-satoshi font-bold uppercase text-emerald-400 bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-500/30 shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>{lang === 'gu' ? 'લાઇવ ડેમો: જોબ કાર્ડ #VJ-2026' : 'LIVE DEMO: JOB CARD #VJ-2026'}</span>
          </div>
        </div>

        {/* Stepper Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => {
            const IconComp = step.icon;
            const isCompleted = index < activeStep;
            const isCurrent = index === activeStep;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(index)}
                className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-gradient-to-br from-[#1A2032] to-[#222A42] text-white border-red-500/70 scale-[1.03] shadow-xl shadow-red-500/10'
                    : isCompleted
                    ? 'bg-white/10 text-white border-white/15 hover:border-white/30'
                    : 'bg-white/5 text-slate-300 border-white/10 hover:border-white/20'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-xs font-satoshi font-bold px-2.5 py-0.5 rounded-full uppercase ${
                        isCurrent
                          ? 'bg-red-500/20 border border-red-500/40 text-red-400'
                          : isCompleted
                          ? 'bg-emerald-500/20 border border-emerald-500/30 text-emerald-400'
                          : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      STEP {index + 1}
                    </span>

                    <span className="text-[11px] font-satoshi text-slate-400">
                      {step.time}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="font-satoshi font-bold text-sm uppercase tracking-wider mb-2 text-white">
                    {lang === 'gu' ? step.titleGu : step.titleEn}
                  </h4>

                  {/* Description */}
                  <p
                    className={`text-xs font-satoshi leading-relaxed ${
                      isCurrent ? 'text-slate-200' : 'text-slate-400'
                    }`}
                  >
                    {lang === 'gu' ? step.descGu : step.descEn}
                  </p>
                </div>

                {/* Status Indicator Bar */}
                <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold uppercase">
                  <span className={isCurrent ? 'text-red-400' : isCompleted ? 'text-emerald-400' : 'text-slate-500'}>
                    {lang === 'gu' ? step.statusGu : step.statusEn}
                  </span>
                  <IconComp
                    className={`w-5 h-5 ${
                      isCurrent ? 'text-amber-400 animate-bounce' : isCompleted ? 'text-emerald-400' : 'text-slate-600'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Interactive Technician Note */}
        <div className="mt-8 p-5 sm:p-6 bg-gradient-to-r from-[#0E121C] to-[#141B2B] rounded-2xl border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-red-500/25">
              VJ
            </div>
            <div>
              <h5 className="font-satoshi font-bold text-sm uppercase text-white">
                {lang === 'gu'
                  ? 'મુખ્ય એન્જિનિયર: રાજેશભાઈ પટેલ - વિડિઓ અપડેટ ઉપલબ્ધ છે'
                  : 'CHIEF ENGINEER: RAJESH PATEL - VIDEO DIAGNOSTIC UPDATE READY'}
              </h5>
              <p className="text-xs font-satoshi text-slate-400 mt-0.5">
                {lang === 'gu'
                  ? 'તમારા WhatsApp પર 3D લેઝર અલાઇનમેન્ટનો લાઇવ રિપોર્ટ મોકલવામાં આવ્યો છે.'
                  : 'We have dispatched your 3D wheel alignment telemetry report to your registered WhatsApp.'}
              </p>
            </div>
          </div>

          <button
            onClick={() => alert(lang === 'gu' ? 'વિડિઓ રિપોર્ટ WhatsApp પર મોકલવામાં આવ્યો છે!' : 'Video diagnostic report sent to your WhatsApp!')}
            className="brutal-cta-btn whitespace-nowrap text-xs px-6 py-3 shadow-lg"
          >
            {lang === 'gu' ? 'વિડિઓ રિપોર્ટ જુઓ' : 'VIEW DIAGNOSTIC REPORT'}
          </button>
        </div>

      </div>
    </section>
  );
}
