'use client';
import { useModal } from '@/components/ModalProvider';
import { ShieldCheck, Landmark, BadgeCheck, Lock, Globe } from 'lucide-react';

const COMPLIANCE = [
  { label: 'HIPAA Compliant', icon: <ShieldCheck size={16} strokeWidth={1.5} className="text-[#6D28D9]" /> },
  { label: 'NHA Approved', icon: <Landmark size={16} strokeWidth={1.5} className="text-[#6D28D9]" /> },
  { label: 'ABDM Certified', icon: <BadgeCheck size={16} strokeWidth={1.5} className="text-[#6D28D9]" /> },
  { label: 'ISO 27001', icon: <Lock size={16} strokeWidth={1.5} className="text-[#6D28D9]" /> },
  { label: 'GDPR Compliant', icon: <Globe size={16} strokeWidth={1.5} className="text-[#6D28D9]" /> },
];

export default function HomepageHero() {
  const { openDemo } = useModal();

  return (
    <section className="pt-36 lg:pt-44 pb-20 lg:pb-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #6B47BF 0%, #8B6BC7 20%, #B597D6 40%, #D4BCE6 60%, #EDE0F5 80%, #F5EFFA 100%)' }}>
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.12]" style={{ mixBlendMode: 'overlay' }}>
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(45deg, #fff 1px, transparent 1px), linear-gradient(-45deg, #fff 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div className="max-w-[900px] mx-auto px-6 relative z-10 text-center">
        <div className="inline-flex items-center bg-white/60 backdrop-blur-sm border border-gray-200/60 text-gray-500 text-[13px] font-medium px-6 py-2.5 rounded-full mb-10">
          Trusted AI-First EMR Platform
        </div>

        <h1 className="text-[40px] md:text-[52px] lg:text-[64px] font-extrabold leading-[1.05] tracking-[-0.02em] text-gray-900 mb-6">
          Everything you need to run<br />
          a <span className="text-[#5B2E91]">faster practice.</span>
        </h1>

        <p className="text-[16px] lg:text-[18px] text-white/70 leading-relaxed mb-10 max-w-lg mx-auto font-normal">
          TatvaPractice automates your clinical workflow so you can focus on delivering better patient care.
        </p>

        <div className="flex flex-wrap justify-center gap-5 mb-14">
          <button onClick={openDemo} className="text-[16px] font-bold text-[#4F46E5] bg-white border-[1.5px] border-[#4F46E5] rounded-2xl px-12 py-4 hover:bg-[#F5F4FF] transition-colors min-w-[200px] shadow-sm cursor-pointer">Book Demo</button>
          <a href="https://health.tatvacare.in/login" target="_blank" rel="noopener noreferrer" className="no-underline text-[16px] font-bold text-white rounded-2xl px-12 py-4 transition-all min-w-[200px] shadow-lg shadow-indigo-900/30 hover:shadow-xl cursor-pointer" style={{ background: 'linear-gradient(135deg, #5046E5 0%, #3730A3 50%, #1E1B4B 100%)' }}>Start Free Trial</a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {COMPLIANCE.map((c, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg px-3.5 py-2">
              <div className="w-7 h-7 rounded-md bg-gray-100 flex items-center justify-center">
                {c.icon}
              </div>
              <span className="text-[10px] font-semibold text-gray-600">{c.label}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <svg className="w-6 h-8 text-gray-300 animate-bounce" viewBox="0 0 24 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 8l5 5 5-5" />
            <path d="M7 16l5 5 5-5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
