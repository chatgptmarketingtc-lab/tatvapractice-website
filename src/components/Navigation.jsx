'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mic, Camera, RefreshCw, Bot, Phone, Stethoscope, Building2 } from 'lucide-react';
import { NAV_FEATURES, NAV_SOLUTIONS } from '@/lib/data';
import { useModal } from './ModalProvider';

const NAV_ICON_MAP = {
  'VoiceRx': <Mic size={18} strokeWidth={1.5} className="text-purple-600" />,
  'SnapRx': <Camera size={18} strokeWidth={1.5} className="text-purple-600" />,
  'SmartSync': <RefreshCw size={18} strokeWidth={1.5} className="text-purple-600" />,
  'Doctor Agent': <Bot size={18} strokeWidth={1.5} className="text-purple-600" />,
  'Receptionist AI': <Phone size={18} strokeWidth={1.5} className="text-purple-600" />,
  'For Clinics': <Stethoscope size={18} strokeWidth={1.5} className="text-purple-600" />,
  'For Hospitals': <Building2 size={18} strokeWidth={1.5} className="text-purple-600" />,
};

function DropdownMenu({ items }) {
  return (
    <div className="mega-menu absolute top-full left-1/2 w-[280px] bg-white rounded-xl shadow-2xl shadow-black/10 border border-black/5 z-50 p-2"
      style={{ transform: 'translateX(-50%) translateY(8px)' }}>
      <div className="absolute -top-4 left-0 right-0 h-4" />
      {items.map((item, i) => (
        <Link key={i} href={item.path}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors no-underline group">
          <span className="flex items-center justify-center">{NAV_ICON_MAP[item.name] || item.icon}</span>
          <div>
            <div className="text-sm font-semibold text-gray-900 group-hover:text-[#5B2E91]">{item.name}</div>
            <div className="text-[11px] text-gray-400">{item.desc}</div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openDemo } = useModal();
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handler = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 20);
      if (currentY < 80) {
        setVisible(true);
      } else if (currentY < lastScrollY) {
        setVisible(true);
      } else if (currentY > lastScrollY + 5) {
        setVisible(false);
      }
      setLastScrollY(currentY);
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'}`}>
      <nav className={`relative w-full max-w-[1000px] rounded-3xl px-7 py-3.5 flex items-center justify-between transition-all duration-300 ${(scrolled || !isHome) ? 'bg-white shadow-lg shadow-black/5 border border-gray-100' : 'backdrop-blur-2xl shadow-2xl shadow-purple-900/20 border border-white/40'}`} style={(!scrolled && isHome) ? { background: 'linear-gradient(135deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.2) 100%)' } : {}}>
        {!scrolled && isHome && <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />}
        <Link href="/" className="no-underline flex items-center gap-1.5 shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 12L12 4L20 12L12 8L4 12Z" fill="#5B2E91"/>
            <path d="M4 12L12 20L20 12L12 16L4 12Z" fill="#7C4DBC"/>
          </svg>
          <span className="text-lg font-bold text-[#5B2E91]">TatvaPractice</span>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          <div className="nav-item relative">
            <button className="text-[13px] font-medium text-gray-600 hover:text-[#5B2E91] transition-colors py-4">Solution</button>
            <DropdownMenu items={NAV_SOLUTIONS} />
          </div>
          <div className="nav-item relative">
            <button className="text-[13px] font-medium text-gray-600 hover:text-[#5B2E91] transition-colors py-4">Features</button>
            <DropdownMenu items={NAV_FEATURES} />
          </div>
          <Link href="/" className="text-[13px] font-medium text-gray-600 no-underline hover:text-[#5B2E91] transition-colors">Pricing</Link>
          <Link href="/about" className="text-[13px] font-medium text-gray-600 no-underline hover:text-[#5B2E91] transition-colors">About Us</Link>
          <Link href="/contact" className="text-[13px] font-medium text-gray-600 no-underline hover:text-[#5B2E91] transition-colors">Contact</Link>
        </div>

        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <button onClick={openDemo} className="text-[12.5px] font-bold text-[#4F46E5] border-[1.5px] border-[#4F46E5] rounded-xl px-5 py-2 hover:bg-[#F5F4FF] transition-colors bg-transparent cursor-pointer">Book Demo</button>
          <a href="https://health.tatvacare.in/login" target="_blank" rel="noopener noreferrer" className="no-underline text-[12.5px] font-bold text-white rounded-xl px-5 py-2 shadow-sm cursor-pointer" style={{ background: 'linear-gradient(135deg, #5046E5 0%, #3730A3 100%)' }}>Start Free Trial</a>
        </div>

        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={`w-5 h-0.5 bg-gray-600 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-gray-600 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-gray-600 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-black/5 p-6 z-50">
          <div className="flex flex-col gap-3">
            {NAV_SOLUTIONS.map((item, i) => (
              <Link key={i} href={item.path} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-gray-600 no-underline hover:text-[#5B2E91] py-1">{item.name}</Link>
            ))}
            {NAV_FEATURES.map((item, i) => (
              <Link key={`f${i}`} href={item.path} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-gray-600 no-underline hover:text-[#5B2E91] py-1">{item.name}</Link>
            ))}
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-gray-600 no-underline hover:text-[#5B2E91] py-1">Contact</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-gray-600 no-underline hover:text-[#5B2E91] py-1">About Us</Link>
            <div className="flex gap-2 mt-3">
              <button onClick={() => { setMobileOpen(false); openDemo(); }} className="text-sm font-semibold text-[#4F46E5] border border-[#4F46E5] rounded-full px-5 py-2.5 flex-1 bg-transparent cursor-pointer">Book Demo</button>
              <a href="https://health.tatvacare.in/login" target="_blank" rel="noopener noreferrer" className="no-underline text-sm font-semibold text-white bg-[#5B2E91] rounded-full px-5 py-2.5 flex-1 text-center">Start Free Trial</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
