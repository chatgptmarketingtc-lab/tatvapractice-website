'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ScrollReveal } from '@/components/ui';

const FEATURES = [
  {
    id: 'voicerx',
    name: 'VoiceRx',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
      </svg>
    ),
    description: <>Whether you&apos;re <strong className="text-white">dictating</strong> or naturally <strong className="text-white">conversing with your patient</strong>, VoiceRx <strong className="text-white">captures</strong> your clinical speech and instantly turns it into a <strong className="text-white">structured Rx.</strong></>,
    path: '/features/voicerx',
    screenshots: ['/images/features/voicerx-main.png', '/images/features/voicerx-popup.png'],
  },
  {
    id: 'smartsync',
    name: 'SmartSync',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    description: <>With SmartSync, your <strong className="text-white">clinical data stays in sync</strong> across all devices in real-time. Whether you&apos;re at the <strong className="text-white">clinic, home, or on the go</strong> — your records are always up to date.</>,
    path: '/features/smartsync',
    screenshots: [],
  },
  {
    id: 'snaprx',
    name: 'SnapRx',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: <>Point your phone at any <strong className="text-white">handwritten prescription</strong>. SnapRx uses <strong className="text-white">healthcare-grade OCR</strong> to extract medication names, dosages, and instructions — converting messy handwriting into <strong className="text-white">structured digital data.</strong></>,
    path: '/features/snaprx',
    screenshots: ['/images/features/snaprx-main.png'],
  },
  {
    id: 'receptionist-agent',
    name: 'Receptionist Agent',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    description: <>Receptionist Agent handles <strong className="text-white">appointment scheduling</strong>, sends automated <strong className="text-white">patient reminders</strong>, manages <strong className="text-white">digital queues</strong>, and runs <strong className="text-white">follow-up campaigns</strong> — so your front desk runs itself.</>,
    path: '/features/receptionist-ai',
    screenshots: [],
  },
  {
    id: 'doctor-agent',
    name: 'Doctor Agent',
    icon: (
      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: <>Doctor Agent provides <strong className="text-white">AI-powered clinical decision support</strong> — from <strong className="text-white">differential diagnoses</strong> and <strong className="text-white">drug interaction alerts</strong> to <strong className="text-white">evidence-based suggestions</strong> that think alongside you.</>,
    path: '/features/doctor-agent',
    screenshots: [],
  },
];

function ScreenshotPlaceholder() {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 min-h-[320px] flex items-center justify-center">
      <div className="text-center text-white/20">
        <svg className="w-16 h-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
        </svg>
        <div className="text-xs">Product Screenshot</div>
      </div>
    </div>
  );
}

function FeatureScreenshots({ screenshots }) {
  if (!screenshots || screenshots.length === 0) return <ScreenshotPlaceholder />;

  return (
    <div className="relative min-h-[320px]">
      {/* Main screenshot */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/30">
        <img src={screenshots[0]} alt="Product screenshot" className="w-full h-auto" onError={(e) => { e.target.style.display = 'none'; e.target.parentElement.innerHTML = '<div class="min-h-[280px] bg-white/5 flex items-center justify-center text-white/20 text-xs">Product Screenshot</div>'; }} />
      </div>
      {/* Overlay popup screenshot */}
      {screenshots[1] && (
        <div className="absolute -bottom-4 left-4 w-[45%] rounded-xl overflow-hidden border border-white/20 shadow-2xl shadow-black/40">
          <img src={screenshots[1]} alt="Feature popup" className="w-full h-auto" onError={(e) => { e.target.parentElement.style.display = 'none'; }} />
        </div>
      )}
    </div>
  );
}

export default function AIFeatureTabs() {
  const [active, setActive] = useState(0);
  const feature = FEATURES[active];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-container mx-auto px-8">
        <ScrollReveal variant="fadeUp">
          <h2 className="text-3xl lg:text-[40px] font-extrabold text-center mb-3 text-gray-900">
            Built-In <span className="text-[#5B2E91]">AI to<br />Supercharge</span> Your Workflow
          </h2>
        </ScrollReveal>

        {/* Tab Pills */}
        <div className="flex flex-wrap justify-center gap-1.5 mt-12 mb-10 bg-gray-50 border border-gray-100 rounded-full p-1.5 max-w-3xl mx-auto">
          {FEATURES.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActive(i)}
              className={`text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all ${active === i ? 'text-white shadow-md' : 'text-gray-500 hover:text-[#5B2E91]'}`}
              style={active === i ? { background: 'linear-gradient(135deg, #7C4DBC 0%, #5B2E91 100%)' } : {}}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Feature Card */}
        <div className="relative rounded-3xl p-8 lg:p-14 text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, #2D1B54 0%, #3B2566 50%, #1E1240 100%)' }}>
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #fff 1px, transparent 1px), linear-gradient(-45deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-3xl font-extrabold">{feature.name}</h3>
              </div>
              <p className="text-white/70 text-[16px] leading-relaxed mb-6">
                {feature.description}
              </p>
              <Link href={feature.path} className="text-[14px] text-white/80 underline underline-offset-4 hover:text-white transition-colors font-medium">
                Learn More
              </Link>
            </div>
            <div className="relative">
              <FeatureScreenshots screenshots={feature.screenshots} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
