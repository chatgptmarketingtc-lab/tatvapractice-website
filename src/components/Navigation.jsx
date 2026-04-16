'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_FEATURES, NAV_SOLUTIONS } from '@/lib/data';

function DropdownMenu({ items }) {
  return (
    <div className="mega-menu absolute top-full left-1/2 w-[280px] bg-white rounded-xl shadow-2xl shadow-black/10 border border-black/5 z-50 p-2"
      style={{ transform: 'translateX(-50%) translateY(8px)' }}>
      <div className="absolute -top-4 left-0 right-0 h-4" />
      {items.map((item, i) => (
        <Link key={i} href={item.path}
          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors no-underline group">
          <span className="text-base">{item.icon}</span>
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
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <nav className={`w-full max-w-[900px] rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${scrolled ? 'bg-white/90 shadow-lg shadow-black/5 backdrop-blur-xl' : 'bg-white/30 backdrop-blur-xl shadow-lg shadow-purple-900/10 border border-white/20'}`}>
        {/* Logo */}
        <Link href="/" className="no-underline flex items-center gap-1.5 shrink-0">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 12L12 4L20 12L12 8L4 12Z" fill="#5B2E91"/>
            <path d="M4 12L12 20L20 12L12 16L4 12Z" fill="#7C4DBC"/>
          </svg>
          <span className="text-lg font-bold text-[#5B2E91]">TatvaPractice</span>
        </Link>

        {/* Desktop Nav */}
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
          <Link href="/about" className="text-[13px] font-medium text-gray-600 no-underline hover:text-[#5B2E91] transition-colors">Contact</Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <Link href="/" className="no-underline text-[13px] font-semibold text-gray-700 border border-gray-300 rounded-full px-5 py-2 hover:border-[#5B2E91] hover:text-[#5B2E91] transition-colors">Book Demo</Link>
          <Link href="/" className="no-underline text-[13px] font-semibold text-white bg-[#5B2E91] rounded-full px-5 py-2 hover:bg-[#4A2377] transition-colors">Start Free Trial</Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          <span className={`w-5 h-0.5 bg-gray-600 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-5 h-0.5 bg-gray-600 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`w-5 h-0.5 bg-gray-600 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden fixed top-20 left-4 right-4 bg-white rounded-2xl shadow-xl border border-black/5 p-6 z-50">
          <div className="flex flex-col gap-3">
            {NAV_SOLUTIONS.map((item, i) => (
              <Link key={i} href={item.path} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-gray-600 no-underline hover:text-[#5B2E91] py-1">{item.name}</Link>
            ))}
            {NAV_FEATURES.map((item, i) => (
              <Link key={`f${i}`} href={item.path} onClick={() => setMobileOpen(false)} className="text-sm font-medium text-gray-600 no-underline hover:text-[#5B2E91] py-1">{item.name}</Link>
            ))}
            <Link href="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-gray-600 no-underline hover:text-[#5B2E91] py-1">Pricing</Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-gray-600 no-underline hover:text-[#5B2E91] py-1">About Us</Link>
            <div className="flex gap-2 mt-3">
              <Link href="/" className="no-underline text-sm font-semibold text-gray-700 border border-gray-300 rounded-full px-5 py-2.5 flex-1 text-center">Book Demo</Link>
              <Link href="/" className="no-underline text-sm font-semibold text-white bg-[#5B2E91] rounded-full px-5 py-2.5 flex-1 text-center">Start Free Trial</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
